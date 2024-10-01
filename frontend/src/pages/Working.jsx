import FeatureLeft from "../components/FeatureLeft";
import FeatureRight from "../components/FeatureRight";
import EnvironmentalFeature from "../components/EnvironmentalFeature";
import QuickCleanFresh from "../components/QuickCleanFresh";
import AboutUsImage from "../assets/aboutus.jpeg";
import CustomerStories from "../components/CustomerStories";
import Schedule from "../components/Schedule";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.png";
import MyFooter from "../components/MyFooter";

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

const Working = () => {
  return (
    <div>
      <QuickCleanFresh />

      <div>
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
      </div>

      <EnvironmentalFeature
        title="A CONVENIENT LAUNDRY SOLUTION"
        subtitle="That Helps Protect the Environment"
        description="Our service doesn’t just benefit you—it’s also designed with sustainability in mind. We use zero-emission vehicles for deliveries and efficient water usage to minimize environmental impact."
        bulletPoints={bulletPointsEnvironmental}
        buttonText="About us"
        imageSrc={AboutUsImage}
      />

      <CustomerStories />
      <Schedule />
      <MyFooter /> {/* Footer stays at the bottom of the page */}
    </div>
  );
};

export default Working;
