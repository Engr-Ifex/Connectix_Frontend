import react from 'react';
import { Link } from 'react-router-dom';
import {  EventsIcon, FavoritesIcon, HomeIcon, Profile, Proposal } from '../../Components/Login_Home/SVG';

 const Navbar = () => {

    return (
        
        <div className='mt-4 px-6 w-full min-w-screen font-general relative'>
        <div className='fixed z-10 bg-white w-full bottom-0 left-0 right-0 px-6 shadow-menuShadow pt-2 pb-6 grid grid-cols-5'>
          <Link to='/home' className='flex flex-col items-center gap-1'>
            <HomeIcon />
            <p className='text-xs font-bold text-black'>Home</p>
          </Link>
          <Link to='/Active' className='flex flex-col items-center gap-1 opacity-70'>
            <Proposal />
            <p className='text-xs font-bold text-black'>Proposal</p>
          </Link>
          <Link to='/events' className='flex flex-col items-center gap-1 opacity-70'>
            <EventsIcon />
            <p className='text-xs font-bold text-black'>Events</p>
          </Link>
          <Link to='/favorites' className='flex flex-col items-center gap-1 opacity-70'>
            <FavoritesIcon />
            <p className='text-xs font-bold text-black'>Favorites</p>
          </Link>
          <Link to='/profile' className='flex flex-col items-center gap-1 opacity-70'>
            <Profile />
            <p className='text-xs font-bold text-black'>Profile</p>
          </Link>

        </div>
        </div>


)}

export default Navbar;