import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CiCalendarDate, CiTimer } from "react-icons/ci";
import { IoBagCheckOutline } from "react-icons/io5";
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../../custom-style/style.css';

const DetailBody = ({ detail }) => {
   const [currentSlide, setCurrentSlide] = useState(0);
   const [reserveOpen, setReserveOpen] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const [time, setTime] = useState('');
   const [detailOpen, setDetailOpen] = useState(false);
   const [showIconDetail, setShowIconDetail] = useState(false);
   const [reserveDetail, setReserveDetail] = useState(null);

   const navigate = useNavigate();

   const NextArrow = ({ onClick }) => (
      currentSlide < 1 && (
         <div className="custom-arrow-2 next-arrow-3" onClick={onClick}>
            <img src="/images/arrow-r-icon.png" alt="Arrow right" className="w-7 h-7" />
         </div>
      )
   );

   const PrevArrow = ({ onClick }) => (
      currentSlide > 0 && (
         <div className="custom-arrow-2 prev-arrow-3" onClick={onClick}>
            <img src="/images/arrow-l-icon.png" alt="Arrow left" className="w-7 h-7" />
         </div>
      )
   );

   const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
      centerPadding: '20px',
   };

   const handleReserve = () => setReserveOpen((prev) => !prev);

   const handleConfirm = async () => {
      setReserveOpen(false);
      setShowIconDetail(true);

      try {
         const res = await axios.post(
            `http://localhost:5000/api/add-reserve/${detail._id}`,
            { startDate, time },
            { withCredentials: true }
         );

         if (res.status === 201) {
            await addToNotification();
            toast.success('Reservation successful');
         }
      } catch (err) {
         if (err.response && err.response.status === 401) {
            navigate('/auth/login');
         } else {
            console.error(err);
            toast.error('Cannot reserve');
         }
      }
   };

   const handleCencel = async(id) => {
      try{
         const res = await axios.delete(`http://localhost:5000/api/cancel-reserve/${id}`, {}, 
            { withCredentials: true }
         )
         if(res.status === 200) {
            setDetailOpen((prev) => !prev);
            setShowIconDetail((prev) => !prev);
            toast.success('Cancel Succesfull');
         }
      }catch(err){
         console.log(err);
      }
   }

   const addToNotification = async () => {
      try {
         const res = await axios.post('http://localhost:5000/api/add-notification',
            { startDate, time },
            { withCredentials: true }
         );
         if (res.status === 201) {
            console.log('Notification added successfully');
         }
      } catch (err) {
         console.error(err);
      }
   };

   const handleShowDetail = async () => {
      setDetailOpen((prev) => !prev);

      try {
         const res = await axios.get(`http://localhost:5000/api/get-reserve/${detail._id}`,
            { withCredentials: true }
         );
         setReserveDetail(res.data);
      } catch (err) {
         console.error(err);
      }
   };

   return (
      <div className='flex justify-between gap-10 px-44 h-auto'>
         <div className='w-1/2 flex flex-col gap-2 h-full'>
            <div className='h-2/3 w-full'>
               <img src={detail.car_image_1} alt="Car" />
            </div>
            <div className='h-1/3 w-full rounded-md'>
               <Slider {...settings} className='w-full mt-4'>
                  {[detail.car_image_1, detail.car_image_2, detail.car_image_3, detail.car_image_4, detail.car_image_5].map((img, index) => (
                     <div key={index} className='h-[100px] w-[150px]' style={{ marginRight: '16px' }}>
                        <img src={img} alt={`Car Image ${index + 1}`} className='object-cover w-full h-full rounded-md' />
                     </div>
                  ))}
               </Slider>
            </div>
         </div>

         <div className='flex flex-col gap-1 w-1/2 p-8 bg-white rounded-md'>
            <h4 className='text-2xl font-semibold'>{detail.car_name}</h4>
            <p className='text-zinc-500'>{detail.car_mileage} | {detail.car_type} | {detail.car_body_type}</p>
            <h3 className='text-xl font-semibold text-red-500 mt-2'>{detail.car_price.toLocaleString()} Baht</h3>
            <h2 className='text-lg font-semibold mt-2'>Benefits SC Auto Hatyai Offers You</h2>
            <ul className="list-disc list-inside text-gray-500">
               <li>175-Point Inspection and Refurbishment</li>
               <li>Up to 1-Year Warranty</li>
               <li>30-day Money-back Guarantee</li>
            </ul>
            <h2 className='text-lg font-semibold mt-2'>Car Location</h2>
            <p className='text-gray-500'>
               SC AUTO HATYAI, 173/3 Lopburi Ramesuan Road, Village No. 11,
               Khlong Hae Subdistrict, Hat Yai District, Songkhla Province 90110, Hat Yai, Thailand
            </p>
            <div className='flex gap-4 justify-end items-center h-full'>
               {showIconDetail && (
                  <IoBagCheckOutline size={25} className='cursor-pointer text-black hover:text-gray-500' onClick={handleShowDetail} />
               )}
               <button className='button text-white px-5 py-2 rounded-md cursor-pointer hover:bg-sky-600 text-lg' onClick={handleReserve}>
                  Reserve
               </button>
            </div>

            {detailOpen && reserveDetail && (
               <div onClick={() => setDetailOpen(false)} className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto'>
                  <div onClick={(e) => e.stopPropagation()} className='bg-white flex-center rounded-md shadow p-8 max-w-md'>
                     <div className='flex flex-col gap-4'>
                        <h2 className='text-2xl font-semibold text-center w-full'>Your Reservation Details</h2>
                        <div className='text-gray-500 text-lg p-4 border rounded-md'>
                           <span className='text-black font-semibold'>Booking Date: </span>
                           {new Date(reserveDetail.booking_date).toLocaleDateString('en-US', {
                              year: 'numeric', month: 'long', day: 'numeric'
                           })}
                        </div>
                        <div className='text-gray-500 text-lg p-4 border rounded-md'>
                           <span className='text-black font-semibold'>Booking Time: </span>
                           {new Date(reserveDetail.booking_time).toLocaleTimeString('en-US', {
                              hour: 'numeric', minute: '2-digit', hour12: true
                           })}
                        </div>
                        <div className='text-gray-500 text-lg p-4 border rounded-md'>
                           <span className='text-black font-semibold'>Reservation Status: </span>
                           {reserveDetail.booking_status ? "Confirmed" : "Pending"}
                        </div>
                        <div className='flex flex-col gap-1 justify-center mt-4'>
                           <button onClick={() => handleCencel(detail._id)} className='button text-white w-full px-4 py-2 rounded-md'>
                              Cencel
                           </button>
                           <button onClick={() => setDetailOpen(false)} className='bg-gray-200 hover:bg-gray-300 text-black w-full px-4 py-2 rounded-md'>
                              Close
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}

            {reserveOpen && (
               <div onClick={handleReserve} className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto'>
                  <div onClick={(e) => e.stopPropagation()} className='bg-white flex flex-col gap-4 rounded-md p-6 shadow w-1/4 h-auto'>
                     <h4 className='text-2xl font-semibold text-center w-full'>Make an Appointment</h4>
                     <div className='flex flex-col gap-3'>
                        <div className='reserve-date'>
                           <CiCalendarDate size={33} />
                           <div className='flex flex-col'>
                              <p className='text-gray-500'>Day</p>
                              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className='focus:outline-none hover:bg-gray-50' required />
                           </div>
                        </div>
                        <div className='reserve-date'>
                           <CiTimer size={33} />
                           <div className='flex flex-col w-full'>
                              <p className='text-gray-500'>Time</p>
                              <TimePickerComponent placeholder='8:00 PM' value={time} onChange={(e) => setTime(e.target.value)} required />
                           </div>
                        </div>
                        <div className='flex justify-center items-end mt-1'>
                           <button onClick={handleConfirm} className='button text-white px-4 py-2 rounded-md w-full'>
                              Confirm
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            )}
         </div>
         <ToastContainer />
      </div>
   );
};

export default DetailBody;
