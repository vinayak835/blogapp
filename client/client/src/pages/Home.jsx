import React from 'react'
import HomePost from '../component/HomePost'

export default function Home() {
  return (
    <div className='flex flex-col gap-5 md:mx-40'>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
      <HomePost/>
    </div>
  )
}
