import React, { useState } from "react";
import Navbar from "../../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import ProfileConfirm from "./ProfileConfirm.jsx";

const Profile = () => {
  const [isApply, setIsApply] = useState(false);
  const navigate = useNavigate();

  const closeModal = (confirm) => {
    if (confirm) {
      navigate("/signin");
    }
    setIsApply(false);
  };

  return (
    <div className="mt-4 px-6 w-full min-w-screen font-general">
      <p className="font-general font-bold text-[25px] py-5">Profile</p>
      <div className="flex flex-col justify-center items-center gap-3 relative ">
        <div className="bg-profile bg-cover w-[120px] aspect-square rounded-full overflow-hidden z-0">
          <img
            src="/pencil.svg"
            alt="vector"
            className="absolute rounded-full bg-yellow-200 z-20 right-[35%] top-[40%]"
          />
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <p className="text-xl font-medium flex items-center gap-3">
            Michal Smith
            <img src="/verify.svg" alt="verify" />
          </p>
          <p className="text-lg text-gray-300">Promoter</p>
        </div>
      </div>
      <div className="flex flex-col border-2 rounded-2xl mt-3">
        <div className="flex flex-col divide-y px-5">
          <div className="flex justify-between items-center p-3">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/pencil.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">View profile</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </div>
          <Link to="/Change" className="flex justify-between items-center p-3">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/password.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">Change Password</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </Link>
          <Link
            to="/Activities"
            className="flex justify-between items-center p-3"
          >
            <div className="flex justify-center items-center gap-3">
              <img
                src="/password.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">Activities & Stats</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </Link>
          <Link to="/Premium" className="flex justify-between items-center p-3">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/help.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">Get Premium</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </Link>
        </div>
        <div className="flex flex-col divide-y px-5">
          <div className="flex justify-between items-center p-3">
            <div className="flex justify-center items-center gap-3">
              <img
                src="/help.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">Help</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </div>
          <Link
            to="/Settings"
            className="flex justify-between items-center p-3"
          >
            <div className="flex justify-center items-center gap-3">
              <img
                src="/settings.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">Settings</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </Link>
          <div
            className="flex justify-between items-center p-3"
            onClick={() => setIsApply(true)}
          >
            <div className="flex justify-center items-center gap-3">
              <img
                src="/logout.svg"
                alt="vector"
                className="rounded-full bg-yellow-200 p-[10px]"
              />
              <p className="text-base">Log out</p>
            </div>
            <img src="/Vector.svg" alt="vector" />
          </div>
        </div>
      </div>

      <Navbar />
      <ProfileConfirm isApply={isApply} closeModal={closeModal} />
    </div>
  );
};

export default Profile;
