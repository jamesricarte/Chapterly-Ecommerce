import React from "react";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTiktok,
} from "react-icons/fa";
import { FaLocationPin, FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <Nav />
      <main className="mb-16">
        <div className="py-16 mb-8 bg-primary-50">
          <div className="container px-4 py-8 mx-auto">
            <div className="flex flex-col items-center justify-center text-center text-primary-500">
              <h1 className="mb-4 text-5xl font-bold">Let's Stay Connected</h1>
              <p className="text-2xl">
                We're just a message away—reach out to us for <br /> support,
                inquiries, or feedback.
              </p>
            </div>
          </div>
          <div />
        </div>
        <div className="container flex flex-col items-center gap-60 px-4 mx-auto text-center text-primary-500 mt-[-80px]">
          <div className="flex w-full ml-20 justify-evenly">
            <div className="relative flex flex-col items-center">
              <div className="p-6 mb-3 text-3xl rounded-full bg-primary-500">
                <FaPhoneAlt className="text-white" />
              </div>
              <h1 className="mb-2 text-2xl font-semibold">Phone</h1>
              <p className="text-lg">09566082679</p>
            </div>
            <div className="flex flex-col items-center ">
              <div className="p-6 mb-3 text-3xl rounded-full bg-primary-500">
                <FaLocationPin className="text-white" />
              </div>
              <h1 className="mb-2 text-2xl font-semibold">Address</h1>
              <p className="text-lg">
                1234 Maple Lane Suite 567 Springfield,
                <br /> CA 98765 United States
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-6 mb-3 text-3xl rounded-full bg-primary-500">
                <FaEnvelope className="text-white " />
              </div>
              <h1 className="mb-2 text-2xl font-semibold ">Email</h1>
              <p className="text-lg">07206442@dwc-legazpi.edu</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-52">
            <div className="flex flex-col text-left">
              <h2 className="mb-4 text-4xl font-semibold">Send Us a Message</h2>
              <p className="mb-56 text-xl leading-relaxed">
                Your thoughts, questions, and feedback are what help us grow and
                improve. Whether you’ve encountered an issue, have a suggestion,
                or just want to share your experience, we’re here to listen.
                Reach out to us using the form. Let’s make your even better,
                together.
              </p>
              <h3 className="mb-2 text-xl font-medium">Follow us on</h3>
              <div className="flex gap-6 text-3xl">
                <FaTiktok />
                <FaFacebook />
                <FaInstagram />
                <FaXTwitter />
              </div>
            </div>
            <div className="mt-3">
              <form
                action=""
                className="flex flex-col items-baseline w-full gap-4 text-black border-[#E0E0E0] "
              >
                <div className="flex w-full gap-6">
                  <div className="flex flex-col w-full text-left">
                    <label htmlFor="first_name" className="mb-2 text-lg">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="w-full p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 "
                    />
                  </div>
                  <div className="flex flex-col w-full text-left">
                    <label htmlFor="last_name" className="mb-2 text-lg">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="w-full p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full text-left">
                  <label htmlFor="email" className="mb-2 text-lg">
                    Email
                  </label>
                  <input
                    type="text"
                    name="username"
                    className="w-full p-4 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div className="flex flex-col w-full mb-4 text-left">
                  <label htmlFor="username" className="mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                    type=""
                    name="username"
                    className="w-full p-4 border h-60 focus:outline-none focus:ring-1 focus:ring-primary-500"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <button className="px-16 py-3 text-base font-bold text-white rounded-md bg-primary-500 hover-preset-1">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
