import React from "react";
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
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-secondary-500" : "";
  return (
    <nav className="shadow-md">
      <div className="text-sm text-white bg-secondary-500">
        <div className="container flex justify-between p-2 mx-auto">
          <div className="flex gap-1">
            <Link to="/help">Help |</Link>
            <Link to="/help">FAQs |</Link>
            <Link to="/community">Support</Link>
          </div>

          <div>
            <p>
              Flash Sale! 📚 Get up to 30% off bestsellers – limited time only!
            </p>
          </div>

          <div className="flex items-center gap-2 text-md">
            <FaTiktok />
            <FaFacebook />
            <FaInstagram />
            <FaXTwitter />
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between p-4 mx-auto ">
        <Link to="/" className="flex items-center">
          <img className="w-10" src={Logo} alt="Chapterlys Logo" />
          <p className="ml-1 text-2xl italic text-primary-500">hapterly</p>
        </Link>
        <ul className="flex gap-[19px] text-lg ml-48 text-primary-500 cursor-pointer">
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
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              className="bg-[#ECEFF1] text-md rounded-3xl pl-10 pr-10 py-2 w-max focus:outline-none focus:ring-2 focus:ring-secondary-500 placeholder:text-secondary-500"
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
