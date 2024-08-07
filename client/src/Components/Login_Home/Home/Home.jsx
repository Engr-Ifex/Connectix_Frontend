import React from 'react';
import { Bell, Filter, Magnifier } from '../SVG';

const Home = () => {
  return (
    <div className='mt-4 px-6 w-full min-w-screen font-general '>
      <div className='w-full flex justify-between mb-9'>
        <div className='flex items-center gap-3'>
          <div>
            <img
              src='/avatar.png'
              className='w-9 aspect-square rounded-full'
            />
          </div>
          <div className='flex flex-col gap-2 text-[#141414]'>
            <p className='text-sm '>Hi, Olashile</p>
            <p className='font-semibold text-xl'>Welcome Back</p>
          </div>
        </div>
        <div className='flex items-center gap-6'>
          <Magnifier />
          <Bell />
        </div>
      </div>
      <div className='w-full h-24 bg-greenBlue text-center rounded-2xl text-white text-xl font-semibold flex items-center justify-center mb-8'>
        Ads
      </div>
      <div className='w-full flex justify-between items-center'>
        <h3 className='text-xl font-semibold'>All events</h3>
        <button className='p-[10px] flex items-center justify-center rounded bg-black'>
          <Filter />
        </button>
      </div>
    </div>
  );
}

export default Home;
