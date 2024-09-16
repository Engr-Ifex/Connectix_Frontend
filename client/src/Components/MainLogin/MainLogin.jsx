import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Google, X } from "../Login_Home/SVG";
import api from "../../services/api"


const MainLogin = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await api.post('/auth/user-login', formData);
      console.log('Login successful:', response.data);
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        
        // Verification step
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
          console.log('Token successfully saved:', savedToken);
          // You might want to only log a part of the token for security reasons
          // console.log('Token successfully saved:', savedToken.substring(0, 10) + '...');
        } else {
          console.warn('Token was not saved successfully');
        }
      
      } else {
        console.error('No token received from server');
        throw new Error('No token received from server');
      }
      // Handle successful login (e.g., store token, redirect)
      navigate('/home');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.response?.data?.message || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" pt-32 bg-[#F7D685] pb-10 flex flex-col w-full items-center">
      <div className=" bg-black -mt-8 rounded-xl w-[108px] h-20 mb-[60px]" />
      <div className="gap-3 flex flex-col items-center mb-8">
        <p className="text-xl font-bold">Log in your account</p>
        <p className="text-sm text-[rgba(0,0,0,0.5)]">
          Fill the information below to Log in
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleLogin} className="flex flex-col gap-6 text-sm w-full mb-8">
        <input
          className="p-4 w-full sm:w-[22rem] border border-grayBord rounded-2xl outline-none placeholder:text-[rgba(0,0,0,0.7)]"
          placeholder="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="p-4 w-full sm:w-[22rem] border border-grayBord rounded-2xl outline-none placeholder:text-[rgba(0,0,0,0.7)]"
          placeholder="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <p className="text-right font-semibold cursor-pointer">
          Forgot Password?
        </p>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <button
          type="submit"
          disabled={isLoading}
          className="text-white py-5 w-full sm:w-[22rem] text-base font-semibold bg-greenBlue rounded-2xl text-center"
        >
          {isLoading ? 'Logging in...' : 'Continue'}
        </button>
      </form>
      
        <p className="text-[rgba(21,21,21,0.5)] text-base mb-8">
          or Sign In with
        </p>
        <div className="w-full flex justify-center items-center gap-6 mb-9">
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
          to="/SignUp"
          className="font-semibold cursor-pointer text-base text-center"
        >
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MainLogin;
