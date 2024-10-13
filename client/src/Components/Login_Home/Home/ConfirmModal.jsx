import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { GreenMark, GreyEllipse } from "../SVG";
import { Link } from "react-router-dom";

const ConfirmModal = ({ isApply, closeModal }) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCancel = () => {
    setIsLoading(true); 
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmit(true); 
    }, 2000); 
  };

  const handleCloseModal = () => {
    setIsSubmit(false); 
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
          {isSubmit ? (
            <div className="w-full flex flex-col items-center text-center gap-3 z-10">
              <GreenMark />
              <p className="text-base font-semibold">Event cancelled!</p>
              <p className="text-sm leading-6 text-[#424242] px-4">
                You have successfully canceled your
                <br /> event.
              </p>
              <Link
                to="/Home"
                className="w-full flex items-center justify-center py-3 rounded-2xl border border-black text-white bg-black font-semibold"
                onClick={handleCloseModal}
              >
                Back home
              </Link>
            </div>
          ) : (
            <div className=" w-full flex flex-col items-center text-center gap-10 -z-20">
              <GreyEllipse />
              <p className="text-base font-semibold">
                Are you sure you want to
                <br /> cancel the event?
              </p>
              <p className="text-sm leading-6 text-[#424242]">
                By submitting, you agree to delete the event
                <br /> from your dashboard. This action cannot
                <br /> be undone.
              </p>

              <div className="flex items-center w-full gap-5">
                <button
                  className="w-full flex items-center justify-center py-3 rounded-2xl border border-black text-black font-semibold"
                  onClick={handleCloseModal}
                >
                  Back
                </button>
                <button
                  className="w-full flex items-center justify-center py-3 rounded-2xl border border-black text-white bg-black font-semibold"
                  onClick={handleCancel}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          )}
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

export default ConfirmModal;
