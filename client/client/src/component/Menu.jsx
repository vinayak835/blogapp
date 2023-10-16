import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url.js'
export default function Menu() {
  const {user}=useContext(UserContext)
  const {setuser}=useContext(UserContext)
  const handlelogout=async()=>{
    try{
   const res=await axios.post(URL+'/api/auth/logout',{withCredentials:true})
 console.log(res)  
   setuser(null)
    }catch(error){
console.log(error)
    }
  }
  return (
   
    <div className='bg-black w-[150px] flex flex-col items-center absolute top-10 right-6 rounded-lg gap-3'>
       
    {!user && <Link to='/sign-in'><h3 className='text-white text-lg hover:text-gray-500 hover:underline cursor-pointer '>Login</h3></Link>}    
    {!user && <Link to='/sign-up'><h3 className='text-white text-lg hover:text-gray-500 hover:underline  cursor-pointer'>Register</h3></Link>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline cursor-pointer '>Profile</h3>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline cursor-pointer '>Write</h3>}    
    {user && <h3 className='text-white text-lg hover:text-gray-500 hover:underline  cursor-pointer'>MyBlogs</h3>}    
    {user && <h3 onClick={handlelogout} className='text-white text-lg hover:text-gray-500 hover:underline  cursor-pointer'>Logout</h3>}    
   </div>
    
  )
  }
