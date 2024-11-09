const express = require('express');
const router = express.Router();
const { list, create, remove, update, selected } = require('../controllers/car');

router.get('/car', list);
router.get('/car/:id', selected);
router.post('/add', create);
router.delete('/delete/:id', remove);
router.put('/update/:id', update);

module.exports = router;