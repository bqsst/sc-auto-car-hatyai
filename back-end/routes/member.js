const express = require('express');
const router = express.Router();
const member = require('../controllers/member');

router.post('/login', member.login);
router.post('/register', member.register);

module.exports = router;