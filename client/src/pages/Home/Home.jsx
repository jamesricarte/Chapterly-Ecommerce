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

        <section className="py-16 mb-16 bg-gradient-2">
          <div className="container px-4 mx-auto">
            <h2 className="text-xl font-bold text-white">
              Popular Book Genres
            </h2>
            <div className="relative flex mt-9">
              <div className="flex flex-wrap space-x-4 justify-evenly">
                <Link to="/shop">
                  <img
                    className="object-cover w-72 hover-preset-4 "
                    src={BookGenresImage1}
                  />
                </Link>
                <Link to="/shop">
                  <img
                    className="object-cover hover-preset-4 w-72 "
                    src={BookGenresImage2}
                  />
                </Link>
                <Link to="/shop">
                  <img
                    className="object-cover hover-preset-4 w-72"
                    src={BookGenresImage3}
                  />
                </Link>
                <Link to="/shop">
                  <img
                    className="object-cover hover-preset-4 w-72"
                    src={BookGenresImage4}
                  />
                </Link>
                <Link to="/shop">
                  <img
                    className="object-cover w-72 hover-preset-4"
                    src={BookGenresImage5}
                  />
                </Link>
              </div>
              <div className="absolute p-3 transform -translate-y-1/2 bg-white rounded-full cursor-pointer -right-5 top-1/2">
                <HiOutlineChevronRight color="#006D77" size="30" />
              </div>
            </div>

            <h3 className="text-6xl text-center text-white mt-14 font-Pattaya">
              -Find Your Next Great Read
            </h3>
            <div className="grid grid-cols-2 gap-1 mt-8">
              <div className="relative flex items-center justify-center">
                <img className="w-full hover-preset-6" src={PromotionImage1} />
                <Link
                  to="/shop"
                  className="absolute px-11 py-3 text-xs font-bold text-white bg-primary-500 rounded-xl bottom-[26%] left-[14%] hover-preset-1"
                >
                  Buy now
                </Link>
                <div className="absolute flex gap-3 px-5 py-3 transform -translate-x-1/2 bg-white rounded-full bottom-12 left-1/2">
                  <div className="w-5 h-5 rounded-full bg-primary-500"></div>
                  <div className="w-5 h-5 rounded-full bg-secondary-200"></div>
                  <div className="w-5 h-5 rounded-full bg-secondary-200"></div>
                  <div className="w-5 h-5 rounded-full bg-secondary-200"></div>
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
                    className="absolute px-11 py-3 text-xs font-bold text-white bg-primary-500 rounded-xl bottom-[11%] left-[6.5%] hover-preset-1"
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
                  <div className="flex flex-col items-center justify-center w-full h-full rounded-md bg-primary-500">
                    <p className="text-xl text-white">Christmas Sale</p>
                    <h3 className="text-2xl font-bold text-white">
                      20% Discount
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-primary-500">
                Recommendations
              </h1>
              <div className="flex items-center gap-3 text-xl text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight className="hover-preset-5" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
              />
              <Card
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
              />
            </div>
          </div>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-primary-500">
                Trending Books
              </h1>
              <div className="flex items-center gap-3 text-xl text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight className="hover-preset-5" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
              />
              <Card
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
              />
            </div>
          </div>
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-primary-500">
                Exclusive Editions
              </h1>
              <div className="flex items-center gap-3 text-xl text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight className="hover-preset-5" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
              />
              <Card
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
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
