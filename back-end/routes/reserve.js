const express = require('express');
const router = express.Router();
const { addReserve, getReserve } = require('../controllers/reserve');

router.get('/get-reserve/:id', getReserve);
router.post('/add-reserve/:id', addReserve);

module.exports = router;