import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <Nav />
      <main className="container px-4 py-8 mx-auto">
        <div className="relative flex flex-col items-center justify-center h-64 text-white rounded-lg shadow-md bg-gradient-1">
          <h1 className="text-4xl font-semibold">About Us</h1>
          <p className="mt-2 text-lg">
            Learn more about our journey and values.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary-500">Our Story</h2>
          <p className="mt-4 text-md">
            {/* Add content about the company's story here */}
          </p>
          <h2 className="mt-8 text-2xl font-bold text-primary-500">Our Mission</h2>
          <p className="mt-4 text-md">
            {/* Add content about the company's mission here */}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
