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
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import ProductImage1 from "../../assets/images/products/ego-is-the-enemy.png";
import ProductImage2 from "../../assets/images/products/subtle-art-journal.png";
import ProductImage3 from "../../assets/images/products/48laws-power.png";
import ProductImage4 from "../../assets/images/products/dailystoicsz.png";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import { HiChevronLeft } from "react-icons/hi";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="relative">
        <img
          className="object-cover w-full"
          src={HeroBannerImage}
          alt="Hero banner"
        />
        <button className="absolute px-11 py-3 text-2xl font-bold text-white bg-primary-500 rounded-xl bottom-[32%] left-[6.5%]">
          Shop Now
        </button>
        <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-6 left-1/2">
          <div className="w-4 h-4 border border-black rounded-full bg-secondary-500"></div>
          <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
          <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
          <div className="w-4 h-4 bg-white border border-black rounded-full"></div>
        </div>
      </div>
      <div className="px-24 pt-12 pb-14 bg-gradient-2">
        <h2 className="text-xl font-bold text-white">Popular Book Genres</h2>
        <div className="relative flex mt-9">
          <img className="w-[16.5vw]" src={BookGenresImage1} />
          <div className="flex w-full justify-evenly">
            <img className="w-[16.5vw]" src={BookGenresImage2} />
            <img className="w-[16.5vw]" src={BookGenresImage3} />
            <img className="w-[16.5vw]" src={BookGenresImage4} />
          </div>
          <img className="w-[16.5vw]" src={BookGenresImage5} />
          <div className="absolute p-3 transform -translate-y-1/2 bg-white rounded-full cursor-pointer -right-5 top-1/2">
            <HiOutlineChevronRight color="#006D77" size="30" />
          </div>
        </div>
        <p className="text-6xl text-center text-white mt-14 font-Pattaya">
          -Find Your Next Great Read
        </p>
        <div className="grid grid-cols-2 gap-1 mt-8">
          <div className="relative flex items-center justify-center">
            <img className="w-full" src={PromotionImage1} />
            <button className="absolute px-11 py-3 text-xs font-bold text-white bg-primary-500 rounded-xl bottom-[26%] left-[14%]">
              Buy now
            </button>
            <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-12 left-1/2">
              <div className="w-5 h-5 border border-black rounded-full bg-secondary-500"></div>
              <div className="w-5 h-5 bg-white border border-black rounded-full"></div>
              <div className="w-5 h-5 bg-white border border-black rounded-full"></div>
              <div className="w-5 h-5 bg-white border border-black rounded-full"></div>
            </div>
          </div>

          <div className="grid gap-4 p-4 grid-row-2">
            <div className="relative flex items-center justify-center">
              <img className="w-full" src={PromotionImage2} />
              <button className="absolute px-11 py-3 text-xs font-bold text-white bg-primary-500 rounded-xl bottom-[11%] left-[6.5%]">
                Buy now
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center justify-center">
                <img className="w-full" src={PromotionImage3} />
              </div>
              <div className="flex flex-col items-center justify-center w-full h-full rounded-md bg-primary-500">
                <p className="text-xl text-white">Christmas Sale</p>
                <h3 className="text-2xl font-bold text-white">20% Discount</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-24 py-14">
        <div className="flex items-center justify-between mb-9">
          <h3 className="text-2xl font-bold text-primary-500">
            Recommendations
          </h3>
          <div className="flex gap-4">
            <div className="p-1 rounded-full cursor-pointer bg-primary-100">
              <HiChevronLeft color="white" size="27" />
            </div>
            <div className="p-1 rounded-full cursor-pointer bg-primary-500">
              <HiChevronRight color="white" size="27" />
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-9">
          <Card
            image={ProductImage1}
            author="Author's Name"
            price="$105"
            genre="Romance"
            ratingDisplay="hidden"
            cartDisplay="hidden"
          />
          <div className="flex gap-9">
            <Card
              image={ProductImage2}
              author="Author's Name"
              price="$105"
              genre="Romance"
              ratingDisplay="hidden"
              cartDisplay="hidden"
            />
            <Card
              image={ProductImage3}
              author="Author's Name"
              price="$105"
              genre="Romance"
              ratingDisplay="hidden"
              cartDisplay="hidden"
            />
          </div>
          <Card
            image={ProductImage4}
            author="Author's Name"
            price="$105"
            genre="Romance"
            ratingDisplay="hidden"
            cartDisplay="hidden"
          />
        </div>
        <div className="flex items-center justify-between mt-10 mb-9">
          <h3 className="text-2xl font-bold text-primary-500">
            Trending Books
          </h3>
          <div className="flex gap-4">
            <div className="p-1 rounded-full cursor-pointer bg-primary-100">
              <HiChevronLeft color="white" size="27" />
            </div>
            <div className="p-1 rounded-full cursor-pointer bg-primary-500">
              <HiChevronRight color="white" size="27" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-9">
          <Card
            image={ProductImage1}
            author="Author's Name"
            price="$105"
            genre="Romance"
            ratingDisplay="hidden"
            cartDisplay="hidden"
          />
          <div className="flex gap-9">
            <Card
              image={ProductImage2}
              author="Author's Name"
              price="$105"
              genre="Romance"
              ratingDisplay="hidden"
              cartDisplay="hidden"
            />
            <Card
              image={ProductImage3}
              author="Author's Name"
              price="$105"
              genre="Romance"
              ratingDisplay="hidden"
              cartDisplay="hidden"
            />
          </div>
          <Card
            image={ProductImage4}
            author="Author's Name"
            price="$105"
            genre="Romance"
            ratingDisplay="hidden"
            cartDisplay="hidden"
          />
        </div>
        <div className="flex items-center justify-between mt-10 mb-8">
          <h3 className="text-2xl font-bold text-primary-500">
            Exclusive Editions
          </h3>
          <div className="flex gap-4">
            <div className="p-1 rounded-full cursor-pointer bg-primary-100">
              <HiChevronLeft color="white" size="27" />
            </div>
            <div className="p-1 rounded-full cursor-pointer bg-primary-500">
              <HiChevronRight color="white" size="27" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-9">
          <Card
            image={ProductImage1}
            author="Author's Name"
            price="$105"
            genre="Romance"
            ratingDisplay="hidden"
            cartDisplay="hidden"
          />
          <div className="flex gap-9">
            <Card
              image={ProductImage2}
              author="Author's Name"
              price="$105"
              genre="Romance"
              ratingDisplay="hidden"
              cartDisplay="hidden"
            />
            <Card
              image={ProductImage3}
              author="Author's Name"
              price="$105"
              genre="Romance"
              ratingDisplay="hidden"
              cartDisplay="hidden"
            />
          </div>
          <Card
            image={ProductImage4}
            author="Author's Name"
            price="$105"
            genre="Romance"
            ratingDisplay="hidden"
            cartDisplay="hidden"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
