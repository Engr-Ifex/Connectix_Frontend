import React from 'react'
import { Link } from 'react-router-dom'
import back from '../Settings/back.svg'
import bar from "../BuyCoin/bars.svg";

const Payment = () => {
  return (
    <div className="font-general px-5">
       <div className="flex items-center justify-between w-full">
  <Link to={"/Settings"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
    Add payment options
  </h2>
  <div className="w-8"></div>
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
    </div>
  )
}

export default Payment
