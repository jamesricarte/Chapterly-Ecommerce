import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import BookGenresImage1 from "../../assets/images/backgrounds/book_genre_image_1.png";
import BookGenresImage2 from "../../assets/images/backgrounds/book_genre_image_2.png";
import BookGenresImage3 from "../../assets/images/backgrounds/book_genre_image_3.png";
import BookGenresImage4 from "../../assets/images/backgrounds/book_genre_image_4.png";
import BookGenresImage5 from "../../assets/images/backgrounds/book_genre_image_5.png";
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
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Slider from "../../components/Slider";

const Home = () => {
  return (
    <>
      <Nav />
      <main>
        <section>
          <Slider />
        </section>

        <section className="mb-4 sm:mb-10 md:mb-16 py-7 md:py-16 bg-gradient-2">
          <div className="container px-4 mx-auto">
            <h2 className="text-sm font-bold text-white sm:text-base md:text-xl">
              Popular Book Genres
            </h2>
            <div className="flex gap-4 mt-4 overflow-x-scroll lg:justify-center lg:overflow-visible md:mt-9">
              <Link to="/shop">
                <img
                  className="object-cover hover-preset-4 min-w-24 md:min-w-48 w-[15vw]"
                  src={BookGenresImage1}
                />
              </Link>
              <Link to="/shop">
                <img
                  className="object-cover hover-preset-4 min-w-24 md:min-w-48 w-[15vw] "
                  src={BookGenresImage2}
                />
              </Link>
              <Link to="/shop">
                <img
                  className="object-cover hover-preset-4 min-w-24 md:min-w-48 w-[15vw]"
                  src={BookGenresImage3}
                />
              </Link>
              <Link to="/shop">
                <img
                  className="object-cover hover-preset-4 min-w-24 md:min-w-48 w-[15vw]"
                  src={BookGenresImage4}
                />
              </Link>
              <div className="relative">
                <Link to="/shop">
                  <img
                    className="object-cover hover-preset-4 min-w-24 md:min-w-48 w-[15vw]"
                    src={BookGenresImage5}
                  />
                </Link>
                <div className="absolute hidden p-3 transform -translate-y-1/2 bg-white rounded-full cursor-pointer -right-6 top-1/2 lg:block">
                  <HiOutlineChevronRight color="#006D77" size="30" />
                </div>
              </div>
            </div>

            <h3 className="mt-6 text-2xl text-center text-white sm:text-5xl lg:text-6xl sm:mt-14 font-Pattaya">
              -Find Your Next Great Read
            </h3>
            <div className="grid grid-cols-2 gap-1 mt-3 sm:mt-8">
              <div className="relative flex items-center justify-center">
                <img className="w-full hover-preset-6" src={PromotionImage1} />
                <Link
                  to="/shop"
                  className="absolute px-[3vw] py-[0.6vw] text-[0.6vw] font-bold text-white bg-primary-500 rounded-xl bottom-[26%] left-[14%] hover:bg-[#549DA4] duration-200 hidden sm:block"
                >
                  Buy now
                </Link>
                <div className="absolute flex gap-[1vw] px-[1vw] py-[0.6vw] transform -translate-x-1/2 bg-white rounded-full bottom-[3vw] left-1/2">
                  <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-primary-500"></div>
                  <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-secondary-200"></div>
                  <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-secondary-200"></div>
                  <div className="w-[1.3vw] h-[1.3vw] rounded-full bg-secondary-200"></div>
                </div>
              </div>

              <div className="grid gap-4 p-4 grid-row-2">
                <div className="relative flex items-center justify-center">
                  <img
                    className="w-full hover-preset-6"
                    src={PromotionImage2}
                  />
                  <Link
                    to="/shop"
                    className="absolute px-[3vw] py-[0.6vw] text-[0.6vw] font-bold text-white bg-primary-500 rounded-xl bottom-[11%] left-[6.5%] hover:bg-[#549DA4] duration-200 hidden sm:block"
                  >
                    Buy now
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center">
                    <img
                      className="w-full hover-preset-6 "
                      src={PromotionImage3}
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full rounded-md bg-primary-500 hover-preset-6">
                    <p className="text-[1vw] text-white">Christmas Sale</p>
                    <h3 className="text-[1.3vw] font-bold text-white">
                      20% Discount
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 mx-auto">
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h1 className="text-base font-bold sm:text-2xl lg:text-3xl text-primary-500">
                Recommendations
              </h1>
              <div className="items-center hidden gap-3 text-xl lg:flex text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight className="hover-preset-5" />
              </div>
            </div>
            <div className="flex gap-8 overflow-x-scroll lg:overflow-visible">
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
            </div>
          </div>
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h1 className="text-base font-bold sm:text-2xl lg:text-3xl text-primary-500">
                Trending Books
              </h1>
              <div className="items-center hidden gap-3 text-xl lg:flex text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight className="hover-preset-5" />
              </div>
            </div>
            <div className="flex gap-8 overflow-x-scroll lg:overflow-visible">
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
            </div>
          </div>
          <div className="mb-16 sm:mb-24">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h1 className="text-base font-bold sm:text-2xl lg:text-3xl text-primary-500">
                Exclusive Editions
              </h1>
              <div className="items-center hidden gap-3 text-xl lg:flex text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight className="hover-preset-5" />
              </div>
            </div>
            <div className="flex gap-8 overflow-x-scroll lg:overflow-visible">
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
              <Card
                cardSize="w-[16vw] lg:w-full min-w-24"
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
                cartDisplay="hidden lg:block"
                ratingDisplay="hidden lg:flex"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
