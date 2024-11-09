const CarTypes = require('../models/carType')

exports.list = async(req, res) => {
    try{
        const type = await CarTypes.find({}).exec()
        res.send(type)
    }catch(err){
        console.log(err)
        res.status(500).send('Server error')
    }
}