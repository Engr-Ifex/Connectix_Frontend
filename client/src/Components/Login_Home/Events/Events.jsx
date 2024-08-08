import React, { useState } from 'react';
import { BlueBadge, Filter, GrayHeart, GreenBadge, LocationMark } from '../SVG';
import EventDetailComp from '../Home/EventDetailComp';
import styles from './Events.module.css';
import "react-responsive-modal/styles.css";
import Modal from 'react-responsive-modal'

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {
        isEvent ? (
          <div className='w-full min-w-screen font-general'>
            <EventDetailComp setIsEvent={setIsEvent} />
          </div>
        ) :
          (
            <div className='mt-4 px-6 w-full min-w-screen font-general '>
              <div className='flex flex-col gap-6 w-full max-h-[calc(100vh-150px)] py-1 h-full overflow-y-scroll'>
                <div className='w-full flex justify-between items-center'>
                  <h3 className='text-xl font-semibold'>All events</h3>
                  <button className='p-[10px] flex items-center justify-center rounded bg-black' onClick={openModal}>
                    <Filter />
                  </button>
                </div>
                <div className='w-full shrink-0 rounded-2xl shadow-thumbShadow bg-[#ebebeb] p-3 overflow-hidden relative' onClick={() => setIsEvent(true)}>
                  <div className='absolute top-6 right-8'>
                    <GrayHeart />
                  </div>
                  <div className='h-[272px] w-full'>
                    <div className='bg-[#ccc] w-full h-full object-cover object-center rounded-2xl' />
                  </div>
                  <div className='w-full p-5 gap-4 flex flex-col bg-white rounded-2xl mt-4'>
                    <div className='w-full flex flex-col gap-1'>
                      <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <p className='font-semibold text-base'>Cubana club</p>
                          <GreenBadge />
                        </div>
                        <p className='text-[#7c7c7c] text-[8px]'>Performing price</p>
                      </div>
                      <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-1 text-sm text-[#7c7c7c]'>
                          <LocationMark />
                          <p>1.2 km away from you</p>
                        </div>
                        <p className='text-base font-semibold'>
                          N200,000
                        </p>
                      </div>
                    </div>
                    <button className='w-full flex items-center justify-center py-4 rounded-2xl border border-black text-white bg-black font-semibold'>View details</button>
                  </div>
                </div>
              </div>
              <Modal open={isOpen} onClose={closeModal} center
                classNames={{
                  modal: styles.modal
                }}
              >
                <div className='flex flex-col min-w-screen text-[#141414] relative py-6'>
                  <p className='absolute -top-1 left-0 font-semibold text-base'>Filter</p>
                  <div className='grid grid-cols-3 w-full gap-4 pt-2 mb-5'>
                    <div className='py-2 px-3 rounded-[20px] text-[#fff] text-nowrap text-xs bg-[#000] leading-5 text-center'>Club events</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>Church events</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#101013] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>Concert</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>20 Applied</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>1,000 Audience</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>3 special guest</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>20 Applied</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>1,000 Audience</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>3 special guest</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>20 Applied</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>1,000 Audience</div>
                    <div className='py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center'>3 special guest</div>
                  </div>
                  <div className='flex items-center w-full gap-5'>
                    <button className='w-full py-4 flex items-center justify-center border border-black rounded-2xl font-semibold text-sm ' onClick={closeModal}>
                      Reset
                    </button>
                    <button className='w-full py-4 flex items-center justify-center border border-black bg-black text-white rounded-2xl font-semibold text-sm' onClick={closeModal}>
                      Show results
                    </button>
                  </div>
                </div>
              </Modal>
            </div>
          )
      }
    </>
  );
}

export default Events;
