import React from "react";

const QuickCleanFresh = () => {
  return (
    <div className="relative bg-blue-50 pt-32 pb-24">
      {/* Curved Background */}
      <div className="absolute inset-x-0 top-0 transform -translate-y-1/2">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#EBF8FF"
            fillOpacity="1"
            d="M0,224L1440,64L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Text and Button */}
      <div className="relative text-center max-w-xl mx-auto justify-center flex-col flex">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
          Quick. Clean. Fresh.
        </h2>
        <p className="text-lg md:text-xl text-blue-700 mb-10">
          Your laundry delivered in 24h
        </p>
        <button className="bg-blue-500 mt-8 text-white font-semibold rounded-lg shadow-md flex items-center justify-center h-12 w-auto hover:bg-blue-600 transition">
          <span>
            {/* Icon or SVG for the button */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.5l-6-4.5V7l6-4.5L18 7v9l-6 4.5z"
              />
            </svg>
          </span>
          <span>Schedule your pickup</span>
        </button>
      </div>
    </div>
  );
};

export default QuickCleanFresh;
