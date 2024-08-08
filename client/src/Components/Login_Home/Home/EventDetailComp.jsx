import React, { useState } from 'react';
import { GreenBadge, LeftArrow, LocationMark, YellowStar } from '../SVG';
import "react-responsive-modal/styles.css";
import Modal from 'react-responsive-modal'
import styles from './Home.module.css'
import ApplyComp from './ApplyComp';

const EventDetailComp = ({ setIsEvent }) => {
  const [isApply, setIsApply] = useState(false);

  const openModal = () => {
    setIsApply(true);
  }
  const closeModal = () => {
    setIsApply(false);
  }

  return (
    <div className='pt-14 pb-[200px] relative text-[#141415] shadow-detailBoxShadow bg-[#f8f8f8] min-h-screen overflow-y-scroll h-full px-6'>
      <div onClick={() => setIsEvent(false)} className='top-4 left-4 fixed z-10'>
        <LeftArrow />
      </div>
      <div className='p-3 w-full bg-white rounded-2xl aspect-square mb-6'>
        <img src='/Thumb.png' className='h-full object-cover object-center rounded-2xl' />
      </div>
      <div className='w-full gap-[6px] flex flex-col rounded-2xl p-4 bg-[#EBEBEB] shadow-detailBoxShadow mb-6'>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <p className='font-semibold text-base'>John Obi</p>
            <GreenBadge />
          </div>
          <p className='text-[#5F5F63] text-[8px]'>Performing price</p>
        </div>
        <div className='w-full flex items-center justify-between'>
          <div className='flex items-center gap-1 text-xs text-[#5F5F63]'>
            <LocationMark />
            <p>1,2 km away from you</p>
          </div>
          <p className='text-sm font-semibold'>
            N200,000
          </p>
        </div>
      </div>
      <div className='w-full flex flex-col gap-4 mb-4'>
        <h3 className='text-xl font-semibold'>Event description</h3>
        <p className='text-sm opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div className='flex items-center gap-4'>
          <div className='py-2 px-3 bg-[#d4d4d4] rounded-[20px] text-[10px] text-[#5f5f63]'>20 Applied</div>
          <div className='py-2 px-3 bg-[#d4d4d4] rounded-[20px] text-[10px] text-[#5f5f63]'>1,000 Audience</div>
          <div className='py-2 px-3 bg-[#d4d4d4] rounded-[20px] text-[10px] text-[#5f5f63]'>3 special guest</div>
        </div>
      </div>
      <div className='border-t border-b border-[#5F5F63] flex flex-col gap-4 py-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm'>N200,000</h3>
          <p className='text-[8px] opacity-70'>Slightly negotiable</p>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='text-sm'>Event type</h3>
          <p className='text-[8px] opacity-70'>Club party night</p>
        </div>
      </div>
      <div className='flex flex-col border-b border-b-[#5F5F63] py-4 gap-2'>
        <h3 className='text-xl font-semibold'>About the Promoter</h3>
        <div className='w-full flex items-center gap-4'>
          <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#d4d4d4] text-[#5f5f63] text-[10px]'>
            <YellowStar />
            <p>4.5</p>
          </div>
          <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#d4d4d4] text-[#5f5f63] text-[10px]'>
            <p>10 comments</p>
          </div>
        </div>
        <div className='flex items-center gap-1'>
          <GreenBadge />
          <p className='font-semibold text-xs'>Details verified</p>
        </div>
        <div className='flex items-center gap-1'>
          <GreenBadge />
          <p className='font-semibold text-xs'>Location verified</p>
        </div>
        <p className='font-semibold text-xs'>17 shows posted 60% hire rates</p>
        <p className='text-[10px]'>Date: 6 february, 2024</p>
      </div>
      <div className='py-4 gap-4 flex flex-col w-full'>
        <div className='w-full flex items-center justify-between'>
          <h3 className='text-xl font-semibold'>Recent jobs posted</h3>
          <div className='py-1 px-2 bg-[#d4d4d4] rounded-[20px] text-[8px] text-[#5f5f63]'>17</div>
        </div>
        <div className='p-4 rounded-[27px] w-full bg-[#ebebeb]'>
          <div className='p-4 rounded-[27px] w-full bg-[white] flex flex-col gap-2 '>
            <div className='w-full gap-[4px] flex flex-col rounded-2xl p-4 bg-[#EBEBEB] shadow-detailBoxShadow'>
              <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <p className='font-semibold text-base'>John Obi</p>
                  <GreenBadge />
                </div>
                <p className='text-[#5F5F63] text-[8px]'>Performing price</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-1 text-xs text-[#5F5F63]'>
                  <LocationMark />
                  <p>1,2 km away from you</p>
                </div>
                <p className='text-sm font-semibold'>
                  N200,000
                </p>
              </div>
            </div>
            <div className='w-full flex items-center gap-4'>
              <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#d4d4d4] text-[#5f5f63] text-[10px]'>
                <YellowStar />
                <p>4.5</p>
              </div>
              <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#d4d4d4] text-[#5f5f63] text-[10px]'>
                <p>2 people hired</p>
              </div>
              <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#81DB574D] border border-[#55D51933] text-[#55D519] text-[10px]'>
                <p>Successful</p>
              </div>
            </div>
            <div className='flex w-full flex-col gap-1'>
              <h3 className='text-xs font-medium'>Artist’s comment:</h3>
              <p className='text-[10px] opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className='flex w-full flex-col gap-1'>
              <h3 className='text-xs font-medium'>Artist’s comment:</h3>
              <p className='text-[10px] opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <p className='text-[10px]'>Date: 6 february, 2024</p>
          </div>
        </div>
        <div className='p-4 rounded-[27px] w-full bg-[#ebebeb]'>
          <div className='p-4 rounded-[27px] w-full bg-[white] flex flex-col gap-2 '>
            <div className='w-full gap-[4px] flex flex-col rounded-2xl p-4 bg-[#EBEBEB] shadow-detailBoxShadow'>
              <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                  <p className='font-semibold text-base'>John Obi</p>
                  <GreenBadge />
                </div>
                <p className='text-[#5F5F63] text-[8px]'>Performing price</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <div className='flex items-center gap-1 text-xs text-[#5F5F63]'>
                  <LocationMark />
                  <p>1,2 km away from you</p>
                </div>
                <p className='text-sm font-semibold'>
                  N200,000
                </p>
              </div>
            </div>
            <div className='w-full flex items-center gap-4'>
              <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#d4d4d4] text-[#5f5f63] text-[10px]'>
                <YellowStar />
                <p>4.5</p>
              </div>
              <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#d4d4d4] text-[#5f5f63] text-[10px]'>
                <p>2 people hired</p>
              </div>
              <div className='flex items-center rounded-3xl gap-1 py-[6px] px-3 bg-[#81DB574D] border border-[#55D51933] text-[#55D519] text-[10px]'>
                <p>Successful</p>
              </div>
            </div>
            <div className='flex w-full flex-col gap-1'>
              <h3 className='text-xs font-medium'>Artist’s comment:</h3>
              <p className='text-[10px] opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <div className='flex w-full flex-col gap-1'>
              <h3 className='text-xs font-medium'>Artist’s comment:</h3>
              <p className='text-[10px] opacity-70'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            </div>
            <p className='text-[10px]'>Date: 6 february, 2024</p>
          </div>
        </div>
      </div>
      <div className='fixed bottom-0 left-0 right-0 w-full p-4 pb-8 flex flex-col gap-4 rounded-t-[20px] bg-white'>
        <div className='w-full gap-[6px] flex flex-col'>
          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <p className='font-semibold text-base'>Cubana Club</p>
              <GreenBadge />
            </div>
            <p className='text-[#5F5F63] text-[8px]'>10mins Performance</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <div className='flex items-center gap-1 text-xs text-[#5F5F63]'>
              <LocationMark />
              <p>1,2 km away from you</p>
            </div>
            <p className='text-sm font-semibold'>
              N200,000
            </p>
          </div>
        </div>
        <button className='w-full flex items-center justify-center rounded-2xl py-[14px] bg-black text-white text-sm' onClick={openModal}>
          Apply
        </button>
      </div>
      <Modal open={isApply} onClose={closeModal} center
        classNames={{
          modal: styles.eventDetailModal
        }}
      >
        <ApplyComp closeAll={closeModal}/>
      </Modal>
    </div>
  );
}

export default EventDetailComp;
