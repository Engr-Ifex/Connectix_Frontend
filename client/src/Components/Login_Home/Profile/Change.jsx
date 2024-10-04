import React, { useState } from "react";
import { LeftArrow, GreenMark } from "../SVG";
import Modal from "react-responsive-modal";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation

const Change = () => {
  const [isApply, setIsApply] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCloseModal = () => {
    setIsApply(false); // Close the modal
  };

  const handleContinueClick = () => {
    setIsSubmit(true); // Immediately show the success message
    setIsApply(true); // Open the modal

    // Automatically close the modal after 2 seconds and navigate home
    setTimeout(() => {
      setIsApply(false); // Close the modal
      setIsSubmit(false); // Reset submission state for future use
      navigate("/Home"); // Navigate to home after 2 seconds
    }, 2000);
  };

  return (
    <>
      <div className="px-5 font-general flex flex-col items-center w-full max-w-[768px] mx-auto justify-center py-10 text-black">
        <div className="relative flex flex-col items-center gap-3 mb-10">
          <div className="flex w-full">
            <Link to="/Profile">
              <LeftArrow />
            </Link>
            <h2 className="mx-auto font-bold text-xl leading-6">
              Create password
            </h2>
          </div>
          <p className="text-sm opacity-50 text-justify font-normal text-[rgba(0,0,0,0.7)]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis no
          </p>
        </div>
        <div className="flex flex-col w-full items-center gap-6 text-sm mb-7">
          <input
            className="p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.5)] font-medium"
            placeholder="Current password"
            type="password"
          />
          <input
            className="p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.5)] font-medium"
            placeholder="New password"
            type="password"
          />
          <input
            className="p-4 rounded-2xl border border-grayBord w-full placeholder:text-[rgba(0,0,0,0.5)] font-medium"
            placeholder="Confirm"
            type="password"
          />
        </div>
        <div className="fixed bg-white w-full bottom-[30px] px-6">
          <button
            className="text-white py-5 w-full text-base font-semibold bg-black rounded-2xl"
            onClick={handleContinueClick} 
          >
            Continue
          </button>
        </div>
      </div>

      <Modal
        open={isApply} 
        onClose={handleCloseModal}
        center
        classNames={{
          modal: "px-9 py-6 rounded-2xl bg-white gap-10 z-0",
        }}
      >
        <div className="w-full flex flex-col items-center text-center gap-3 z-10">
          <GreenMark />
          <p className="text-base font-semibold">Password Updated!</p>
          <p className="text-sm leading-6 text-[#424242] px-4">
            You have successfully updated your password.
          </p>
          
          <p className="text-sm leading-6 text-[#424242] px-4">
            You will be redirected to home shortly.
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Change;
