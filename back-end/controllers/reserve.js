const Reserves = require('../models/reserve');

exports.addReserve = async (req, res) => {
   console.log('Session User:', req.session.user);
   const { startDate, time } = req.body;
   const { id } = req.params;

   try {
      const newReserve = new Reserves({
         car_id: id,
         booking_date: startDate,
         booking_time: time,
         booking_status: false
      });

      await newReserve.save();
      res.status(201).send('Add Reserve Successful');
   } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
   }
}

exports.cancel = async (req, res) => {
   const { id } = req.params;

   try {
      const deletedReserve = await Reserves.deleteOne({ car_id: id});

      if (!deletedReserve) {
         return res.status(404).send('Reservation not found'); 
      }

      res.status(200).send('Reservation canceled successfully!');
   } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
   }
};

exports.getReserve = async (req, res) => {
   const { id } = req.params;

   try {
      const reserves = await Reserves.findOne({ car_id: id });
      res.status(200).send(reserves);
   } catch (err) {
      console.log(err);
      res.status(500).send('Server Error');
   }
}