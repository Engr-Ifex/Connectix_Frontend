import React, { useState } from "react";
import back from "../ViewProfile/back.svg";
import image from "../ViewProfile/image.svg";
import verify from "../ViewProfile/verify.svg";
import stylus from "../ViewProfile/stylus.svg";
import Ellipse from "../ViewProfile/Ellipse.svg";
import location from "../ViewProfile/location.svg";
import { Link } from "react-router-dom";
import music from "../ViewProfile/music-solid.svg";

const MyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bioText, setBioText] = useState(
    "Lorem e eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [isEditingInterests, setIsEditingInterests] = useState(false);
  const [interests, setInterests] = useState([
    "Stage performance",
    "Club performance",
    "Collaboration",
  ]);
  const [availableInterests] = useState([
    "Stage performance",
    "Club performance",
    "Collaboration",
    "Recording",
    "Writing",
    "Music Marketing",
    "Vocal Coaching",
    "Music Business",
    "Audio Mixing",
    "Beat Making",
    "Music Journalism",
    "Event Planning",
    "Audio",
  ]);

  const handleEditBioClick = () => {
    setIsEditing(true);
  };

  const handleBioChange = (e) => {
    setBioText(e.target.value);
  };

  const handleSaveBioClick = () => {
    setIsEditing(false);
  };

  const handleInterestToggle = (interest) => {
    setInterests((prevInterests) =>
      prevInterests.includes(interest)
        ? prevInterests.filter((i) => i !== interest)
        : [...prevInterests, interest]
    );
  };

  return (
    <div className="font-general px-5">
      <div className="flex items-center justify-between w-full">
        <Link to={"/Profile"}>
          <button className="">
            <img src={back} alt="Back" className="w-6 h-6 mt-4" />
          </button>
        </Link>
        <h2 className="font-bold text-lg sm:text-xl flex-grow text-center">
          Profile
        </h2>
        <div className="w-8"></div>
      </div>

      <div className="flex items-center p-4 bg-[#f0f0f0] rounded-2xl mb-4">
        <div className="relative">
          <img
            src={image}
            alt="Profile"
            className="w-16 h-16 rounded-full border-[#f5c13e]"
          />
          <img
            src={Ellipse}
            alt="Ellipse"
            className="absolute top-12 left-12 w-4 h-4"
          />
        </div>

        <div className="ml-4 flex-grow">
          <div className="flex items-center">
            <h2>GENZ KING</h2>
            <img src={verify} alt="Verified" className="ml-2 w-4 h-4" />
          </div>
          <p className="text-[#5F5F63]">Artist</p>
          <div className="flex items-center">
            <img src={location} alt="Location" className="w-4 h-4" />
            <p className="text-[#5F5F63] ml-1">1.2km away from you</p>
          </div>
        </div>
        <div className="ml-auto">
          <img
            src={stylus}
            alt="Edit"
            className="w-6 h-6 border border-bg-[#FFF7E3] rounded-[20px]"
          />
        </div>
      </div>

      <div className="flex justify-between items-center  border-t-2">
        <div className="mt-6">
          <h2 className="font-bold text-xl">Coins</h2>
          <p>50 coins left</p>
        </div>
        <Link to={"/BuyCoin"}>
          <button className="ml-auto mt-2 text-[#5F5F63] py-2 px-4 rounded-full border-[1px] border-black">
            Buy more
          </button>
        </Link>
      </div>

      <div className="border-t-2 border-gray-300 py-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold text-xl">Bio</p>
          {isEditing ? (
            <button
              className="bg-[#f5f4f2] text-black py-1 px-3 rounded-full"
              onClick={handleSaveBioClick}
            >
              Save
            </button>
          ) : (
            <button onClick={handleEditBioClick}>
              <img
                src={stylus}
                alt="Edit Bio"
                className="w-6 h-6 border-[4px] border-[#FFF7E3] rounded-[10px]"
              />
            </button>
          )}
        </div>
        {isEditing ? (
          <textarea
            value={bioText}
            onChange={handleBioChange}
            className="w-full bg-[#f0f0f0] p-2 text-[#5F5F63] text-sm break-words"
            rows={4}
          />
        ) : (
          <p className="text-[#5F5F63] text-sm break-words">{bioText}</p>
        )}
      </div>

      <div className="border-t-2 mb-6 mt-2">
        <div className="flex sm:flex-row justify-between items-center mb-4 mt-2">
          <p className="text-xl sm:text-lg md:text-xl font-bold mt-2">
            Interest
          </p>
          {isEditingInterests ? (
            <button
              className="bg-[#edece8] text-black py-1 px-3 rounded-full"
              onClick={() => setIsEditingInterests(false)}
            >
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditingInterests(true)}>
              <img
                src={stylus}
                alt="Edit Interests"
                className="w-6 h-6 border-[4px] border-[#FFF7E3] rounded-[20px]"
              />
            </button>
          )}
        </div>
        {isEditingInterests ? (
          <div className="text-xs sm:text-sm md:text-base">
            <div className="flex flex-wrap gap-2">
              {availableInterests.map((interest) => (
                <button
                  key={interest}
                  className={`py-1 px-2 sm:py-2 sm:px-4 rounded-full ${
                    interests.includes(interest)
                      ? "bg-[#FFF7E3]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-xs sm:text-sm md:text-base">
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="py-1 px-2 sm:py-2 sm:px-4 bg-[#FFF7E3] rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t-2">
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-xl">Catalog</p>
          <button>
            <img
              src={stylus}
              alt="Edit Bio"
              className="w-6 h-6 border-[4px] border-[#FFF7E3] rounded-[20px]"
            />
          </button>
        </div>
        <div className="flex">
          <img src={music} className="w-4 h-4 mt-2" alt="Music Icon" />
          <p className="ml-12">Spotify</p>
        </div>
        <div className="flex">
          <img src={music} className="w-4 h-4 mt-2" alt="Music Icon" />
          <p className="ml-12">Spotify</p>
        </div>
        <div className="flex">
          <img src={music} className="w-4 h-4 mt-2" alt="Music Icon" />
          <p className="ml-12">Spotify</p>
        </div>
        <div className="flex">
          <img src={music} className="w-4 h-4 mt-2" alt="Music Icon" />
          <p className="ml-12">Spotify</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
