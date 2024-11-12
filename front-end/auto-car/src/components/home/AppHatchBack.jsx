import React from 'react'

const AppHatchBack = (props) => {

   const { car } = props;

   return (
      <div className='flex items-center justify-center pb-6 px-10 h-auto'>
         <div className='flex flex-col space-y-8'>
            <h4 className='text-[20px] font-semibold'>Hatcback</h4>
            <div className='grid grid-cols-4 gap-6'>
               {car.slice(32, 34).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
               {car.slice(2, 3).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
               {car.slice(34, 35).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
               {car.slice(4, 5).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
               {car.slice(14, 15).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
               {car.slice(8, 9).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
               {car.slice(15, 16).map((datas, index) => (
                  <div key={index} className='bg-white flex flex-col border rounded-lg shadow w-[305px] h-[320px] px-8 py-4'>
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
               ))}
            </div>
         </div>
      </div>
   )
}

export default AppHatchBack;