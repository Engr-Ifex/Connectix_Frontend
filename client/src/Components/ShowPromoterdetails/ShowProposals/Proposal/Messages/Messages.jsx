import React from 'react'
import { Link } from 'react-router-dom'
import { GiSettingsKnobs } from "react-icons/gi";
import data from './MsgData';
import { AiFillFire } from "react-icons/ai";
import Navbar from "../../../../Navbar/ShowNavbar";


const Messages = () => {
  return (
    <div className='font-general'>
        <div className='px-5 '>
            <div>
                <p className='font-bold text-[25px] py-5'>Proposals</p>
            </div>
            <div>
            <div className='flex gap-2 text-sm text-[#5F5F63] font-general'>
            <Link className='no-underline' to={"/showproposals"}>
              <div><p className=' bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Active</p></div>
            </Link>
            <Link className='no-underline' to={"/ArchiveProposals"}>
              <div><p className='bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Archived Proposals</p></div> 
            </Link>
            <Link className='no-underline' to={"/Messages"}>
              <div><p className='bg-[#000000] text-white p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Messages</p></div>
            </Link>
            </div>
            </div>
            <div className='py-5 font-bold'>
              <p>Messages (2)</p>
            </div>
            <div className='flex'>
                <input type="text" className=' border-[1px] border-[#00000060] outline-[#000000b6] p-2 w-full rounded mr-3 ' placeholder='Search' />
                <div className='bg-black p-3 rounded'>
                <GiSettingsKnobs className='text-white font-bold' />
                </div>
            </div>

        </div>
        
        {
            data.map((msg) => (

            <div key={msg.id} className='p-5 flex justify-between pt-10 border-b-2  '>
                <div className='flex'>
                    <img src={msg.image} alt="profile" className='w-[50px] rounded-lg mr-3'/>
                    <div>
                        <p className='font-bold'>{msg.Name}</p>
                        <p className='text-[#14141471] flex items-center'>{msg.Message}<AiFillFire className='ml-1 text-yellow-500' /></p>
                    </div>
                </div>
                <p className='text-[#14141471]'>{msg.Time}</p>
            </div>
            ))
        }
       <Navbar />

    </div>
  )
}

export default Messages