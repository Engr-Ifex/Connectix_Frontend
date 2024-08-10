import React from 'react'
import { Link } from 'react-router-dom'
import Unread from './UnreadData'
import Navbar from '../../Navbar/Navbar'


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
              <div><p className='bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Archived Proposals</p></div> 
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
            <p className='font-thin'>Offers</p>
            <p className='font-thin'>From Promoter</p>
          </div>
          <div className='grid bg-[#0E8FCF] place-content-center w-[181px] h-[192px] text-center text-white rounded-lg'>
            <p className='text-5xl font-semibold pb-3'>7</p>
            <p className='font-thin'>Submitted</p>
            <p className='font-thin'>Proposals</p>
          </div>
        </div>
        <div className=' grid place-content-center text-center h-[192px] border-[#00000080] border-[1px] rounded-lg my-5 '>
            <p className='text-5xl font-semibold pb-3'>12</p>
            <p className='font-extralight'>Active</p>
            <p className='font-extralight'>Proposals</p>
        </div>
        <div className='flex gap-4'>
          <p className='font-bold'>Unread proposals </p>
          <p className='text-white bg-[#FFC107] rounded-full px-[7px] pt-[2px] text-[13px]  '>8</p>
        </div>


        {
        Unread.map((item) => (

        <div key={item.id} className='flex bg-white rounded p-5 text-sm shadow-lg mb-5'>
          <img src={item.image} alt="" className='w-[40px] h-[40px] rounded-full mr-3'/>
          <div>
            <p className='font-bold'>{item.name}</p>
            <p className='font-medium'>{item.invite} <span className='text-[#b6b5b5]'>{item.time}</span></p>
            <Link className='no-underline hover:underline' to={item.link}>
             <p className='font-bold'>View Proposal</p>
          </Link>
          </div>
          <img src={item.image2} alt="" className='w-[50px] h-[50px] rounded' />
        </div>
        ))
        }
         {
        Unread.map((item) => (

        <div key={item.id} className='flex bg-white rounded p-5 text-sm shadow-lg mb-5'>
          <img src={item.image} alt="" className='w-[40px] h-[40px] rounded-full mr-3'/>
          <div>
            <p className='font-bold'>{item.name}</p>
            <p className='font-medium'>{item.invite} <span className='text-[#b6b5b5]'>{item.time}</span></p>
            <Link className='no-underline hover:underline' to={item.link}>
             <p className='font-bold'>View Proposal</p>
          </Link>
          </div>
          <img src={item.image2} alt="" className='w-[50px] h-[50px] rounded' />
        </div>
        ))
        }
     
     <div className="navbar mb-24">
      <Navbar />
      </div>   
      
     </div>
  )
}

export default Active;