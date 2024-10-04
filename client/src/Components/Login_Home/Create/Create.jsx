import React, { useState } from 'react';
import { DownArrow, GreenBadge, MusicNote, UploadImg } from '../SVG';
import { Link } from 'react-router-dom';
import Details from './Detail';

const gender = ['male', 'female'];
const musicStyle = ['Afrobeats', 'Jazz', 'Rock', 'Pop', 'Hip Hop'];
const locations = ['Akwa Ibom', 'Kano State', 'Lagos State', 'Abia State', 'Oyo State', 'Ogun State'];

const Create = () => {
  const [currentState, setCurrentState] = useState(0);
  const [newImage, setNewImage] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [accountType, setAccountType] = useState(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Object.values(files).map((file) => URL.createObjectURL(file));
      setNewImage(imageUrls[0]);
    }
  };

  const handleShowPromoterClick = () => {
    setShowDetails(true); // Set state to show the Details component
  };

  const handleDetailsContinue = (type) => {
    setAccountType(type); 
    setShowDetails(false);
    setCurrentState(1);
  };

  return (
    <>
      {showDetails ? (
        <Details onContinue={handleDetailsContinue} /> // Pass the continue handler
      ) : (
        <>
          {currentState === 0 ? (
            <div className='w-full flex flex-col py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
              <div className='w-full flex items-center justify-between mb-9'>
                <h3 className='text-2xl font-bold'>Set up your account</h3>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 rounded-full bg-black' />
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                </div>
              </div>
              <div className='w-full p-4 rounded-2xl flex flex-col gap-4 bg-white'>
                <div className='w-full h-[170px]'>
                  <img
                    src='https://gateway.pinata.cloud/ipfs/QmaYDUge7QrhK9iJh235ynYcmo6N6HJUxcXdwvdR6gcAAJ'
                    className='h-full rounded-2xl'
                    alt='Artist'
                  />
                </div>
                <div className='p-4'>
                  <div className='flex items-center gap-1'>
                    <p className='text-base font-semibold'>Artist</p>
                    <GreenBadge />
                  </div>
                  <p className='mt-[6px] text-xs opacity-40'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
              <div className='w-full mt-6 rounded-2xl border-2 border-[#F7D685] bg-white p-4' onClick={handleShowPromoterClick}>
                <div className='w-full h-[170px]'>
                  <img
                    src='https://gateway.pinata.cloud/ipfs/QmSeWXY8uZSFK1FmqTX7MWJfxb3Ph1BEdLdxnZSKxNaGy9'
                    className='h-full rounded-2xl'
                    alt='Show Promoter'
                  />
                </div>
                <div className='p-4'>
                  <div className='flex items-center gap-1'>
                    <p className='text-base font-semibold'>Show Promoter</p>
                    <GreenBadge />
                  </div>
                  <p className='mt-[6px] text-xs opacity-40'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  </p>
                </div>
              </div>
            </div>
          ) : currentState === 1 ? (
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
                <Link to='/Home' className='w-full flex items-center justify-center py-5 rounded-2xl border bg-[#00283A] border-black text-white'>
                  Continue
                </Link>
              </div>
            </div>
          ) : (
            <div className='w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
              <div className='w-full flex items-center justify-between mb-9'>
                <h3 className='text-2xl font-bold'>Stage details</h3>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                  <div className='w-2 h-2 rounded-full bg-black' />
                </div>
              </div>
              <div className='w-full flex flex-col gap-5'>
                <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Stage name' />
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]' defaultValue="">
                  <option value="" disabled hidden>Music style</option>
                  {musicStyle.map((style, index) => (
                    <option key={index}>{style}</option>
                  ))}
                </select>
                <div className='w-full h-[272px] rounded-2xl border border-[#0000007d] relative flex items-center justify-center overflow-hidden'>
                  {newImage ? (
                    <img src={newImage} className='h-full object-cover object-center' alt='Profile' />
                  ) : (
                    <div className='flex flex-col gap-3 h-full items-center justify-center text-center'>
                      <UploadImg />
                      <p className='text-[#0000007d] text-base font-semibold'>Upload profile image</p>
                      <p className='text-[#0000007d] text-xs'>Without Profile image you cannot<br />proceed from this page</p>
                    </div>
                  )}
                  <input
                    type='file'
                    accept='image/*'
                    className='opacity-0 absolute top-0 right-0 left-0 bottom-0 min-h-full min-w-full'
                    onChange={handleFileChange}
                  />
                </div>
                <div className='w-full relative'>
                  <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Upload or drop music link' />
                  <div className='absolute top-4 right-2'>
                    <MusicNote />
                  </div>
                </div>
                <div className='w-full relative'>
                  <input className='w-full p-4 rounded-2xl border border-[#0000007d]' placeholder='Upload or drop music link' />
                  <div className='absolute top-4 right-2'>
                    <MusicNote />
                  </div>
                </div>
              </div>
              <div className='w-full flex items-center gap-20 text-base font-semibold mt-16'>
                <button className='w-full py-5 rounded-2xl border border-black text-black' onClick={() => setCurrentState(1)}>
                  Back
                </button>
                <Link to='/Home' className='w-full flex items-center justify-center py-5 rounded-2xl border bg-black border-black text-white'>
                  Continue
                </Link>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Create;
