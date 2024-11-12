import React from 'react'

const AppHomeFoot = () => {
   return (
      <div className='main flex items-center justify-start flex-col space-y-16 h-[440px] py-16'>
         <h1 className='text-[30px] text-white font-bold w-full text-center'>THINK OF CARS THINK OF US SC AUTO HAT YAI</h1>\
         <div className='relative w-full h-full'>
            <img src="/images/footer-1-pic.png" alt="Footer" className='z-20 absolute w-[350px] left-[38%]' />
            <img src="/images/footer-2-pic.png" alt="Footer" className='z-10 absolute w-[350px] left-[24%]' />
            <img src="/images/footer-3-pic.png" alt="Footer" className='absolute w-[350px] bottom-[10%] left-[13%]' />
            <img src="/images/footer-4-pic.png" alt="Footer" className='z-10 absolute w-[350px] right-[24%]' />
            <img src="/images/footer-5-pic.png" alt="Footer" className='absolute w-[350px] bottom-[25%] right-[14%]' />
         </div>
      </div>
   )
}

export default AppHomeFoot;