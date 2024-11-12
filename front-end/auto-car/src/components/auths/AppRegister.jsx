import React from 'react'
import { NavLink } from 'react-router-dom';

const AppRegister = (props) => {

   const { handleRegister,
      name,
      setName,
      lastName,
      setLastName,
      citizen,
      setCitizen,
      phone,
      setPhone,
      address,
      setAddress,
      email,
      setEmail,
      password,
      setPassword,
      showPassword,
      toggleShowPassword,
      confirmPassword,
      setConfirmPassword,
      showConfirmPassword,
      toggleShowConfirmPassword,
      message,
      showTextPass,
      confirmTextPass,
      messageCid } = props;

   return (
      <div className='w-full h-[659px] flex justify-between mt-[50px]'>
         <div className='relative'>
            <div className='fixed flex justify-start items-start w-[45%] h-[700px]'>
               <div className='bg-black relative flex justify-start w-[65%] h-[1100px] ml-[30px] mt-16'>..</div>
               <img src="/images/car-auth-pic.png" alt="Car image" className='absolute top-[50px] w-[600px]' />
            </div>
         </div>
         <div className='flex flex-col w-[55%] h-full pt-16 space-y-6 pr-20'>
            <h1 className='text-[30px] font-semibold'>Register with your e -mail</h1>
            <form onSubmit={handleRegister} className='flex flex-col space-y-6 pb-10'>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     First Name <span className='text-red-500'>*</span>
                  </label>
                  <input type="text"
                     className='bg-zinc-100 p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='Jonh'
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Last Name <span className='text-red-500'>*</span>
                  </label>
                  <input type="text"
                     className='bg-zinc-100 p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='Domino'
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                     required />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Citizen ID Number <span className='text-red-500'>*</span>
                  </label>
                  <input type="text"
                     className='bg-zinc-100 p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='13-digit ID Number'
                     value={citizen}
                     onChange={(e) => setCitizen(e.target.value)}
                     required />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Phone Number <span className='text-red-500'>*</span>
                  </label>
                  <input type="text"
                     className='bg-zinc-100 p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='098-xxxxxxx'
                     value={phone}
                     onChange={(e) => setPhone(e.target.value)}
                     required />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Address <span className='text-red-500'>*</span>
                  </label>
                  <input type="text"
                     className='bg-zinc-100 p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='123 Main Street, City, Province'
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     required />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Email <span className='text-red-500'>*</span>
                  </label>
                  <input type="text"
                     className='bg-zinc-100 p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='user@example.com'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Password <span className='text-red-500'>*</span>
                  </label>
                  <input type={showTextPass}
                     className='bg-zinc-100 relative p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='P@ssw0rd123'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     required />
                  <img src={showPassword} alt="Hide" onClick={toggleShowPassword} className='w-[20px] absolute cursor-pointer right-[100px] bottom-[-188px]' />
               </div>
               <div className='flex flex-col'>
                  <label htmlFor="firstName" className='text-[19px]'>
                     Repeat Password <span className='text-red-500'>*</span>
                  </label>
                  <input type={confirmTextPass}
                     className='bg-zinc-100 relative p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                     placeholder='Confirm your password'
                     value={confirmPassword}
                     onChange={(e) => setConfirmPassword(e.target.value)}
                     required />
                  <img src={showConfirmPassword} alt="Hide" onClick={toggleShowConfirmPassword} className='w-[20px] absolute cursor-pointer right-[100px] bottom-[-298px]' />
               </div>
               <button className='button text-[20px] font-semibold text-white py-4 rounded-xl'>
                  Create Account
               </button>
               <div className='text-[17px] w-full flex'>
                  <div className='w-[50%]'>
                     Have account already?
                     <span className='ml-2 font-semibold cursor-pointer hover:underline'>
                        <NavLink to={'/auth/login'}>
                           Login now
                        </NavLink>
                     </span>
                  </div>
                  <div className='flex flex-col w-[50%]'>
                     {message && (
                        <p className="w-full text-[18px] text-red-500 text-end">{message}</p>
                     )}
                     {messageCid && (
                        <p className="w-full text-[18px] text-red-500 text-end">{messageCid}</p>
                     )}
                  </div>
               </div>
            </form>
         </div>
      </div>
   )
}

export default AppRegister;