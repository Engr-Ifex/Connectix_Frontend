import React, { useState } from "react";
import { DownArrow, GreenMark, GreyEllipse, LocMark, MusicNote, UploadImg } from "../SVG";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";

const idType = ["National ID", "Driver License", "International Passport"];

const Premium = () => {
  const [currentState, setCurrentState] = useState(0);
  const [newImage, setNewImage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [isSubmit, setIsSubmit] = useState(false);  // Success modal state
  const [isApply, setIsApply] = useState(false);    // Apply modal state

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setNewImage(imageUrl);
    }
  };

  // Simulate capture process
  const handleCaptureClick = () => {
    setIsLoading(true); // Start loading

    // Simulate verification delay (e.g., 2 seconds)
    setTimeout(() => {
      setIsLoading(false);  // Stop loading
      setIsSubmit(true);    // Show success modal
      setIsApply(true);     // Open the modal
    }, 2000); // 2 second delay
  };

  const handleCloseModal = () => {
    setIsApply(false); // Close the modal
  };

  const handleCancel = () => {
    setIsLoading(true); // Start loading
    // Simulate a loading period (e.g., API call delay)
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmit(true); // Show success modal after loading
    }, 2000); // 2 seconds loading
  };

  return (
    <>
      {/* Step 1: Enter Details */}
      {currentState === 0 && (
        <div className="w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen">
          <div className="w-full flex items-center justify-between mb-9">
            <h3 className="text-2xl font-bold">Enter your details</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-black" />
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <input
              className="w-full p-4 rounded-2xl border border-[#0000007d]"
              placeholder=""
              value="Biliyamin Abiola Abdullahi"
              readOnly
            />
            <select
              className="w-full p-4 rounded-2xl border border-[#0000007d] text-[#0000007d]"
              defaultValue=""
            >
              <option value="" disabled hidden>
                ID Type
              </option>
              {idType.map((gen, index) => (
                <option key={index}>{gen}</option>
              ))}
            </select>
            <input
              className="w-full p-4 rounded-2xl border border-[#0000007d]"
              placeholder="ID Number"
            />
            <div className="w-full relative">
              <input
                className="w-full p-4 rounded-2xl border border-[#0000007d]"
                placeholder="28/07/1996"
              />
              <div className="absolute top-4 right-2">
                <DownArrow />
              </div>
            </div>
            <input
              className="w-full p-4 rounded-2xl border border-[#0000007d]"
              placeholder="House Address"
            />
            <div className="w-full h-[272px] rounded-2xl border border-[#0000007d] relative flex items-center justify-center overflow-hidden">
              {newImage ? (
                <img
                  src={newImage}
                  className="h-full object-cover object-center"
                />
              ) : (
                <div className="flex flex-col gap-3 h-full items-center justify-center text-center">
                  <UploadImg />
                  <p className="text-[#0000007d] text-base font-semibold">
                    Upload profile image
                  </p>
                  <p className="text-[#0000007d] text-xs">
                    Upload proof of address
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="opacity-0 absolute top-0 right-0 left-0 bottom-0 min-h-full min-w-full"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="fixed w-full flex items-center gap-20 text-base font-semibold px-6 bottom-[70px]">
            <button
              className="w-full py-5 rounded-2xl border border-black text-black"
              onClick={() => setCurrentState(0)}
            >
              Back
            </button>
            <div
              className="w-full flex items-center justify-center py-5 rounded-2xl border bg-[#00283A] border-black text-white cursor-pointer"
              onClick={() => setCurrentState(1)}
            >
              Continue
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Facial Verification */}
      {currentState === 1 && (
        <div className="w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen gap-2">
          <div className="w-full flex items-center justify-between mb-9">
            <h3 className="text-2xl font-bold">Facial verification</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
              <div className="w-2 h-2 rounded-full bg-black" />
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
            </div>
          </div>
          <div className="flex justify-center items-center mb-9">
            <img
              src="https://gateway.pinata.cloud/ipfs/QmdDkiU5VCHtugD4Bx2LvBbTTrKY97J665djf98RpZSxdH"
              alt="facial verification"
            />
          </div>
          <div className="flex flex-col justify-start gap-3">
            <p className="text-base font-medium">
              1. Make sure your are in a bright environment.
            </p>
            <p className="text-base font-medium">
              2. Look directly into your camera and click capture.
            </p>
            <p className="text-base font-medium">
              3. Grant permission access to your camera.
            </p>
            <p className="text-base font-medium">
              4. Click on continue when ready.
            </p>
          </div>
          <div className="fixed w-full flex items-center gap-20 text-base font-semibold px-6 bottom-[70px]">
            <button
              className="w-full py-5 rounded-2xl border border-black text-black"
              onClick={() => setCurrentState(0)}
            >
              Back
            </button>
            <div
              className="w-full flex items-center justify-center py-5 rounded-2xl border bg-[#00283A] border-black text-white cursor-pointer"
              onClick={() => setCurrentState(2)}
            >
              Continue
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Stage Details */}
      {currentState === 2 && (
        <div className="w-full flex flex-col items-center py-9 px-6 text-black font-general bg-[#f8f8f8] min-h-screen gap-2">
          <div className="w-full flex items-center justify-between mb-9">
            <h3 className="text-2xl font-bold">Facial verification</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
              <div className="w-2 h-2 rounded-full bg-[#d9d9d9]" />
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="https://gateway.pinata.cloud/ipfs/QmQP7edVLgCmcyz8mP1eLeJmsUpNN9EiAB7pt7QSFwkFAK"
              alt="facial verification"
            />
          </div>
          <div className="fixed w-full flex items-center gap-20 text-base font-semibold px-6 bottom-[70px]">
            <div
              className="w-full flex items-center justify-center py-5 rounded-2xl border bg-[#00283A] border-black text-white cursor-pointer"
              onClick={handleCaptureClick} // Trigger loading and capture
            >
              Capture
            </div>
          </div>
        </div>
      )}
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
              <p className="text-base font-semibold">
                Verification submitted!
              </p>
              <p className="text-sm leading-6 text-[#424242] px-4">
                Your KYC verification was successful.
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

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <img src="/Group 12.svg" alt="Loading" className="h-20 w-20" />
        </div>
      )}
    </>
  );
};

export default Premium;
