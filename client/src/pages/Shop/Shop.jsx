import React from "react";
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import { FaAngleDown, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import SubtleArt from "../../assets/images/books/the_subtle_journal.png";
import EgoEnemy from "../../assets/images/books/ego_is_the_enemy.png";
import LawsOfPower from "../../assets/images/books/48laws_canva.png";
import DailyStoic from "../../assets/images/books/daily_stoic.png";
import Footer from "../../components/Footer";
import Banner1 from "../../assets/images/banners/bigBookSale_banner.jpg";

const Shop = () => {
  return (
    <div>
      <Nav />
      <main>
        <div className="w-auto md:px-4 md:container md:mx-auto md:mt-8 ">
          <img src={Banner1} alt="" className="w-full shadow-md" />
        </div>
        <div className="container px-4 py-8 mx-auto">
          <div className="flex justify-between mt-8">
            <div className="items-center hidden text-primary-500 xl:block">
              <div className="flex items-center gap-3 mb-4">
                <FiFilter className="text-3xl" />
                <h2 className="text-2xl font-semibold">Search Filter</h2>
              </div>
              <h3 className="mb-4 text-xl">By Book Genre</h3>
              <div className="mb-4 ">
                <label className="flex mb-2 text-lg font-light ">
                  <input type="checkbox" className="mr-2" />
                  Romance
                </label>
                <label className="flex mb-2 text-lg font-light">
                  <input type="checkbox" className="mr-2" />
                  Fiction
                </label>
                <label className="flex mb-2 text-lg font-light">
                  <input type="checkbox" className="mr-2" />
                  Mystery
                </label>
                <p className="flex items-center gap-2 mt-4 mb-4 text-lg font-light">
                  More
                  <FaAngleDown />
                </p>
                <hr className="w-48 border-primary-500" />
              </div>
              <h3 className="mb-4 text-xl ">Ratings</h3>
              <div className="mb-4">
                <div className="flex gap-3 mb-3 text-lg text-primary-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex gap-3 mb-2 text-lg text-primary-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <p className="text-base font-light">& Up</p>
                </div>
                <div className="flex gap-3 mb-2 text-lg text-primary-300">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                  <p className="text-base font-light">& Up</p>
                </div>
                <p className="flex items-center gap-2 mt-4 mb-4 text-lg font-light">
                  More
                  <FaAngleDown />
                </p>
                <hr className="w-48 mb-4 border-primary-500" />
                <h3 className="mb-2 text-xl">Price Range</h3>
                <div className="flex items-center mb-4">
                  <input
                    className="w-1/2 p-1 mr-2 border"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Min"
                  />
                  <input
                    className="w-1/2 p-1 mr-2 border "
                    type="number"
                    min="0"
                    max="100"
                    placeholder="Max"
                  />
                </div>
                <button className="w-full p-3 mb-4 text-sm text-white bg-primary-500 hover-preset-1">
                  Apply
                </button>
                <hr className="w-48 mb-4 border-primary-500" />
                <button className="w-full p-3 text-sm text-white bg-primary-500 hover-preset-1">
                  Clear All
                </button>
              </div>
            </div>

            <div className="xl:mt-12">
              <div className="mb-12 ">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-xl font-bold xl:text-3xl text-primary-500">
                    Best Selling
                  </h1>
                  <div className="items-center hidden gap-3 text-xl xl:flex text-primary-500">
                    <FaCircleChevronLeft className="text-primary-100" />
                    <FaCircleChevronRight className=" hover-preset-5" />
                  </div>
                  <div className="flex items-center gap-1 mb-4 mr-7 xl:hidden text-primary-500">
                    <FiFilter className="text-sm" />
                    <h2 className="text-xs font-semibold">Search Filter</h2>
                  </div>
                </div>
                <div className="overflow-x-auto scroll-smooth scrollbar-hide">
                  <div className="flex gap-8">
                    <Card
                      image={EgoEnemy}
                      author="Ryan Holiday"
                      price="$ 59.99"
                      genre="Self Improvement"
                      link="/product"
                    />
                    <Card
                      image={SubtleArt}
                      author="Mark Manson"
                      price="$ 120.99"
                      genre="Self Improvement"
                      link="/product"
                    />
                    <Card
                      image={LawsOfPower}
                      author="Robert Greene"
                      price="$ 66.99"
                      genre="Mental Fortitude"
                      link="/product"
                    />
                    <Card
                      image={DailyStoic}
                      author="Ryan Holiday"
                      price="$ 88.99"
                      genre="History"
                      link="/product"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-12 ">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-xl font-bold xl:text-3xl text-primary-500">
                    40% Sale
                  </h1>
                  <div className="items-center hidden gap-3 text-xl xl:flex text-primary-500">
                    <FaCircleChevronLeft className="text-primary-100" />
                    <FaCircleChevronRight className=" hover-preset-5" />
                  </div>
                </div>
                <div className="overflow-x-auto scroll-smooth scrollbar-hide">
                  <div className="flex gap-8">
                    <Card
                      image={EgoEnemy}
                      author="Ryan Holiday"
                      price="$ 59.99"
                      genre="Self Improvement"
                      link="/product"
                    />
                    <Card
                      image={SubtleArt}
                      author="Mark Manson"
                      price="$ 120.99"
                      genre="Self Improvement"
                      link="/product"
                    />
                    <Card
                      image={LawsOfPower}
                      author="Robert Greene"
                      price="$ 66.99"
                      genre="Mental Fortitude"
                      link="/product"
                    />
                    <Card
                      image={DailyStoic}
                      author="Ryan Holiday"
                      price="$ 88.99"
                      genre="History"
                      link="/product"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-14 ">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-xl font-bold xl:text-3xl text-primary-500">
                    Pre Orders
                  </h1>
                  <div className="items-center hidden gap-3 text-xl text-primary-500 xl:flex">
                    <FaCircleChevronLeft className="text-primary-100" />
                    <FaCircleChevronRight className=" hover-preset-5" />
                  </div>
                </div>
                <div className="overflow-x-auto scroll-smooth scrollbar-hide">
                  <div className="flex gap-8 ">
                    <Card
                      image={EgoEnemy}
                      author="Ryan Holiday"
                      price="$ 59.99"
                      genre="Self Improvement"
                      link="/product"
                    />
                    <Card
                      image={SubtleArt}
                      author="Mark Manson"
                      price="$ 120.99"
                      genre="Self Improvement"
                      link="/product"
                    />
                    <Card
                      image={LawsOfPower}
                      author="Robert Greene"
                      price="$ 66.99"
                      genre="Mental Fortitude"
                      link="/product"
                    />
                    <Card
                      image={DailyStoic}
                      author="Ryan Holiday"
                      price="$ 88.99"
                      genre="History"
                      link="/product"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center mb-10">
                <nav>
                  <ul className="flex items-center space-x-4 text-xs xl:text-base">
                    <li>
                      <button className="flex items-center justify-center w-5 h-5 rounded-full xl:w-7 xl:h-7 bg-primary-100 text-primary-500">
                        1
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                        2
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                        3
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                        4
                      </button>
                    </li>
                    <li>
                      <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                        5
                      </button>
                    </li>
                    <li className=" text-primary-500">
                      <FaCircleChevronRight className="text-lg xl:text-2xl hover-preset-5" />
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
