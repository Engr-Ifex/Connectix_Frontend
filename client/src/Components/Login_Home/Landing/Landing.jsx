import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Facebook, Google, X } from "../SVG";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  useParams,
  Link,
} from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const tempData = [
  {
    url: "/destinations/1.webp",
    title: "Find yourself the best shows anywhere in the country",
    desc: "Explore thousands of high-quality music promotion with the biggest music promotion platform",
  },
  {
    url: "/destinations/2.webp",
    title: "Stunning Scenic Spots in the country",
    desc: "Explore thousands of beautiful places created by nature",
  },
  {
    url: "/destinations/3.webp",
    title: "Rio Brazil",
    desc: "Explore thousands of beautiful places created by nature",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const Landing = () => {
  const [greenScreen, setGreenScreen] = useState(true);
  const [isSlide, setIsSlide] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setGreenScreen(false);
    }, 500);
  }, []);
  return (
    <>
      <Fade when={greenScreen}>
        <div
          className={`${
            greenScreen ? "flex " : "hidden"
          } min-w-screen min-h-screen bg-greenBlue flex-col items-center justify-center gap-2 font-general`}
        >
          <div className=" bg-greenLogo rounded-2xl w-[108px] h-20"></div>
          <p className="text-yellowLogo font-semibold text-4xl">Logo</p>
        </div>
      </Fade>
      <Fade when={!greenScreen}>
        <div
          className={`${
            greenScreen ? "hidden" : "flex"
          } text-black min-w-screen min-h-screen bg-[#F7D685] flex items-center justify-center gap-2 font-general w-full px-5`}
        >
          <div className="w-full flex flex-col">
            <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={false}
              showDots={true}
              infinite={true}
              transitionDuration={500}
              autoPlaySpeed={1000}
              customTransition="all .5"
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              {tempData.map((data, index) => (
                <div className="w-full" key={index}>
                  <div className="w-full h-[406px] rounded-lg flex justify-center items-center mb-12">
                    <img
                      src={data.url}
                      alt="wrong"
                      className="h-full object-cover object-center rounded-lg"
                    ></img>
                  </div>
                  <h2 className="text-[#141414] text-center text-2xl font-bold leading-9 mb-4 mx-5">
                    {data.title}
                  </h2>
                  <p className="text-[#0000007D] text-center mx-5 mb-7">
                    {data.desc}
                  </p>
                </div>
              ))}
            </Carousel>
            <Link
              to="/SignUp"
              className="text-white py-5 w-full text-base font-semibold bg-[black] rounded-2xl text-center mb-4 mt-8"
              onClick={() => setIsSlide(false)}
            >
              Create account
            </Link>
            <Link to="/mainlogin">
            <button
              className="text-black py-5 w-full text-base font-semibold border border-[#0000007d] rounded-2xl text-center"
              onClick={() => setIsSlide(false)}
            >
              Sign In
            </button>
            </Link>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Landing;
