import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

const SimilarCars = () => {

   const [brandShow, setBrandShow] = useState([])
   const [currentSlide, setCurrentSlide] = useState(0)

   useEffect(() => {
      loadDatas()
   }, [])

   const loadDatas = async () => {
      try {
         const res = await axios.get('http://localhost:5000/api/car')
         setBrandShow(res.data)
      } catch (err) {
         console.log(err)
      }
   }

   const NextArrow = (props) => {
      const { onClick } = props;
      return currentSlide < 1 ? (
         <div
            className="custom-arrow next-arrow-2"
            onClick={onClick}
         >
            <img src="/images/arrow-r-icon.png" alt="Arrow right" className="w-7 h-7   " />
         </div>
      ) : null
   };

   const PrevArrow = (props) => {
      const { onClick } = props;
      return currentSlide > 0 ? (
         <div
            className="custom-arrow prev-arrow-2"
            onClick={onClick}
         >
            <img src="/images/arrow-l-icon.png" alt="Arrow left" className="w-7 h-7" />
         </div>
      ) : null
   };

   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
   };

   return (
      <div className='flex flex-col space-y-6 px-16'>
         <h1 className='text-[30px] font-bold w-full text-center'>OTHER CARS YOU MAY LIKE</h1>
         <div className='flex justify-center items-center w-full py-10'>
            <Slider {...settings} className='px-6 w-full'>
               {brandShow.slice(1,6).map((datas, index) => (
                  <NavLink key={index} className='w-full p-4'>
                     <div className='bg-white p-4 rounded-md shadow'>
                        <div className='flex justify-center items-center h-[65%]'>
                           <img src={datas.car_image_show} alt="Car picture" className='object-cover' />
                        </div>
                        <div className='flex justify-center flex-col h-[20%]'>
                           <h4 className='text-[21px] font-semibold'>{datas.car_name_show}</h4>
                           <p className='text-black text-opacity-50 italic text-[17px]'>Starting from</p>
                        </div>
                        <div className='text-red-500 text-[22px] font-bold flex justify-end flex-col h-[25%]'>
                           {datas.car_price.toLocaleString()} Baht
                        </div>
                     </div>
                  </NavLink>
               ))}
            </Slider>
         </div>
      </div>
   );
};

export default SimilarCars;