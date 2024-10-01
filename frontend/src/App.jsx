import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import Working from "./pages/Working";
import MyFooter from "./components/MyFooter";
import SocietyForm from "./pages/SocietyForm";
import AndesAssured from "./pages/AndesAssured";
import "./locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef(null);
  const location = useLocation();

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
  }, [location.pathname]); // Re-initialize on route change

  return (
    <div ref={scrollRef} className="flex flex-col min-h-screen scroll-container">
      <Navbar /> {/* Navbar stays at the top of all pages */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/working" element={<Working />} />
          <Route path="/book-now" element={<SocietyForm />} />
          <Route path="/andes-assured" element={<AndesAssured />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}