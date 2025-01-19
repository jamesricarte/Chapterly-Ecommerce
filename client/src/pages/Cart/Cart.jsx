import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import UserProfile from "../../assets/images/profiles/joy-yuri.png";
import ProductImage1 from "../../assets/images/products/subtle-art-journal.png";
import { FaStar } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineHeart } from "react-icons/hi";
import VisaLogo from "../../assets/images/brand_logos/visa-logo.png";
import MasterCardLogo from "../../assets/images/brand_logos/mastercard-logo.png";
import MaestroLogo from "../../assets/images/brand_logos/maestro-logo.svg";
import AmericanExpresLogo from "../../assets/images/brand_logos/american-express-logo.png";
import GooglePayLogo from "../../assets/images/brand_logos/google-pay-logo.png";
import PaypalLogo from "../../assets/images/brand_logos/paypal-logo.png";
import ApplePayLogo from "../../assets/images/brand_logos/apple-pay-logo.jpg";
import { FiDelete } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

const Cart = () => {
  return (
    <>
      <Nav />
      <main className=" bg-secondary-50">
        <div className="container flex flex-col gap-5 px-4 py-8 mx-auto lg:flex-row">
          <div className="flex flex-col flex-grow order-2 md:mt-3 lg:mt-0 lg:order-first">
            <div className="flex items-center w-full gap-4 bg-white shadow-md pl-9 py-7">
              <div className="sm:w-5 sm:h-5 w-4 h-4 md:w-6 md:h-6 border-[3px] border-primary-500 cursor-pointer"></div>
              <h3 className="text-base font-semibold sm:text-lg md:text-2xl text-primary-500">
                ALL ITEMS (2)
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 pl-5 mt-5 bg-white shadow-md sm:gap-5 sm:pl-8 py-7 pr-7 md:mt-9">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-[3px] border-primary-500 cursor-pointer"></div>
                  <div className="w-16 sm:w-20 md:w-40">
                    <img className="object-cover w-full" src={ProductImage1} />
                  </div>
                </div>

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-sm font-semibold text-black sm:text-lg md:text-2xl max-w-80">
                        THE SUBTLE ART OF NOT GIVING A F*CK
                      </h2>
                      <p className="font-semibold text-[#CECECE] text-xs sm:text-sm md:text-base">
                        In stock
                      </p>
                    </div>
                    <h3 className="text-xs font-semibold sm:text-sm md:text-xl text-secondary-300">
                      MARK MANSON
                    </h3>
                    <div className="flex gap-2 mt-3 mb-2 text-xs md:mb-0 sm:text-sm md:text-lg text-primary-300">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <h4 className="text-sm font-semibold sm:text-base md:text-xl text-primary-500">
                      $12.95
                    </h4>
                    <div className="flex items-center gap-1 sm:gap-3 text-primary-500">
                      <div className="border-2 border-[#CECECE] md:py-1 md:px-6 flex items-center gap-1 sm:gap-3 cursor-pointer">
                        <h5 className="text-xs font-medium sm:text-sm md:text-base">
                          Qty: 1
                        </h5>
                        <BsChevronDown className="text-xs md:text-lg" />
                      </div>

                      <div className="flex items-center gap-1 text-lg sm:gap-3 sm:text-xl md:text-2xl text-primary-500">
                        <IoIosSearch className="cursor-pointer" />
                        <HiOutlineHeart className="cursor-pointer" />
                        <RiDeleteBinLine className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full lg:w-[500px] order-1 lg:order-last">
            <div className="flex flex-col gap-3 bg-white shadow-md lg:w-full p-7">
              <h3 className="mt-1 mb-2 text-lg font-semibold sm:text-2xl text-primary-500">
                Order Summary
              </h3>
              <div className="flex justify-between mb-1 text-sm sm:text-base">
                <p className="text-[#484848]">Subtotal(3 Items):</p>
                <p className="text-[#484848]">$33.57</p>
              </div>
              <div className="flex justify-between text-sm sm:text-base">
                <p className="text-[#484848]">Estimated Shipping Fee:</p>
                <p className="text-[#484848]">$4.99</p>
              </div>
              <div className="h-[1px] bg-secondary-500 mt-3"></div>
              <div className="flex justify-between text-sm sm:text-base">
                <p className="text-[#484848] font-semibold mb-2">Total</p>
                <p className="text-[#484848] font-semibold">$38.56</p>
              </div>
              <button className="w-full py-3 text-sm font-bold text-white sm:text-base px-11 bg-primary-500 hover-preset-1">
                Checkout Now
              </button>
            </div>

            <div className="hidden bg-white shadow-md p-7 lg:block">
              <h3 className="mb-3 text-2xl font-semibold text-primary-500">
                We Accept
              </h3>
              <div className="grid items-center grid-cols-4">
                <img src={VisaLogo} />
                <img src={MasterCardLogo} />
                <img
                  className="w-[60px] h-[46.3px] object-cover"
                  src={MaestroLogo}
                />
                <img src={AmericanExpresLogo} />
                <img src={GooglePayLogo} />
                <img src={PaypalLogo} />
                <img src={ApplePayLogo} />
              </div>
            </div>

            <div className="items-center justify-between hidden py-4 shadow-md lg:flex px-7 bg-secondary-100">
              <div>
                <h4 className="font-semibold text-[#484848]">
                  20% Discount Voucher
                </h4>
                <p className="text-[#484848] text-sm">
                  Spend ₱1,000 to get 20% Off!
                </p>
              </div>
              <div>
                <button className="py-2 text-xs text-white px-7 bg-primary-500 hover-preset-1 ">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="items-center justify-between hidden py-4 shadow-md lg:flex px-7 bg-secondary-100">
              <div>
                <h4 className="font-semibold text-[#484848]">
                  20% Discount Voucher
                </h4>
                <p className="text-[#484848] text-sm">
                  Spend ₱1,000 to get 20% Off!
                </p>
              </div>
              <div>
                <button className="py-2 text-xs text-white px-7 bg-primary-500 hover-preset-1">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Cart;
