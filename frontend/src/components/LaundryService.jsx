import React from "react";
import { FaTshirt, FaWater, FaFile } from "react-icons/fa"; // Importing icons from react-icons
import fold from "../assets/fold.jpeg";
const LaundryService = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 bg-[#f5f5f5] rounded-lg shadow-lg">
      {/* Image and Instructions Section */}
      <div className="md:w-1/2 pr-4 flex flex-col justify-center">
        <img
          src={fold}
          alt="Woman examining clothes"
          className="w-[50%] h-[50%] rounded-lg mb-4 ml-48"
        />
        <div className="bg-[#f5f5f5] p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">
            Any special cleaning instructions for us?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Please handle carefully. Pink sweater has a delicate embroidery and
            needs additional care.
          </p>
          <div className="space-y-3">
            {/* Laundry */}
            <div className="flex items-center">
              <FaWater className="mr-2 text-blue-500 text-xl" />
              <span>Laundry</span>
            </div>
            {/* Dry Cleaning */}
            <div className="flex items-center bg-white p-2 rounded">
              <FaFile className="mr-2 text-blue-500 text-xl" />
              <span>Dry Cleaning</span>
              <svg
                className="ml-auto h-5 w-5 text-blue-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            {/* Ironing */}
            <div className="flex items-center">
              <FaTshirt className="mr-2 text-yellow-500 text-xl" />
              <span>Ironing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 pl-4 mt-4 md:mt-0 flex flex-col justify-center">
        <h2 className="text-sm uppercase text-gray-500 mb-2">
          Freedom from Laundry
        </h2>
        <h1 className="text-3xl font-bold mb-4">
          A laundry service designed for you
        </h1>
        <p className="text-gray-600 mb-4">
          Never worry about staining your favorite shirt. We offer laundry, dry
          cleaning, and ironing at a schedule that fits your lifestyle.
        </p>
        <a href="#" className="text-blue-500 hover:underline">
          See how it works
        </a>
      </div>
    </div>
  );
};

export default LaundryService;
