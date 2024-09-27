import man from "../assets/Designer.jpeg";
import LaundryService from "../components/LaundryService.jsx";
import LaundryStatus from "../components/LaundryStatus.jsx";
import CustomerSupport from "../components/CustomerSupport.jsx";
import Services from "../components/Services.jsx";
import CustomerReviews from "../components/CustomerReview.jsx";
import Future from "../components/Future.jsx";
import BookNow from "../components/BookNow.jsx";
import TeamSection from "../components/TeamSection.jsx";
import Serviceinfo from "../components/Serviceinfo.jsx";
import ServiceFeatures from "../components/ServiceFeatures.jsx";

const LandingPage = () => {
  return (
  <div>
      {/* Hero Section */}
      <div className="bg-blue-500 min-h-screen flex justify-center items-center">
        <main className="container mx-auto px-4 pt-10 md:pt-24 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2 text-white md:ml-16 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Laundry & dry <br /> cleaning within <br /> 24h delivery
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-8">
              Pune
            </h2>
            <div className="bg-white rounded-lg p-6 sm:p-8 text-gray-800 shadow-md">
              <p className="mb-4 text-base sm:text-lg">
                Schedule your collection in Pune{" "}
              </p>
              <div className="flex space-x-4 sm:space-x-6">
                <div className="w-1/2 border rounded-lg p-4 sm:p-6 text-center">
                  <p className="text-sm sm:text-base text-gray-500">EARLIEST</p>
                  <p className="font-semibold text-base sm:text-lg">
                    12:00 - 15:00
                  </p>
                </div>
                <div className="w-1/2 border rounded-lg p-4 sm:p-6 text-center">
                  <p className="text-sm sm:text-base text-gray-500">LAST</p>
                  <p className="font-semibold text-base sm:text-lg">
                    20:00 - 22:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem]">
              <div className="absolute inset-0 bg-blue-300 rounded-full"></div>
              <img
                src={man}
                alt="Happy customer with laundry"
                className="absolute inset-0 w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </main>
      </div>

      {/* Additional Sections */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-12 md:py-16 lg:py-24">
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
      </section>
    </div>
  );
};

export default LandingPage;