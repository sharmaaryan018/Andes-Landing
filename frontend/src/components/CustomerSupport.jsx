import { FaRegComment } from "react-icons/fa";
import support from "../assets/customersupport.jpeg";

const CustomerSupport = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        <img
          src={support}
          alt="Customer support representative"
          className="w-full h-[100%] rounded-lg object-cover"
        />
        <div className="absolute top-6 left-6 bg-white p-4 rounded-lg shadow-md max-w-xs w-full">
          <div className="bg-blue-500 p-3 rounded-t-lg text-white flex items-center">
            <img
              src="/api/placeholder/40/40"
              alt="Peter Sullivan"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-semibold">Peter Sullivan</p>
              <p className="text-sm">Laundryheap Support</p>
            </div>
          </div>
          <div className="p-3 space-y-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <p className="text-sm">
                Hi, can I reschedule today's delivery to Thursday please?
              </p>
            </div>
            <div className="bg-blue-100 p-2 rounded-lg">
              <p className="text-sm">
                Hey, of course 👍. You will receive confirmation via email.
              </p>
            </div>
            <p className="text-xs text-gray-500">Just now</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col justify-center md:pl-6 mt-6 md:mt-0">
        <h2 className="text-xl text-gray-500 uppercase mb-2">
          24/7 CUSTOMER SUPPORT
        </h2>
        <h1 className="text-4xl font-bold mb-6">We're here for you</h1>
        <p className="text-xl mb-6">
          Any change in delivery times or date, or if something goes wrong, we
          are here. Our online customer support team will assist you day and
          night.
        </p>
        <button className="flex items-center bg-blue-500 text-white px-4 w-full sm:w-[50%] md:w-[25%] py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          <FaRegComment className="mr-2" />
          Chat with us
        </button>
      </div>
    </div>
  );
};

export default CustomerSupport;
