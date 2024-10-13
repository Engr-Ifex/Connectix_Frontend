import React, { useEffect, useState, useContext } from 'react';
import { Facebook, Google, X } from '../SVG';
import PinInput from 'react-pin-input';
import { Link, useNavigate } from 'react-router-dom';
import { RegistrationContext } from '../../contexts/Formcontext'
import api from '../../../services/api'; 

const SignUp = () => {
  const navigate = useNavigate();
  const { registrationData, updateRegistrationData } = useContext(RegistrationContext);

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
      updateRegistrationData('registrationStep', 2);
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
            <div className="w-full flex items-center justify-center">
              <PinInput
                length={4}
                initialValue=""
                onChange={handleCodeChange}
                type="numeric"
                inputMode="number"
                style={{ padding: "16px" }}
                inputStyle={{
                  borderColor: "#00000049",
                  borderWidth: "1px",
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  color: "black",
                  fontWeight: "400",
                  fontSize: "14px",
                  width: "50px",
                  height: "50px",
                  margin: "12px 12px",
                }}
                inputFocusStyle={{ borderColor: "#ccc" }}
                autoSelect={true}
                regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
              />
            </div>
            <p className="text-center text-sm font-semibold my-10">
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
          <p
            className="float-end font-semibold text-base cursor-pointer text-secondary"
            onClick={() => setIsCode(false)}
          >
            Back to login
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
            <p className='text-xs leading-6 tracking-[0.12px] text-[rgba(0,0,0,0.8)]'>
              We'll call or text you to confirm your Email. A email or Standard message and data rates apply.<span className='underline cursor-pointer'>Privacy Policy</span>
            </p>
            <button
              type="submit"
              className="text-white py-5 w-full text-base font-semibold bg-black rounded-2xl"
            >
              Continue
            </button>
          </form>
          <p className="text-[rgba(21,21,21,0.5)] text-base mb-8">
            or Sign Up with
          </p>
          <div className="w-full flex justify-center items-center gap-6 mb-9 ">
            <div className="flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]">
              <Google />
            </div>
            <div className="flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]">
              <X />
            </div>
            <div className="flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]">
              <Facebook />
            </div>
          </div>
          <Link
            to="/mainlogin"
            className="font-semibold cursor-pointer text-base text-center"
          >
            Already have an account?{" "}
            <span className="text-secondary">Sign In</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default SignUp;