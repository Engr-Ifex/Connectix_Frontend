import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import back from "../BuyCoin/back.svg";

const data = [
  { name: "Jan", profileViews: 280, impressions: 300 },
  { name: "Feb", profileViews: 300, impressions: 270 },
  { name: "Mar", profileViews: 200, impressions: 220 },
  { name: "Apr", profileViews: 278, impressions: 250 },
  { name: "May", profileViews: 189, impressions: 210 },
  { name: "Jun", profileViews: 239, impressions: 220 },
  { name: "Jul", profileViews: 349, impressions: 360 },
  { name: "Aug", profileViews: 200, impressions: 220 },
];

const Activities = () => {
  const [timeRange, setTimeRange] = useState("Last 7 days");

  return (
    <div className="font-general px-5">
      <div className="flex items-center justify-between w-full">
  <Link to={"/Profile"}>
    <button className="">
      <img src={back} alt="Back" className="w-6 h-6 mt-4" />
    </button>
  </Link>
  <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
    Activities & Stat
  </h2>
  <div className="w-8"></div>
</div>
      <div className="mt-4">
        <h2 className="font-bold text-2xl sm:text-xl">My Activities</h2>
        <p className="text-sm text-bold text-[#5F5F63] mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis no
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
        <div className="p-6 sm:p-8 lg:p-10 h-40 sm:h-44 w-full border-2 rounded-2xl border-gray-800">
          <p className="font-bold text-4xl sm:text-5xl text-center">6</p>
          <p className="text-center text-[#5F5F63]">Performance</p>
          <p className="text-center text-[#5F5F63]">done</p>
        </div>
        <div className="border-2 rounded-2xl border-gray-800 w-full p-6 sm:p-8 lg:p-10 h-40 sm:h-44">
          <p className="font-bold text-4xl sm:text-5xl text-center">80%</p>
          <p className="text-center text-[#5F5F63]">Success</p>
          <p className="text-center text-[#5F5F63]">rate</p>
        </div>
        <div className="p-6 sm:p-8 lg:p-10 h-40 sm:h-44 w-full border-2 rounded-2xl border-gray-800">
          <p className="font-bold text-4xl sm:text-5xl text-center">12</p>
          <p className="text-center text-[#5F5F63]">Client</p>
          <p className="text-center text-[#5F5F63]">reports</p>
        </div>
        <div className="border-2 rounded-2xl border-gray-800 w-full p-6 sm:p-8 lg:p-10 h-40 sm:h-44">
          <p className="font-bold text-4xl sm:text-5xl text-center">20%</p>
          <p className="text-center text-[#5F5F63]">Proposal</p>
          <p className="text-center text-[#5F5F63]">declined</p>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="font-bold text-lg sm:text-xl mb-4">My Stats</h2>
        <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
          <div className=" flex justify-between  mb-6">
            <p className="text-base sm:text-lg font-semibold text-gray-700 mt-2">
              0 Profile views
            </p>
            <select
              className=" sm:mt-0 border border-black rounded-md px-3 py-2 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-black"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-48 sm:h-56 lg:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 5, right: 40, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="profileViews"
                  stroke="#FF0000"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="#A020F0"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Profile views</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Impressions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
