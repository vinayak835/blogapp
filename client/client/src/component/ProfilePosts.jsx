import React from 'react'

export default function ProfilePosts() {
  return (
    <div className='flex max-w-full flex-col mt-8 lg:flex-row justify-center items-center'>
    <div className='w-[35%] h[200px] flex justify-center items-center'>
        <img  className=' h-[200px] w-[300px]' src="https://imgs.search.brave.com/RX-AlohH1437hJ-1r7p1vDkWggfGyqbl-37ePLArtIo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2Jsb2ct/cmljaHRleHQtaW1h/Z2UvQUklRTklODIl/QUUlRTQlQkIlQjYl/RTUlOUIlQkUucG5n" />
        {/* <img className='bg-contain h-[200px] w-[300px]' src="https://imgs.search.brave.com/omlSDDA1Up5HxaiFQZWL4dNdCy7Oyk53CgRDVMi6S0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1jaGlwLWFydGlm/aWNpYWwtaW50ZWxs/aWdlbmNlLWZ1dHVy/ZS10ZWNobm9sb2d5/LWlubm92YXRpb25f/NTM4NzYtMTI5Nzgw/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="" /> */}
    </div>
    <div className='w-[65%] flex flex-col m-3 justify-center'>
       <div>
        <h1 className='font-bold my-2 text-center'>10 use of AI</h1>
        </div>
        <div className='flex justify-between '>
            <p className='text-slate-500 text-xs'>@vinayak</p>
            <p className='text-slate-500 text-xs'>8/10/2023 12:24</p>
        </div>
        <h5 className='text-sm md:text-lg lg:text-xl flex mx-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ea 
            est mollitia esse dolorum dolores ullam ducimus! Illum quas,
         cere corrupti quia cum eligendi reiciendis nam perferendis animi molestiae sed 
         consectetur porro aliquid, assumenda autem quos?</h5>
    </div>
 
</div>
  )
}
