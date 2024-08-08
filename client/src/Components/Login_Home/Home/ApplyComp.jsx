import React, { useState } from 'react';
import { DownArrow, GreenMark, GreyEllipse, MusicNote, UploadImg } from '../SVG';
import Modal from 'react-responsive-modal';
import "react-responsive-modal/styles.css";
import styles from './Home.module.css'

const ApplyComp = ({closeAll}) => {
  const [isModal, setIsModal] = useState(false);

  const [isSubmit, setIsSubmit] = useState(false);

  const [newImage, setNewImage] = useState('');

  const openModal = () => {
    setIsModal(true);
  }
  const closeModal = () => {
    setIsModal(false);
  }

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Object.values(files).map((file) => URL.createObjectURL(file));
      setNewImage(imageUrls[0]);
    }
  };

  return (
    <div className='font-general w-full flex flex-col relative gap-5 pt-[40px]'>
      <div className='w-full relative' onClick={openModal}>
        <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' placeholder="Stage name" >
        </input>
        <div className='absolute top-4 right-2'>
          <DownArrow />
        </div>
      </div>
      <div className='w-full h-[272px] rounded-2xl border border-[#0000007d] relative flex items-center justify-center overflow-hidden'>
        {
          newImage ? (
            <img
              src={newImage}
              className='h-full object-cover object-center'
            />
          ) : (
            <div className='flex flex-col gap-3 h-full items-center justify-center text-center'>
              <UploadImg />
              <p className='text-[#0000007d] text-base font-semibold'>Upload profile image</p>
              <p className='text-[#0000007d] text-xs'>Without Profile image you cannot<br />procced from this page</p>
            </div>
          )
        }
        <input type='file' accept='image/*' className='opacity-0 absolute top-0 right-0 left-0 bottom-0 min-h-full min-w-full' onChange={handleFileChange} />
      </div>
      <div className='flex flex-col w-full gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold text-base'>Negotiate price</h3>
          <p className='text-[#0000007d] text-xs'>State the price you can afford for this performance</p>
        </div>
        <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' type='number' >
        </input>
      </div>
      <div className='flex flex-col w-full gap-4'>
        <div className='flex flex-col gap-1'>
          <h3 className='font-semibold text-base'>Minutes of performance</h3>
          <p className='text-[#0000007d] text-xs'>State how many minutes you want to negotiate</p>
        </div>
        <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' type='number' >
        </input>
      </div>
      <div className='w-full relative'>
        <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' placeholder='Upload or drop music link' >
        </input>
        <div className='absolute top-4 right-2'>
          <MusicNote />
        </div>
      </div>
      <div className='w-full relative'>
        <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' placeholder='Upload or drop music link' >
        </input>
        <div className='absolute top-4 right-2'>
          <MusicNote />
        </div>
      </div>
      <button className='w-full flex items-center justify-center rounded-2xl py-[14px] bg-black text-white text-sm' onClick={openModal}>
        Submit
      </button>
      <Modal open={isModal} onClose={closeModal} center
        classNames={{
          modal: styles.submitModal
        }}
      >

        <div className='w-full '>
          {
            isSubmit ? (
              <div className='w-full flex flex-col items-center text-center'>
                <GreenMark />
                <p className='mt-4 mb-3 text-base font-semibold'>Proposal sent!</p>
                <p className='text-sm leading-6 mb-10'>You have successfully sent a proposal to <br /><span className='font-bold'>John Obi</span>, please wait while they review you negotiation</p>
                <button className='w-full flex items-center justify-center py-5 rounded-2xl border border-black text-white bg-black font-semibold' onClick={closeAll}>Bach home</button>
              </div>
            ) : (
              <div className='w-full flex flex-col items-center text-center'>
                <GreyEllipse />
                <p className='mt-4 mb-3 text-base font-semibold'>Are you sure you want to submit?</p>
                <p className='text-sm leading-6 mb-10'>By submitting you agree for your personal information to be shared with the promoter</p>
                <div className='flex items-center w-full gap-5'>
                  <button className='w-full flex items-center justify-center py-5 rounded-2xl border border-black text-black font-semibold' onClick={closeModal}>Back</button>
                  <button className='w-full flex items-center justify-center py-5 rounded-2xl border border-black text-white bg-black font-semibold' onClick={() => setIsSubmit(true)}>Yes, submit</button>
                </div>
              </div>
            )
          }
        </div>
      </Modal>
    </div >
  );
}

export default ApplyComp;
