import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import Working from "./pages/Working";
import MyFooter from "./components/MyFooter";
import SocietyForm from "./pages/SocietyForm";
import "./locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar stays at the top of all pages */}
        <div ref={scrollRef} className="flex-grow scroll-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/working" element={<Working />} />
            <Route path="/book-now" element={<SocietyForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;