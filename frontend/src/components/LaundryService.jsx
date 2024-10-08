import { FaTshirt, FaWater, FaFile } from "react-icons/fa";
import fold from "../assets/fold.jpeg";

const LaundryService = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg md:h-screen">
      {/* Text Section */}
      <div className="md:w-1/2 pr-4 mt-4 md:mt-0 flex flex-col justify-center md:pb-6">
        <h2 className="text-xl text-gray-500 uppercase mb-2">
          Freedom from Laundry
        </h2>
        <h1 className="text-3xl font-semibold md:text-4xl md:font-bold mb-6">
          A laundry service designed <br /> for you
        </h1>
        <p className="text-xl mb-6">
          Never worry about staining your favorite shirt. <br /> We offer laundry, dry
          cleaning, and ironing at a schedule that <br /> fits your lifestyle.
        </p>
      </div>

      {/* Image and Instructions Section */}
      <div className="md:w-1/2 md:pl-4 flex flex-col justify-center items-center relative">
        <img
          src={fold}
          alt="Woman examining clothes"
          className="hidden md:block md:w-96 md:h-96 object-cover rounded-lg mb-4"
        />
        <div className="flex justify-start items-center w-full">
          <div className="md:absolute md:top-60 md:left-10 transform md:-translate-x-1/4 md:-translate-y-1/4 bg-white p-3 rounded-lg shadow-md max-w-xs w-full z-10">
            <h3 className="font-semibold text-lg mb-2">
              Any special cleaning instructions for us?
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Please handle carefully. Pink sweater has a delicate embroidery and
              needs additional care.
            </p>
            <div className="space-y-2">
              {/* Laundry */}
              <div className="flex items-center">
                <FaWater className="mr-2 text-blue-500 text-xl" />
                <span>Laundry</span>
              </div>
              {/* Dry Cleaning */}
              <div className="flex items-center bg-white p-2 rounded">
                <FaFile className="mr-2 text-blue-500 text-xl" />
                <span>Dry Cleaning</span>
                <svg
                  className="ml-auto h-5 w-5 text-blue-500"
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
              {/* Ironing */}
              <div className="flex items-center">
                <FaTshirt className="mr-2 text-yellow-500 text-xl" />
                <span>Ironing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaundryService;