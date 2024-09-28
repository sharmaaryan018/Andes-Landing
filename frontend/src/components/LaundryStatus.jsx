import React from "react";
import { FaClock, FaShoppingBag } from "react-icons/fa";
import clothcarryingman from "../assets/clothcarryingman.jpeg";

const LaundryStatus = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-4">
      {/* Left Section */}
      <div className="md:w-1/2 pr-6 flex flex-col justify-center ">
        <h2 className="text-xl text-gray-500 uppercase mb-2">
          24H TURNAROUND TIME
        </h2>
        <h1 className="text-4xl font-bold mb-6">No need to plan in advance</h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaShoppingBag className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-2xl">Schedule a collection today</span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaClock className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-2xl">Get your laundry back in 24h</span>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 relative">
        <div className="relative">
          <img
            src={clothcarryingman}
            alt="Man in coat carrying documents"
            className="w-full h-[720px] object-cover rounded-lg"
          />
          <div className="absolute top-6 left-6 bg-white p-6 rounded-lg shadow-md w-64">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 rounded-full p-3 mr-4">
                <svg
                  className="h-8 w-8 text-white"
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
              <div>
                <p className="text-sm text-gray-500">ORDER STATUS</p>
                <p className="font-semibold text-blue-500 text-lg">Delivered</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">BOOKED</p>
                <p className="font-semibold text-lg">Yesterday, at 10 AM</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">DELIVERY</p>
                <p className="font-semibold text-lg">Today, at 1 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryStatus;
