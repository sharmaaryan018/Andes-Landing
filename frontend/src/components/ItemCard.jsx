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
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">from {price}</p>
      </div>
      <div className="text-blue-500">{icon}</div>
    </div>
    <p className="text-sm mb-4">{description}</p>
    <div className="mb-4">
      <p className="text-xs font-semibold mb-2">INCLUDES</p>
      <div className="flex gap-2">
        {includes.map((item, index) => (
          <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
            {item}
          </span>
        ))}
      </div>
    </div>
    <div className="flex justify-between text-xs text-gray-600">
      <div>
        <p className="font-semibold">SERVICE TIME</p>
        <p>{serviceTime}</p>
      </div>
      <div className="text-right">
        <p className="font-semibold">RETURNED</p>
        <p>{returned}</p>
      </div>
    </div>
  </div>
);

export default ItemCard;
