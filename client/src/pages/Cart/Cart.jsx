import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import UserProfile from "../../assets/images/profiles/joy-yuri.png";
import ProductImage1 from "../../assets/images/products/subtle-art-journal.png";
import { FaStar } from "react-icons/fa";

const Cart = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center gap-4 pt-12 bg-[#F3F9F9] pb-36">
        <div className="flex flex-col">
          <div className="shadow-lg">
            <div className="flex flex-col items-center py-8 rounded-b-full px-14 bg-secondary-300">
              <img className="rounded-full w-36 h-36" src={UserProfile} />
              <h3 className="mt-2 text-xl font-semibold text-primary-500">
                Jo Yu-ri
              </h3>
              <p className="text-xs text-white">Edit Profile</p>
            </div>
            <div className="flex flex-col gap-1 p-6 text-sm">
              <p className="text-primary-300">joyuri@gmail.com</p>
              <p className="text-primary-300">095666082678</p>
              <p className="text-primary-300">Brgy. 6, JamesRicarts</p>
              <p className="text-primary-300">January 3, 2022</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-5">
            <h3 className="text-lg font-semibold text-primary-500">
              Account Settings
            </h3>
            <h3 className="text-lg font-semibold text-primary-500">
              My Purchase
            </h3>
            <h3 className="text-lg font-semibold text-primary-500">
              My Vouchers
            </h3>
            <h3 className="text-lg font-semibold text-primary-500">
              Notifications
            </h3>
          </div>
        </div>
        <div className="w-[65vw] flex flex-col gap-7">
          <div className="flex gap-4 p-6 bg-white shadow-md">
            <h2 className="text-lg font-semibold cursor-pointer text-primary-500">
              All
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              To Pay
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              To Ship
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              To Receive
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              Completed
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              Canceled
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              Returned
            </h2>
            <h2 className="text-lg font-semibold cursor-pointer text-primary-200">
              Refund
            </h2>
          </div>

          <div className="flex p-6 bg-white shadow-md gap-7">
            <div className="w-36">
              <img className="object-cover w-full" src={ProductImage1} />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-xl font-semibold text-black">
                    THE SUBTLE ART OF NOT GIVING A F*CK
                  </h2>
                  <button className="p-1.5 font-semibold border border-gray-300 text-primary-500">
                    Cancel Order
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-secondary-300">
                  MARK MANSON
                </h3>
                <div className="flex gap-2 mt-3">
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                </div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-primary-500">
                  $12.95
                </h4>
                <div className="flex items-center gap-3">
                  <h5 className="text-sm font-semibold text-primary-300">
                    Delivery Status
                  </h5>
                  <p className="text-lg font-thin text-[#006D77]">|</p>
                  <h5 className="text-sm font-semibold text-gray-200">
                    To Ship
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-6 bg-white shadow-md gap-7">
            <div className="w-36">
              <img className="object-cover w-full" src={ProductImage1} />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-xl font-semibold text-black">
                    THE SUBTLE ART OF NOT GIVING A F*CK
                  </h2>
                  <button className="p-1.5 font-semibold border border-gray-300 text-primary-500">
                    Cancel Order
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-secondary-300">
                  MARK MANSON
                </h3>
                <div className="flex gap-2">
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                </div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-primary-500">
                  $12.95
                </h4>
                <div className="flex items-center gap-3">
                  <h5 className="text-sm font-semibold text-primary-300">
                    Delivery Status
                  </h5>
                  <p className="text-lg font-thin text-[#006D77]">|</p>
                  <h5 className="text-sm font-semibold text-gray-200">
                    To Ship
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-6 bg-white shadow-md gap-7">
            <div className="w-36">
              <img className="object-cover w-full" src={ProductImage1} />
            </div>
            <div className="flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-xl font-semibold text-black">
                    THE SUBTLE ART OF NOT GIVING A F*CK
                  </h2>
                  <button className="p-1.5 font-semibold border border-gray-300 text-primary-500">
                    Cancel Order
                  </button>
                </div>
                <h3 className="text-lg font-semibold text-secondary-300">
                  MARK MANSON
                </h3>
                <div className="flex gap-2">
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                  <FaStar color="#549DA4" size="15" />
                </div>
              </div>
              <div className="flex justify-between">
                <h4 className="text-xl font-semibold text-primary-500">
                  $12.95
                </h4>
                <div className="flex items-center gap-3">
                  <h5 className="text-sm font-semibold text-primary-300">
                    Delivery Status
                  </h5>
                  <p className="text-lg font-thin text-[#006D77]">|</p>
                  <h5 className="text-sm font-semibold text-gray-200">
                    To Ship
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
