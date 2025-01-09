import React from "react";
import Logo from "../assets/images/logo/temp_logo.png";
import {
  FaSearch,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="shadow-md">
      <div className="text-xs text-white bg-secondary-500">
        <div className="container flex justify-between p-2 mx-auto">
          <div className="flex gap-1">
            <p>Help |</p>
            <p>FAQs |</p>
            <p>Support</p>
          </div>

          <div>
            <p>
              Flash Sale! 📚 Get up to 30% off bestsellers – limited time only!
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <FaTiktok />
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between p-4 mx-auto ">
        <div className="flex items-center">
          <img className="w-8" src={Logo} alt="Chapterlys Logo" />
          <p className="ml-1 text-xl italic text-primary-500">hapterly</p>
        </div>
        <ul className="flex gap-[19px] text-sm text-primary-500 cursor-pointer">
          <li className="hover:text-secondary-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-secondary-500">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-secondary-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-secondary-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-secondary-500">
            <Link to="/deals">Deals</Link>
          </li>
          <li className="hover:text-secondary-500">
            <Link to="/community">Community</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              className="bg-[#ECEFF1] text-xs rounded-2xl pl-8 pr-2 py-2 w-max focus:outline-none focus:ring-2 focus:ring-secondary-500 placeholder:text-secondary-500"
              placeholder="Search a book"
            />
            <FaSearch className="absolute text-xs transform-translate-y-1/2 top-1/3 left-3 text-secondary-500" />
          </div>
          <div className="flex items-center gap-3 text-md text-secondary-500">
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
