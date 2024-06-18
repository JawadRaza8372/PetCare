import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl text-center font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-center text-gray-600 mb-8">Page Not Found</p>
      <Link
        to="/"
        className="text-[14px] font-popp mt-2 md:mt-0 md:text-[16px] font-medium bg-[#E37025] duration-700 hover:bg-black cursor-pointer text-white rounded-md px-4 py-2 pb-[10px]"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
