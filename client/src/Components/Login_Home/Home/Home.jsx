import React, { useState } from "react";
import {
  Bell,
  BlackHeart,
  BlueBadge,
  EventsIcon,
  FavoritesIcon,
  Filter,
  GreenBadge,
  HomeIcon,
  LocationMark,
  Magnifier,
  Profile,
  Proposal,
  RedHeart,
} from "../SVG";
import "react-responsive-modal/styles.css";
import Modal from 'react-responsive-modal'
import styles from './Home.module.css'
import EventDetailComp from './EventDetailComp';
import { BrowserRouter as Router, Route, useLocation, useParams, Link } from 'react-router-dom';
import Notification from './Notification';
import Navbar from '../../Navbar/Navbar';
import { useUsername } from '../../Usernameprovider';
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNoti, setIsNoti] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  const { username } = useUsername();


  function openNotiModal() {
    setIsNoti(true);
    console.log("clicking");
  }

  function closeNotiModal() {
    setIsNoti(false);
  }

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
        ) : (
          <div className='mt-4 px-6 w-full min-w-screen font-general relative'>
            <Navbar />
            <div className='w-full flex justify-between mb-9'>
              <div className='flex items-center gap-3'>
                <div>
                  <img
                    src='/avatar.png'
                    className='w-9 aspect-square rounded-full'
                  />
                </div >
                <div className='flex flex-col gap-2 text-[#141414]'>
                  <p className='text-sm '> Hi, {username}</p>
                  <p className='font-semibold text-xl'>Welcome Back</p>
                </div>
              </div >
              <div className='flex items-center gap-6'>
                <Magnifier />
                <div onClick={openNotiModal}>
                  <Bell />
                </div>
              </div>
            </div >
            <div className='w-full h-24 bg-[#F7D685] knewave-font text-center rounded-2xl text-black text-xl font-semibold flex items-center justify-center mb-8 '>
              INTRODUCING A<br />
              NEW FEATURE
            </div>
            <div className='flex flex-col gap-6 w-full max-h-[calc(100vh-250px)] py-1 h-full overflow-y-scroll'>
              <div className='w-full flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>All events</h3>
                <button className='p-[10px] flex items-center justify-center rounded bg-black' onClick={openModal}>
                  <Filter />
                </button>
              </div>
              <div className="absolute top-4 right-4">
                <RedHeart />
              </div>
              <div className="h-[272px] w-full">
                <img
                  className="object-cover object-center"
                  src="https://gateway.pinata.cloud/ipfs/Qmd9hGfmGhwB1vcue32mdLLjpfbJC5SXJajHue6CiocK6N"
                />
              </div>
              <div className="w-full p-5 gap-3 flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-base">Event Name</p>
                    <GreenBadge />
                  </div>
                  <p className="text-[#7c7c7c] text-sm">Tag</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-[#7c7c7c]">
                    <LocationMark />
                    <p>2 km away</p>
                    <BlueBadge />
                    <p>10 coins</p>
                  </div>
                  <p className="text-base font-semibold">Pending</p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between items-center">
              <h3 className="text-xl font-semibold">Recent activities</h3>
              <button
                className="p-[10px] flex items-center justify-center rounded bg-black"
                onClick={openModal}
              >
                <Filter />
              </button>
            </div>
            <div className="flex justify-between items-center  shadow-thumbShadow rounded-2xl">
              <div className="w-full p-5 gap-3 flex flex-col">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-base">Messages</p>
                    <GreenBadge />
                  </div>
                </div>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-1 text-sm text-[#7c7c7c]">
                    <p>6 unread messages</p>
                  </div>
                </div>
              </div>
              <div className="flex p-5">
                <p>All</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center shadow-dropShadow rounded-2xl gap-1 p-4">              
              <div className="flex items-center gap-2 p-3">
                <p className="font-semibold text-base">Pending proposal</p>
                <GreenBadge />
              </div>
              <Link to='/' className='w-full flex items-center justify-center py-[14px] rounded-2xl border bg-black border-black text-white'>
                Continue
              </Link>
            </div>
          </div>
          <Modal
            open={isNoti}
            onClose={closeNotiModal}
            center
            classNames={{
              modal: styles.modalNoti,
            }}
          >
            <Notification />
          </Modal>
          <Modal
            open={isOpen}
            onClose={closeModal}
            center
            classNames={{
              modal: styles.modal,
            }}
          >
            <div className="flex flex-col min-w-screen text-[#141414] relative py-6">
              <p className="absolute -top-1 left-0 font-semibold text-base">
                Filter
              </p>
              <div className="grid grid-cols-3 w-full gap-4 pt-2 mb-5">
                <div className="py-2 px-3 rounded-[20px] text-[#fff] text-nowrap text-xs bg-[#F7D685] leading-5 text-center">
                  Club events
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  Church events
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  Concert
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  20 Applied
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  1,000 Audience
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  3 special guest
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  20 Applied
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  1,000 Audience
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  3 special guest
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  20 Applied
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  1,000 Audience
                </div>
                <div className="py-2 px-3 rounded-[20px] text-[#5F5F63] text-nowrap text-xs bg-[#e8e8e8] leading-5 text-center">
                  3 special guest
                </div>
              </div>
              <div className="flex items-center w-full gap-5">
                <button
                  className="w-full py-4 flex items-center justify-center border border-black rounded-2xl font-semibold text-sm "
                  onClick={closeModal}
                >
                  Reset
                </button>
                <button
                  className="w-full py-4 flex items-center justify-center border border-black bg-black text-white rounded-2xl font-semibold text-sm"
                  onClick={closeModal}
                >
                  Show results
                </button>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default Home;
