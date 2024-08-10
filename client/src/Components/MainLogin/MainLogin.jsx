import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Google, X } from "../Login_Home/SVG";

const MainLogin = () => {
  return (
    <div className=" pt-32 bg-[#F7D685] pb-10 flex flex-col w-full items-center">
      <div className=" bg-black -mt-8 rounded-xl w-[108px] h-20 mb-[60px]" />
      <div className="gap-3 flex flex-col items-center mb-8">
        <p className="text-xl font-bold">Log in your account</p>
        <p className="text-sm text-[rgba(0,0,0,0.5)]">
          Fill the information below to Log in
        </p>
      </div>

      <div className="flex flex-col items-center w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 text-sm w-full mb-8">
          <input
            className="p-4 w-full sm:w-[22rem] border border-grayBord rounded-2xl outline-none placeholder:text-[rgba(0,0,0,0.7)]"
            placeholder="Email"
          />
          <input
            className="p-4 w-full sm:w-[22rem] border border-grayBord rounded-2xl outline-none placeholder:text-[rgba(0,0,0,0.7)]"
            placeholder="Password"
            type="password"
          />
          <p className="text-right font-semibold cursor-pointer">
            Forgot Password?
          </p>
          <Link
            to="/home"
            className="text-white py-5 w-full sm:w-[22rem] text-base font-semibold bg-greenBlue rounded-2xl text-center"
          >
            Continue
          </Link>
        </div>
        <p className="text-[rgba(21,21,21,0.5)] text-base mb-8">
          or Sign In with
        </p>
        <div className="w-full flex justify-center items-center gap-6 mb-9">
          <div className="flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]">
            <Google />
          </div>
          <div className="flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]">
            <X />
          </div>
          <div className="flex w-11 h-11 items-center justify-center rounded-full border border-[rgba(0,0,0,0.5)]">
            <Facebook />
          </div>
        </div>
        <Link
          to="/SignUp"
          className="font-semibold cursor-pointer text-base text-center"
        >
          Don't have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MainLogin;
