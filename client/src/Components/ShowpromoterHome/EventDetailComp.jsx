import React, { useState } from "react";
import { GreenBadge, LeftArrow, LocationMark, YellowStar } from "../Login_Home/SVG";
import "react-responsive-modal/styles.css";
import ConfirmModal from "./ConfirmModal";

const EventDetailComp = ({ setIsEvent }) => {
  const [isApply, setIsApply] = useState(false);

  const closeModal = () => {
    setIsApply(false);
  };

  return (
    <div className="pt-14 pb-[152px] relative text-[#141415] shadow-detailBoxShadow bg-[#f8f8f8] min-h-screen overflow-y-scroll h-full px-6">
      <div
        onClick={() => setIsEvent(false)}
        className="top-4 left-4 fixed z-10"
      >
        <LeftArrow />
      </div>
      <div className="p-3 w-full bg-white rounded-2xl aspect-square mb-6">
        <img
          src="https://gateway.pinata.cloud/ipfs/Qmd9hGfmGhwB1vcue32mdLLjpfbJC5SXJajHue6CiocK6N"
          className="h-full object-cover object-center rounded-2xl"
        />
      </div>
      <div className="w-full gap-[6px] flex flex-col rounded-2xl p-4 bg-[#EBEBEB] shadow-detailBoxShadow mb-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-base">John Obi</p>
            <GreenBadge />
          </div>
          <p className="text-[#5F5F63] text-[8px]">Performing price</p>
        </div>
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-[#5F5F63]">
            <LocationMark />
            <p>1,2 km away from you</p>
          </div>
          <p className="text-sm font-semibold">N200,000</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4 mb-4">
        <h3 className="text-xl font-semibold">Event description</h3>
        <p className="text-sm opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className="flex items-center gap-4">
          <div className="py-2 px-3 bg-[#F7D685] rounded-[20px] text-[10px] text-[#5f5f63]">
            20th Decemver
          </div>
          <div className="py-2 px-3 bg-[#F7D685] rounded-[20px] text-[10px] text-[#5f5f63]">
            Cuban Club Abuja
          </div>
          <div className="py-2 px-3 bg-[#F7D685] rounded-[20px] text-[10px] text-[#5f5f63]">
            12:00 AM
          </div>
        </div>
      </div>
      <div className="border-t border-b border-[#5F5F63] flex flex-col gap-4 py-4 mb-[6px]"></div>
      <div className="fixed bottom-0 left-0 right-0 w-full p-4 pb-8 flex flex-col gap-4 rounded-t-[20px] bg-white">
        <div className="w-full gap-1 flex justify-between items-center">
          <div className="flex items-center">
            <p className="font-semibold text-base">Cubana Club</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-semibold">20th Dec</p>
            <p className="text-sm font-semibold">12:00 AM</p>
          </div>
        </div>
        <button
          className="w-full flex items-center justify-center rounded-2xl py-[14px] bg-red-700 text-white text-sm"
          onClick={()=>setIsApply(true)}
        >
          Cancel event
        </button>
      </div>
      <ConfirmModal isApply={isApply} closeModal={closeModal} />

    </div>
  );
};

export default EventDetailComp;