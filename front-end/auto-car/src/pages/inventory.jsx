import React, { useState, useEffect } from 'react'
import AppInventory from '../components/inventory/AppInventory';
import axios from 'axios';

const Inventory = () => {

   const [data, setData] = useState([]);

   useEffect(() => {
      loadDatas();
   }, [])

   const loadDatas = async () => {
      try {
         const res = await axios.get('http://localhost:5000/api/car');
         setData(res.data);
      } catch (err) {
         console.log(err);
      }
   }

   return (
      <div className='mt-[120px]'>
         <AppInventory data={data} loadDatas={loadDatas} />
      </div>
   )
}

export default Inventory;