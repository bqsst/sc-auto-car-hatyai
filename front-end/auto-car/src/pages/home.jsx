import React from 'react'
import AppHomeHead from '../components/home/AppHomeHead';
import axios from 'axios'
import { useState, useEffect } from 'react';
import AppHomeShow from '../components/home/AppHomeShow';
import AppHomeMenu from '../components/home/AppHomeMenu';
import AppHomeHowto from '../components/home/AppHomeHowto';
import AppHomeBrand from '../components/home/AppHomeBrand';
import AppHomeFoot from '../components/home/AppHomeFoot';
import AppHomeUseCar from '../components/home/AppHomeUseCar';
import AppHomeContact from '../components/home/AppHomeContact';
import AppAllCar from '../components/home/AppAllCar';
import AppPickupTrack from '../components/home/AppPickupTrack';
import AppHatchBack from '../components/home/AppHatchBack';
import AppVan from '../components/home/AppVan';

const Home = () => {

   const [car, setCar] = useState([])
   const [selectedTab, setSelectedTab] = useState('popular')

   useEffect(() => {
      loadDatas()
   }, [])

   const loadDatas = async () => {
      try {
         const res = await axios.get('http://localhost:5000/api/car')
         setCar(res.data)
      } catch (err) {
         console.log(err)
      }
   }

   const handleTab = (tab) => {
      setSelectedTab(tab)
   }

   return (
      <div className='flex flex-col mt-[70px] space-y-8'>
         <AppHomeHead />
         <AppHomeMenu handleTab={handleTab} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
         {selectedTab === 'popular' && (
            <AppHomeShow car={car} />
         )}
         {selectedTab === 'all-car' && (
            <AppAllCar car={car} />
         )}
         {selectedTab === 'pickup-truck' && (
            <AppPickupTrack car={car} />
         )}
         {selectedTab === 'hatch-back' && (
            <AppHatchBack car={car} />
         )}
         {selectedTab === 'van' && (
            <AppVan car={car} />
         )}
         <AppHomeHowto />
         <AppHomeBrand />
         <AppHomeFoot />
         <AppHomeUseCar />
         <AppHomeContact />
      </div>
   )
}

export default Home;