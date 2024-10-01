import man from "../assets/Designer.jpeg";
import LaundryService from "../components/LaundryService.jsx";
import LaundryStatus from "../components/LaundryStatus.jsx";
import CustomerSupport from "../components/CustomerSupport.jsx";
import Services from "../components/Services.jsx";
import CustomerReviews from "../components/CustomerReview.jsx";
import Future from "../components/Future.jsx";
import BookNow from "../components/BookNow.jsx";
import Serviceinfo from "../components/Serviceinfo.jsx";
import ServiceFeatures from "../components/ServiceFeatures.jsx";
import MyFooter from "../components/MyFooter.jsx";
import playstore from "../assets/playstoreicon.svg";
import appstore from "../assets/appstoreicon.svg"; // Import the App Store icon

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-500 min-h-screen flex justify-center items-center pt-16 md:pt-24">
        <main className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="mt-4 md:w-1/2 text-white md:ml-16 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Laundry & dry <br /> cleaning within <br /> 24h delivery
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-8">
              Pune
            </h2>
            <div className="bg-white rounded-lg p-4 sm:p-6 text-gray-800 shadow-2xl">
              <p className="mb-2 text-sm sm:text-base">
                Schedule your collection in Pune{" "}
              </p>
              <div className="flex space-x-2 sm:space-x-4">
                <div className="w-1/2 border-4 rounded-lg p-2 sm:p-4 text-center shadow-inner hover:bg-gray-100 transition duration-300">
                  <p className="text-xs sm:text-sm text-gray-500">EARLIEST</p>
                  <p className="font-semibold text-sm sm:text-base">
                    12:00 - 15:00
                  </p>
                </div>
                <div className="w-1/2 border-4 rounded-lg p-2 sm:p-4 text-center shadow-inner hover:bg-gray-100 transition duration-300">
                  <p className="text-xs sm:text-sm text-gray-500">LAST</p>
                  <p className="font-semibold text-sm sm:text-base">
                    20:00 - 22:00
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg flex flex-row items-center mt-6 md:mb-4 space-x-4">
              <div className="flex items-center shadow-2xl p-2 md:p-4 rounded-lg">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src={playstore}
                    alt="Play Store"
                    className="w-8 h-auto md:w-10"
                  />
                  <div className="ml-2 md:ml-4">
                    <p className="text-sm md:text-lg font-semibold text-white-800">
                      Download Andes
                    </p>
                    <p className="text-xs md:text-sm text-grey-800">
                      from Playstore
                    </p>
                  </div>
                </a>
              </div>
              <div className="flex items-center shadow-2xl p-2 md:p-4 rounded-lg">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <img
                    src={appstore}
                    alt="App Store"
                    className="w-8 h-auto md:w-10"
                  />
                  <div className="ml-2 md:ml-4">
                    <p className="text-sm md:text-lg font-semibold text-white-800">
                      Download Andes
                    </p>
                    <p className="text-xs md:text-sm text-grey-800">
                      from App Store
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mb-4 md:w-1/2 flex justify-center hidden md:block md:ml-28">
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
        {/* <TeamSection /> */}
      </section>
      <MyFooter /> {/* Footer stays at the bottom of the page */}
    </div>
  );
};

export default LandingPage;
