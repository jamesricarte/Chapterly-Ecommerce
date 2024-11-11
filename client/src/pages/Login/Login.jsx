import React from "react";
import Logo from "../../assets/images/logo/temp_logo.png";
import GoogleLogo from "../../assets/images/brand_logos/google.webp";
import FacebookLogo from "../../assets/images/brand_logos/facebook.png";
import AppleLogo from "../../assets/images/brand_logos/apple.png";

const Login = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-gradient-1 w-[66%] flex flex-col justify-center h-screen pl-[7%] rounded-tr-[140px]">
          <div className="flex items-center mb-24">
            <img className="w-16" src={Logo} />
            <h3 className="font-medium text-white text-3xl italic">hapterly</h3>
          </div>
          <div className="text-white flex flex-col gap-3">
            <h1 className="font-bold text-6xl">"</h1>
            <h1 className="font-bold text-6xl">He that loves</h1>
            <h3 className="font-medium text-4xl">reading has everything</h3>
            <h4 className="text-3xl">within his reach.</h4>

            <p className="text-xl mt-4">__</p>
            <p className="text-2xl italic">William Godwin</p>
          </div>
          <p className="text-white mt-24 text-xl">
            Get 10% off your next purchase by logging in today!
          </p>
        </div>

        <div className="flex flex-col justify-center items-center  flex-1">
          <div className="w-[70%]">
            <div className="mb-6">
              <h3 className="font-bold text-3xl text-primary-500 mb-2">
                Login
              </h3>
              <p className="text-xs">
                Welcome back! Log in to access your favorite books and
                personalized recommendations.
              </p>
            </div>

            <form action="">
              <div className="flex flex-col mb-3">
                <label
                  className="text-sm text-primary-500 font-medium"
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
                  className="text-sm text-primary-500 font-medium"
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
              <div className="flex my-4 justify-between">
                <div>
                  <input type="checkbox" id="remember-me" />
                  <label className="ml-2 text-sm" htmlFor="remember-me">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-secondary-500 text-sm">
                  Forgot password?
                </a>
              </div>
              <button className="bg-primary-500 text-white font-bold p-2 w-full rounded-md">
                Login
              </button>
            </form>

            <div className="flex items-center mt-9 mb-10">
              <div className="h-[1px] w-full bg-black"></div>
              <p className="min-w-28 text-center text-sm">Or login with</p>
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
              Don't have an account?{" "}
              <a href="#" className="text-teal-300">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
