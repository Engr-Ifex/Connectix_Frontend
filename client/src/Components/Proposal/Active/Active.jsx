import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar';

const Active = () => {
  return (
    <div className='px-5 font-general'>
        <div>
            <p className='font-general font-bold text-[25px] py-5'>Proposals</p>
        </div>
        <div>
            <div className='flex gap-2 text-sm text-[#5F5F63] font-general'>
            <Link className='no-underline' to={"/Active"}>
              <div><p className='bg-[#000000] text-white p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Active</p></div>
            </Link>
            <Link className='no-underline' to={"/ArchiveProposals"}>
              <div><p className='bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Pending Proposals</p></div> 
            </Link>
            <Link className='no-underline' to={"/Messages"}>
              <div><p className='bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Messages</p></div>
            </Link>
            </div>
        </div>
        <div className='py-5 font-bold'>
          <p>Active proposals</p>
        </div>
        <div className='flex justify-between'>
          <div className='grid bg-[#9747ff81] place-content-center w-[181px] h-[192px] text-center text-white rounded-lg mr-5'>
            <p className='text-5xl font-semibold pb-3'>0</p>
            <p className='font-thin'>Active Proposals</p>
          </div>
          <div className='grid bg-[#0E8FCF] place-content-center w-[181px] h-[192px] text-center text-white rounded-lg'>
            <p className='text-5xl font-semibold pb-3'>7</p>
            <p className='font-thin'>Pending</p>
            <p className='font-thin'>Proposals</p>
          </div>
        </div>
        <div className=' grid place-content-center text-center h-[192px] border-[#00000080] border-[1px] rounded-lg my-5 '>
            <p className='text-5xl font-semibold pb-3'>12</p>
            <p className='font-extralight'>Total</p>
            <p className='font-extralight'>Proposals</p>
        </div>

        <Navbar />
    </div>
  )
}

export default Active;