const mongoose = require('mongoose');

const notiSchema = mongoose.Schema({
   noti_message: {
      type: String,
      require: true
   },
   noti_status: {
      type: Boolean,
   }
})

module.exports = mongoose.model('notification', notiSchema); 