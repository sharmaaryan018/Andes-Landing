import PricingSection from "../components/PricingSection";
import PricingCard from "../components/PricingCard";
import MyFooter from "../components/MyFooter";
import washicon from "../assets/washicon.svg";
import drycleaning from "../assets/drycleaningicon.svg";
import bulkyicon from "../assets/bulkyicon.jpg";
import ironicon from "../assets/ironicon.svg";
import shoeicon from "../assets/shoeicon.svg";

const data = [
  {
    icon: washicon,
    title: "Wash",
    description: "For everyday laundry, bedsheets and towels.",
    priceInfo: "$32.85 / 15lbs",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: ironicon,
    title: "Wash & Iron",
    description: "For everyday laundry that requires ironing.",
    priceInfo: "from $3.49",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: drycleaning,
    title: "Dry Cleaning",
    description: "For delicate items and fabrics.",
    priceInfo: "from $3.49",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: bulkyicon,
    title: "Duvets & Bulky Items",
    description: "For larger items that require extra care.",
    priceInfo: "from $15",
    linkText: "See Details",
    linkUrl: "#",
  },
  {
    icon: shoeicon,
    title: "Shoe Cleaning",
    description: "For shoes that need a little extra care.",
    priceInfo: "$32.85 / 15lbs",
    linkText: "See Details",
    linkUrl: "#",
  }
];

const ServicesPage = () => {
  return (
    <div >
      <PricingSection />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {data.map((item, index) => (
            <PricingCard key={index} {...item} />
          ))}
        </div>
      </div>
      <MyFooter /> {/* Footer stays at the bottom of the page */}
    </div>
  );
};

export default ServicesPage;
