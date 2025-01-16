import React, { useEffect, useState } from "react";
import HeroBannerImage from "../assets/images/banners/christmas_banner.jpg";
import YearEndBanner from "../assets/images/banners/yearEnd_banner.jpg";
import TopBooksBanner from "../assets/images/banners/topBooks_banner.jpg";
import ReadingChallengeBanner from "../assets/images/banners/readingChallenge_banner.jpg";
import { Link } from "react-router-dom";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative">
      <img
        className="object-cover w-full"
        src={HeroBannerImage}
        alt="Hero banner"
      />
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className="relative flex-shrink-0 w-full h-full">
            <img
              className="object-cover w-full h-full"
              src={HeroBannerImage}
              alt="Slide 1"
            />
            <Link
              to="/shop"
              className="absolute px-11 py-3 text-2xl text-center font-bold text-white bg-primary-500 rounded-xl bottom-[32%] left-[6.5%] hover-preset-1"
            >
              Shop Now
            </Link>
          </div>
          {/* Slide 2 */}
          <div className="relative flex-shrink-0 w-full h-full">
            <img
              className="object-cover w-full h-full"
              src={YearEndBanner}
              alt="Slide 2"
            />
            <Link
              to="/shop"
              className="absolute p-7 text-3xl font-bold text-center text-white bg-[#3ccabc] w-[390px] rounded-full bottom-[26%] left-[54%] transition-all duration-300 ease-in-out transform  hover:opacity-80"
            >
              Shop Now
            </Link>
          </div>
          {/* Slide 3 */}
          <div className="relative flex-shrink-0 w-full h-full">
            <img
              className="object-cover w-full h-full"
              src={TopBooksBanner}
              alt="Slide 3"
            />
            <Link
              to="/deals"
              className="absolute p-7 text-3xl text-center font-bold text-[#26625B] bg-[#00a59a] w-[440px] rounded-xl bottom-[29.5%] left-[61.3%] transition-all duration-300 ease-in-out transform  hover:opacity-90"
            >
              READ MORE
            </Link>
          </div>
          {/* Slide 4 */}
          <div className="relative flex-shrink-0 w-full h-full">
            <img
              className="object-cover w-full h-full"
              src={ReadingChallengeBanner}
              alt="Slide 4"
            />
          </div>
        </div>
      </div>

      <div className="absolute flex gap-5 px-5 py-3 transform -translate-x-1/2 bg-white rounded-full bottom-6 left-1/2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)} // Click to change slide
            className={`w-6 h-6 rounded-full  cursor-pointer ${
              activeSlide === index ? "bg-primary-500" : "bg-secondary-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
