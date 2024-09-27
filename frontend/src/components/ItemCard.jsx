/* eslint-disable react/prop-types */
import React from "react";

const ItemCard = ({
  title,
  price,
  description,
  includes,
  serviceTime,
  returned,
  icon,
}) => (
  <div className="bg-blue-500 p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-200">from {price}</p>
      </div>
      <div className="text-white">{icon}</div>
    </div>
    <p className="text-sm text-gray-200 mb-4">{description}</p>
    <div className="mb-4">
      <p className="text-xs font-semibold text-white mb-2">INCLUDES</p>
      <div className="flex gap-2">
        {includes.map((item, index) => (
          <span key={index} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-between text-xs text-gray-200">
      <div>
        <p className="font-semibold text-white">SERVICE TIME</p>
        <p>{serviceTime}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold text-white">RETURNED</p>
        <p>{returned}</p>
      </div>
    </div>
  </div>
);

export default ItemCard;