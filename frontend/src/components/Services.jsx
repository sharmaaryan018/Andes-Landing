import React from "react";
import ItemCard from "./ItemCard.jsx"
import { FaRegComment } from "react-icons/fa";

const Services = () => (
    <div className="bg-blue-700 text-white py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-2">Explore our services</h2>
      <p className="text-center mb-8">We handle your clothes with care, giving them the attention they deserve.</p>
      <div className="flex justify-center gap-4 mb-8">
        <button className="bg-white text-blue-700 px-4 py-2 rounded">See price list</button>
        <button className="bg-transparent border border-white px-4 py-2 rounded flex items-center gap-2">
          <FaRegComment size={20} />
          Ask us anything
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <ItemCard
          title="Wash"
          price="$32.85/15lbs"
          description="For everyday laundry, bedsheets and towels."
          includes={['WASH', 'TUMBLE-DRY']}
          serviceTime="24H*"
          returned="IN A LAUNDRY/HEAP BAG"
          icon="🧺"
        />
        <ItemCard
          title="Wash & Iron"
          price="$3.49/item"
          description="For everyday laundry that requires ironing."
          includes={['WASH', 'TUMBLE-DRY', 'IRONING']}
          serviceTime="48h"
          returned="ON HANGERS"
          icon="👚"
        />
        <ItemCard
          title="Dry Cleaning"
          price="$3.49/item"
          description="For delicate items and fabrics."
          includes={['DRY CLEANING', 'IRONING']}
          serviceTime="48h"
          returned="ON HANGERS"
          icon="🧼"
        />
        <ItemCard
          title="Duvets & Bulky Items"
          price="$15/item"
          description="For larger items that require extra care."
          includes={['CUSTOM CLEANING']}
          serviceTime="UP TO 3 DAYS"
          returned="IN A LAUNDRY/HEAP BAG"
          icon="🛏️"
        />
      </div>
    </div>
  );
  
  export default Services;