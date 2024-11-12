import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AppHeader = () => {
   const [scrollPosition, setScrollPosition] = useState(0);
   const [isLoggedIn, setIsLoggedIn] = useState(false); 

   const location = useLocation();

   useEffect(() => {
      checkSession(); 

      const handleScroll = () => {
         setScrollPosition(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   useEffect(() => {
      checkSession();
   }, [location]);

   const checkSession = async () => {
      try {
         const res = await axios.post('http://localhost:5000/api/member/check-session', {}, 
            { withCredentials: true }
         );
         if(res.status === 201){
            setIsLoggedIn(true);
            console.log(isLoggedIn);
         }
      } catch (err) {   
         if (err.response && err.response.status === 401) {
            setIsLoggedIn(false);
         } else {
            console.error('Error checking session:', err);
         }
      }
   };

   return (
      <div className={`bg-white flex justify-center lg:justify-between w-full h-[70px] px-10 fixed top-0 left-0 z-50 transition-transform duration-300 ${scrollPosition > 50 ? "shadow-md" : ""}`}>
         <NavLink to={'/'} className='flex items-center text-[24px] font-bold'>
            SC AUTO HATYAI
         </NavLink>
         <nav className='flex items-center space-x-2 text-[17px] '>
            <NavLink
               to="/"
               className={({ isActive }) => isActive ? 'text-white button rounded-lg px-[19px] py-[6px] font-bold' : 'hover:bg-zinc-100 rounded-lg px-[19px] py-[6px] text-zinc-500'}>
               Home
            </NavLink>
            <NavLink to={'/inventory'}
               className={({ isActive }) => isActive ? 'text-white button rounded-lg px-[19px] py-[6px] font-bold' : 'hover:bg-zinc-100 rounded-lg px-[19px] py-[6px] text-zinc-500'}>
               Inventory
            </NavLink>
            <NavLink to={'/notification'}
               className={({ isActive }) => isActive ? 'text-white button rounded-lg px-[19px] py-[6px] font-bold' : 'hover:bg-zinc-100 rounded-lg px-[19px] py-[6px] text-zinc-500'}>
               Notification
            </NavLink>
            <NavLink to={isLoggedIn ? '/profile' : '/auth/login'}
               className={({ isActive }) => (isActive || location.pathname.startsWith('/auth')) ?
                  'text-white button rounded-lg px-[19px] py-[6px] font-bold' : 'hover:bg-zinc-100 rounded-lg px-[19px] py-[6px] text-zinc-500'}>
               {isLoggedIn ? 'Profile' : 'Authorize'}
            </NavLink>
         </nav>
      </div>
   )
}

export default AppHeader;
