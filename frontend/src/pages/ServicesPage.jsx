import React from "react";
import PricingSection from "../components/PricingSection";
import PricingCard from "../components/PricingCard";

const data = [
  {
    icon: "/path/to/icon1.png",
    title: "Wash",
    description: "For everyday laundry, bedsheets and towels.",
    priceInfo: "$32.85 / 15lbs",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: "/path/to/icon2.png",
    title: "Wash & Iron",
    description: "For everyday laundry that requires ironing.",
    priceInfo: "from $3.49",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: "/path/to/icon3.png",
    title: "Dry Cleaning",
    description: "For delicate items and fabrics.",
    priceInfo: "from $3.49",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: "/path/to/icon4.png",
    title: "Duvets & Bulky Items",
    description: "For larger items that require extra care.",
    priceInfo: "from $15",
    linkText: "See Details",
    linkUrl: "#",
  },

  {
    icon: "/path/to/icon1.png",
    title: "Wash",
    description: "For everyday laundry, bedsheets and towels.",
    priceInfo: "$32.85 / 15lbs",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: "/path/to/icon2.png",
    title: "Wash & Iron",
    description: "For everyday laundry that requires ironing.",
    priceInfo: "from $3.49",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: "/path/to/icon3.png",
    title: "Dry Cleaning",
    description: "For delicate items and fabrics.",
    priceInfo: "from $3.49",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: "/path/to/icon4.png",
    title: "Duvets & Bulky Items",
    description: "For larger items that require extra care.",
    priceInfo: "from $15",
    linkText: "See Details",
    linkUrl: "#",
  },

  {
    icon: "/path/to/icon4.png",
    title: "Duvets & Bulky Items",
    description: "For larger items that require extra care.",
    priceInfo: "from $15",
    linkText: "See Details",
    linkUrl: "#",
  },
];

const ServicesPage = () => {
  return (
    <div>
      <PricingSection />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {data.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
