import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="z-10 py-12 text-white bg-secondary-500">
        <div className="container grid grid-cols-4 px-4 mx-auto">
          <div>
            <h1 className="mb-4 text-2xl font-semibold">Need Help?</h1>
            <ul>
              <li>FAQ</li>
              <li>Help</li>
              <li>Contact Us</li>
              <li>Customer Support</li>
              <li>Delivery Information</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-2xl font-semibold">My Account</h1>
            <ul>
              <li>Account</li>
              <li>Register</li>
              <li>View Cart</li>
              <li>Wishlist</li>
              <li>Track Orders</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-2xl font-semibold">Follow Us</h1>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Tiktok</li>
              <li>Youtube</li>
              <li>Pinterest</li>
            </ul>
          </div>
          <div>
            <h1 className="mb-4 text-2xl font-semibold">Join Our Newsletter</h1>
            <p>Enter your email to keep updated in our promotions!</p>
            <div className="flex mt-5">
              <input
                className="w-full px-4 text-xs text-gray-500 focus:ring-1 focus:ring-primary-500 focus:outline-none"
                type="text"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="p-3 text-xs bg-primary-500 hover-preset-1">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-white bg-black ">
        <div className="container flex justify-between px-4 py-4 mx-auto">
          <p>© 2025 | Semicolon Inc. | All Rights Reserved.</p>
          <ul className="flex gap-10">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
