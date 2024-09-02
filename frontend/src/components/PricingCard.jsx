/* eslint-disable react/prop-types */
// src/components/PricingCard.js
import React from 'react';

const PricingCard = ({ icon, title, description, priceInfo, linkText, linkUrl }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <img src={icon} alt={title} className="w-12 h-12 mr-4" />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-xl font-bold text-blue-600">{priceInfo}</span>
      </div>
      <a href={linkUrl} className="text-blue-500 hover:underline">{linkText}</a>
    </div>
  );
};

export default PricingCard;
