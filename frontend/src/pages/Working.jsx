import React from "react";
import FeatureLeft from "../components/FeatureLeft";
import FeatureRight from "../components/FeatureRight";
import EnvironmentalFeature from "../components/EnvironmentalFeature";
import QuickCleanFresh from "../components/QuickCleanFresh";
import AboutUsImage from "../assets/aboutus.jpeg";
import CustomerStories from "../components/CustomerStories";
import Schedule from "../components/Schedule";

const bulletPoints = [
  { icon: "🔗", text: "Book online or with our mobile app" },
  { icon: "🌙", text: "Weekend and evening slots available" },
];

const bulletPoints2 = [
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
          subtitle="1. Schedule your collection"
          description="Plan your day with ease. Choose a collection and delivery time at your convenience."
          imageSrc="/path/to/image.jpg"
          bulletPoints={bulletPoints}
        />
        <FeatureRight
          title="ANOTHER TITLE"
          subtitle="2. Another step"
          description="Another description for the second step."
          imageSrc="/path/to/another-image.jpg"
          bulletPoints={bulletPoints}
        />

        <FeatureLeft
          title="FLEXIBLE"
          subtitle="3. Schedule your collection"
          description="Plan your day with ease. Choose a collection and delivery time at your convenience."
          imageSrc="/path/to/image.jpg"
          bulletPoints={bulletPoints}
        />
        <FeatureRight
          title="ANOTHER TITLE"
          subtitle="4. Another step"
          description="Another description for the second step."
          imageSrc="/path/to/another-image.jpg"
          bulletPoints={bulletPoints}
        />
      </div>
      <EnvironmentalFeature
        title="A CONVENIENT LAUNDRY SOLUTION"
        subtitle="That helps protect the environment."
        description=""
        bulletPoints={bulletPoints2}
        buttonText="About us"
        imageSrc={AboutUsImage}
      />

      <CustomerStories />
      <Schedule />
    </div>
  );
};

export default Working;
