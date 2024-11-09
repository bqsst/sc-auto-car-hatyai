const mongoose = require('mongoose')

const carTypeSchema = mongoose.Schema({
    car_type: String,
    car_body_type: String,
    brand_name: String,
    brand_logo:String,
    car_max_seat: Number
}, {timeStamps: true})

module.exports = mongoose.model('car_type', carTypeSchema)