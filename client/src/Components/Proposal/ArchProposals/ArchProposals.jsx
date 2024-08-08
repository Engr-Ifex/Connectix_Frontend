import React from 'react'
import { Link } from 'react-router-dom'
import { FcApproval } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { PiStarFill } from "react-icons/pi";
import Archive from './ArchiveData'

const ArchProposals = () => {
  return (
    <div className='px-5 font-general'>
         <div>
            <p className='font-general font-bold text-[25px] py-5'>Proposals</p>
        </div>
        <div>
        <div className='flex gap-2 text-sm text-[#5F5F63] font-general'>
            <Link className='no-underline' to={"/Active"}>
              <div><p className='bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Active</p></div>
            </Link>
            <Link className='no-underline' to={"/ArchiveProposals"}>
              <div><p className=' bg-[#000000] text-white p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Archived Proposals</p></div> 
            </Link>
            <Link className='no-underline' to={"/Messages"}>
              <div><p className='bg-[#F4F4F4] p-2  px-4 rounded-full cursor-pointer hover:bg-black hover:text-white'>Messages</p></div>
            </Link>
            </div>
        </div>
        <div className='py-5 font-bold'>
          <p>Archived proposals (5)</p>
        </div>
        {Archive.map((data) => (
            <div key={data.id}>
                <div className='h-[255px] bg-white border-[1px] border-[#00000027] rounded-lg shadow-lg p-[16px] mb-5'>
                    <div className='bg-[#F4F4F4] h-full rounded-lg p-3'>
                        <div className='flex justify-between'>
                            <div>
                                <div className='flex items-center'>
                                    <p className='font-bold text-xl text-[#141415]'>{data.Name}</p>
                                    <FcApproval className='ml-1 text-[#55D519]' />
                                </div>
                                <div className='flex items-center'>
                                    <CiLocationOn className='mr-1 text-[15px] text-[#5F5F63]' />
                                    <p className='text-[#5F5F63] text-[14px]'>{data.Location}</p>
                                </div>
                            </div>
                            <div className='text-right'>
                                <p className='text-[11px] text-[#5F5F63]'>Performing price</p>
                                <p className='font-bold text-xl text-[#141415]'>{data.Price}</p>
                            </div>
                            
                        </div>
                        <div className='flex gap-2 text-[12px] font-general py-3'>
                            <div> <p className='bg-[#EBEBEB] p-1  px-4 rounded-full flex items-center'> <PiStarFill className='pr-1 text-[#FFC107] text-[17px]' /> {data.Rating}</p></div>
                            <div><p className='bg-[#EBEBEB] p-1  px-4 rounded-full'>{data.Hired}</p></div> 
                            <div><p className='bg-[#81db574d] text-[#55D519] p-1  px-4 rounded-full border-[1px] border-[#54d51973]'>{data.Status}</p></div>
                        </div>
                        <div className='text-[12px]'>
                            <p className='font-semibold'>Reason:</p>
                            <p>{data.Reason}</p>
                            <p className='font-semibold'>Promoter's comment:</p>
                            <p>{data.Comment}</p>
                            <p className='font-semibold'>Date: {data.Date}</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default ArchProposals