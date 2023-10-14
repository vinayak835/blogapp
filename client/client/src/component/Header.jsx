import React, { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import {BsSearch,BsPencil} from  'react-icons/bs'
import {AiOutlineMenuFold} from 'react-icons/ai'
import Menu from '../component/Menu'

export default function Header() {
  const user=true
  const[menu,setmenu]=useState(false)
  const location=useLocation()
  const showmenu=()=>{
    setmenu(!menu)
  }
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
     
    <ul className=' hidden sm:flex gap-4 p-3'>
        {user? <Link to='/write'> <li className='flex items-center ju` gap-1 hover:underline'>Create<BsPencil/></li></Link>: <Link to='/sign-in'> <li className='hover:underline'>Sign In</li></Link>}
        {user? <li onClick={showmenu} className='p-1'> <AiOutlineMenuFold /> </li>: <Link to='/sign-up'> <li className='hidden sm:block hover:underline'>Register</li></Link>}
     
    </ul>
    <div onClick={showmenu} className='md:hidden'>
      <AiOutlineMenuFold /> </div>
  {menu && <Menu />}
  </div>
    </div>
   
  )

}
