import useTypewriter from "../hooks/useTypewriter"; // Import the useTypewriter hook
import man from "../assets/Designer2.jpg";
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
import AndesAssured from "../components/AA.jsx";
import TeamSection from "../components/TeamSection.jsx";

const LandingPage = () => {
  const areas = ["Kothrud", "Pimpri Chinchwad", "Shivaji Nagar"]; // Define the array of names
  const typewriterText = useTypewriter(areas, 100, 60, 1500); // Use the useTypewriter hook

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-500 min-h-screen flex justify-center items-center pt-16 md:pt-24">
        <main className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="mt-4 w-full md:w-[500px] text-white md:ml-32 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight">
              Laundry & dry
            </h1>
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-2 leading-tight">
              cleaning within
            </h1>
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-10 leading-tight">
              24h delivery
            </h1>

            {/* Typewriter text with fixed height and left alignment */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-300 mb-8 typing text-left"
              style={{
                minWidth: "300px", // Set minimum width to the largest word length to avoid shifting
                minHeight: "70px", // Set a fixed height to avoid vertical shifting
              }}
            >
              {/* {typewriterText} */} Kothrud, Pune
            </h1>

            {/* Store links */}
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
          <div className="mb-4 w-full md:w-[450px] flex justify-center hidden md:block md:ml-52">
            <div className="relative w-80 h-80 sm:w-[35rem] sm:h-[35rem] md:w-[40rem] md:h-[40rem]">
              <img
                src={man}
                alt="Happy customer with laundry"
                className="absolute inset-0 w-full h-full object-cover"
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
        <AndesAssured />
        <Future />
        <BookNow />
        <TeamSection />
      </section>
      <MyFooter /> {/* Footer stays at the bottom of the page */}
    </div>
  );
};

export default LandingPage;
