import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import profile from '../Images/profile.jpg'
import { FaMicrophone } from "react-icons/fa";

const Chat = () => {
  return (
    <div className='font-general m-6'>
        <div>
            <Link className='no-underline' to='#'>
                <FaArrowLeftLong className='text-xl' />
            </Link>
        </div>
        <div className='flex ml-8 mt-5'>
            <img src={profile} alt="" className='w-[50px] rounded-lg mr-3' />
            <div>
                <p className='font-bold text-xl'>Elmer Laverty</p>
                <p className='text-slate-400'>online</p>
            </div>
        </div>
        <div className='text-sm mt-10'>
            <p className='pr-20 mt-5'>i am a rising star in the pop and R&B scene. With her soulful voice and captivating stage presence, she has been turning heads and winning hearts across the globe. Her debut album "Midnight Echoes" has</p>
            <p className='text-right pl-20 mt-5'>i am a rising star in the pop and R&B scene. With her soulful voice and captivating stage presence, she has been turning heads and winning hearts across the globe. Her debut album "Midnight Echoes" has</p>
            <p className='pr-20 mt-5'>i am a rising star in the pop and R&B scene. With her soulful voice and captivating stage presence, she has been turning heads and winning hearts across the globe. Her debut album "Midnight Echoes" has</p>
            <p className='text-right pl-20 mt-5'>i am a rising star in the pop and R&B scene. With her soulful voice and captivating stage presence, she has been turning heads and winning hearts across the globe. Her debut album "Midnight Echoes" has</p>
        </div>



        <div className='flex justify-between sticky bottom-0 left-0 w-full p-3 bg-white'>
            <input type="text" placeholder='Type messages here' className='placeholder:text-sm mr-2 w-full p-3 bg-[#D9D9D9B2] rounded-full '/>
            <button className='bg-[#D9D9D9B2] p-3 px-4 rounded-full' ><FaMicrophone /></button>
        </div>
    </div>
  )
}

export default Chat