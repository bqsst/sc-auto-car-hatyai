const mongoose = require('mongoose')

const carSchema = mongoose.Schema({
    car_name: String,
    car_name_show: String,
    car_image_1: String,
    car_image_2: String,
    car_image_3: String,
    car_image_4: String,
    car_image_5: String,
    car_image_6: String,
    car_image_show: String,
    car_mileage: Number,
    car_type: String,
    car_body_type: String,
    car_price: Number,
    car_benefits: String,
    car_location: String,
    car_fuel: String,
    car_seat: Number,
    car_spare_key: Boolean,
    car_registration: String,
    car_warranty: Boolean,
    car_color: String,
    car_service_book: Boolean,
    car_tax_date: Date
}, {timeStamps: true})

module.exports = mongoose.model('car', carSchema)