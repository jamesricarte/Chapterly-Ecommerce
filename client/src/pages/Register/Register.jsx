import React from "react";
import Logo from "../../assets/images/logo/Logo.png";
import GoogleLogo from "../../assets/images/brand_logos/google.webp";
import FacebookLogo from "../../assets/images/brand_logos/facebook.png";
import AppleLogo from "../../assets/images/brand_logos/apple.png";
import backgroundImage from "../../assets/images/backgrounds/BG_Auth.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="flex min-h-screen">
        <div
          className="bg-cover w-[66%] min-h-screen flex flex-col justify-center pl-[7%] rounded-tr-[140px] relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="bg-gradient-1 w-full h-full absolute opacity-75 left-0 top-0 rounded-tr-[140px]"></div>

          <div className="flex items-center mb-24 z-10">
            <img className="w-16" src={Logo} />
            <h3 className="font-medium text-white text-3xl italic">hapterly</h3>
          </div>
          <div className="text-white flex flex-col gap-3 z-10">
            <h1 className="font-bold text-6xl">"</h1>
            <h1 className="font-bold text-6xl">Buying Books</h1>
            <h3 className="font-medium text-4xl">was away anyone could</h3>
            <h4 className="text-3xl">acquire a work of art for very little.</h4>

            <p className="text-xl mt-4">__</p>
            <p className="text-2xl italic">Sol LeWitt</p>
          </div>
          <p className="text-white mt-24 text-xl z-10">
            Sign up now and enjoy 15% off your first order!
          </p>
        </div>

        <div className="flex flex-col justify-center items-center flex-1">
          <div className="w-[70%]">
            <div className="mb-6">
              <h3 className="font-bold text-3xl text-primary-500 mb-2">
                Sign up
              </h3>
              <p className="text-xs">
                Join us! Create an account to explore a world of books and enjoy
                exclusive offers.
              </p>
            </div>

            <form action="">
              <div className="flex gap-4">
                <div className="flex flex-col mb-3">
                  <label
                    className="text-sm text-primary-500 font-medium mb-1.5"
                    htmlFor="first-name"
                  >
                    First Name
                  </label>
                  <input
                    className="border p-2 rounded-md"
                    id="first-name"
                    type="text"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label
                    className="text-sm text-primary-500 font-medium mb-1.5"
                    htmlFor="last-name"
                  >
                    Last Name
                  </label>
                  <input
                    className="border p-2 rounded-md"
                    id="last-name"
                    type="email"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-3">
                <label
                  className="text-sm text-primary-500 font-medium mb-1.5"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="border p-2 rounded-md"
                  id="email"
                  type="email"
                />
              </div>

              <div className="flex flex-col">
                <label
                  className="text-sm text-primary-500 font-medium mb-1.5"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="border p-2 rounded-md"
                  id="password"
                  type="password"
                />
              </div>
              <div className="flex items-center my-4">
                <div>
                  <input type="checkbox" id="agreement" />
                  <label className="ml-2 text-sm" htmlFor="agreement">
                    I Agree to the
                  </label>
                </div>
                <Link to="" className="text-secondary-500 text-sm">
                  &nbsp;Terms & Condition and Privacy Policy
                </Link>
              </div>
              <button className="bg-primary-500 text-white font-bold p-2 w-full rounded-md">
                Sign Up
              </button>
            </form>

            <div className="flex items-center mt-9 mb-10">
              <div className="h-[1px] w-full bg-black"></div>
              <p className="min-w-28 text-center text-sm">Or signup with</p>
              <div className="h-[1px] w-full bg-black"></div>
            </div>

            <button className="bg-white p-[8px] w-full rounded-md border-2 mb-4 text-sm flex justify-center items-center gap-1">
              <img className="w-7" src={GoogleLogo} />
              Google
            </button>
            <button className="bg-custom-facebookColor text-white p-[11px] w-full rounded-md mb-4 text-sm flex justify-center items-center gap-1">
              <img className="w-7" src={FacebookLogo} />
              Facebook
            </button>
            <button className="bg-custom-appleBg text-white p-[9px] w-full rounded-md text-sm flex justify-center items-center gap-2">
              <img className="w-5 mb-1" src={AppleLogo} />
              Apple
            </button>
            <p className="mt-12 text-sm">
              Already have an account?
              <Link to="/login" className="text-teal-300">
                &nbsp;Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
