import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { GreenMark, GreyEllipse } from "../SVG"; 
import { useNavigate } from "react-router-dom"; 

const ProfileConfirm = ({ isApply, closeModal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleCancel = () => {
    setIsLoading(true); 
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 2000);
  };

  const handleCloseModal = () => {
    setIsLoading(false);
    closeModal(); 
  };

  return (
    <>
      <Modal
        open={isApply}
        onClose={handleCloseModal} 
        center
        classNames={{
          modal: "px-9 py-6 rounded-2xl bg-white gap-10 z-0",
        }}
      >
        <div className="w-full">
          <div className=" w-full flex flex-col items-center text-center gap-10 -z-20">
            <GreyEllipse />
            <p className="text-base font-semibold">
              Are you sure you want to log out?
            </p>
            <p className="text-sm leading-6 text-[#424242]">
              This will Automatically logout
            </p>

            <div className="flex items-center w-full gap-5">
              <button
                className="w-full flex items-center justify-center py-3 rounded-2xl border border-black text-black font-semibold"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
              <button
                className="w-full flex items-center justify-center py-3 rounded-2xl border border-black text-white bg-black font-semibold"
                onClick={handleCancel}
              >
                Yes, Log out
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <img src="/Group 12.svg" alt="Loading" className="h-20 w-20" />
        </div>
      )}
    </>
  );
};

export default ProfileConfirm;
