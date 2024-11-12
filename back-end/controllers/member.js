const Members = require('../models/member')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
    const { mem_email, mem_pass } = req.body

    try {
        const members = await Members.findOne({ mem_email })
        if (members) {
            const isMatch = await bcrypt.compare(mem_pass, members.mem_pass)
            if (isMatch) {
                res.status(200).send('Login succesfully')
            } else {
                res.status(401).send('Invalid password')
            }
        } else {
            res.status(404).send('User is not found')
        }
    } catch (err) {
        res.status(500).send('Server error')
    }
}

exports.register = async (req, res) => {
    const { mem_email, mem_pass, mem_first_name, mem_last_name, mem_cid, mem_tol, mem_address } = req.body

    try {
        const hashedPassword = await bcrypt.hash(mem_pass, 10)
        const newUser = new Members({
            mem_email, mem_pass: hashedPassword, mem_first_name, mem_last_name, mem_cid, mem_tol, mem_address
        })
        await newUser.save()
        res.status(201).send('Regisrer succesfully')
    } catch (err) {
        console.error(err.stack);
        res.status(500).send('Server error')
    }
}