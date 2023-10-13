import React from 'react'
import {Link} from 'react-router-dom'

export default function SignIn() {
  return (
    <div className='flex flex-col justify-center items-center h-[90vh] gap-3'>
      <h1 className='font-bold'>Sign In</h1>
      
      <form className='flex flex-col gap-3 '>
        <h1 className='text-center'>Log into your Account</h1>
        <input id='email' type="email" placeholder='enter your email' className='border-black border-2 rounded-md p-2 w-60 sm:w-80'/>
        <input id='password' type="password" placeholder='enter your password'  className='border-black border-2 rounded-md p-2'/>
        <button className='bg-black text-white rounded-lg p-3 hover:opacity-80'>log in</button>
      </form>
      <h6>Dont Have an Account?<Link to='/sign-up'><span className='text-blue-500 mx-1 hover:underline'>Register</span></Link></h6>
    </div>
  )
}
