import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-8 px-5 md:px-12 lg:px-28">
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <Image
          src="https://www.pngitem.com/pimgs/m/485-4852378_sample-logo-png-transparent-png.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <button className="bg-white text-blue-600 hover:text-white hover:bg-blue-600 transition-all rounded-lg font-medium py-2 px-5 sm:py-3 sm:px-6 shadow-lg">
          Get Started
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center my-12">
        <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg">
          Discover the Latest Blogs
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-lg text-gray-200">
          Stay updated with the latest trends and insights in technology,
          lifestyle, and more. Your journey to knowledge starts here.
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 mt-8 max-w-md mx-auto border border-gray-300 rounded-lg p-4 shadow-md bg-white">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 w-full p-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
          />

          <button className="bg-red-500 text-black font-medium rounded-lg px-6 py-2">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
