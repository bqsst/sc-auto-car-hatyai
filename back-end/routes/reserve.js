const express = require('express');
const router = express.Router();
const { addReserve, getReserve, cancel } = require('../controllers/reserve');
const { isAuthenticated } = require('../controllers/member')

router.get('/get-reserve/:id', isAuthenticated, getReserve);
router.post('/add-reserve/:id', isAuthenticated, addReserve);
router.delete('/cancel-reserve/:id', cancel);

module.exports = router;