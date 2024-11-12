const Members = require('../models/member')
const bcrypt = require('bcrypt')

exports.login = async (req, res) => {
   const { mem_email, mem_pass } = req.body

   try {
      const members = await Members.findOne({ mem_email });
      if (members) {
         const isMatch = await bcrypt.compare(mem_pass, members.mem_pass);
         if (isMatch) {
            req.session.user = { mem_email };
            console.log('session:', req.session.user);
            res.status(200).send('Login succesfully');
         } else {
            res.status(401).send('Invalid password');
         }
      } else {
         res.status(404).send('User is not found');
      }
   } catch (err) {
      res.status(500).send('Server error');
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

exports.isAuthenticated = (req, res, next) => {
   if (req.session.user) {
      next();
   } else {
      console.log('User Session: ', req.session.user);
      res.status(401).send('Unauthorized');
   }
};

exports.checkSession = async(req, res) => {
   if (req.session.user) {
      res.status(201).send('Have Session');
   } else {
      console.log('User Session: ', req.session.user);
      res.status(401).send('Unauthorized');
   }
}

exports.logout = async(req, res) => {
   req.session.destroy((err) => {
      if(err){
         return res.status(500).send('Logout Failed');
      }
      res.clearCookie('connect.sid');
      res.status(200).send('Logged out successfully');
   })
}