import { useState, useEffect } from 'react'
import axios from 'axios';
import AppNotification from '../components/notification/AppNotification';

const Notification = () => {
   const [notification, setNotification] = useState([]);

   useEffect(() => {
      fetchNotification();
   }, []);

   const fetchNotification = async () => {
      try {
         const res = await axios.get('http://localhost:5000/api/get-notification',
            { withCredentials: true });
         setNotification(res.data);
      } catch (err) {
         console.log(err);
      }
   }

   return (
      <AppNotification notification={notification} />
   )
}

export default Notification;
