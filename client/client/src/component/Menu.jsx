import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
    const user=false
  return (
   
    <div className='bg-black w-[150px] flex flex-col items-center absolute top-10 right-6 rounded-lg gap-3'>
       
    {!user && <Link to='/sign-in'><h3 className='text-white text-lg hover:text-gray-500 hover:underline cursor-pointer '>Login</h3></Link>}    
    {!user && <Link to='/sign-up'><h3 className='text-white text-lg hover:text-gray-500 hover:underline  cursor-pointer'>Register</h3></Link>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline cursor-pointer '>Profile</h3>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline cursor-pointer '>Write</h3>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline  cursor-pointer'>MyBlogs</h3>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline  cursor-pointer'>Logout</h3>}    
   </div>
    
  )
  }
