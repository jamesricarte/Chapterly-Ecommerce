import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SubtleArt from "../../assets/images/books/subtle_art.png";
import EgoEnemy from "../../assets/images/books/ego_is_the_enemy.png";
import SubtleArtJournal from "../../assets/images/books/the_subtle_journal.png";
import LawsOfPower from "../../assets/images/books/48laws_canva.png";
import DailyStoic from "../../assets/images/books/daily_stoic.png";
import { FaRegHeart } from "react-icons/fa";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Product = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Nav />
      <main className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 gap-6 mb-10 xl:mb-24 xl:mt-6 lg:grid-cols-2">
          <div className="flex justify-center">
            <img src={SubtleArt} alt="The Subtle Art of Not Giving a F*ck" />
          </div>
          <div>
            <p className="mb-2 text-xl font-semibold xl:text-2xl text-primary-500">
              $ 99.99
            </p>
            <h1 className="text-2xl font-semibold xl:text-4xl">
              THE SUBTLE ART OF NOT GIVING A F*CK
            </h1>
            <h2 className="mb-4 text-xl font-semibold xl:mb-8 xl:text-3xl text-secondary-500">
              MARK MANSON
            </h2>
            <div className="items-center hidden gap-2 mb-8 xl:flex">
              <p className="text-base font-semibold xl:text-lg">Quantity</p>
              <input
                className="w-24 p-1 mr-2 placeholder-black border border-black "
                type="number"
                min="1"
                max="100"
                placeholder="1"
              />
            </div>
            <div className="items-center hidden gap-4 mb-10 lg:flex ">
              <Link to="/cart" className="w-full xl:w-auto">
                <button className="xl:p-4 md:p-3 rounded text-sm text-white bg-primary-500 xl:w-[350px] hover-preset-1 w-full">
                  Add To Cart
                </button>
              </Link>
              <div className="flex gap-2 text-xl text-primary-500">
                <FaRegHeart />
                <FiShare2 />
              </div>
            </div>
            <p className="hidden mb-4 text-base text-gray-500 xl:text-lg lg:block">
              Some in-stack items may be delayed.
              <a className="text-black"> Learn more here</a>
            </p>
            <p
              className={`xl:mb-8 mb-2 text-sm leading-relaxed xl:text-lg ${
                expanded ? "" : "line-clamp-5"
              } `}
            >
              Mark Manson's The Subtle Art of Not Giving a Fck* challenges the
              traditional self-help mantra of constant positivity by advocating
              for a more realistic, grounded approach to life. The book
              emphasizes the importance of carefully choosing what to care
              about, as our energy and attention are limited. Manson argues that
              struggles and challenges give life meaning, and true happiness
              comes from solving problems that align with our values. By
              embracing responsibility, accepting failure, and letting go of the
              pursuit of being extraordinary, we can focus on what truly matters
              and live more authentically. Through humor and blunt honesty,
              Manson encourages readers to find fulfillment by caring less about
              trivial things and more about what’s meaningful.
            </p>
            <div className="flex items-center justify-center gap-1 mb-4 lg:justify-start">
              <button
                onClick={() => setExpanded(!expanded)}
                href=""
                className="text-sm font-light text-gray-500 xl:text-base "
              >
                {expanded ? "Show less" : "Continue Reading"}
              </button>
              <IoIosArrowDown className="lg:hidden" />
            </div>
            <div className="items-center gap-4 lg:hidden ">
              <Link to="/cart" className="w-full xl:w-auto">
                <button className="p-3 rounded text-sm text-white bg-primary-500 xl:w-[350px] hover-preset-1 w-full">
                  Add To Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-bold xl:text-3xl text-primary-500">
              Books Related
            </h1>
            <div className="items-center hidden gap-3 text-xl xl:flex text-primary-500">
              <FaCircleChevronLeft className="text-primary-100" />
              <FaCircleChevronRight />
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8">
              <Card
                image={EgoEnemy}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={SubtleArtJournal}
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
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-lg font-bold xl:text-3xl text-primary-500">
              Books You Might Like
            </h1>
            <div className="items-center hidden gap-3 text-xl xl:flex text-primary-500">
              <FaCircleChevronLeft className="text-primary-100" />
              <FaCircleChevronRight />
            </div>
          </div>
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 xl:gap-8">
              <Card
                image={EgoEnemy}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={SubtleArtJournal}
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
      </main>
      <Footer />
    </div>
  );
};

export default Product;
