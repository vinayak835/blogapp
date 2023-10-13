import React from 'react'
import { IoIosCreate } from 'react-icons/io'
import { MdDeleteOutline } from 'react-icons/md'

export default function Comment() {
  return (
   
    <div className='bg-gray-300 rounded-md m-2 p-3'>
        <div className='flex items-center justify-between'>
        <p className='text-slate-800'>@vinayak</p>
        
        <div className='text-xs gap-1 flex'>
        <button ><IoIosCreate/></button>
        <button><MdDeleteOutline/></button>
        <p>8/10/2023</p>
            <p>16:45</p>
        </div>
        
        </div>
        <h1 className='text-black'> nice</h1>
</div> 

  )
}
