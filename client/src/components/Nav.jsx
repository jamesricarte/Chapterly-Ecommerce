import React, { useState } from "react";
import Logo from "../assets/images/logo/temp_logo.png";
import {
  FaSearch,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-secondary-500" : "";
  return (
    <nav className="w-full shadow-md ">
      <div className="text-sm text-white bg-secondary-500">
        <div className="container flex flex-wrap items-center justify-between p-2 mx-auto">
          <div className="hidden gap-1 lg:block">
            <Link to="/help">Help |</Link>
            <Link to="/help">FAQs |</Link>
            <Link to="/community">Support</Link>
          </div>

          <div className="flex-grow text-xs text-center xl:w-0 xl:text-base">
            <p>
              Flash Sale! 📚 Get up to 30% off bestsellers – limited time only!
            </p>
          </div>

          <div className="items-center hidden gap-2 text-md lg:flex">
            <FaTiktok />
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
      </div>

      <div className="container relative flex items-center justify-between gap-4 p-4 mx-auto xl:gap-0 ">
        <Link to="/" className="items-center hidden xl:flex">
          <img className="w-10" src={Logo} alt="Chapterlys Logo" />
          <p className="ml-1 text-2xl italic text-primary-500">hapterly</p>
        </Link>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu className="block text-4xl xl:hidden text-primary-500" />
        </button>

        <ul className="hidden gap-4 text-lg text-primary-500 xl:flex">
          <li className={`hover:text-secondary-500 ${isActive("/")}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/shop")}`}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/about")}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/contact")}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/deals")}`}>
            <Link to="/deals">Deals</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/community")}`}>
            <Link to="/community">Community</Link>
          </li>
        </ul>

        {console.log(isMenuOpen)}

        {/* Mobile Nav */}
        <ul
          className={`${
            isMenuOpen
              ? "flex flex-col  w-52 absolute top-16 left-12 bg-white shadow-md p-4 z-50 transition-all duration-300 ease-in-out"
              : "hidden"
          } flex xl:hidden text-primary-500 text-lg`}
        >
          <li className={`hover:text-secondary-500  ${isActive("/")}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/shop")}`}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/about")}`}>
            <Link to="/about">About</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/contact")}`}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/deals")}`}>
            <Link to="/deals">Deals</Link>
          </li>
          <li className={`hover:text-secondary-500 ${isActive("/community")}`}>
            <Link to="/community">Community</Link>
          </li>
        </ul>

        <div className="flex items-center w-full gap-4 lg:w-max">
          <div className="relative flex-grow">
            <input
              type="text"
              className="bg-[#ECEFF1] text-md w-full rounded-3xl pl-10 pr-10 py-2  focus:outline-none focus:ring-2 focus:ring-secondary-500 placeholder:text-secondary-500"
              placeholder="Search a book"
            />
            <FaSearch className="absolute text-md transform-translate-y-1/2 top-1/3 left-3 text-secondary-500" />
          </div>
          <div className="flex items-center gap-3 text-lg text-secondary-500">
            <Link to="/user">
              <FaUser className="transition duration-200 ease-in-out hover:text-primary-500" />
            </Link>
            <Link to="/cart">
              <FaShoppingCart className="transition duration-200 ease-in-out hover:text-primary-500" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
