import React from "react";
import { FaTshirt, FaWater, FaTruck } from "react-icons/fa"; // Importing icons from react-icons

const ServiceFeatures = () => {
  return (
    <div className="text-center py-32 bg-gray-100">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-8 text-gray-800">
        We Collect, Clean and Deliver<br></br> your laundry and dry cleaning.
      </h1>

      {/* Icon Section */}
      <div className="flex justify-center space-x-16 mt-24">
        {/* Icon 1 */}
        <div className="flex items-center p-4 gap-2 text-4xl">
          <FaTshirt className="text-blue-600 " />
          <span className="text-gray-700 text-2xl">24Hr Turnaround Time</span>
        </div>

        {/* Icon 2 */}
        <div className="flex  items-center gap-2">
          <FaWater className="text-blue-600 text-4xl mb-2" />
          <span className="text-gray-700 text-2xl">
            Free Collection and Delivery
          </span>
        </div>

        {/* Icon 3 */}
        <div className="flex items-center gap-2">
          <FaTruck className="text-blue-600 text-4xl mb-2" />
          <span className="text-gray-700 text-2xl">Dedicated 24/7 Support</span>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;
