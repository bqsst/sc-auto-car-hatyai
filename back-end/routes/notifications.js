const express = require('express');
const router = express.Router();
const { addNotification, getNotification } = require('../controllers/notifications');
const { isAuthenticated } = require('../controllers/member');

router.post('/add-notification', isAuthenticated, addNotification);
router.get('/get-notification', isAuthenticated, getNotification);

module.exports = router;