const mongoose = require('mongoose');

const notiSchema = mongoose.Schema({
   noti_message: {
      type: String,
      require: true
   },
   noti_time: {
      type: String,
   }
});

module.exports = mongoose.model('notification', notiSchema);