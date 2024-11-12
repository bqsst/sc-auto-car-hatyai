import { GoDotFill } from "react-icons/go";
import { useState } from "react";

const AppNotification = ({ notification }) => {
   const [readStatus, setReadStatus] = useState(
      notification.map(() => false)
   );
   const [openNoti, setOpenNoti] = useState(false);

   const handleRead = (index) => {
      setReadStatus((prevStatus) => {
         const newStatus = [...prevStatus];
         newStatus[index] = true;
         return newStatus;
      });
   };

   const handleOpenNoti = (index) => {
      handleRead(index);
      setOpenNoti((prev) => !prev);
   }

   return (
      <div className='flex pt-[100px] pl-36'>
         <div className='flex flex-col gap-4 bg-white rounded-lg p-8 w-[65%] h-auto'>
            <div className='flex justify-between items-center'>
               <h1 className='text-2xl font-semibold'>Your notifications</h1>
               <div className='flex gap-1 items-center'>
                  <GoDotFill size={30} className='text-sky-1' />
                  <p className='font-semibold'>Unread message</p>
               </div>
            </div>
            <div>
               <p className='font-semibold text-gray-500'>All text: <span className='text-sky-1'>7</span></p>
            </div>
            <div className='flex flex-col gap-3'>
               {notification.length > 0 ? (
                  notification.map((datas, index) => (
                     <div
                        key={index}
                        className='flex items-center gap-3 bg-gray-100 hover:bg-gray-200 p-5 rounded-md cursor-pointer'
                        onClick={() => handleOpenNoti(index)}>
                        <img src="/images/logo-icon.png" alt="Logo Icons" className='w-16' />
                        <div className='flex justify-between w-full'>
                           <div className='flex flex-col gap-1'>
                              <h1 className='text-lg font-semibold'>SC AUTO HATYAI</h1>
                              <p className='text-gray-500'>
                                 Abbas Leenud has a car viewing booked on{' '}
                                 {new Date(datas.noti_message).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                 })}
                                 {' '}time{' '}
                                 {new Date(datas.noti_time).toLocaleTimeString('en-US', {
                                    hour: 'numeric',
                                    minute: '2-digit',
                                    hour12: true
                                 })}
                              </p>
                           </div>
                           <div className='flex justify-end'>
                              {readStatus[index] ? null : <GoDotFill size={30} className='text-sky-1' />}
                           </div>
                        </div>
                     </div>
                  ))
               ) : (
                  <div className='flex-center'>
                     Loading...
                  </div>
               )}
            </div>
            {openNoti && (
               <div onClick={() => setOpenNoti((prev) => !prev)} className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto'>
                  <div onClick={(e) => e.stopPropagation()} className='flex-center flex-col gap-3 bg-white rounded-md p-6 shadow'>
                     <h1 className='text-xl font-semibold'>Notification</h1>
                     <p className='text-gray-500'>
                        Abbas Leenud has a car viewing booked on November 12, 2024 time 2:00 AM
                     </p>
                     <button className='button text-white w-full rounded-md py-2'
                        onClick={() => setOpenNoti((prev) => !prev)}>
                        Close
                     </button>
                  </div>
               </div>
            )}
         </div>
         <div className='fixed right-0 flex-center h-screen w-[35%] pl-36'>
            <img src="/images/noti-pic.png" alt="Car Images" className='w-[700px]' />
         </div>
      </div>
   );
}

export default AppNotification;
