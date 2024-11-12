import { useState } from 'react';
import SearchBar from '../ui/seachBtn';
import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AppInventory = ({ data, loadDatas }) => {
   const [addPopup, setAddPopup] = useState(false);
   const [editPopup, setEditPopup] = useState(false);
   const [carName, setCarName] = useState('');
   const [category, setCategory] = useState('');
   const [distance, setDistance] = useState('');
   const [price, setPrice] = useState('');
   const [carImage, setCarImage] = useState(null);
   const [editId, setEditId] = useState(null);
   const [currentEditData, setCurrentEditData] = useState(null);

   const resetForm = () => {
      setCarName('');
      setCategory('');
      setDistance('');
      setPrice('');
      setCarImage(null);
      setEditId(null);
      setCurrentEditData(null);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const formData = new FormData();
         formData.append('carName', carName);
         formData.append('category', category);
         formData.append('distance', distance);
         formData.append('price', price);
         formData.append('carImage', carImage);

         const response = await axios.post('http://localhost:5000/api/add', formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         });
         console.log('Car created successfully:', response.data);
         loadDatas();
         setAddPopup(false);
         toast.success('Add car successful');
      } catch (err) {
         console.error('Error uploading car data:', err);
      }
   };

   const handleDelete = async (id) => {
      try {
         const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);
         if (res.status === 200) {
            console.log('Car deleted successfully');
            alert('Car deleted successfully');
            loadDatas();
         }
      } catch (err) {
         console.log(err);
      }
   };

   const handleImageChange = (e) => {
      setCarImage(e.target.files[0]);
   };

   const handleUpdate = async (e) => {
      e.preventDefault();

      try {
         const formData = new FormData();
         formData.append('carName', carName);
         formData.append('category', category);
         formData.append('distance', distance);
         formData.append('price', price);
         if (carImage) {
            formData.append('carImage', carImage);
         }

         const response = await axios.put(`http://localhost:5000/api/update/${editId}`, formData, {
            headers: {
               'Content-Type': 'multipart/form-data'
            }
         });
         toast.success('Car updated successfully');
         console.log('Car updated successfully:', response.data);
         loadDatas();
         setEditPopup(false);
         toast.success('Car updated successfully');
      } catch (err) {
         console.error('Error updating car data:', err);
      }
   };

   return (
      <div className='h-[600px] flex flex-col px-[100px]'>
         <div className='flex justify-between items-center mb-4'>
            <div className='flex items-end w-1/2'>
               <SearchBar />
            </div>
            <div className='flex justify-end items-center w-1/2'>
               <button onClick={() => setAddPopup((prev) => !prev)}
                  className="flex items-center gap-2 h-2/3 button 
                  text-white font-semibold py-2 px-4 rounded-lg">
                  <FaPlus size={18} />
                  Add product
               </button>
               {addPopup && (
                  <div onClick={() => { setAddPopup(false); resetForm(); }} className="fixed inset-0 bg-black bg-opacity-50 flex 
                     justify-center items-center z-50 px-6">
                     <div onClick={(e) => e.stopPropagation()} className="w-1/3 bg-white p-10 rounded-md">
                        <div className='flex justify-between items-center'>
                           <h1 className="text-2xl font-bold">Add vehicle information</h1>
                           <IoCloseSharp onClick={() => setAddPopup((prev) => !prev)} size={30}
                              className='cursor-pointer hover:bg-gray-200 
                           rounded-full' />
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                           <div className='flex flex-col'>
                              <label htmlFor="carName" className='text-[19px]'>
                                 Car Name <span className='text-red-500'>*</span>
                              </label>
                              <input type="text"
                                 className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                                 placeholder='Toyota Yaris'
                                 value={carName}
                                 onChange={(e) => setCarName(e.target.value)}
                                 required />
                           </div>
                           <div className='flex flex-col'>
                              <label htmlFor="category" className='text-[19px]'>
                                 Category <span className='text-red-500'>*</span>
                              </label>
                              <input type="text"
                                 className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                                 placeholder='Van'
                                 value={category}
                                 onChange={(e) => setCategory(e.target.value)}
                                 required />
                           </div>
                           <div className='flex flex-col'>
                              <label htmlFor="distance" className='text-[19px]'>
                                 Distance <span className='text-red-500'>*</span>
                              </label>
                              <input type="text"
                                 className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                                 placeholder='235634'
                                 value={distance}
                                 onChange={(e) => setDistance(e.target.value)}
                                 required />
                           </div>
                           <div className='flex flex-col'>
                              <label htmlFor="price" className='text-[19px]'>
                                 Price <span className='text-red-500'>*</span>
                              </label>
                              <input type="text"
                                 className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                                 placeholder='43000'
                                 value={price}
                                 onChange={(e) => setPrice(e.target.value)}
                                 required />
                           </div>
                           <div className='flex flex-col'>
                              <label htmlFor="images" className='text-[19px]'>
                                 Image <span className='text-red-500'>*</span>
                              </label>
                              <input type="file"
                                 className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                                 onChange={handleImageChange}
                                 required />
                           </div>
                           <button
                              type="submit"
                              className="mt-4 w-full button text-white py-2 rounded transition">
                              Submit
                           </button>
                        </form>
                     </div>
                  </div>
               )}
            </div>
         </div>
         {data.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border">
               <table className="bg-white min-w-full h-full">
                  <thead>
                     <tr>
                        <th className="py-3 px-10 text-left font-semibold">Id</th>
                        <th className="py-3 px-4 text-left font-semibold w-1/4">Product</th>
                        <th className="py-3 px-4 text-left font-semibold w-1/6">Category</th>
                        <th className="py-3 px-4 text-left font-semibold w-1/6">Distance</th>
                        <th className="py-3 px-4 text-left font-semibold w-1/6">Price</th>
                        <th className="py-3 px-4 text-left font-semibold w-1/6">Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {data.map((datas, index) => (
                        <tr key={index} className="border-b">
                           <td className="py-3 px-10">{index + 1}</td>
                           <td className="py-3 px-4 flex items-center w-1/4">
                              <img
                                 src={datas.car_image_show}
                                 alt={datas.car_name_show}
                                 className="mr-4 object-contain rounded h-12 w-12"
                              />
                              <p className='w-full whitespace-nowrap'>{datas.car_name_show}</p>
                           </td>
                           <td className="py-3 px-4 w-1/6">{datas.car_body_type}</td>
                           <td className="py-3 px-4 w-1/6">{datas.car_mileage}</td>
                           <td className="py-3 px-4 w-1/6">{datas.car_price}</td>
                           <td className="w-full h-[50px] px-[12px] flex items-start justify-start space-x-2">
                              <BiSolidMessageSquareEdit size={28}
                                 className='text-sky-300 hover:text-sky-400 cursor-pointer'
                                 onClick={() => {
                                    setEditPopup(true);
                                    setCarName(datas.car_name_show);
                                    setCategory(datas.car_body_type);
                                    setDistance(datas.car_mileage);
                                    setPrice(datas.car_price);
                                    setCarImage(null);
                                    setEditId(datas._id);
                                    setCurrentEditData(datas);
                                 }} />
                              <RiDeleteBin6Fill size={28}
                                 className='text-red-500 hover:text-red-600 cursor-pointer'
                                 onClick={() => handleDelete(datas._id)} />
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         ) : (
            <div className='flex-center h-screen'>
               No data found.
            </div>
         )}

         {editPopup && (
            <div onClick={() => { setEditPopup(false); resetForm(); }} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-y-auto">
               <div onClick={(e) => e.stopPropagation()} className="w-1/3 bg-white mx-auto p-10 rounded-md">
                  <div className='flex justify-between items-center'>
                     <h1 className="text-2xl font-bold">Update vehicle information</h1>
                     <IoCloseSharp onClick={() => setEditPopup((prev) => !prev)} size={30}
                        className='cursor-pointer hover:bg-gray-200 
                        rounded-full' />
                  </div>
                  <form onSubmit={handleUpdate} className="space-y-4 mt-6">
                     <div className='flex flex-col'>
                        <label htmlFor="carName" className='text-[19px]'>
                           Car Name <span className='text-red-500'>*</span>
                        </label>
                        <input type="text"
                           className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                           placeholder='Toyota Yaris'
                           value={carName}
                           onChange={(e) => setCarName(e.target.value)}
                           required />
                     </div>
                     <div className='flex flex-col'>
                        <label htmlFor="category" className='text-[19px]'>
                           Category <span className='text-red-500'>*</span>
                        </label>
                        <input type="text"
                           className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                           placeholder='Van'
                           value={category}
                           onChange={(e) => setCategory(e.target.value)}
                           required />
                     </div>
                     <div className='flex flex-col'>
                        <label htmlFor="distance" className='text-[19px]'>
                           Distance <span className='text-red-500'>*</span>
                        </label>
                        <input type="text"
                           className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                           placeholder='235634'
                           value={distance}
                           onChange={(e) => setDistance(e.target.value)}
                           required />
                     </div>
                     <div className='flex flex-col'>
                        <label htmlFor="price" className='text-[19px]'>
                           Price <span className='text-red-500'>*</span>
                        </label>
                        <input type="text"
                           className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                           placeholder='43000'
                           value={price}
                           onChange={(e) => setPrice(e.target.value)}
                           required />
                     </div>
                     <div className='flex flex-col'>
                        <label htmlFor="images" className='text-[19px]'>
                           Image
                        </label>
                        <input type="file"
                           className='p-4 border-b-2 border-black border-opacity-20 focus:outline-none'
                           onChange={handleImageChange}
                        />
                     </div>
                     <button
                        type="submit"
                        className="mt-4 w-full button text-white py-2 rounded transition">
                        Update
                     </button>
                  </form>
               </div>
            </div>
         )}
         <ToastContainer />
      </div>
   );
};

export default AppInventory;
