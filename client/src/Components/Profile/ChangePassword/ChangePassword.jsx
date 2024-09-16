import React, { useState } from "react";
import back from "../ChangePassword/back.svg";
import { Link,useNavigate} from "react-router-dom";
import vector from "../ChangePassword/Vector.svg";
import api from "../../../services/api";


const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
    const handleClick = () => {
      setIsVisible(true);
    };
  

  const navigate = useNavigate();
  const passwordValidator = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!]).{8,}$/;
    return regex.test(password);
  };


  const handleResetPassword = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    if (!passwordValidator(newPassword)) {
      setError("Password must contain at least one lowercase letter, one uppercase letter, one digit, one symbol (@#$%^&*!), and have a minimum length of 8 characters");
      return;
    }

    try {
      const response = await api.post('/auth/change-password', {
        currentPassword: oldPassword,
        newPassword: newPassword
      });
      
      setSuccess(true);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      console.log(response.data);
      setTimeout(() => navigate('/profile'), 2000);
    } catch (error) {
      console.error("Error changing password:", error);
      if (error.response) {
        switch (error.response.status) {
          case 400:
            if (error.response.data.message.includes("Incorrect current password")) {
              setError("Current password is incorrect. Please try again.");
            } else {
              setError(error.response.data.message);
            }
            break;
          case 401:
            setError("Authentication failed. Please log in again.");
            // Optionally, redirect to login page
            // navigate('/login');
            break;
          case 404:
            setError("User not found. Please log in again.");
            break;
          default:
            setError("An unexpected error occurred. Please try again later.");
        }
      } else if (error.request) {
        setError("No response received from the server. Please check your internet connection and try again.");
      } else {
        setError("An error occurred while sending the request. Please try again.");
      }
    }}


  return (
    <div className="font-general px-5 relative">
      {isVisible && (
        <div className="absolute bottom-20 sm:bottom-60 left-1/2 transform -translate-x-1/2 p-4 w-[90%] sm:w-[300px] rounded-[15px] bg-white border-2 border-gray-300 flex items-center justify-center z-10">
          <div className="text-center">
            <img src={vector} alt="Vector" className="mx-auto mb-4" />
            <h2 className="text-lg sm:text-xl font-bold mb-2">
              Password changed
            </h2>
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <form onSubmit={handleResetPassword}>
        <div className="mt-8 sm:mt-16 w-full max-w-md mx-auto px-1">
          <input
            type="text"
            placeholder="Current password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="p-4 w-full rounded-[15px] border border-black mb-4 outline-none"
            required
          />
          <input
            type="text"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="p-4 w-full rounded-[15px] border border-black mb-4 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-4 w-full rounded-[15px] border border-black outline-none"
            required
          />
        </div>
        <div className="mt-36 sm:mt-24 p-4 w-full rounded-[15px] bg-black border border-white">
          <button
            type="submit"
            className="block mx-auto text-white text-lg sm:text-xl"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
