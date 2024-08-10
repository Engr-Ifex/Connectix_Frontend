import React, { useState } from "react";
import { Link } from "react-router-dom";
import back from "../Settings/back.svg";
import vector from "../Settings/Vector.svg";
import Group from "../Settings/Group.svg";

const ToggleSwitch = ({ isOn, handleToggle, disabled }) => {
  return (
    <div
      className={`w-14 h-7 flex items-center rounded-full p-1 ${
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
      }
                  ${isOn ? "bg-blue-500" : "bg-gray-300"}`}
      onClick={disabled ? null : handleToggle}
    >
      <div
        className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out
                    ${isOn ? "translate-x-7" : ""}`}
      ></div>
    </div>
  );
};

const Settings = () => {
  const [isPushNotificationOn, setIsPushNotificationOn] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const togglePushNotification = () => {
    setIsPushNotificationOn(!isPushNotificationOn);
  };

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <div className="font-general px-5">
       <div className="flex items-center justify-between w-full">
  <Link to={"/Profile"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
    Settings
  </h2>
  <div className="w-8"></div>
</div>
      <div>
        <h2 className="text-2xl sm:text-xl mt-4 font-bold ">Account Settings</h2>
        <p className="text-sm mt-2 text-[#5F5F63] font-semi-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis no
        </p>
      </div>
      <div className="flex justify-between items-center mt-6 mr-1">
        <p className="">Add a payment method</p>
        <Link to={"/Payment"}>
          <button>
            <img src={vector} alt="" className="mr-1" />
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p>Push Notification</p>
        <ToggleSwitch
          isOn={isPushNotificationOn}
          handleToggle={togglePushNotification}
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <div className="flex items-center">
          <p className="mr-2">Dark mode</p>
          <span className="bg-[#FFF7E3] text-[#FFA500] px-2 py-1 rounded-full text-xs font-medium">
            Coming soon
          </span>
        </div>
        <ToggleSwitch
          isOn={isDarkModeOn}
          handleToggle={toggleDarkMode}
          disabled={true}
        />
      </div>
      <div className="border-t-2 mt-6">
        <p className="mt-2 text-lg sm:text-xl">More</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p>About Us</p>
        <Link to={"/About"}>
          <button>
            <img src={Group} alt="" />
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p>Privacy Policy</p>
        <Link to={"/Privacy"}>
          <button>
            <img src={Group} alt="" />
          </button>
        </Link>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p>Terms and Conditions</p>
        <Link to={"/Terms"}>
          <button>
            <img src={Group} alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Settings;
