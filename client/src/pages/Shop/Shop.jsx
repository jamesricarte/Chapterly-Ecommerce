import React from "react";
import Nav from "../../components/Nav";
import {
  FaAngleDown,
  FaRegStar,
  FaStar,
  FaStarHalf,
  FaStarHalfAlt,
} from "react-icons/fa";
import Card from "../../components/Card";

const Shop = () => {
  return (
    <div>
      <Nav />
      <main className="container px-4 py-8 mx-auto">
        <div className="relative flex flex-col items-center justify-center h-64 text-white rounded-lg shadow-md bg-gradient-1">
          <h1 className="text-4xl font-semibold">Welcome to Our Shop</h1>
          <p className="mt-2 text-lg">
            Enjoy our exclusive promotions and Offers
          </p>
        </div>
        <div className="flex gap-6 mt-8">
          <div className="w-0/4 text-primary-500">
            <h2 className="mb-4 text-xl font-semibold">Search Filter</h2>
            <h3 className="mb-4 text-md ">By Book Genre</h3>
            <div className="mb-4 ">
              <label className="flex mb-2 text-sm font-light ">
                <input type="checkbox" className="mr-2" />
                Romance
              </label>
              <label className="flex mb-2 text-sm font-light">
                <input type="checkbox" className="mr-2" />
                Fiction
              </label>
              <label className="flex mb-2 text-sm font-light">
                <input type="checkbox" className="mr-2" />
                Mystery
              </label>
              <p className="flex items-center gap-2 mt-4 mb-4 text-sm font-light">
                More
                <FaAngleDown />
              </p>
              <hr className="w-48 border-primary-500" />
            </div>
            <h3 className="mb-4 text-md ">Ratings</h3>
            <div className="mb-4">
              <div className="flex gap-3 mb-3 text-secondary-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="flex gap-3 mb-2 text-secondary-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />
                <p className="text-sm font-light">& Up</p>
              </div>
              <div className="flex gap-3 mb-2 text-secondary-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
                <FaRegStar />
                <p className="text-sm font-light">& Up</p>
              </div>
              <p className="flex items-center gap-2 mt-4 mb-4 text-sm font-light">
                More
                <FaAngleDown />
              </p>
              <hr className="w-48 mb-4 border-primary-500" />
              <h3 className="mb-2 text-md">Price Range</h3>
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
              <button className="w-[200px] text-sm p-2 text-white bg-primary-500 mb-4">
                Apply
              </button>
              <hr className="w-48 mb-4 border-primary-500" />
              <button className="w-[200px] text-sm p-2 text-white bg-primary-500">
                Clear All
              </button>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <h1 className="mb-4 text-2xl font-bold text-primary-500">
                Best Selling
              </h1>
              <div className="grid grid-cols-4 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Shop;
