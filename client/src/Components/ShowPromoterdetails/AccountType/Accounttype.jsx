import React, { useState } from 'react';
import { DownArrow, GreenBadge, MusicNote, UploadImg } from '../../Login_Home/SVG';
import { Link } from 'react-router-dom';

const AccountType = () => {
  const [accountType, setAccountType] = useState(null);
  const [currentState, setCurrentState] = useState(0);

  const gender = ['male', 'female'];
  const locations = ['Akwa Ibom', 'Kano State', 'Lagos State', 'Abia State', 'Oyo State', 'Ogun State'];

  const handleAccountTypeSelection = (type) => {
    setAccountType(type);
    setCurrentState(1);
  };

  return (
    <>
      {currentState === 0 ? (
        <div className='w-full flex flex-col justify-center items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
          <p className='mt-4 text-2xl font-bold'>
            Which best describes
            <br /> your account type?
          </p>
          <div className='w-1/2 flex flex-col gap-5 mt-5'>
            <button
              className='py-5 rounded-2xl text-white bg-black'
              onClick={() => handleAccountTypeSelection('Individual')}
            >
              Individual
            </button>
            <button
              className='py-5 rounded-2xl text-white bg-black'
              onClick={() => handleAccountTypeSelection('Organization')}
            >
              Organization
            </button>
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
          <div className='w-full flex items-center justify-between mb-9'>
            <h3 className='text-2xl font-bold'>Enter your details</h3>
            <div className='flex items-center gap-1'>
              <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
              <div className='w-2 h-2 rounded-full bg-black' />
              <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
            </div>
          </div>
          <div className='w-full flex flex-col gap-5'>
            {accountType === 'Individual' ? (
              <>
                <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Name' />
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]' defaultValue="">
                  <option value="" disabled hidden>Gender</option>
                  {gender.map((gen, index) => (
                    <option key={index}>{gen}</option>
                  ))}
                </select>
                <div className='w-full relative'>
                  <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Date of birth' />
                  <div className='absolute top-4 right-2'>
                    <DownArrow />
                  </div>
                </div>
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]' defaultValue="">
                  <option value="" disabled hidden>State of residence</option>
                  {locations.map((loc, index) => (
                    <option key={index}>{loc}</option>
                  ))}
                </select>
                <div className='w-full relative'>
                  <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='NIN number (Optional)' />
                </div>
              </>
            ) : accountType === 'Organization' ? (
              <div className='w-full flex flex-col gap-5'>
                <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Business Name' />
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]' defaultValue="">
                  <option value="" disabled hidden>State of residence</option>
                  {locations.map((loc, index) => (
                    <option key={index}>{loc}</option>
                  ))}
                </select>
                <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='CAC Number (Optional)' />
                <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Principal activities (Event planners)' />
              </div>
            ) : null}
          </div>
          <div className='w-full flex items-center gap-20 text-base font-semibold mt-60'>
            <button className='w-full py-5 rounded-2xl border border-black text-black' onClick={() => setCurrentState(0)}>
              Back
            </button>
            <Link to='/showhome' className='w-full flex items-center justify-center py-5 rounded-2xl border bg-[#00283A] border-black text-white'>
              Continue
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default AccountType;