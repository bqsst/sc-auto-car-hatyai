import React from 'react';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios'
import { useState, useEffect } from 'react';

const AppHomeBrand = () => {

   const [brandShow, setBrandShow] = useState([])
   const [currentSlide, setCurrentSlide] = useState(0)

   useEffect(() => {
      loadDatas()
   }, [])

   const loadDatas = async () => {
      try {
         const res = await axios.get('http://localhost:5000/api/car-type')
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
      <div className='flex flex-col space-y-6 px-24'>
         <h1 className='text-[30px] font-bold w-full text-center'>POPULAR NEW CAR BRANDS IN UAE</h1>
         <div className='flex justify-center items-center w-full py-10'>
            <Slider {...settings} className='px-16 w-full'>
               {brandShow.map((datas, index) => (
                  <NavLink key={index} className='w-full'>
                     <div className='flex justify-center items-center bg-white hover:shadow-xl rounded-lg w-[280px] h-[200px] shadow mx-2'>
                        <img src={datas.brand_logo} alt={datas.brand_name} className='object-cover' />
                     </div>
                  </NavLink>
               ))}
            </Slider>   
         </div>
      </div>
   );
};

export default AppHomeBrand;