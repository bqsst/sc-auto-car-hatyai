import React from 'react';
import AppLogin from '../components/auths/AppLogin';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [message, setMessage] = useState('')
   const [showPassword, setShowPassword] = useState('/images/hide-icon.png')
   const [showTextPass, setShowTextPass] = useState('password')

   const navigate = useNavigate()

   const handleLogin = async (e) => {
      e.preventDefault()

      try {
         const res = await axios.post('http://localhost:5000/api/member/login', {
            mem_email: email,
            mem_pass: password
         }, { withCredentials: true })
         if (res.status == 200) {
            localStorage.setItem('token', res.data.token)
            console.log('Login success')
            navigate('/')
         }else if(res.status == 401){
            setMessage('Email or password invalid')
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

   return (
      <div>
         <AppLogin
            handleLogin={handleLogin}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            message={message}
            toggleShowPassword={toggleShowPassword}
            showPassword={showPassword}
            showTextPass={showTextPass} />
      </div>
   )
}

export default Login;