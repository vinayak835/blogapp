import React from 'react'

export default function Footer() {
  return (
    
      <footer className='bg-black mt-4  '>
        <div className='text-white flex justify-between m-1 sm:justify-around text-xs sm:text-sm '>
            <ul>
                <li className='hover:underline cursor-pointer' >Featured Blog</li>
                <li className='hover:underline cursor-pointer'>Most viewed</li>
                <li className='hover:underline cursor-pointer'>Reader's Choice</li>
            </ul>
            <ul>
                <li className='hover:underline cursor-pointer'>Forum</li>
                 <li className='hover:underline cursor-pointer'>Support</li>
                <li className='hover:underline cursor-pointer'>Recent Post</li>
            </ul>
            <ul>
                <li className='hover:underline cursor-pointer'>Privacy policy</li>
                <li className='hover:underline cursor-pointer'>About Us</li>
                <li className='hover:underline cursor-pointer'>Terms & Condition </li>
                <li className='hover:underline cursor-pointer'>Terms of Sercice </li>
            </ul>
        </div>
        <h3 className='text-white text-center  text-xs mt-2 md:text-sm'>All rights reserved @Blog Market 2023</h3>
      </footer>

  )
}
