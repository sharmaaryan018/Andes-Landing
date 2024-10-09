import { FaTshirt, FaWater, FaTruck } from "react-icons/fa";

const ServiceFeatures = () => {
  return (
    <div className="text-center py-16 bg-white-100">
      {/* Main Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-gray-800">
        We Collect, Clean, and Deliver
        <br className="hidden lg:inline" /> your laundry and dry cleaning.
      </h1>

      {/* Icon Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0 md:space-x-16 mt-12">
        {/* Icon 1 */}
        <div className="flex flex-col md:flex-row items-center p-4 gap-2 text-4xl">
          <FaTruck className="text-blue-600 mb-2 md:mb-0" />
          <span className="text-gray-700 text-xl md:text-2xl">
            Dedicated 24/7 Support
          </span>
        </div>

        {/* Icon 2 */}
        <div className="flex flex-col md:flex-row items-center p-4 gap-2 text-4xl">
          <FaWater className="text-blue-600 mb-2 md:mb-0" />
          <span className="text-gray-700 text-xl md:text-2xl">
            Free Collection and Delivery
          </span>
        </div>

        {/* Icon 3 */}
        <div className="flex flex-col md:flex-row items-center p-4 gap-2 text-4xl">
          <FaTshirt className="text-blue-600 mb-2 md:mb-0" />
          <span className="text-gray-700 text-xl md:text-2xl">
            24Hr Turnaround Time
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceFeatures;