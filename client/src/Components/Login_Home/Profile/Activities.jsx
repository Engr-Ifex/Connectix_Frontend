import React from "react";
import { DownArrow, LeftArrow } from "../SVG";
import { Link } from "react-router-dom";

const Activities = () => {
  return (
    <div className="px-5 font-general flex flex-col items-center w-full max-w-[768px] mx-auto py-10 text-black gap-5 bg-[#f8f8f8]">
      <div className="relative flex flex-col gap-5 mb-10">
        <div className="flex w-full">
          <Link to="/Profile">
            <LeftArrow />
          </Link>
          <h2 className="mx-auto font-bold text-xl leading-6">
            Activities & Stats
          </h2>
        </div>
        <p className="text-sm opacity-50 text-justify font-normal text-[rgba(0,0,0,0.7)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis no
        </p>
        <div className="flex justify-between">
          <div className="bg-white grid border border-black place-content-center w-[181px] h-[192px] text-center rounded-lg mr-5">
            <p className="text-5xl font-semibold pb-3">6</p>
            <p className="font-base">
              Event
              <br />
              promoted
            </p>
          </div>
          <div className="bg-white grid border border-black place-content-center w-[181px] h-[192px] text-center rounded-lg">
            <p className="text-5xl font-semibold pb-3">80%</p>
            <p className="font-base">
              Success
              <br />
              rate
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="bg-white grid border border-black place-content-center w-[181px] h-[192px] text-center rounded-lg mr-5">
            <p className="text-5xl font-semibold pb-3">12</p>
            <p className="font-base">
              Artist
              <br />
              Reports
            </p>
          </div>
          <div className="bg-white grid border border-black place-content-center w-[181px] h-[192px] text-center rounded-lg">
            <p className="text-5xl font-semibold pb-3">20%</p>
            <p className="font-base">
              Proposal
              <br />
              Declined
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 border-b pb-6">
          <div className="flex flex-col w-full gap-1">
            <p className="text-xl font-semibold">Stats</p>
            <div className="flex justify-between items-center px-3 bg-white">
              <p className="text-sm font-medium]">0 Profile views</p>
              <p className="flex justify-between items-center text-sm font-medium rounded-xl border border-gray-500 p-1">
                Last 7 days
                <DownArrow />
              </p>
            </div>
            <img src="/Frame.png" alt="frame" className="w-full" />
          </div>
          <div className="flex flex-col w-full gap-1">
            <p className="text-xl font-semibold">Proposals</p>
            <div className="flex justify-between items-center px-3 bg-white">
              <p className="text-sm font-medium]">0 Proposal sent</p>
              <p className="flex justify-between items-center text-sm font-medium rounded-xl border border-gray-500 p-1">
                Last 7 days
                <DownArrow />
              </p>
            </div>
            <img src="/Frame.png" alt="frame" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full justify-start">
          <p className="text-xl font-semibold">Coins</p>
          <p className="text-sm font-medium]">50 coins left</p>
          <p className="flex justify-between items-center text-sm font-medium rounded-xl border border-gray-500 p-2 w-fit">
            Buy more
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
