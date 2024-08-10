import React, { useState } from "react";
import back from "../ChangePassword/back.svg";
import { Link } from "react-router-dom";
import vector from "../ChangePassword/Vector.svg";

const ChangePassword = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div className="font-general px-5 relative">
      {isVisible && (
        <div className="absolute bottom-20 sm:bottom-60 left-1/2 transform -translate-x-1/2 p-4 w-[90%] sm:w-[300px] rounded-[15px] bg-white border-2 border-gray-300 flex items-center justify-center z-10">
          <div className="text-center">
            <img src={vector} alt="Vector" className="mx-auto mb-4" />
            <h2 className="text-lg sm:text-xl font-bold mb-2">Password changed</h2>
            <p>You have successfully saved changes</p>
          </div>
        </div>
      )}


      <div className="flex items-center justify-between w-full">
  <Link to={"/Profile"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
    Change password
  </h2>
  <div className="w-8"></div>
</div>



      <p className="text-sm mt-2 text-[#5F5F63] ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="mt-8 sm:mt-16 w-full max-w-md mx-auto px-1">
        <input
          type="password"
          placeholder="Current password"
          className="p-4 w-full rounded-[15px] border border-black mb-4 outline-none"
        />
        <input
          type="password"
          placeholder="New password"
          className="p-4 w-full rounded-[15px] border border-black mb-4 outline-none"
        />
        <input
          type="password"
          placeholder="Confirm new password"
          className="p-4 w-full rounded-[15px] border border-black outline-none"
        />
      </div>
      <div className="mt-36 sm:mt-24 p-4 w-full rounded-[15px] bg-black border border-white">
        <button className="block mx-auto text-white text-lg sm:text-xl" onClick={handleClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
