import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SubtleArt from "../../assets/images/books/subtle_art.png";
import EgoEnemy from "../../assets/images/books/ego_is_the_enemy.png";
import SubtleArtJournal from "../../assets/images/books/the_subtle_journal.png";
import LawsOfPower from "../../assets/images/books/48laws_canva.png";
import DailyStoic from "../../assets/images/books/daily_stoic.png";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaRegHeart,
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Nav />
      <main className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-2 gap-6 mt-6 mb-24">
          <div className="flex justify-center">
            <img src={SubtleArt} alt="The Subtle Art of Not Giving a F*ck" />
          </div>
          <div>
            <p className="mb-2 font-semibold text-primary-500">$ 99.99</p>
            <h1 className="text-2xl font-semibold">
              THE SUBTLE ART OF NOT GIVING A F*CK
            </h1>
            <h2 className="mb-4 text-xl font-semibold text-secondary-500">
              MARK MANSON
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <p className="text-sm font-semibold">Quantity</p>
              <input
                className="w-24 p-1 mr-2 placeholder-black border border-black "
                type="number"
                min="1"
                max="100"
                placeholder="1"
              />
            </div>
            <div className="flex items-center gap-4 mb-10 ">
              <Link to="/cart">
                <button className="p-3 rounded text-sm text-white bg-primary-500 w-[350px] hover-preset-1">
                  Add To Cart
                </button>
              </Link>
              <div className="flex gap-2 text-lg text-primary-500">
                <FaRegHeart />
                <FiShare2 />
              </div>
            </div>
            <p className="mb-4 text-gray-500 text-md">
              Some in-stack items may be delayed.
              <a className="text-black"> Learn more here</a>
            </p>
            <p className="mb-8 leading-relaxed text-md">
              A refreshingly raw and honest guide to living a meaningful life by
              focusing only on what truly matters. Packed with humor, blunt
              wisdom, and no-nonsense advice, this book challenges the obsession
              with positivity and teaches you the liberating power of embracing
              struggles and failures. It's about prioritizing your values,
              ditching superficial expectations, and living authentically in a
              chaotic world. With...
            </p>
            <a
              href=""
              className="text-sm font-light text-gray-500 hover:underline"
            >
              FULL DESCRIPTION
            </a>
          </div>
        </div>
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-primary-500">
              Books Related
            </h1>
            <div className="flex items-center gap-3 text-xl text-primary-500">
              <FaChevronCircleLeft className="text-primary-100" />
              <FaChevronCircleRight />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          </div>
        </div>
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-primary-500">
              Books You Might Like
            </h1>
            <div className="flex items-center gap-3 text-xl text-primary-500">
              <FaChevronCircleLeft className="text-primary-100" />
              <FaChevronCircleRight />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
