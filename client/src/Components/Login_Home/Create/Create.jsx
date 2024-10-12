import React, { useState, useContext, useEffect } from 'react';
import { DownArrow, GreenBadge, LocMark, MusicNote, UploadImg } from '../SVG';
import { BrowserRouter as Router, Route, useLocation, useParams, Link } from 'react-router-dom';
import { useUsername } from '../../Usernameprovider';
import { RegistrationContext } from '../../contexts/Formcontext';
// import { Link } from 'react-router-dom';

// import Details from "./Detail"

import api from '../../../services/api'

const gender = ['male', 'female'];
const musicStyle = ['Afrobeats', 'Afrobeats', 'Afrobeats', 'Afrobeats', 'Afrobeats', 'Afrobeats'];
const locations = ['Akwa ibom', 'Kano state', 'Lagos state', 'Abia state', 'Oyo state', 'Ogun state']


const Create = () => {
  const [currentState, setCurrentState] = useState(0);
  const [newImage, setNewImage] = useState('');
  const { setUsername } = useUsername();
  // const [localUsername, setLocalUsername] = useState('');
  const { registrationData, updateRegistrationData, updateMultipleFields } = useContext(RegistrationContext);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [showDetails, setShowDetails] = useState(false);

  // const handleShowPromoterClick = () => {
  //   setShowDetails(true); // Set state to show the Details component
  // };
  // const handleDetailsContinue = (type) => {
  //   setAccountType(type); 
  //   setShowDetails(false);
  //   setCurrentState(1);
  // };

  
  const handleChange = (e) => {
    updateRegistrationData(e.target.name, e.target.value);
  };
  
  // const handleInputChange = (e) => {
  //   setLocalUsername(e.target.value);
  // };

  // const handleContinue = async () => {
  //   try {
  //     const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage or wherever you store it
  //     console.log('Retrieved userId:', userId);
  
  //     if (!userId) {
  //       throw new Error('User ID is missing');
  //     }
  
  //     setUsername(localUsername);
  
  //     const response = await api.post('/auth/saved-data', { username: localUsername,  id: userId });
  //     console.log('API response:', response.data); 
  
  //     setCurrentState(2);
  //   } catch (error) {
  //     console.error('Error saving user data:', error.response ? error.response.data : error.message);
  //     console.error('Error retrieving userId from localStorage:', error);

  //   }
  // };
  const handleContinue = async () => {
    try {
      if (!registrationData.verified) {
        throw new Error('Email not verified. Please verify your email first.');
      }
  
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (!userId) {
        throw new Error('User ID is missing');
      }
      if (!token) {
        throw new Error('Authentication token is missing');
      }
  
      updateMultipleFields({
        username: registrationData.username,
        gender: registrationData.gender,
        state: registrationData.state,
      });
      setUsername(registrationData.username);

      const response = await api.post('/auth/update', {
        username: registrationData.username,
        gender: registrationData.gender,
        state: registrationData.state,
        userId: userId,
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      console.log('API response:', response.data);
      updateRegistrationData('registrationStep', 3);
      setCurrentState(2);
    } catch (error) {
      console.error('Error saving user data:', error.response ? error.response.data : error.message);
      setError(error.response?.data?.message || error.message);
    }
  };
  const handleFinalSubmit = async () => {
    try {
      const userId = localStorage.getItem('userId');
      if (!userId) {
        throw new Error('User ID is missing');
      }
      if (!token) {
        throw new Error('Authentication token is missing');
      }
      // Update the context with the final data
      updateMultipleFields({
        stagename: registrationData.stagename,
        musicstyle: registrationData.musicstyle,
      });
  
      const response = await api.post('/auth/complete', {
        stagename: registrationData.stagename,
        musicstyle: registrationData.musicstyle,
        userId: userId,
        registrationStep: registrationData.registrationStep
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      console.log('Registration completed:', response.data);
      updateRegistrationData('registrationStep', 'completed');
      setUsername(registrationData.username);  
    } catch (error) {
      console.error('Error completing registration:', error.response ? error.response.data : error.message);
      setError(error.response?.data?.message || error.message);
    }
  };
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files) {
      const imageUrls = Object.values(files).map((file) => URL.createObjectURL(file));
      setNewImage(imageUrls[0]);
    }
  };

  useEffect(() => {
    return () => {
      // This function will run when the component unmounts
      if (registrationData.registrationComplete) {
        const userId = localStorage.getItem('userId');
        if (userId) {
          api.post('/auth/complete', {
            stagename: registrationData.stagename,
            musicstyle: registrationData.musicstyle,
            id: userId,
          })
          .then(response => {
            console.log('Registration completed:', response.data);
            // You might want to update some global state or context here to reflect that registration is complete
          })
          .catch(error => {
            console.error('Error completing registration:', error.response ? error.response.data : error.message);
            // You might want to handle this error, perhaps by setting an error state or showing a notification
          });
        } else {
          console.error('User ID is missing');
        }
      }
    };
  }, [registrationData]);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  return (
    <>
      {
        (currentState == 0) ? (
          <div className='w-full flex flex-col py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
            <div className='w-full flex items-center justify-between mb-9'>
              <h3 className=' text-2xl font-bold  '>Set up your account</h3>
              <div className='flex items-center gap-1'>
                <div className='w-2 h-2 rounded-full bg-black' />
                <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
              </div>
            </div>
            <div className='w-full p-4 rounded-2xl border-2 border-[#F7D685] flex flex-col gap-4 bg-white' onClick={() => setCurrentState(1)}>
              <div className='w-full h-[170px] '>
                <img
                  src='/guy.png'
                  className='h-full rounded-2xl'
                />
              </div>
              <div className='p-4'>
                <div className='flex items-center gap-1'>
                  <p className='text-base font-semibold'>Artist</p>
                  <GreenBadge />
                </div>
                <p className='mt-[6px] text-xs opacity-40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
              </div>
            </div>

          <Link to='/accounttype'>
            <div className='w-full mt-6 rounded-2xl bg-white p-4'>
              <div className='w-full h-[170px] '>
                <img
                  src='/keyboard.png'
                  className='h-full rounded-2xl'
                />
              </div>
              
              <div className='p-4'>
                <div className='flex items-center gap-1'>
                  <p className='text-base font-semibold'>Show Promoter</p>
                  <GreenBadge />
                </div>
                <p className='mt-[6px] text-xs opacity-40'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et </p>
              </div>
            </div>
          </Link>

          </div>
        )
          : (currentState == 1) ? (
            <div className='w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
              <div className='w-full flex items-center justify-between mb-9'>
                <h3 className=' text-2xl font-bold  '>Fill in your details</h3>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                  <div className='w-2 h-2 rounded-full bg-black' />
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                </div>
              </div>
            {/* username */}
              <div className='w-full flex flex-col gap-5'>
                <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' 
                placeholder="Username"
                 name='username'  
                 value={registrationData.username} 
                 onChange={handleChange} >
                </input>
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]'
                 name="gender"
                 value={registrationData.gender}
                 onChange={handleChange}
                 >
                  <option disabled hidden>Gender</option>
                  
                  {
                    gender.map((gen, index) => (
                      <option className='' key={index}>{gen}</option>
                    ))
                  }
                </select>
                <div className='w-full relative'>
                  <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' placeholder="Date of birth" >
                  </input>
                  <div className='absolute top-4 right-2'>
                    <DownArrow />
                  </div>
                </div>
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]' 
                name="state"
                value={registrationData.state}
                onChange={handleChange}
                >
                  <option value="" disabled hidden>State of residence</option>
                  {
                    locations.map((gen, index) => (
                      <option className='' key={index}>{gen}</option>
                    ))
                  }
                </select>
                <div className='w-full relative'>
                  <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' placeholder="Set location" >
                  </input>
                  <div className='absolute top-4 right-2'>
                    <LocMark />
                  </div>
                </div>
              </div>
              <p className='mt-4 text-[#F7D685] text-base font-semibold underline leading-6' onClick={() => setCurrentState(2)}>I’ll do it later</p>
              <div className='w-full flex items-center gap-20 text-base font-semibold mt-60'>
                <button className='w-full py-5 rounded-2xl border border-black text-black' onClick={() => setCurrentState(0)}>
                  Back
                </button>
                <button className='w-full py-5 rounded-2xl border bg-black border-black text-white' onClick={handleContinue}>
                  Continue
                </button>
              </div>
            </div>
          ) : (

            // stagename
            <div className='w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen'>
              <div className='w-full flex items-center justify-between mb-9'>
                <h3 className=' text-2xl font-bold  '>Stage details</h3>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                  <div className='w-2 h-2 rounded-full bg-[#d9d9d9]' />
                  <div className='w-2 h-2 rounded-full bg-black' />
                </div>
              </div>
              <div className='w-full flex flex-col gap-5'>

                <input className='w-full p-4 rounded-2xl border border-[#0000007d] ' 
                name="stagename"
                value={registrationData.stagename}
                onChange={handleChange}
                placeholder="Stage name" >
                </input>
                <select className='w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]'
                name="musicstyle"
                value={registrationData.musicstyle}
                onChange={handleChange}
                >
                  <option value="" disabled hidden>Music style</option>
                  {
                    musicStyle.map((gen, index) => (
                      <option className='' key={index}>{gen}</option>
                    ))
                  }
                </select>
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
              </div>
              <div className='w-full flex items-center gap-20 text-base font-semibold mt-16'>
                <button className='w-full py-5 rounded-2xl border border-black text-black' onClick={() => setCurrentState(1)}>
                  Back
                </button>
                <Link to='/Home' className='w-full flex items-center justify-center py-5 rounded-2xl border bg-black border-black text-white'
                
                onClick={handleFinalSubmit}

                >

                  Continue
                </Link>
              </div>
            </div>
          )
      }
    </>
  );
}

export default Create;
