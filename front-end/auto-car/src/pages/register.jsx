import React from 'react'
import AppRegister from '../components/auths/AppRegister';
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

const Register = () => {

   const [name, setName] = useState('')
   const [lastName, setLastName] = useState('')
   const [citizen, setCitizen] = useState('')
   const [phone, setPhone] = useState('')
   const [address, setAddress] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [message, setMessage] = useState('')
   const [messageCid, setMeassageCid] = useState('')
   const [showPassword, setShowPassword] = useState('/images/hide-icon.png')
   const [showConfirmPassword, setShowConfirmPassword] = useState('/images/hide-icon.png')
   const [showTextPass, setShowTextPass] = useState('password')
   const [confirmTextPass, setConfirmShowTextPass] = useState('password')

   const navigate = useNavigate();

   const handleRegister = async (e) => {
      e.preventDefault()

      if (password !== confirmPassword) {
         setMessage('Password is not match.')
         return;
      }

      if(citizen.length !== 13){
         setMeassageCid('Please enter a 13-digit number.')
         return;
      }

      try {
         const res = await axios.post('http://localhost:5000/api/member/register', {
            mem_first_name: name,
            mem_last_name: lastName,
            mem_cid: citizen,
            mem_tol: phone,
            mem_address: address,
            mem_email: email,
            mem_pass: password
         })
         if (res.status == 201) {
            localStorage.setItem('token', res.data.token);
            toast.success('Register successfull');
            navigate('/auth/login');
         }
      } catch (err) {
         console.log(err)
      }
   }

   const toggleShowPassword = () => {
      setShowPassword((prevShow) =>
         prevShow === '/images/hide-icon.png' ? '/images/eye-icon.png' : '/images/hide-icon.png'
      )
      setShowTextPass((prevText) => 
         prevText === 'password' ? 'text' : 'password'
      )
   }

   const toggleShowConfirmPassword = () => {
      setShowConfirmPassword((prevShow) =>
         prevShow === '/images/hide-icon.png' ? '/images/eye-icon.png' : '/images/hide-icon.png'
      )
      setConfirmShowTextPass((prevText) => 
         prevText === 'password' ? 'text' : 'password'
      )
   }

   return (
      <div className='w-full h-screen'>
         <AppRegister handleRegister={handleRegister}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            citizen={citizen}
            setCitizen={setCitizen}
            phone={phone}
            setPhone={setPhone}
            address={address}
            setAddress={setAddress}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            showPassword={showPassword}
            toggleShowPassword={toggleShowPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            showConfirmPassword={showConfirmPassword}
            toggleShowConfirmPassword={toggleShowConfirmPassword}
            message={message}
            showTextPass={showTextPass}
            confirmTextPass={confirmTextPass}
            messageCid={messageCid} />
            <ToastContainer />
      </div>
   )
}

export default Register;