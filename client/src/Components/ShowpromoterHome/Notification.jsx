import React from 'react';
import { DownArrow } from '../Login_Home/SVG';

const Notification = () => {
  return (
    <div className='font-general w-full flex flex-col relative gap-8 pt-[40px]'>
      <p className='absolute -top-2 left-1 font-semibold text-base'>Notifications</p>
      <div className='w-full relative'>
        <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' placeholder="Most Recent" >
        </input>
        <div className='absolute right-1 top-4'>
          <DownArrow />
        </div>
      </div>
      <div className='w-full h-[105px] flex justify-center items-center text-[#0000007d] font-medium rounded-2xl bg-[#eaeaea]'>
        No recent Notifications
      </div>
      <div className='flex flex-col w-full'>
        <h3 className='text-xl font-semibold'>Previous weeks</h3>
        <div className='py-5 w-full flex justify-between'>
          <div className='flex gap-3'>
            <div>
              <img
                src='/girlAvatar.png'
                alt='girl Avatar'
              />
            </div>
            <div className='flex flex-col gap-1 text-[#212121]'>
              <p className='text-xs font-semibold '>Hannah Flores</p>
              <div>
                <p className='text-xs'>Updated their testimonials: Good</p>
                <p className='text-sm'>Performance <span className='text-[#9e9e9e]'>9:56 AM</span></p>
              </div>
              <p className='underline font-semibold text-xs'>View Comments</p>
            </div>
          </div>
          <div>
            <img
              src='/post.png'
            />
          </div>
        </div>
        <hr />
        <div className='py-5 w-full flex justify-between'>
          <div className='flex gap-3'>
            <div>
              <img
                src='/girlAvatar.png'
                alt='girl Avatar'
              />
            </div>
            <div className='flex flex-col gap-1 text-[#212121]'>
              <p className='text-xs font-semibold '>Hannah Flores</p>
              <div>
                <p className='text-xs'>Updated their testimonials: Good</p>
                <p className='text-sm'>Performance <span className='text-[#9e9e9e]'>9:56 AM</span></p>
              </div>
              <p className='underline font-semibold text-xs'>View Comments</p>
            </div>
          </div>
          <div>
            <img
              src='/post.png'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;