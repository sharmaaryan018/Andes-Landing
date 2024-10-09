import {
  FaCreditCard,
  FaHandsHelping,
  FaClock,
  FaComments,
} from "react-icons/fa";
import second from "../assets/card4.png";

const Appsupport = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg mt-4 md:mt-0 md:h-screen border-b border-gray-300">
      {" "}
      {/* Left Section */}
      <div className="md:w-1/2 pr-6 flex flex-col justify-center">
        <h2 className="text-xl text-gray-500 uppercase mb-2">
          Your Laundry and Dry Cleaning Solution
        </h2>
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold mb-6">
          Just a click away
        </h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaCreditCard className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">Cashless Payments</span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaHandsHelping className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">
              Contactless collection and delivery
            </span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaClock className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">Real-time order updates</span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaComments className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">Dedicated 24/7 support</span>
          </div>
        </div>
      </div>
      {/* Image and Instructions Section */}
      <div className="md:w-1/2 md:pl-4 flex flex-col justify-center items-center relative mt-4">
        {/* <img
          src={second}
          alt="Man in coat carrying documents"
          className="hidden md:block w-full md:w-full md:h-[500px] object-cover rounded-lg mb-4"
        /> */}
      </div>
    </div>
  );
};

export default Appsupport;
