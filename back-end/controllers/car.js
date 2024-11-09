const Cars = require('../models/car');
const uploadImage = require('../config/image');
const path = require('path');
const fs = require('fs');

exports.list = async (req, res) => {
   try {
      const cars = await Cars.find({}).exec()
      res.send(cars)
   } catch (err) {
      console.log(err)
      res.status(500).send('Server error')
   }
}

exports.selected = async(req, res) => {
   try{
      const { id } = req.params;

      const selectedCar = await Cars.findById(id);

      if(!selectedCar) {
         return res.status(404).send('Car not found');
      }

      res.status(200).send(selectedCar);
   }catch(err){
      console.log(err);
      res.status(500).send('Server error');
   }
}

exports.create = async (req, res) => {
   uploadImage.single('carImage')(req, res, async (err) => {
      if (err) {
         console.log(err);
         return res.status(500).send('File upload error');
      }

      try {
         const { carName, category, distance, price } = req.body;

         const imagePath = req.file ? `/images/${req.file.filename}` : null;

         const newCar = new Cars({
            car_name_show: carName,
            car_body_type: category,
            car_mileage: distance,
            car_price: price,
            car_image_show: imagePath
         });

         await newCar.save();

         res.status(201).send(newCar);
      } catch (err) {
         console.log(err);
         res.status(500).send('Server Error');
      }
   });
};

exports.remove = async (req, res) => {
   try {
      const { id } = req.params;

      const deleteCar = await Cars.findByIdAndDelete(id);

      if (!deleteCar) {
         return res.status(404).send('Car not found');
      }

      res.status(200).send('Car deleted succesfull');
   } catch (err) {
      console.log(err);
   }
}

exports.update = [
   uploadImage.single('carImage'),
   async (req, res) => {
      try {
         const { id } = req.params;

         const car = await Cars.findById(id);
         if (!car) {
            return res.status(404).json({ message: 'Car not found' });
         }

         car.car_name_show = req.body.carName || car.car_name_show;
         car.car_body_type = req.body.category || car.car_body_type;
         car.car_mileage = req.body.distance || car.car_mileage;
         car.car_price = req.body.price || car.car_price;

         if (req.file) {
            if (car.car_image_show) {
               const oldImagePath = path.join(__dirname, '..', 'uploads', car.car_image_show);
               fs.unlink(oldImagePath, (err) => {
                  if (err) {
                     console.error('Error deleting old image:', err);
                  }
               });
            }
            car.car_image_show = `/images/${req.file.filename}`;
         }

         await car.save();

         res.status(200).json({ message: 'Car updated successfully', car });
      } catch (err) {
         console.error('Error updating car data:', err);
         res.status(500).json({ message: 'Server error' });
      }
   }
]