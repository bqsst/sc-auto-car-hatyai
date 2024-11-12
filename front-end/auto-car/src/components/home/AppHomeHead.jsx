import React from 'react'
import SearchBar from '../ui/seachBtn';

const AppHomeHead = () => {
   return (
      <div>
         <div className='main flex justify-center items-center h-[425px] py-10'>
            <img src="/images/car-home-pic.png" alt="Car home" className='relative z-20 object-cover w-[1300px]' />
            <h1 className='absolute text-white top-[11vh] font-bold text-[60px]'>SC AUTO HATYAI</h1>
            <h4 className='absolute text-sky-1 top-[21vh] text-[30px] font-bold'>HATYAI USED CAR CENTER</h4>
            <h4 className='absolute text-white text-[28px] font-bold top-[44vh] left-[6vh]'>BUY</h4>
            <h4 className='absolute text-sky-1 text-[28px] font-bold top-[48vh] left-[6vh]'>SELL</h4>
            <h4 className='absolute text-white text-[28px] font-bold top-[52vh] left-[6vh]'>TRADE</h4>
            <h4 className='absolute text-sky-1 text-[28px] font-bold top-[56vh] left-[6vh]'>CHANGE</h4>
            <img src="/images/back-pic.png" alt="30%" className='absolute top-[17vh] right-[8vh]' />
         </div>
         <div className='absolute flex justify-end w-1/2 z-30 bottom-[29%] right-[10%]'>
            <SearchBar />
         </div>
      </div>
   )
}

export default AppHomeHead;