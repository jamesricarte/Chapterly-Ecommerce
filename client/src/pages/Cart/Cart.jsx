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

const Cart = () => {
  return (
    <>
      <Nav />
      <div className=" bg-secondary-50">
        <div className="container flex h-screen gap-10 px-4 py-8 mx-auto ">
          <div className="flex flex-col ">
            <div className="flex items-center gap-4 bg-white shadow-md pl-9 py-7">
              <div className="w-8 h-8 border-[3px] border-primary-500"></div>
              <h3 className="text-[28px] font-semibold text-primary-500">
                ALL ITEMS (2)
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-5 pl-8 bg-white shadow-md p-7 mt-9">
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 border-[3px] border-primary-500"></div>
                  <div className="w-40">
                    <img className="object-cover w-full" src={ProductImage1} />
                  </div>
                </div>

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-[28px] font-semibold text-black">
                        THE SUBTLE ART OF NOT GIVING A F*CK
                      </h2>
                      <p className="font-semibold text-[#CECECE] text-lg">
                        In stock
                      </p>
                    </div>
                    <h3 className="text-[22px] font-semibold text-secondary-300">
                      MARK MANSON
                    </h3>
                    <div className="flex gap-2 mt-3">
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-[26px] text-primary-500">
                      $12.95
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="border-2 border-[#CECECE] py-1 px-6 flex items-center gap-3 cursor-pointer">
                        <h5 className="font-medium text-[#006D77]">Qty: 1</h5>
                        <BsChevronDown
                          size={20}
                          color="#006D77"
                          style={{
                            stroke: "#006D77",
                            strokeWidth: 0.5,
                          }}
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <IoIosSearch
                          className="cursor-pointer"
                          color="#006D77"
                          size={26}
                          style={{
                            stroke: "#006D77",
                            strokeWidth: 8,
                          }}
                        />
                        <HiOutlineHeart
                          className="cursor-pointer"
                          color="#006D77"
                          size={26}
                          style={{
                            stroke: "#006D77",
                            strokeWidth: 2,
                          }}
                        />

                        {/* Hero icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-pointer h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#006D77"
                          strokeWidth={1.6}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 pl-8 bg-white shadow-md p-7">
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 border-[3px] border-primary-500"></div>
                  <div className="w-40">
                    <img className="object-cover w-full" src={ProductImage1} />
                  </div>
                </div>

                <div className="flex flex-col justify-between w-full">
                  <div>
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-[28px] font-semibold text-black">
                        THE SUBTLE ART OF NOT GIVING A F*CK
                      </h2>
                      <p className="font-semibold text-[#CECECE] text-lg">
                        In stock
                      </p>
                    </div>
                    <h3 className="text-[22px] font-semibold text-secondary-300">
                      MARK MANSON
                    </h3>
                    <div className="flex gap-2 mt-3">
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                      <FaStar color="#549DA4" size="19" />
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h4 className="font-semibold text-[26px] text-primary-500">
                      $12.95
                    </h4>
                    <div className="flex items-center gap-3">
                      <div className="border-2 border-[#CECECE] py-1 px-6 flex items-center gap-3 cursor-pointer">
                        <h5 className="font-medium text-[#006D77]">Qty: 1</h5>
                        <BsChevronDown
                          size={20}
                          color="#006D77"
                          style={{
                            stroke: "#006D77",
                            strokeWidth: 0.5,
                          }}
                        />
                      </div>

                      <div className="flex items-center gap-3">
                        <IoIosSearch
                          className="cursor-pointer"
                          color="#006D77"
                          size={26}
                          style={{
                            stroke: "#006D77",
                            strokeWidth: 8,
                          }}
                        />
                        <HiOutlineHeart
                          className="cursor-pointer"
                          color="#006D77"
                          size={26}
                          style={{
                            stroke: "#006D77",
                            strokeWidth: 2,
                          }}
                        />

                        {/* Hero icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="cursor-pointer h-7 w-7"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="#006D77"
                          strokeWidth={1.6}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-[600px]">
            <div className="flex flex-col w-full gap-3 bg-white shadow-md p-7">
              <h3 className="mt-1 mb-2 text-2xl font-semibold text-primary-500">
                Order Summary
              </h3>
              <div className="flex justify-between mb-1">
                <p className="text-[#484848]">Subtotal(3 Items):</p>
                <p className="text-[#484848]">$33.57</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#484848]">Estimated Shipping Fee:</p>
                <p className="text-[#484848]">$4.99</p>
              </div>
              <div className="h-[1px] bg-secondary-500 mt-3"></div>
              <div className="flex justify-between">
                <p className="text-[#484848] font-semibold mb-2">Total</p>
                <p className="text-[#484848] font-semibold">$38.56</p>
              </div>
              <button className="w-full py-3 font-bold text-white px-11 bg-primary-500">
                Checkout Now
              </button>
            </div>

            <div className="bg-white shadow-md p-7">
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

            <div className="flex items-center justify-between py-4 shadow-md px-7 bg-secondary-100">
              <div>
                <h4 className="font-semibold text-[#484848]">
                  20% Discount Voucher
                </h4>
                <p className="text-[#484848] text-sm">
                  Spend ₱1,000 to get 20% Off!
                </p>
              </div>
              <div>
                <button className="py-2 text-xs text-white px-7 bg-primary-500">
                  Apply Now
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-4 shadow-md px-7 bg-secondary-100">
              <div>
                <h4 className="font-semibold text-[#484848]">
                  20% Discount Voucher
                </h4>
                <p className="text-[#484848] text-sm">
                  Spend ₱1,000 to get 20% Off!
                </p>
              </div>
              <div>
                <button className="py-2 text-xs text-white px-7 bg-primary-500">
                  Apply Now
                </button>
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
