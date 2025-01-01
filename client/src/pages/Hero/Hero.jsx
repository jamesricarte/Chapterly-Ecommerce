import React from "react";
import Nav from "../../components/Nav";
import HeroBannerImage from "../../assets/images/backgrounds/Hero_banner.jpg";
import BookGenresImage1 from "../../assets/images/book_genre_image_1.png";
import BookGenresImage2 from "../../assets/images/book_genre_image_2.png";
import BookGenresImage3 from "../../assets/images/book_genre_image_3.png";
import BookGenresImage4 from "../../assets/images/book_genre_image_4.png";
import BookGenresImage5 from "../../assets/images/book_genre_image_5.png";
import PromotionImage1 from "../../assets/images/backgrounds/promotion-image-1.png";
import PromotionImage2 from "../../assets/images/backgrounds/promotion-image-2.png";
import PromotionImage3 from "../../assets/images/backgrounds/promotion-image-3.png";

const Hero = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        <img
          className="object-cover w-full"
          src={HeroBannerImage}
          alt="Hero banner"
        />
        <button className="absolute px-11 py-3 text-lg font-bold text-white bg-primary-500 rounded-xl bottom-[32%] left-[6.5%]">
          Shop Now
        </button>
        <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-6 left-1/2">
          <div className="w-4 h-4 border border-black rounded-full bg-secondary-500"></div>
          <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
          <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
          <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
        </div>
      </div>
      <div className="h-[1325px] bg-gradient-2 py-12 px-16">
        <h2 className="text-xl font-bold text-white">Popular Book Genres</h2>
        <div className="flex mt-9">
          <img className="w-[16.5vw]" src={BookGenresImage1} />
          <div className="flex w-full justify-evenly">
            <img className="w-[16.5vw]" src={BookGenresImage2} />
            <img className="w-[16.5vw]" src={BookGenresImage3} />
            <img className="w-[16.5vw]" src={BookGenresImage4} />
          </div>
          <img className="w-[16.5vw]" src={BookGenresImage5} />
        </div>
        <p className="text-4xl text-center text-white mt-14 font-Pattaya">
          -Find Your Next Great Read
        </p>
        <div className="flex mt-8">
          <img className="w-full" src={PromotionImage1} />
          <div>
            <img className="w-full" src={PromotionImage2} />
            <img className="w-full" src={PromotionImage3} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
