import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DetailBody from '../components/details/DetailBody';
import DetailCar from '../components/details/DetailCar';
import AppHomeHowto from '../components/home/AppHomeHowto';
import SimilarCars from '../components/details/SimilarCars';
import AppHomeContact from '../components/home/AppHomeContact';

const Details = () => {
   const { id } = useParams();
   const [detail, setDetail] = useState(null);

   useEffect(() => {
      const fetchData = async (id) => {
         try {
            const res = await axios.get(`http://localhost:5000/api/car/${id}`);
            setDetail(res.data);
            console.log(res.data);
         } catch (err) {
            console.log(err);
         }
      };

      fetchData(id);
   }, [id]);

   return (
      <div className='flex flex-col gap-14 pt-[120px]'>
         {detail ? (
            <div>
               <DetailBody detail={detail} />
               <DetailCar detail={detail} />
               <div className='mt-6'>
                  <AppHomeHowto />
               </div>
               <div className='my-6'>
                  <SimilarCars />
               </div>
               <AppHomeContact />
            </div>
         ) : (
            <div className='flex-center h-screen'>
               Loading...
            </div>
         )}
      </div>
   );
};

export default Details;