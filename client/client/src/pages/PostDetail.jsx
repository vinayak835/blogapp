import React from 'react'
import {IoIosCreate} from 'react-icons/io'
import {MdDeleteOutline} from 'react-icons/md'
import Comment from '../component/Comment'

export default function PostDetail() {
  return (
    <div className='w-full flex flex-col mx-auto items-center justify-center p-5 sm:p-14  lg:p-32 lg:pt-16 '>
       
            <div className=''>
            <h1 className='text-lg font-bold sm:text-xl  mx-auto'>10 uses of ai Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae incidunt, sint architecto iusto saepe cumque ipsam quaerat tempore p</h1>
           
                </div>
                <div className='text-sm'>
            <button ><IoIosCreate/></button>
            <button><MdDeleteOutline/></button>
            </div>
            <div className='flex gap-2 justify-between m-4 w-[90%] '>
                <p>@vinayak</p>
                <div  className='flex gap-2'>
                <p>8/10/2023</p>
                <p>16:45</p>
            </div>
            </div>
            <div className='flex justify-center items-center flex-col'>
                {/* <img className='h-[300px] w-[450px] sm:h-[400px] sm:w-[600px]  mt-3' src="https://imgs.search.brave.com/RX-AlohH1437hJ-1r7p1vDkWggfGyqbl-37ePLArtIo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWd2/My5mb3Rvci5jb20v/aW1hZ2VzL2Jsb2ct/cmljaHRleHQtaW1h/Z2UvQUklRTklODIl/QUUlRTQlQkIlQjYl/RTUlOUIlQkUucG5n" alt="AI" /> */}
                <img className='h-[300px] w-[450px] sm:h-[400px] sm:w-[600px]  mt-3' src="https://imgs.search.brave.com/omlSDDA1Up5HxaiFQZWL4dNdCy7Oyk53CgRDVMi6S0o/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/aS1jaGlwLWFydGlm/aWNpYWwtaW50ZWxs/aWdlbmNlLWZ1dHVy/ZS10ZWNobm9sb2d5/LWlubm92YXRpb25f/NTM4NzYtMTI5Nzgw/LmpwZz9zaXplPTYy/NiZleHQ9anBn" alt="" />
                <p className='mx-auto mt-5 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, recusandae. Possimus, sunt saepe! Dicta sit laborum necessitatibus! Officia tempore corrupti ad magnam culpa assumenda perferendis reprehenderit, illum corporis suscipit neque.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis voluptates officia debitis suscipit corrupti excepturi laudantium, sit sint expedita? Doloremque at eum iste a eius corporis nostrum molestias deleniti perspiciatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ratione voluptas fuga, placeat necessitatibus aliquid mollitia molestiae nemo corrupti voluptates minima illum iure eius architecto, cumque in pariatur consequuntur provident.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus doloremque dolore quam aliquid in laudantium cumque dolorem accusantium praesentium molestias quasi, labore, necessitatibus totam dolor vel nam? Illo, non.
                    Neque, harum mollitia fuga veniam itaque nihil possimus odit ut architecto repellendus aut asperiores deleniti doloribus enim, rerum recusandae quas tenetur inventore! Tempore excepturi eius numquam molestias hic ab rem.
                    Quia ipsa blanditiis beatae minima, natus rerum cumque hic possimus eveniet! Impedit reiciendis, praesentium facere nihil accusantium architecto, eaque voluptatum magni quis vitae debitis harum eligendi voluptatem sunt. Explicabo, doloremque.
                    Reprehenderit, sapiente quam excepturi magnam iste quae quos magni obcaecati nobis asperiores, incidunt nesciunt eius, itaque atque voluptates. Quae cumque magni, voluptatem ut exercitationem quisquam dolores iure facere blanditiis qui?
                    Maiores tempora eos ipsam laudantium quibusdam harum eius, incidunt reiciendis vero sapiente a. Consequuntur sed officia repellendus, fugiat praesentium, quidem numquam ab asperiores autem deserunt optio non cupiditate ipsum omnis.
                    Dolore delectus illo culpa, explicabo officiis, est aspernatur, ea animi exercitationem voluptatibus consectetur? Ipsa maiores vero iusto optio quidem maxime ducimus, quae nemo beatae fugiat provident nisi dolor laboriosam nihil.
                    Mollitia magnam corporis ipsum ipsam quasi aut recusandae aspernatur voluptate vitae ducimus totam doloremque sint magni corrupti incidunt nesciunt, eaque repudiandae cumque fuga eius autem! Error aliquid harum voluptatum reiciendis?
                    Dolorem hic facilis aliquid maxime, vero delectus dolores beatae esse modi exercitationem ipsum harum nulla doloribus temporibus praesentium. Ipsa non autem commodi temporibus enim numquam veniam reiciendis natus ea repellat!
                    Voluptate aut unde neque commodi, aliquid perspiciatis est voluptatem provident repudiandae quam sequi, mollitia earum necessitatibus rem, voluptas magnam harum at incidunt ab iste nisi pariatur sapiente quas voluptatum. Dicta!
                    Alias sapiente deleniti omnis magni blanditiis eius explicabo consequuntur quod accusantium nesciunt suscipit, nam sint facilis minus reiciendis eveniet tempore itaque quas amet officia molestias delectus aliquam sed? Iusto, vitae?
                </p>
            </div>
            <div className='m-8 gap-5'>
        <h3>Categories</h3>
        <button className='bg-gray-600 rounded-lg text-white border-white border-2 p-1 m-2'>All </button>
        <button className='bg-gray-600 rounded-lg text-white border-white border-2 p-1 m-2'>Tech</button>
    
      </div>
      <div className='w-full '>
    <h3 className='font-semibold  '>Comments</h3>
<Comment/>
<Comment/>
<Comment/>
</div>
         <div className='w-full gap-4  mt-4 flex justify-between'>
            <input type="text" placeholder='write a comment' className='p-3 outline-none sm:w-96' />
            <button className='text-white bg-black rounded-lg p-3'>Add comment</button>
         </div>


        </div>
      
    
  )
}
