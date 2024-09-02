import React from "react";
import man from "../assets/Designer.jpeg";
import LaundryService from "../components/LaundryService.jsx";
import LaundryStatus from "../components/LaundryStatus.jsx";
import CustomerSupport from "../components/CustomerSupport.jsx";
import Services from "../components/Services.jsx";
import CustomerReviews from "../components/CustomerReview.jsx";
import Future from "../components/Future.jsx";
import BookNow from "../components/BookNow.jsx";
import TeamSection from "../components/TeamSection.jsx";
import MyFooter from "../components/MyFooter.jsx";
import Serviceinfo from "../components/Serviceinfo.jsx";
import ServiceFeatures from "../components/ServiceFeatures.jsx";

const LandingPage = () => {
  return (
    <div>
      <div className="bg-blue-500 min-h-screen">
        <main className="container mx-auto px-4 pt-16 md:pt-24 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-white ml-16 md:pr-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Laundry & dry <br></br> cleaning within <br></br> 24h delivery
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8">
              Pune
            </h2>
            <div className="bg-white rounded-lg p-6 text-gray-800 shadow-md">
              <p className="mb-4">
                Schedule your collection in New York City{" "}
                <span className="text-blue-500 cursor-pointer underline">
                  Change
                </span>
              </p>
              <div className="flex space-x-4">
                <div className="w-1/2 border rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">EARLIEST</p>
                  <p className="font-semibold">12:00 - 15:00</p>
                </div>
                <div className="w-1/2 border rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">LAST</p>
                  <p className="font-semibold">20:00 - 22:00</p>
                </div>
              </div>
              <p className="text-sm text-blue-500 mt-4 cursor-pointer underline">
                See all slots
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-300 transform scale-75 rounded-full"></div>
              <img
                src={man}
                alt="Happy customer with laundry"
                className="relative z-10 w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full object-cover"
              />
            </div>
          </div>
        </main>
      </div>
      <Serviceinfo />
      <ServiceFeatures />
      <LaundryService />
      <LaundryStatus />
      <CustomerSupport />
      <Services />
      <CustomerReviews />
      <Future />
      <BookNow />
      <TeamSection />
    </div>
  );
};

export default LandingPage;
