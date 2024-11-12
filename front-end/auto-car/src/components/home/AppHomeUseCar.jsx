import React from 'react'

const AppHomeUseCar = () => {

   const populerUser1 = ['Honda City', 'Honda HR-V', 'Toyota Corolla', 'Toyota Camry', 'Mitsubishi Xpander']
   const populerUser2 = ['Honda Civic', 'Honda CR-V', 'Toyota Yaris', 'Toyota Vios', 'Mitsubishi Triton']
   const populerUser3 = ['Honda Jazz ', 'Honda Mobilio ', 'Toyota Fortuner', 'Toyota Sienta', 'Mitsubishi Mirage']

   return (
      <div className='flex flex-col h-[355px]'>
         <h1 className='text-[30px] font-bold w-full text-center'>POPULAR USED CARS FOR SALE</h1>
         <div className='flex flex-row h-full'>
            <div className='flex flex-col justify-center items-center space-y-2 w-1/3 p-6'>
               {populerUser1.map((datas, index) => (
                  <p key={index} className='text-left text-[22px] w-full px-32'>{datas}</p>
               ))}
            </div>
            <div className='flex flex-col justify-center items-center space-y-2 w-1/3 p-6'>
               {populerUser2.map((datas, index) => (
                  <p key={index} className='text-left text-[22px] w-full px-36'>{datas}</p>
               ))}
            </div>
            <div className='flex flex-col justify-center items-center space-y-2 w-1/3 p-6'>
               {populerUser3.map((datas, index) => (
                  <p key={index} className='text-left text-[22px] w-full px-32'>{datas}</p>
               ))}
            </div>
         </div>
      </div>
   )
}

export default AppHomeUseCar;