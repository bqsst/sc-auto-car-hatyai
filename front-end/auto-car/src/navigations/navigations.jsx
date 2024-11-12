import React from 'react'
import { Routes, Route } from "react-router-dom";
import Register from '../pages/register';
import AppHeader from '../components/head/AppHeader';
import Login from '../pages/login';
import Home from '../pages/home';
import Inventory from '../pages/inventory';
import Notification from '../pages/notification';
import Details from '../pages/detail';
import Test from '../pages/test';
import Profile from '../pages/profile';

const Navigations = () => {
   return (
      <div className='w-full h-screen'>
         <AppHeader />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
         </Routes>
      </div>
   )
}

export default Navigations;