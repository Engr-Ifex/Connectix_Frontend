import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../../Navbar/Navbar'

import {
  FaUser,
  FaLock,
  FaChartBar,
  FaQuestionCircle,
  FaCog,
  FaSignOutAlt,
  FaChevronRight,
} from "react-icons/fa";
import Ellipse from "../Profile/Ellipse.svg";
import pencil from "../Profile/pencil.svg";
import log from "../Profile/log.svg";

const Profile = () => {
  const [showLogoutPrompt, setShowLogoutPrompt] = useState(false);
  const [profileImage, setProfileImage] = useState(Ellipse);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setShowLogoutPrompt(true);
  };

  const handleLogout = () => {
    navigate("/Home");
  };

  const handleCancel = () => {
    setShowLogoutPrompt(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="px-4 sm:px-5 font-general">
      <div>
        <p className="font-general font-bold text-2xl sm:text-[25px]">
          Profile
        </p>
      </div>
      <div className="flex justify-center mt-4 relative">
        <img
          src={profileImage}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
          alt="Profile"
        />
        <button
          className="absolute bg-red-300 rounded-full p-1 right-[500] bottom-1  sm:bottom-4 transform translate-x-1/2 translate-y-1/2"
          onClick={handleButtonClick}
        >
          <img src={pencil} alt="Edit" className="w-5 h-5" />
        </button>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageChange}
        />
      </div>

      <div className="text-center mt-2">
        <h2 className="text-lg sm:text-xl">
          <b>Gen Z King</b>
        </h2>
        <p className="text-sm sm:text-base">Artist</p>
      </div>
      <div className="bg-white mt-4  rounded-lg border-4 w-full max-w-md mx-auto h-auto sm:h-[480px]">
        <Link className="no-underline text-black" to="/MyProfile">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center ">
              <FaUser className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">View Profile</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/ChangePassword">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaLock className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Change Password</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/Activities">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaChartBar className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Activities & Stats</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/Help">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaQuestionCircle className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Help</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <Link className="no-underline text-black" to="/profilesettings">
          <div className="flex items-center justify-between p-5 sm:p-6 border-b">
            <div className="flex items-center">
              <FaCog className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Settings</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </Link>
        <div className="no-underline text-black">
          <div
            className="flex items-center justify-between p-5 sm:p-6"
            onClick={handleLogoutClick}
          >
            <div className="flex items-center">
              <FaSignOutAlt className="text-gray-600 mr-3" />
              <p className="text-base sm:text-lg">Log out</p>
            </div>
            <FaChevronRight className="text-gray-400" />
          </div>
        </div>
      </div>
      {showLogoutPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[300px] sm:w-[350px]">
            <img src={log} alt="Vector" className="mx-auto mb-4" />
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">
              Are you sure you want to log out?
            </h2>
            <p className="mb-4 text-center text-sm sm:text-base">
              This will automatically log you out
            </p>
            <div className="flex justify-center gap-2 sm:gap-4">
              <button
                className="w-[100px] sm:w-[120px] p-2 text-black rounded-xl h-[45px] sm:h-[55px] font-bold border-2 hover:bg-black hover:text-white transition-colors"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                className="w-[100px] sm:w-[120px] p-2 bg-black text-white border-2 rounded-xl hover:bg-white hover:text-black h-[45px] sm:h-[55px] transition-colors"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="navbar mb-24">
      <Navbar />
      </div>
     
    </div>
  );
};

export default Profile;
