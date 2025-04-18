/* eslint-disable react/prop-types */
import React from "react";

const FeatureRight = ({ title, subtitle, description, imageSrc, bulletPoints }) => {
  return (
    <div className="flex flex-col md:flex-row items-center my-0  pt-0 pb-0">
      <div className="md:w-1/2 p-8">
        <h2 className="text-xl font-semibold text-blue-900 mb-2">{title}</h2>
        <h3 className="text-2xl font-bold text-blue-900 mb-4">{subtitle}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        <ul>
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                {/* You can replace this with an actual icon */}
                {point.icon}
              </span>
              <span className="text-gray-700">{point.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block md:w-1/2 m-4">
        <img src={imageSrc} alt="feature" className="w-full h-auto object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default FeatureRight;