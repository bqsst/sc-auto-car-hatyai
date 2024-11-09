const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/sc-auto-haiyai')
        console.log('Database connected')
    }catch(err){
        console.log('Cannot connect to database')
    }
}

module.exports = connectDB;