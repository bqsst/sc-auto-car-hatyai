const mongoose = require('mongoose')

const memberSchema = mongoose.Schema({
    mem_email: {
        type: String,
        require: true,
    },
    mem_pass: {
        type: String,
        require: true
    },
    mem_first_name: {
        type:String,
        require: true
    },
    mem_last_name: {
        type: String,
        require: true
    },
    mem_tol: String,
    mem_cid: Number,
    mem_address: String
}, {timeStamps: true})

module.exports = mongoose.model('member', memberSchema)