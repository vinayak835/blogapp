import { useState } from "react"
import React from 'react'

export default function EditPost() {
  
    
    const [cat,setcat]=useState('')
    const [cats,setcats]=useState([])
    
    
     const addCategory=()=>{
         if(cat.trim() !==''){
         let updatedcats=[...cats]
         updatedcats.push(cat)
         setcat('')
         setcats(updatedcats)
         }
         else{
             alert('please enter a category')
         }
 
     }
     const deleteCategory=(i)=>{
           
         let updatedcats=[...cats]
         updatedcats.splice(i,1)
         setcats(updatedcats)
 
 
     }
   return (
     <div className='mx-auto  sm:mx-20   md:mx-40'>
       <h1 className=' p-3 text-xl font-bold mx-auto md:text-3xl'>Edit Post</h1>
       <form  className='p-3 '>
         <div>
         <input type="text" placeholder='Enter the Tittle of Blog'  className='m-1 p-3 outline-none'/>
         </div>
         <div>
         <input type="file" className='mt-6' />
         </div>
         <div>
             <input value={cat} onChange={(e)=>setcat(e.target.value)} type="text" placeholder='Enter your category' className='p-3 outline-none mt-4' />
             <input onClick={addCategory} type="button" value="Add" className='bg-black text-white rounded-lg p-3 cursor-pointer' />
         </div>
         <div className='m-8 gap-5 flex flex-wrap'>
         
             {cats?.map((c,i)=>(
             <div key={i} className='bg-black rounded-lg text-white border-white border-2 p-1  flex items-center'>{c}<FcCancel  onClick={()=>deleteCategory(i)} className='m-1'/> </div>
     
       ))}
       </div>
 
     
       <textarea name="" id="" cols="35" rows="14" className='outline-none p-4' placeholder='Enter your post decription'/>
       <div>
         <button className='bg-black rounded-lg p-3 text-white md:mx-20 sm:mx-10 '>Update</button>
       </div>
       </form>
 
     </div>
   )
}
