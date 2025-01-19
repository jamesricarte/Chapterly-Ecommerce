import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="py-12 text-white bg-secondary-500">
        <div className="container grid grid-cols-1 gap-8 px-4 mx-auto lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 ">
          <div>
            <h1 className="mb-4 text-xl font-semibold">Need Help?</h1>
            <ul className="space-y-1 text-base md:text-lg">
              <li>FAQ</li>
              <li>Help</li>
              <li>Contact Us</li>
              <li>Customer Support</li>
              <li>Delivery Information</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-xl font-semibold">My Account</h1>
            <ul className="space-y-1 text-base md:text-lg">
              <li>Account</li>
              <li>Register</li>
              <li>View Cart</li>
              <li>Wishlist</li>
              <li>Track Orders</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-xl font-semibold">Follow Us</h1>
            <ul className="space-y-1 text-base md:text-lg">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Tiktok</li>
              <li>Youtube</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-xl font-semibold">Join Our Newsletter</h1>
            <p className="text-base">
              Enter your email to keep updated in our promotions!
            </p>
            <div className="flex flex-col gap-4 mt-5 xl:gap-0 xl:flex-row">
              <input
                className="w-full p-3 text-xs text-gray-500 xl:p-4 xl:flex focus:ring-1 focus:ring-primary-500 focus:outline-none"
                type="text"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="px-6 py-3 text-xs w-36 bg-primary-500 hover-preset-1 ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-white bg-black ">
        <div className="container flex flex-col items-center justify-between px-4 py-4 mx-auto text-xs text-center xl:text-base sm:flex-row sm:text-left">
          <p className="mb-2 sm:mb-0">
            © 2025 | Semicolon Inc. | All Rights Reserved.
          </p>
          <ul className="flex gap-4">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
