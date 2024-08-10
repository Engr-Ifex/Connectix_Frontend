import React, { useEffect, useState } from 'react';
import { Facebook, Google, X } from '../SVG';
import PinInput from 'react-pin-input';
import { BrowserRouter as Router, Route, useLocation, useParams, Link } from 'react-router-dom';

const SignUp = () => {
  const [isCode, setIsCode] = useState(false);
  // Initialize the counter with 60
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    // Exit early if the counter is already at 0
    if (counter <= 0) {
      return;
    }

    // Set up the interval to decrement the counter by 1 every second
    const timerId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // Clean up the interval on component unmount or when the countdown ends
    return () => clearInterval(timerId);

  }, [counter]);
  return (
    <>
      {
        isCode ? (
          <div className='px-5 font-general flex flex-col items-center w-full max-w-[768px] mx-auto justify-between py-10 text-black min-h-screen h-full'>
            <div className='flex flex-col items-center'>
              <div className=' bg-black rounded-xl w-10 h-7 mb-12' />
              <div className='flex flex-col items-center gap-3 mb-5'>
                <h2 className=' font-bold text-xl leading-6'>Enter Code</h2>
                <p className=' text-sm text-[#0000007D] text-center'>An Email with the 4 digits code has been sent to your email <span className='text-black italic'>Demo****@gmail.com</span></p>
              </div>
              <div className='w-full flex items-center justify-center'>
                <PinInput
                  length={4}
                  initialValue=""
                  onChange={(value, index) => { }}
                  type="numeric"
                  inputMode="number"
                  style={{ padding: '16px' }}
                  inputStyle={{ borderColor: '#00000049', borderWidth: '1px', backgroundColor: '#fff', borderRadius: '16px', color: 'black', fontWeight: '400', fontSize: '14px', width: '50px', height: '50px', margin: '12px 12px' }}
                  inputFocusStyle={{ borderColor: '#ccc' }}
                  // onComplete={(value, index) => { compareAndSign(value) }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
              <p className='text-center text-sm font-semibold my-10'>
                Resend OTP {counter}s
              </p>
              <Link to='/Create' className='flex items-center justify-center text-white py-5 w-full text-base font-semibold bg-black rounded-2xl'>
                Continue
              </Link>
            </div>
            <p className=' float-end font-semibold text-base cursor-pointer ' onClick={() => setIsCode(false)}>
              Back to Sign Up
            </p>
          </div>
        ) : (
          <div className='px-5 font-general flex flex-col items-center w-full max-w-[768px] mx-auto justify-center py-10 text-black'>
            <div className=' bg-black rounded-xl w-10 h-7 mb-12' />
            <div className='flex flex-col items-center gap-3 mb-10'>
              <h2 className=' font-bold text-xl leading-6'>Create your account</h2>
              <p className=' text-sm opacity-50 '>Fill the information below to create an account</p>
            </div>
            <div className='flex flex-col w-full items-center gap-6 text-sm mb-7'>
              <input className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' placeholder='Name' />
              <input className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' placeholder='Email' />
              <input className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' placeholder='Password' type='password' />
              <input className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' placeholder='Confirm Password' type='password' />
              <p className=' text-xs leading-6 tracking-[0.12px] text-[rgba(0,0,0,0.8)]'>
                We’ll call or text you to confirm your Email. A email or Standard message and data rates apply.<span className='underline cursor-pointer'>Privacy Policy</span>
              </p>
              <button className='text-white py-5 w-full text-base font-semibold bg-black rounded-2xl' onClick={() => setIsCode(true)}>
                Continue
              </button>
            </div>
            <p className='text-[rgba(21,21,21,0.5)] text-base mb-8'>
              or Sign Up with
            </p>
            <div className='w-full flex justify-center items-center gap-6 mb-9 '>
              <div className='flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]'>
                <Google />
              </div>
              <div className='flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]'>
                <X />
              </div>
              <div className='flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]'>
                <Facebook />
              </div>
            </div>
            <Link to='/mainlogin' className='font-semibold cursor-pointer text-base text-center'>Already have an account? Sign In</Link>
          </div>
        )
      }
    </>
  );
}

export default SignUp;
