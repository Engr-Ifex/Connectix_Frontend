import React, { useState } from "react"; 
import { DownArrow, LeftArrow } from "../SVG";
import { Link } from "react-router-dom"; 
import { GoPlus } from "react-icons/go"; 
import { PiToolbox } from "react-icons/pi";
import { MdArrowForwardIos } from "react-icons/md";

const Settings = () => {
  const [currentState, setCurrentState] = useState(0);

  return (
    <div className="px-5 font-general flex flex-col w-full max-w-[768px] mx-auto py-10 text-black gap-5 bg-[#f8f8f8] min-h-screen">
      {currentState === 0 && ( 
        <>
          <div className="relative flex flex-col gap-5 mb-10">
            <div className="flex w-full">
              <Link to="/Profile">
                <LeftArrow />
              </Link>
              <p className="mx-auto font-bold">Settings</p>
            </div>
            <h2 className="font-semibold text-2xl leading-6">
              Account settings
            </h2>
            <p className="text-sm opacity-50 text-justify font-normal text-[rgba(0,0,0,0.7)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis no
            </p>
          </div>
          <div className="flex flex-col gap-7 pb-[30px] border-b">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setCurrentState(1)}
            >
              <p className="text-base">Add a new payment method</p>
              <GoPlus className="text-2xl" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base">Push notification</p>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-1">
                <p className="text-base">Dark Mode</p>
                <p className="bg-[#F7D685] rounded-2xl px-1 text-sm tracking-tight text-gray-700">
                  coming soon
                </p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value=""
                  className="sr-only peer"
                  checked
                />
                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <p className="text-xl text-gray-300 text-start">More</p>
            <div className="flex justify-between items-center">
              <p className="text-base">About us</p>
              <img src="/Vector.svg" alt="vector" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base">Private policy</p>
              <img src="/Vector.svg" alt="vector" />
            </div>
            <div className="flex justify-between items-center">
              <p className="text-base">Terms and conditions</p>
              <img src="/Vector.svg" alt="vector" />
            </div>
          </div>
        </>
      )}
      {currentState === 1 && (
        <div>
          <div className="relative flex flex-col gap-5 mb-10">
            <div className="flex w-full">
              <Link to="/Settings">
                <LeftArrow />
              </Link>
              <p className="mx-auto font-bold text-base">Add payment options</p>
            </div>
            <p className="font-semibold text-xl leading-6">
              Select payment method
            </p>
          </div>
          <div className="flex justify-between items-center shadow-thumbShadow p-3 bg-white mb-8">
            <div className="flex items-start gap-3">
              <PiToolbox className="border border-gray-300 rounded-lg p-1 text-4xl" />
              <div className="flex flex-col ">
                <p className="text-base font-semibold">Debi Card</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amert, <br />
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <MdArrowForwardIos />
          </div>
          <div className="flex justify-between items-center shadow-thumbShadow p-3 bg-white">
            <div className="flex items-start gap-3">
              <PiToolbox className="border border-gray-300 rounded-lg p-1 text-4xl" />
              <div className="flex flex-col ">
                <p className="text-base font-semibold">Paypal Card</p>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amert, <br />
                  consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <MdArrowForwardIos />
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
