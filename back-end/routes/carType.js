const express = require('express');
const router = express.Router();
const {list} = require('../controllers/carType');

router.get('/car-type', list);

module.exports = router;