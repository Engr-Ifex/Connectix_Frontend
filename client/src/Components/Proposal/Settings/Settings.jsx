import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import john from '../../Images/john.jpg'
import { FcApproval } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { PiSealWarning } from "react-icons/pi";
import { IoCheckmarkSharp } from "react-icons/io5";

const Settings = () => {

    const [visibleDiv, setVisibleDiv] = useState('div1');

    const handleToggle = (targetDiv) => {
      setVisibleDiv(targetDiv);
    };




  return (
    <div className='font-general p-5'>
        <div className='flex items-center gap-[30%]'>
            <Link className='no-underline' to='/Active'>
                <FaArrowLeftLong />
            </Link>
            <p className='font-bold text-xl text-center  ' >Settings</p>
        </div>
        <div className='flex my-8 p-5 bg-[#EBEBEB] rounded-lg'>
            <div className='relative'>
                <img src={john} alt="" className='w-[70px] h-[70px] rounded-full mr-3' />
                <span className="absolute bottom-0 right-2 w-5 h-5 bg-[#18B368] border-4 border-[#EBEBEB] rounded-full"></span>
            </div>
            <div>
                <p className='font-bold text-xl text-[#141415] flex'>John Obi <FcApproval className='ml-1 text-[#55D519] mt-1' /></p>
                <p className='text-[#5F5F63] text-[14px]'>Show promoter</p>
                <p className='text-[#5F5F63] text-[14px] flex'> <CiLocationOn className='mr-1 text-[15px] text-[#5F5F63] mt-1' />1,2 km away from you</p>
            </div>
        </div>
        <div>
            <p className='font-bold text-2xl'>Offer Details</p>
        </div>



        {visibleDiv === 'div1' && (
            <div className='flex justify-between items-center align-bottom absolute bottom-0 mb-5 gap-28'>
            <button  onClick={() => handleToggle('div2')} className='border-black border-[1px] p-5 font-semibold rounded-[15px] hover:bg-black hover:text-white transition-all'>Decline offer</button>
            <button onClick={() => handleToggle('div3')} className='bg-black text-white font-semibold p-5 rounded-[15px] hover:border-black hover:text-black hover:bg-transparent hover:border-[1px] transition-all'>Accept offer</button>
        </div>

        )}

        {visibleDiv === 'div2' && (
             <div className='h-screen z-20 bg-[#00000081] absolute top-0 -ml-5 flex flex-col justify-center items-center text-center'>
             <div className='bg-white m-5 p-5 rounded-lg'>
                 <div className='flex justify-center items-center text-center bg-[#FCB90E] p-[10px] m-auto mb-5  rounded-full h-[50px] w-[50px] '>
                 <PiSealWarning className='text-white text-4xl bg-[#FCB90E] rounded-full' />
                 </div>
                 <p className='font-bold text-xl mb-3'>Are you sure you want to Perform this action?</p>
                 <p>By declining offer, this offer automatically dissappears from your Offers.</p>
                 <div className='flex justify-between items-center mt-10'>
                     <button onClick={() => handleToggle('div1')}  className='border-black border-[1px] p-5 font-semibold rounded-[15px] px-10 hover:bg-black hover:text-white transition-all'>Cancel</button>
                     <button onClick={() => handleToggle('div4')}  className='bg-black text-white font-semibold p-5 rounded-[15px] px-10 hover:border-black hover:text-black hover:bg-transparent hover:border-[1px] transition-all'>Yes, Decline</button>
                 </div>
             </div>
         </div>

        )}

        {visibleDiv === 'div3' && (
             <div className='h-screen z-20 bg-[#00000081] absolute top-0 -ml-5 flex flex-col justify-center items-center text-center'>
             <div className='bg-white m-5 p-5 rounded-lg'>
                 <div className='flex justify-center items-center text-center bg-[#FCB90E] p-[10px] m-auto mb-5  rounded-full h-[50px] w-[50px] '>
                 <PiSealWarning className='text-white text-4xl bg-[#FCB90E] rounded-full' />
                 </div>
                 <p className='font-bold text-xl mb-3'>Are you sure you want to Perform this action?</p>
                 <p>By accepting offer, you are agreeing to performing at the show of <span className='font-bold'>John Obi</span></p>
                 <div className='flex justify-between items-center mt-10'>
                     <button onClick={() => handleToggle('div1')}  className='border-black border-[1px] p-5 font-semibold rounded-[15px] px-10 hover:bg-black hover:text-white transition-all'>Cancel</button>
                     <button onClick={() => handleToggle('div5')} className='bg-black text-white font-semibold p-5 rounded-[15px] px-10 hover:border-black hover:text-black hover:bg-transparent hover:border-[1px] transition-all'>Yes, Accept</button>
                 </div>
             </div>
         </div>

        )}


        {visibleDiv === 'div4' && (
             <div onClick={() => handleToggle('div1')} className='h-screen z-20 bg-[#00000081] absolute top-0 -ml-5 w-screen flex flex-col justify-center items-center text-center'>
             <div className='bg-white m-5 p-10 rounded-lg'>
                 <div className='flex justify-center items-center text-center bg-[#22C3A6] p-[10px] m-auto mb-5  rounded-full h-[50px] w-[50px] '>
                 <IoCheckmarkSharp className='text-white text-xl' />
                 </div>
                 <p className='font-bold text-xl mb-3'>Offer Declined</p>
                 <p>You have successfully save changes</p>
             </div>
         </div>

        )}

        {visibleDiv === 'div5' && (
             <div onClick={() => handleToggle('div1')} className='h-screen z-20 bg-[#00000081] absolute top-0 -ml-5 w-screen flex flex-col justify-center items-center text-center'>
             <div className='bg-white m-5 p-10 rounded-lg'>
                 <div className='flex justify-center items-center text-center bg-[#22C3A6] p-[10px] m-auto mb-5  rounded-full h-[50px] w-[50px] '>
                 <IoCheckmarkSharp className='text-white text-xl' />
                 </div>
                 <p className='font-bold text-xl mb-3'>Offer Accepted</p>
                 <p>You have successfully save changes</p>
             </div>
         </div>

        )}
    </div>
  )
}

export default Settings