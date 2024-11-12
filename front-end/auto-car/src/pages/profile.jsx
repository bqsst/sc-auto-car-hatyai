import React from 'react'
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { RiPhoneLine } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
   const navigate = useNavigate();

   const handleLogout = async () => {
      try {
         const res = await axios.post('http://localhost:5000/api/member/logout',{},
         { withCredentials: true });
         if (res.status === 200) {
            navigate('/auth/login');
         }
      } catch (err) {
         console.log(err);
      }
   }

   return (
      <div className='flex justify-between gap-8 pt-[100px] h-screen px-44'>
         <div className='flex flex-col gap-16 w-1/2 items-center p-10 bg-white rounded-md'>
            <div className='flex flex-col gap-3 items-center pt-4'>
               <BsPersonCircle size={140} className='text-gray-600' />
               <h4 className='text-3xl font-semibold'>Abbas Leenud</h4>
            </div>
            <div className='flex flex-col justify-center gap-10 text-xl text-black'>
               <div className='flex items-center gap-3'>
                  <MdOutlineMail size={30} />
                  <p>leenudabbas@gmail.com</p>
               </div>
               <div className='flex item-center gap-3'>
                  <RiPhoneLine size={30} />
                  <p>098975739</p>
               </div>
               <div className='flex items-center gap-3'>
                  <MdOutlineLocationOn size={30} />
                  <p>This is Address data</p>
               </div>
            </div>
            <div className='flex justify-end gap-3 w-full'>
               <button className='button px-8 py-2 rounded-md text-white'>
                  Edit
               </button>
               <button onClick={handleLogout}
                  className='bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white'>
                  Logout
               </button>
            </div>
         </div>
         <div className='flex flex-col w-1/2 gap-8'>
            <div className='flex-center bg-white h-1/2 rounded-md p-6'>
               No Payment Status Now.
            </div>
            <div className='flex-center bg-white h-1/2 rounded-md p-6'>
               No Payment Stat Now.
            </div>
         </div>
      </div>
   )
}

export default Profile;