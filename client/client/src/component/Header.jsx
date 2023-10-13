import React from 'react'
import {Link,useLocation} from 'react-router-dom'
import {BsSearch,BsPencil} from  'react-icons/bs'


export default function Header() {
  const user=''
  const location=useLocation()
    return (
    
    <div className='bg-blue-100 w-full'>
    <div className='flex justify-between mx-auto max-w-5xl items-center p-3  '>
        <Link to='/'>
      <h1 className='font-bold p-3 flex flex-wrap text-sm md:text-xl sm:text-lg'><span>Blog </span>
       <span>Market</span></h1></Link>
       {location.pathname !=='/sign-in' && location.pathname !=='/sign-up' &&  <form className='flex items-center p-3'>
        <input type="text" placeholder='Search a post'  className='bg-transparent  outline-none w-24 sm:w-64'/>
          <button className='mx-1'><BsSearch/></button> 
      </form>}
     
    <ul className='flex gap-4 p-3'>
        {user? <Link to='/write'> <li className='flex items-center gap-1 hover:underline'>Create<BsPencil/></li></Link>: <Link to='/sign-in'> <li className='hover:underline'>Sign In</li></Link>}
        {user? <Link to='/profile'> <li className='hidden sm:block hover:underline'>Profile</li></Link>: <Link to='/sign-up'> <li className='hidden sm:block hover:underline'>Register</li></Link>}
     
    </ul>
    </div>
  </div>
  )

}
