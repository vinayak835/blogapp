import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {URL} from '../url.js'
import { UserContext } from '../context/UserContext.jsx'

export default function SignIn() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const [error,seterror]=useState("")
  const {setuser}=useContext(UserContext)
  const navigate=useNavigate()
  const handlesumbit=async(e)=>{
    e.preventDefault()
    try{
      const res=await axios.post(URL+"/api/auth/sign-in",{email,password},{withCredentials:true})
      // console.log(res)
      seterror(null)
      setemail(res.data.email)
      setpassword(res.data.password)
      setuser(res.data)
      navigate('/')
    }
    catch(error){
      seterror(error.response.data.message)

    }

  }
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] gap-3'>
      <h1 className='font-bold'>Sign In</h1>
      
      <form className='flex flex-col gap-3 ' onSubmit={handlesumbit}>
        <h1 className='text-center'>Log into your Account</h1>
        <input onChange={(e)=>setemail(e.target.value)} id='email' type="email" placeholder='enter your email' className='border-black border-2 rounded-md p-2 w-60 sm:w-80'/>
        <input  onChange={(e)=>setpassword(e.target.value)} id='password' type="password" placeholder='enter your password'  className='border-black border-2 rounded-md p-2'/>
        <button className='bg-black text-white rounded-lg p-3 hover:opacity-80'>log in</button>
      </form>
      <h5 className='text-red-600'>{error}</h5>
      <h6>Dont Have an Account?<Link to='/sign-up'><span className='text-blue-500 mx-1 hover:underline'>Register</span></Link></h6>
    </div>
  )
}
