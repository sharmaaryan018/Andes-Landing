import React from "react";
import LaundryServiceIntro from "../components/LaundryServiceIntro";
import WhoWeAre from "../components/WhoWeAre";
import TeamSection from "../components/TeamSection";
import AppPromo from "../components/AppPromo";
import WorkWithUs from "../components/WorkWithUs";
import Future from "../components/Future";
const AboutPage = () => {
  return (
    <div>
      <LaundryServiceIntro />
      <WhoWeAre />
      <TeamSection />
      <AppPromo />
      <WorkWithUs />
      <LaundryServiceIntro />
      <Future />
    </div>
  );
};

export default AboutPage;
