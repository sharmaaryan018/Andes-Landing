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
import FeatureLeft from "../components/FeatureLeft.jsx";
import FeatureRight from "../components/FeatureRight.jsx";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.png";

const bulletPoints1 = [
  { icon: "🔔", text: "Get notified when your order is ready for pick-up" },
  { icon: "⏱️", text: "Schedule collection at your convenience" },
];

const bulletPoints2 = [
  { icon: "📦", text: "Track your delivery in real-time" },
  { icon: "🚪", text: "Know exactly when your laundry will arrive" },
];

const bulletPoints3 = [
  { icon: "📞", text: "24/7 customer support available" },
  { icon: "💬", text: "Reach us via call or chat in the app" },
];

const bulletPoints4 = [
  { icon: "✅", text: "Order scheduled and delivered promptly" },
  { icon: "📦", text: "Enjoy freshly cleaned clothes at your doorstep" },
];

const bulletPointsEnvironmental = [
  { icon: "🍃", text: "Zero-emission delivery vehicles" },
  { icon: "💧", text: "Efficient water use" },
  { icon: "❤️", text: "Trustworthy local cleaners" },
];

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
  <div className="flex items-center shadow-white p-2 md:p-4 rounded-lg bg-white">
    <a
      href="https://play.google.com/store/apps/details?id=com.andes.laundry"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <img src={playstore} alt="Play Store" className="w-11 h-11 md:w-16" />
      <div className="ml-2 md:ml-4">
        <p className="text-sm md:text-lg font-semibold text-black">
          Download Andes
        </p>
        <p className="text-xs md:text-sm text-black">from Playstore</p>
      </div>
    </a>
  </div>
  <div className="flex items-center shadow-white p-2 md:p-4 rounded-lg bg-white">
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center"
    >
      <img src={appstore} alt="App Store" className="w-11 h-11 md:w-16" />
      <div className="ml-2 md:ml-4">
        <p className="text-sm md:text-lg font-semibold text-black">
          Download Andes
        </p>
        <p className="text-xs md:text-sm text-black">from App Store</p>
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
        <div className="text-center mt-8 mb-8 bg-blue-500 py-4">
          <h2 className="text-2xl font-bold text-white">
            Let's see how we can schedule your next order
          </h2>
        </div>
        <FeatureLeft
          title="FLEXIBLE"
          subtitle="1. Schedule Your Collection"
          description="Plan your day with ease. Choose a collection time that fits your schedule. We’ll notify you when the order is ready for pick-up, ensuring smooth coordination."
          imageSrc={card1}
          bulletPoints={bulletPoints1}
        />
        <FeatureRight
          title="DELIVERY STATUS"
          subtitle="2. Track Your Delivery"
          description="Stay informed about your laundry delivery with real-time tracking. Know exactly when your laundry will arrive at your doorstep, making it easy to plan your day."
          imageSrc={card2}
          bulletPoints={bulletPoints2}
        />
        <FeatureLeft
          title="CUSTOMER SUPPORT"
          subtitle="3. Assistance When You Need It"
          description="We're here to help! Whether you have a question about your order or need assistance with our services, our customer support is always ready to assist you."
          imageSrc={card3}
          bulletPoints={bulletPoints3}
        />
        <FeatureRight
          title="ORDER COMPLETED"
          subtitle="4. Order Scheduled and Delivered"
          description="Your laundry is handled with care from pick-up to delivery. Enjoy your freshly cleaned clothes delivered right to your door, hassle-free!"
          imageSrc={card4}
          bulletPoints={bulletPoints4}
        />
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
