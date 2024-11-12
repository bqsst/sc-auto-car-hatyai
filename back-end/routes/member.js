const express = require('express');
const router = express.Router();
const { login, register, logout, checkSession } = require('../controllers/member');

router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.post('/check-session', checkSession);

module.exports = router;
