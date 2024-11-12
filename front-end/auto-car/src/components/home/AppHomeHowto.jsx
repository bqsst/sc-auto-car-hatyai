import React from 'react'

const AppHomeHowto = () => {
   return (
      <div className='flex flex-col space-y-16 px-10'>
         <h1 className='text-[30px] font-bold w-full text-center'>HOW TO USE THE QUEUE BOOKING</h1>
         <div className='flex items-center justify-center pb-6 px-10 h-auto'>
            <div className='grid grid-cols-4 gap-6'>
               <div className='bg-white flex flex-col border rounded-[20px] shadow w-[305px] h-[320px]'>
                  <div className='flex justify-end h-[15%]'>
                     <div className='bg-sky-1 relative flex items-center justify-end w-[33%] rounded-bl-[20px] rounded-tr-[20px]'>
                        <div className='absolute flex justify-center items-center bg-sky-2 text-sky-1 w-[88%] h-full rounded-bl-[17px] rounded-tr-[20px]'>
                           <p className='text-[32px] w-full text-center text-white font-bold z-20'>1</p>
                        </div>
                     </div>
                  </div>
                  <div className='flex justify-center items-center h-[70%]'>
                     <img src="/images/howto-1-pic.png" alt="Howto image" className='object-ceover w-[230px] h-[180px]' />
                  </div>
                  <div className='flex justify-center items-start h-[15%]'>
                     <p className='text-[20px] font-semibold'>Search car</p>
                  </div>
               </div>
               <div className='bg-white flex flex-col border rounded-[20px] shadow w-[305px] h-[320px]'>
                  <div className=' flex justify-end h-[15%]'>
                     <div className='bg-sky-1 relative flex items-center justify-end w-[33%] rounded-bl-[20px] rounded-tr-[20px]'>
                        <div className='absolute flex justify-center items-center bg-sky-2 text-sky-1 w-[88%] h-full rounded-bl-[17px] rounded-tr-[20px]'>
                           <p className='text-[32px] w-full text-center text-white font-bold z-20'>2</p>
                        </div>
                     </div>
                  </div>
                  <div className='flex justify-center items-center h-[70%]'>
                     <img src="/images/howto-2-pic.png" alt="Howto image" className='object-ceover w-[230px] h-[180px]' />
                  </div>
                  <div className='flex justify-center items-start h-[15%]'>
                     <p className='text-[20px] font-semibold'>Press the reserve button</p>
                  </div>
               </div>
               <div className='bg-white flex flex-col border rounded-[20px] shadow w-[305px] h-[320px]'>
                  <div className=' flex justify-end h-[15%]'>
                     <div className='bg-sky-1 relative flex items-center justify-end w-[33%] rounded-bl-[20px] rounded-tr-[20px]'>
                        <div className='absolute flex justify-center items-center bg-sky-2 text-sky-1 w-[88%] h-full rounded-bl-[17px] rounded-tr-[20px]'>
                           <p className='text-[32px] w-full text-center text-white font-bold z-20'>3</p>
                        </div>
                     </div>
                  </div>
                  <div className='flex justify-center items-center h-[70%]'>
                     <img src="/images/howto-3-pic.png" alt="Howto image" className='object-ceover w-[230px] h-[180px]' />
                  </div>
                  <div className='flex justify-center items-start h-[15%]'>
                     <p className='text-[20px] font-semibold'>Schedule a booking date</p>
                  </div>
               </div>
               <div className='bg-white flex flex-col border rounded-[20px] shadow w-[305px] h-[320px]'>
                  <div className=' flex justify-end h-[15%]'>
                     <div className='bg-sky-1 relative flex items-center justify-end w-[33%] rounded-bl-[20px] rounded-tr-[20px]'>
                        <div className='absolute flex justify-center items-center bg-sky-2 text-sky-1 w-[88%] h-full rounded-bl-[17px] rounded-tr-[20px]'>
                           <p className='text-[32px] w-full text-center text-white font-bold z-20'>4</p>
                        </div>
                     </div>
                  </div>
                  <div className='flex justify-center items-center h-[70%]'>
                     <img src="/images/howto-4-pic.png" alt="Howto image" className='object-ceover w-[230px] h-[180px]' />
                  </div>
                  <div className='flex justify-center items-start h-[15%]'>
                     <p className='text-[20px] font-semibold'>Comfirm finish</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default AppHomeHowto;