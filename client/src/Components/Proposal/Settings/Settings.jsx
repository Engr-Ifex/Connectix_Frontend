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
    <div className='font-general p-4 sm:p-5 flex flex-col min-h-screen'>
  <div className='flex items-center justify-between mb-6'>
    <Link className='no-underline' to='/Active'>
      <FaArrowLeftLong className='text-xl' />
    </Link>
    <p className='font-bold text-xl text-center flex-grow'>Settings</p>
    <div className='w-6'></div> {/* Spacer for alignment */}
  </div>
  
  <div className='flex flex-col sm:flex-row items-start sm:items-center my-6 p-4 sm:p-5 bg-[#EBEBEB] rounded-lg'>
    <div className='relative mb-4 sm:mb-0 sm:mr-4'>
      <img src={john} alt="" className='w-16 h-16 sm:w-[70px] sm:h-[70px] rounded-full' />
      <span className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-[#18B368] border-4 border-[#EBEBEB] rounded-full"></span>
    </div>
    <div>
      <p className='font-bold text-lg sm:text-xl text-[#141415] flex items-center'>
        John Obi <FcApproval className='ml-1 text-[#55D519]' />
      </p>
      <p className='text-[#5F5F63] text-sm sm:text-[14px]'>Show promoter</p>
      <p className='text-[#5F5F63] text-sm sm:text-[14px] flex items-center'>
        <CiLocationOn className='mr-1 text-[15px] text-[#5F5F63]' />1,2 km away from you
      </p>
    </div>
  </div>
  
  <div className='mb-6'>
    <p className='font-bold text-xl sm:text-2xl'>Offer Details</p>
  </div>
  
  {visibleDiv === 'div1' && (
    <div className='flex flex-col sm:flex-row justify-between items-center mt-auto p-4 sm:p-5 gap-4 sm:gap-6 w-full'>
      <button 
        onClick={() => handleToggle('div2')} 
        className='w-full sm:w-auto border-black border-[1px] py-3 px-4 sm:py-5 sm:px-6 font-semibold rounded-[15px] hover:bg-black hover:text-white transition-all'
      >
        Decline offer
      </button>
      <button 
        onClick={() => handleToggle('div3')} 
        className='w-full sm:w-auto bg-black text-white font-semibold py-3 px-4 sm:py-5 sm:px-6 rounded-[15px] hover:border-black hover:text-black hover:bg-transparent hover:border-[1px] transition-all'
      >
        Accept offer
      </button>
    </div>
  )}

{visibleDiv === 'div2' && (
  <div className='fixed inset-0 z-20 bg-[#00000081] flex items-center justify-center p-4'>
    <div className='bg-white w-full max-w-md rounded-lg shadow-lg'>
      <div className='p-6'>
        <div className='flex justify-center items-center mb-6'>
          <div className='bg-[#FCB90E] p-3 rounded-full'>
            <PiSealWarning className='text-white text-3xl sm:text-4xl' />
          </div>
        </div>
        <h2 className='font-bold text-lg sm:text-xl mb-3 text-center'>
          Are you sure you want to perform this action?
        </h2>
        <p className='text-sm sm:text-base mb-6 text-center'>
          By declining offer, this offer automatically disappears from your Offers.
        </p>
        <div className='flex justify-between items-center mt-6 gap-4'>
          <button 
            onClick={() => handleToggle('div1')} 
            className='flex-1 border border-black py-2 px-3 sm:py-3 sm:px-5 font-semibold rounded-lg hover:bg-black hover:text-white transition-all text-sm sm:text-base'
          >
            Cancel
          </button>
          <button 
            onClick={() => handleToggle('div4')} 
            className='flex-1 bg-black text-white font-semibold py-2 px-3 sm:py-3 sm:px-5 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition-all text-sm sm:text-base'
          >
            Yes, Decline
          </button>
        </div>
      </div>
    </div>
  </div>
)}

{visibleDiv === 'div3' && (
  <div className='fixed inset-0 z-20 bg-[#00000081] flex items-center justify-center p-4'>
    <div className='bg-white w-full max-w-md rounded-lg shadow-lg'>
      <div className='p-6'>
        <div className='flex justify-center items-center mb-6'>
          <div className='bg-[#FCB90E] p-3 rounded-full'>
            <PiSealWarning className='text-white text-3xl sm:text-4xl' />
          </div>
        </div>
        <h2 className='font-bold text-lg sm:text-xl mb-3 text-center'>
          Are you sure you want to perform this action?
        </h2>
        <p className='text-sm sm:text-base mb-6 text-center'>
          By accepting offer, you are agreeing to performing at the show of <span className='font-bold'>John Obi</span>
        </p>
        <div className='flex justify-between items-center mt-6 gap-4'>
          <button 
            onClick={() => handleToggle('div1')} 
            className='w-full sm:w-auto border border-black py-2 px-4 sm:py-3 sm:px-6 font-semibold rounded-lg hover:bg-black hover:text-white transition-all'
          >
            Cancel
          </button>
          <button 
            onClick={() => handleToggle('div5')} 
            className='w-full sm:w-auto bg-black text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-transparent hover:text-black hover:border hover:border-black transition-all'
          >
            Yes, Accept
          </button>
        </div>
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