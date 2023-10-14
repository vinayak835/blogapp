import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {URL}from '../url.js'
import axios from 'axios'
export default function Signup() {
  const [username,setusername]=useState("")
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState("")
  const navigate=useNavigate()
const handleSumbit=async(e)=>{
  e.preventDefault()
  try{
    const res= await axios.post(URL+"/api/auth/sign-up",{username,email,password})
    setusername(res.data.username)
    setemail(res.data.email)
    setpassword(res.data.password)
    seterror(null)
    navigate('/sign-in')
    console.log(res)
   
    
  }
  
  catch(error){
    seterror(error.response.data.message)
  }
}
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] gap-3'>
      <h1 className='font-bold'>Sign Up</h1>
      
      <form onSubmit={handleSumbit} className='flex flex-col gap-3 '>
        <h1 className='text-center'>Create a New Account</h1>
        <input onChange={(e)=>setusername(e.target.value)} id='username' type="text" placeholder='enter your username' className='border-black border-2 rounded-md p-2 w-60 sm:w-80'/>
        <input onChange={(e)=>setemail(e.target.value)} id='email' type="email" placeholder='enter your email' className='border-black border-2 rounded-md p-2 w-60 sm:w-80'/>
        <input  onChange={(e)=>setpassword(e.target.value)}id='password' type="password" placeholder='enter your password'  className='border-black border-2 rounded-md p-2'/>
        <button  className='bg-black text-white rounded-lg p-3 hover:opacity-80'>Sign up</button>
      </form>
      <h4 className='text-red-600 text-sm'>{error}</h4>
      <h6>Already Have an Account?<Link to='/sign-in'><span className='text-blue-500 mx-1 hover:underline'>Login</span></Link></h6>
    </div>
  )
}
