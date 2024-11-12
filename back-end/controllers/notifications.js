const Notification = require('../models/notifications');

exports.addNotification = async(req, res) => {
   const { startDate, time } = req.body;

   try{
      const newNotification = new Notification({
         noti_message: startDate,
         noti_time: time
      })

      await newNotification.save();

      res.status(201).send('Add Notification Successfull');
   }catch(err){
      console.log(err);
      res.status(500).send('Server Error');
   }
}

exports.getNotification = async(req, res) => {
   try{
      const notifications = await Notification.find({}).exec();
      res.status(200).send(notifications);
   }catch(err){
      console.log(err);
      res.status(500).send('Server Error');
   }
}
