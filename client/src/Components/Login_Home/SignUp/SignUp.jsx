import React, { useEffect, useState, useContext } from 'react';
import { Facebook, Google, X } from '../SVG';
import PinInput from 'react-pin-input';
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationContext } from '../../contexts/Formcontext'
import api from '../../../services/api'; 


const SignUp = () => {
  const navigate = useNavigate();
  const { registrationData, updateRegistrationData } = useContext(RegistrationContext);

 
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  // });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [counter, setCounter] = useState(60);
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeComplete, setIsCodeComplete] = useState(false);



  const handleCodeChange = (value, index) => {
    setVerificationCode(value);
    setIsCodeComplete(value.length === 4);
  };
  const handleSubmitStepOne = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  
    if (!registrationData.name || !registrationData.email || !registrationData.password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }
  
    try {
      const response = await api.post('/auth/initial', {
        name: registrationData.name,
        email: registrationData.email,
        password: registrationData.password,
      });
  
      console.log('User registered successfully:', response.data);
  
      if (response.data.userId) {
        updateRegistrationData('userId', response.data.userId);
        localStorage.setItem('userId', response.data.userId);
        console.log('Saved userId to localStorage:', response.data.userId);
      } else {
        console.error('User ID not found in initial registration response');
        setError('User ID not received. Please try again.');
        return;
      }
  
      setIsCode(true);
    } catch (error) {
      console.error('Registration error:', error);
      setError(error.response?.data?.message || 'An error occurred during registration');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleCodeSubmit = async () => {
    if (!isCodeComplete) return;
    setIsLoading(true);
    setError('');
  
    try {
      const response = await api.post('/auth/verify-email-code', {
        email: registrationData.email,
        verificationCode: verificationCode
      });
  
      console.log('Email verified successfully:', response.data);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        console.log('Token saved to localStorage');
      } else {
        console.warn('Token not received from server after email verification');
      }
  
      updateRegistrationData('verified', true);
      updateRegistrationData('registrationStep', 2); // Add this line to update the step
      navigate('/Create');
    } catch (error) {
      console.error('Verification error:', error);
      setError(error.response?.data?.message || 'An error occurred during verification');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    updateRegistrationData(e.target.name, e.target.value);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError('');
  //   setIsLoading(true);

  //   // if (formData.password !== formData.confirmPassword) {
  //   //   setError("Passwords don't match");
  //   //   setIsLoading(false);
  //   //   return;
  //   // }

  //   try {
  //     console.log('Sending registration request with data:', {
  //       name: registrationData.name,
  //       email: registrationData.email,
  //       password: '*****' 
  //     });

  //     const response = await api.post('/auth/user-register', {
  //       name: registrationData.name,
  //       email: registrationData.email,
  //       password: registrationData.password,
  //     });

  //     console.log('API response:', response.data); 

  //     const userId = response.data.user?.id; 
  //     localStorage.setItem('userId', response.data.user._id);
  //     console.log('Saved userId to localStorage:', localStorage.getItem('userId'));
  //     console.log('Just set userId in localStorage:', localStorage.getItem('userId'));
  //     console.log('Received userId:', userId);


  //     console.log('User registered successfully:', response.data);
  //     setIsCode(true); // Move to the code verification step
  //   } catch (error) {
  //     console.error('Registration error:', error);

  //     if (error.response) {
  //       // The request was made and the server responded with a status code
  //       // that falls out of the range of 2xx
  //       console.error('Error data:', error.response.data);
  //       console.error('Error status:', error.response.status);
  //       console.error('Error headers:', error.response.headers);
  //       setError(error.response.data.message || 'An error occurred during registration');
  //     } else if (error.request) {
  //       // The request was made but no response was received
  //       console.error('Error request:', error.request);
  //       setError('No response received from server');
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //       console.error('Error message:', error.message);
  //       setError('An error occurred during registration');
  //     }

  //     // Log the full error object
  //     console.error('Full error object:', JSON.stringify(error, null, 2));
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  useEffect(() => {
    if (counter <= 0) {
      return;
    }
    const timerId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [counter]);

  return (
    <>
      {isCode ? (
        <div className='px-5 font-general flex flex-col items-center w-full max-w-[768px] mx-auto justify-between py-10 text-black min-h-screen h-full'>
          <div className='flex flex-col items-center'>
            <div className='bg-black rounded-xl w-10 h-7 mb-12' />
            <div className='flex flex-col items-center gap-3 mb-5'>
              <h2 className='font-bold text-xl leading-6'>Enter Code</h2>
              <p className='text-sm text-[#0000007D] text-center'>An Email with the 4 digits code has been sent to your email <span className='text-black italic'>{registrationData.email}</span></p>
            </div>
            <div className='w-full flex items-center justify-center'>
              <PinInput
                length={4}
                initialValue=""
                onChange={handleCodeChange}
                type="numeric"
                inputMode="number"
                style={{ padding: '16px' }}
                inputStyle={{ borderColor: '#00000049', borderWidth: '1px', backgroundColor: '#fff', borderRadius: '16px', color: 'black', fontWeight: '400', fontSize: '14px', width: '50px', height: '50px', margin: '12px 12px' }}
                inputFocusStyle={{ borderColor: '#ccc' }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
            <p className='text-center text-sm font-semibold my-10'>
              Resend OTP {counter}s
            </p>
            <button 
              onClick={handleCodeSubmit}
              disabled={!isCodeComplete || isLoading}
              className={`flex items-center justify-center text-white py-5 w-full text-base font-semibold rounded-2xl ${isCodeComplete ? 'bg-black' : 'bg-gray-400'}`}
            >
              {isLoading ? 'Verifying...' : 'Continue'}
            </button>
          </div>
          <p className='float-end font-semibold text-base cursor-pointer' onClick={() => setIsCode(false)}>
            Back to Sign Up
          </p>
        </div>
      ) : (
        <div className='px-5 font-general flex flex-col items-center w-full max-w-[768px] mx-auto justify-center py-10 text-black'>
          <div className='bg-black rounded-xl w-10 h-7 mb-12' />
          <div className='flex flex-col items-center gap-3 mb-10'>
            <h2 className='font-bold text-xl leading-6'>Create your account</h2>
            <p className='text-sm opacity-50'>Fill the information below to create an account</p>
          </div>
          <form onSubmit={handleSubmitStepOne} className='flex flex-col w-full items-center gap-6 text-sm mb-7'>
            <input 
              className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' 
              placeholder='Name' 
              name="name"
              value={registrationData.name}
              onChange={handleChange}
              required
            />
            <input 
              className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' 
              placeholder='Email' 
              name="email"
              type="email"
              value={registrationData.email}
              onChange={handleChange}
              required
            />
            <input 
              className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' 
              placeholder='Password' 
              type='password'
              name="password"
              value={registrationData.password}
              onChange={handleChange}
              required
            />
            {/* <input 
              className='p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.7)]' 
              placeholder='Confirm Password' 
              type='password'
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            /> */}
            <p className='text-xs leading-6 tracking-[0.12px] text-[rgba(0,0,0,0.8)]'>
              We'll call or text you to confirm your Email. A email or Standard message and data rates apply.<span className='underline cursor-pointer'>Privacy Policy</span>
            </p>
            {error && <p className="text-red-500">{error}</p>}
            <button 
              className='text-white py-5 w-full text-base font-semibold bg-black rounded-2xl' 
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'Loading...' : 'Continue'}
            </button>
          </form>
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
      )}
    </>
  );
}

export default SignUp;