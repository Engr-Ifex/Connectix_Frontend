import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade'
import { Facebook, Google, X } from '../SVG';
import { BrowserRouter as Router, Route, useLocation, useParams, Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const tempData = [
  {
    url: '/destinations/1.webp',
    title: 'Find yourself the best shows anywhere in the country',
    desc: 'Explore thousands of high-quality music promotion with the biggest music promotion platform'
  },
  {
    url: '/destinations/2.webp',
    title: 'Stunning Scenic Spots in the country',
    desc: 'Explore thousands of beautiful places created by nature'
  },
  {
    url: '/destinations/3.webp',
    title: 'Rio Brazil',
    desc: 'Explore thousands of beautiful places created by nature'
  },
]
const responsive = {
  desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
  }
};
const Login = () => {
  const [greenScreen, setGreenScreen] = useState(true);
  const [isSlide, setIsSlide] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setGreenScreen(false);
    }, 500)
  }, [])
  return (
    <>
      <Fade when={greenScreen}>
        <div className={`${greenScreen ? 'flex ' : 'hidden'} min-w-screen min-h-screen bg-greenBlue flex-col items-center justify-center gap-2 font-general`}>
          <div className=' bg-greenLogo rounded-2xl w-[108px] h-20'>
          </div>
          <p className='text-yellowLogo font-semibold text-4xl'>Logo</p>
        </div>
      </Fade>
      <Fade when={!greenScreen}>
        <div className={`${greenScreen ? 'hidden' : 'flex'} text-black min-w-screen min-h-screen bg-white flex items-center justify-center gap-2 font-general w-full px-5`}>
          {
            isSlide ? (
              <div className='w-full'>
                <Carousel
                  responsive={responsive}
                  swipeable={true}
                  draggable={false}
                  showDots={true}
                  infinite={true}
                  transitionDuration={500}
                  autoPlaySpeed={1000}
                  customTransition="all .5"
                  partialVisible={false}
                  dotListClass="custom-dot-list-style"
                >
                  {tempData.map((data, index) => (
                    <div className='w-full min-h-[calc(100vh-40px)]' key={index}>
                      <div className='w-full h-[406px] rounded-lg flex justify-center items-center mb-20'>
                        <img src={data.url} alt='wrong' className='h-full object-cover object-center rounded-lg'></img>
                      </div>
                      <h2 className='text-[#141414] text-center text-2xl font-bold leading-9 mb-4 mx-5'>
                        {data.title}
                      </h2>
                      <p className='text-[#0000007D] text-center mx-5 mb-7'>
                        {data.desc}
                      </p>
                      <button className='text-white py-5 w-full text-base font-semibold bg-greenBlue rounded-2xl text-center' onClick={() => setIsSlide(false)}>
                        Continue
                      </button>
                    </div>

                  ))}
                </Carousel>
              </div>
            ) : (
              <div className=' pt-32 pb-10 flex flex-col w-full items-center'>
                <div className=' bg-black rounded-xl w-[108px] h-20 mb-[60px]' />
                <div className='gap-3 flex flex-col items-center mb-8'>
                  <p className='text-xl font-bold'>Log in your account</p>
                  <p className='text-sm text-[rgba(0,0,0,0.5)]'>Fill the information below to Log in</p>
                </div>
                <div className='flex flex-col gap-6 text-sm w-full mb-8'>
                  <input className='p-4 border border-grayBord rounded-2xl w-full placeholder:text-[rgba(0,0,0,0.7)]' placeholder='Email' />
                  <input className='p-4 border border-grayBord rounded-2xl w-full placeholder:text-[rgba(0,0,0,0.7)]' placeholder='Password' type='password' />
                  <p className='w-full text-right font-semibold cursor-pointer'>
                    Forgot Password?
                  </p>
                  <Link to='/home' className='text-white py-5 w-full text-base font-semibold bg-greenBlue rounded-2xl text-center' >
                    Continue
                  </Link>
                </div>
                <p className='text-[rgba(21,21,21,0.5)] text-base mb-8'>
                  or Sign In with
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
                <Link to='/SignUp' className='font-semibold cursor-pointer text-base text-center'>Don't have an account? Sign Up</Link>
              </div>
            )
          }
        </div>
      </Fade >
    </>
  );
}

export default Login;
