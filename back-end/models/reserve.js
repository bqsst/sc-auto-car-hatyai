const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reserveSchema = mongoose.Schema({
   car_id: {
      type: Schema.Types.ObjectId,
      ref: 'car', 
      required: true
   },
   booking_date: {
      type: String,
      require: true
   },
   booking_time: {
      type: String,
      require: true
   },
   booking_status: Boolean
}, {timeStamps: true});

module.exports = mongoose.model('reserve', reserveSchema);