import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
import { BsShield } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { RiRefund2Fill } from "react-icons/ri";
import Nav from "../../components/Nav";
import Footer from '../../components/Footer';

function HelpPage() {
  const categories = [
    {
      title: "Getting Started",
      icon:  <FiArrowRight />,
      description: "Guides and tutorials to get you up and running"
    },
    {
      title: "FAQ's",
      icon: <AiOutlineQuestionCircle />,
      description: "Start your journey to the world of navigation"
    },
    {
      title: "Feedback",
      icon: <MdOutlineFeedback />,
      description: "Start your journey to the world of imagination"
    },
    {
      title: "Privacy and Security",
      icon: <BsShield />,
      description: "See how we use and protect your information"
    },
    {
      title: "Troubleshooting",
      icon: <BiRefresh />,
      description: "Learn how to resolve issues"
    },
    {
      title: "Return/Refund",
      icon: <RiRefund2Fill />,
      description: "Information about returns and refunds"
    }
  ];

  function renderCategories() {
    return categories.map(function(category, index) {
      return (
        <div
          key={index}
          className="flex flex-col items-center p-8 text-center transition-shadow duration-300 bg-gray-200 rounded-lg hover:shadow-lg"
        >
          <div className="mb-4 text-4xl text-teal-600">
            {category.icon}
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            {category.title}
          </h3>
          <p className="text-gray-500">
            {category.description}
          </p>
        </div>
      );
    });
  }

  return (
   <>
    <nav>
        <Nav />
    </nav>
    <div className="flex flex-col items-center w-screen min-h-screen py-16 overflow-x-hidden bg-white">
      <div className="w-full px-4 mb-16 text-center max-w-7xl">
        <h1 className="mb-4 text-4xl font-bold text-emerald-900">
          Welcome to the help page!
        </h1>
        <p className="mb-8 text-lg text-emerald-900">
          Here you can find answers to common questions, troubleshoot any issues, and contact support if you need further assistance.
        </p>
        
        <div className="relative max-w-2xl mx-auto">
          <input
            type="text"
            className="w-full px-4 py-3 text-white bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Enter your questions..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {renderCategories()}
      </div>
    </div>
    <footer>
        <Footer />
    </footer>
    </>
  );
}

export default HelpPage;