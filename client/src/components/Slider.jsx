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
    }, 3800);
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
              className="absolute px-[3.2vw] py-[0.8vw] lg:text-[1.3vw] 2xl:text-[1vw] text-[1.5vw] text-center font-bold text-white bg-primary-500 rounded-xl bottom-[15.5vw] left-[6.5%] hover:bg-[#549DA4] transition duration-200 ease-in-out"
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
              className="absolute py-[1.2vw] px-[5vw] text-[1.2vw] font-bold text-center text-white bg-[#3ccabc] rounded-full bottom-[13vw] right-[28vw] transition duration-300 ease-in-out transform  hover:opacity-80"
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
              className="absolute py-[1.2vw] px-[5vw] text-[1.3vw] text-center font-bold text-[#26625B] bg-[#00a59a] rounded-xl bottom-[29.5%] left-[61.3%] transition duration-300 ease-in-out transform  hover:opacity-90"
            >
              READ MORE
            </Link>
          </div>
          {/* Slide 4 */}

          <div className="relative flex-shrink-0 w-full h-full">
            <Link to="/deals">
              <img
                className="object-cover w-full h-full cursor-pointer"
                src={ReadingChallengeBanner}
                alt="Slide 4"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex gap-[1vw] px-[1vw] py-[0.6vw] transform -translate-x-1/2 bg-white rounded-full bottom-[1.5vw] left-1/2">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            onClick={() => setActiveSlide(index)} // Click to change slide
            className={`w-[1.3vw] h-[1.3vw] rounded-full  cursor-pointer ${
              activeSlide === index ? "bg-primary-500" : "bg-secondary-200"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
