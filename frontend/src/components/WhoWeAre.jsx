import React from "react";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center p-6 lg:p-12 bg-white">
      {/* Text Section */}
      <div className="flex-1 mb-6 lg:mb-0 lg:mr-10">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight text-gray-800">
          Who We Are
        </h2>
        <p className="text-lg lg:text-xl mb-6 leading-relaxed text-gray-600">
          Founded in 2014 in London, Laundryheap is the next generation laundry
          & dry cleaning company. We offer professional laundry and dry cleaning
          delivered to your doorstep in as quick as 24 hours.
        </p>
        {/* Subsection: Global Availability */}
        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-700">
            We Are Available Globally
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-gray-600">
            Since our beginnings in London, we have expanded globally to 14
            countries. Our services are available in the following countries:
            Kuwait, Ireland, Bahrain, UAE, Qatar, Saudi Arabia, Singapore,
            France, Netherlands, Peru, Sweden, United States, United Kingdom,
            and Denmark.
          </p>
        </div>
        {/* Subsection: Environmental Protection */}
        <div className="mb-6">
          <h3 className="text-2xl lg:text-3xl font-semibold mb-2 text-gray-700">
            We Protect Our Environment
          </h3>
          <p className="text-base lg:text-lg leading-relaxed text-gray-600">
            Social and environmental sustainability is at the heart of what we
            do. We are building the largest fleet of electric delivery vehicles
            and are committed to reducing water, electricity consumption, and
            the amount of packaging.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1">
        <img
          src="path_to_your_image" // Replace with your image path
          alt="Global Expansion"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
