import { FaClock, FaShoppingBag } from "react-icons/fa";
import support from "../assets/customersupport.jpeg"; // Assuming the image is named support.jpeg

const CustomerSupport = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-4 md:h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 pr-6 flex flex-col justify-center">
        <h2 className="text-xl text-gray-500 uppercase mb-2">
          24H CUSTOMER SUPPORT
        </h2>
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold mb-6">
          We're here to help you
        </h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaShoppingBag className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">Reach out to us anytime</span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaClock className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">We're available 24/7</span>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 relative flex flex-col justify-center items-center">
        <img
          src={support}
          alt="Customer support representative"
          className="hidden md:block md:w-96 md:h-96 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-start items-center w-full">
          <div className="md:absolute md:top-60 md:left-10 transform md:-translate-x-1/4 md:-translate-y-1/4 bg-white p-3 rounded-lg shadow-md max-w-xs w-full z-10">
            <div className="bg-blue-500 p-3 rounded-t-lg text-white flex items-center">
              <img
                src="/api/placeholder/40/40"
                alt="Peter Sullivan"
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">Peter Sullivan</p>
                <p className="text-sm">Customer Support</p>
              </div>
            </div>
            <div className="p-3 space-y-2">
              <div className="bg-yellow-100 p-2 rounded-lg">
                <p className="text-sm">
                  Hi, I need help with my recent order.
                </p>
              </div>
              <div className="bg-blue-100 p-2 rounded-lg">
                <p className="text-sm">
                  Sure, I'm here to assist you. Please provide more details.
                </p>
              </div>
              <p className="text-xs text-gray-500">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;