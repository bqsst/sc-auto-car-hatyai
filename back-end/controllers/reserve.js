const Reserves = require('../models/reserve');

exports.addReserve = async(req, res) => {
   const { startDate, time} = req.body;
   const { id } = req.params;

   try{
      const newReserve = new Reserves({
         car_id: id,
         booking_date: startDate,
         booking_time: time,
         booking_status: true
      })

      await newReserve.save();
      res.status(201).send('Add Reserve Successfull');
   }catch(err){
      console.log(err);
      res.status(500).send('Server Error');
   }
}

exports.getReserve = async(req, res) => {
   const { id } = req.params;

   try{
      const reserves = await Reserves.findOne({ car_id: id });
      res.status(200).send(reserves);
   }catch(err){
      console.log(err);
      res.status(500).send('Server Error');
   }
}