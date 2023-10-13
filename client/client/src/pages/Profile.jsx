import React from 'react'
import ProfilePosts from '../component/ProfilePosts'

export default function Profile() {
  return (
    <div className='flex flex-col w-full items-center gap-4'>
        <div className='  flex flex-col gap-5 '>
            <h1 className='text-xl md:text-2xl font-bold '>Profile</h1>
            <input  className='p-2 outline-none'type="text"  placeholder='your username'/>
            <input className='p-2 outline-none' type="email" placeholder='your email'/>
            <input className='p-2 outline-none' type="password" placeholder='password'/>
            <div className='flex gap-4'>
                <button className='bg-black p-2 rounded-lg text-white'>Update</button>
                <button className='bg-black p-2 rounded-lg text-white'>Delete</button>
            </div>
        </div>
        <div className='w-[100%] sm:w-[80%] md:w-[70%]'>
        <h1 className='text-xl md:text-2xl font-bold '>your posts:</h1>
      <ProfilePosts/>
      <ProfilePosts/>
      <ProfilePosts/>
      <ProfilePosts/>
      <ProfilePosts/>
      <ProfilePosts/>
    </div>
    </div>
  )
}
