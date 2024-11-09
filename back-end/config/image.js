const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '../../front-end/auto-car/public/images'));
   },
   filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
   }
})
const uploadImage = multer({ storage: storage });

module.exports = uploadImage;