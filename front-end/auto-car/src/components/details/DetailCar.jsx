import React from 'react'
import LineAction from '../ui/lineAction';

const DetailCar = ({ detail }) => {
   return (
      <div className='bg-white h-auto space-y-10 pt-12 mt-16'>
         <div className='flex flex-col gap-2'>
            <h4 className='text-2xl text-center font-semibold'>CAR DETAILS</h4>
            <LineAction />
            <div className='border-black border-t p-8 flex justify-between gap-20 mx-44 mt-1'>
               <div className='w-1/2 flex flex-col gap-2'>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Fuel Type 7777</div>
                     <div className='text-lg text-gray-500'>{detail.car_fuel}</div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Seat</div>
                     <div className='text-lg text-gray-500'>{detail.car_seat}</div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Spare Key</div>
                     <div className='text-lg text-gray-500'>
                        {detail.car_spare_key === true ? 'Yes' : 'No'}
                     </div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Registration Type    </div>
                     <div className='text-lg text-gray-500'>{detail.car_registration}</div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Principal Warranty</div>
                     <div className='text-lg text-gray-500'>
                        {detail.car_warranty === true ? 'Yes' : 'No'}
                     </div>
                  </div>
               </div>
               <div className='w-1/2 flex flex-col gap-2'>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Current Color</div>
                     <div className='text-lg text-gray-500'>{detail.car_color}</div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Current Mileage</div>
                     <div className='text-lg text-gray-500'>{detail.car_mileage}</div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Service Book</div>
                     <div className='text-lg text-gray-500'>
                        {detail.car_service_book === true ? 'Yes' : 'No'}
                     </div>
                  </div>
                  <div className='car-details-container'>
                     <div className='text-lg font-semibold'>Road Tax Exp Date</div>
                     <div className='text-lg text-gray-500'>{detail.car_tax_date}</div>
                  </div>
               </div>
            </div>
         </div>
         <div className='main flex justify-between px-56 gap-8 h-auto p-16'>
            <div className='text-white flex-center flex-col gap-8 w-1/2'>
               <div className='text-sky-1 font-semibold text-left w-full text-3xl'>DELIVERING QUALITY REFURBISHED <br /> CARS TO YOU</div>
               <div className='text-xl text-white'>
                  Every SC AUTO HATYAI Certified car undergoes a thorough
                  refurbishment process and strict quality controlso you can be
                  completely confident when you buy from us.
               </div>
            </div>
            <div className='flex-center w-1/2'>
               <img src="/images/car-detail-ads-pic.png" alt="Car show image"
                  className='w-[400px]' />
            </div>
         </div>
      </div>
   )
}

export default DetailCar;