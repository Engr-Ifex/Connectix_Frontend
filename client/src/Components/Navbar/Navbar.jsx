import react from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EventsIcon, FavoritesIcon, HomeIcon, Profile, Proposal } from '../../Components/Login_Home/SVG';

const Navbar = () => {

  const location  = useLocation();
  return (

    <div className='mt-4 px-6 w-full min-w-screen font-general relative'>
      <div className='fixed z-10 bg-white w-full bottom-0 left-0 right-0 px-6 shadow-menuShadow pt-2 pb-6 grid grid-cols-5'>
        <Link to='/home' className={`${location.pathname == '/home' ? '' : 'opacity-70' } flex flex-col items-center gap-1`}>
          <HomeIcon />
          <p className='text-xs font-bold text-black'>Home</p>
        </Link>
        <Link to='/Active' className={`${location.pathname == '/Active' ? '' : 'opacity-70' } flex flex-col items-center gap-1`}>
          <Proposal />
          <p className='text-xs font-bold text-black'>Proposal</p>
        </Link>
        <Link to='/events' className={`${location.pathname == '/events' ? '' : 'opacity-70' } flex flex-col items-center gap-1`}>
          <EventsIcon />
          <p className='text-xs font-bold text-black'>Events</p>
        </Link>
        <Link to='/favorites' className={`${location.pathname == '/favorites' ? '' : 'opacity-70' } flex flex-col items-center gap-1`}>
          <FavoritesIcon />
          <p className='text-xs font-bold text-black'>Favorites</p>
        </Link>
        <Link to='/profile' className={`${location.pathname == '/profile' ? '' : 'opacity-70' } flex flex-col items-center gap-1`}>
          <Profile />
          <p className='text-xs font-bold text-black'>Profile</p>
        </Link>
      </div>
    </div>


  )
}

export default Navbar;