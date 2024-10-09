import { FaClock, FaShoppingBag } from "react-icons/fa";
import second from "../assets/second.jpg";

const LaundryStatus = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg mt-4 md:h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 pr-6 flex flex-col justify-center">
        <h2 className="text-xl text-gray-500 uppercase mb-2">
          24H TURNAROUND TIME
        </h2>
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold mb-6">
          No need to plan in advance
        </h1>
        <div className="space-y-4">
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaShoppingBag className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">Schedule a collection today</span>
          </div>
          <div className="flex items-center">
            <div className="bg-yellow-100 rounded-full p-3 mr-4">
              <FaClock className="h-8 w-8 text-yellow-500" />
            </div>
            <span className="text-xl md:text-2xl">Get your laundry back in 24h</span>
          </div>
        </div>
      </div>

      {/* Image and Instructions Section */}
      <div className="md:w-1/2 md:pl-4 flex flex-col justify-center items-center relative mt-4">
        <img
          src={second}
          alt="Man in coat carrying documents"
          className="hidden md:block w-full md:w-full md:h-[500px] object-cover rounded-lg mb-4"        />
        {/* <div className="flex justify-center items-center w-full md:justify-start pt-6 md:pt-0">
          <div className="bg-white p-6 rounded-lg shadow-md max-w-xs w-full z-10 md:absolute md:top-60 md:left-0 md:transform md:-translate-x-1/4 md:-translate-y-1/4">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 rounded-full p-4 mr-4">
                <svg
                  className="h-10 w-10 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div>
                <p className="text-lg text-gray-500">ORDER STATUS</p>
                <p className="font-semibold text-blue-500 text-xl">Delivered</p>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-lg text-gray-500">BOOKED</p>
                <p className="font-semibold text-xl">Yesterday, at 10 AM</p>
              </div>
              <div>
                <p className="text-lg text-gray-500">DELIVERY</p>
                <p className="font-semibold text-xl">Today, at 1 PM</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default LaundryStatus;