import React from 'react'
import { NavLink } from 'react-router-dom'

const AppLogin = (props) => {

   const { handleLogin,
      email,
      setEmail,
      password,
      setPassword,
      message,
      toggleShowPassword,
      showTextPass,
      showPassword } = props;

   return (
      <div className='w-full h-[550px] flex justify-between mt-[50px]'>
         <div className='relative'> 
            <div className='fixed flex justify-start items-start w-[45%] h-full'>
               <div className='bg-black relative flex justify-start w-[65%] h-[650px] ml-[30px] mt-16'>..</div>
               <img src="/images/car-auth-pic.png" alt="Car image" className='absolute top-[50px] w-[600px]' />
            </div>
         </div>
         <div className='flex flex-col w-[55%] h-full pt-16 space-y-6 pr-20'>
            <h1 className='text-[30px] font-semibold'>Login</h1>
            <form onSubmit={handleLogin} className='flex flex-col space-y-6 pb-10'>
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
                  <img src={showPassword} alt="Hide" onClick={toggleShowPassword} className='w-[20px] absolute cursor-pointer right-[100px] bottom-[368px]' />
               </div>
               <div className='flex justify-between items-center h-[45px]'>
                  <div className='flex items-center space-x-4'>
                     <input type="checkbox" className='w-5 h-5' />
                     <span className='text-[17px]'>Keep me logged in</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                     <label htmlFor="role" className='text-[17px]'>Select your role: </label>
                     <select name="role" id="role" className='bg-zinc-100 border-2 border-black text-[17px] border-opacity-15 px-4 py-2 rounded-lg focus:outline-none'>
                        <option value="">
                           Customer
                        </option>
                        <option value="">
                           Employee
                        </option>
                     </select>
                  </div>
               </div>
               <button className='button text-[20px] font-semibold text-white py-4 rounded-xl'>
                  Login now
               </button>
               <div className='flex justify-end text-[17px] underline'>
                  Forgot your password
               </div>
               <div className='flex justify-start items-center text-[18px] h-[70px]'>
                  Not a member yet? <span className='ml-2 font-semibold cursor-pointer hover:underline'>
                     <NavLink to={'/auth/register'}>
                        Register now
                     </NavLink>
                  </span>
               </div>
               {message && (
                  <p className="w-full text-[18px] text-red-500 text-end">{message}</p>
               )}
            </form>
         </div>
      </div>
   )
}

export default AppLogin