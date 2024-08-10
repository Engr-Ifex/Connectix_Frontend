import React from "react";
import { Link } from "react-router-dom";
import Back from "../BuyCoin/back.svg";
import bar from "../BuyCoin/bars.svg";
import "./buy.css";

const BuyCoin = () => {
  return (
    <div className="px-5 sm:px-6 md:px-8 font-general">


<div className="flex items-center justify-between w-full">
  <Link to={"/Profile"}>
    <button className="">
      <img src={Back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
    Buy Coin
  </h2>
  <div className="w-8"></div>
</div>
      <div className="mt-4">
        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">Buy coins</h2>
        <h2 className="mt-2 font-bold text-md sm:text-lg md:text-xl">Available coins</h2>
        <p className="text-md sm:text-lg md:text-xl">10</p>
        <p className="mt-2 font-bold text-md sm:text-lg md:text-xl">Select amount you are purchasing</p>
      </div>
      <div className="container mx-auto">
        <form className="max-w-md mx-auto">
          <label htmlFor="coins" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"></label>
          <select
            id="coins"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">50 coins</option>
            <option value="">100 coins</option>
            <option value="">200 coins</option>
            <option value="">500 coins</option>
            <option value="">1000 coins</option>
          </select>
        </form>
      </div>
      <div className="mt-4">
        <p className=" text-md sm:text-lg md:text-xl">Your account will be charged</p>
        <p className="sm:text-xl md:text-2xl">NGN3,000</p>
        <p className="mt-2 text-md sm:text-lg md:text-xl">Your coin balance will be</p>
        <p className="text-lg sm:text-xl md:text-2xl">20</p>
      </div>
      
      <div className="mt-2">
        <p className="font-bold text-xl">Payment Option</p>
        <div className="flex flex-col space-y-4 mt-2">
          <div className="flex bg-white-200 custom-shadow p-4 rounded-lg items-center">
            <img src={bar} alt="Payment Method" className="w-16" />
            <div className="ml-4">
              <h2 className="font-bold text-md sm:text-lg md:text-xl">Debit</h2>
              <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <label className="ml-auto round-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>

          <div className="flex bg-white-200 custom-shadow p-4 rounded-lg items-center">
            <img src={bar} alt="Payment Method" className="w-16" />
            <div className="ml-4">
              <h2 className="font-bold text-md sm:text-lg md:text-xl">Debit</h2>
              <p className="text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
            </div>
            <label className="ml-auto round-checkbox">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-4">
        <div>
          <p className="text-md font-bold">Name on card</p>
          <input
            type="text"
            className="p-3 w-full rounded-lg border border-black"
          />
        </div>
        <div>
          <p className="text-md font-bold">Card number</p>
          <input
            type="text"
            className="p-3 w-full rounded-lg border border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default BuyCoin;
