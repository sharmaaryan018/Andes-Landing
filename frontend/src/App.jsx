import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import Working from "./pages/Working";
import AndesAssured from "./pages/AndesAssured";
import "./locomotive-scroll.css";
import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Other from "./pages/Other";
import { FaComments } from "react-icons/fa"; // Import a generic chat icon
import './App.css';

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
    <>
      <Navbar />
      <div ref={scrollRef} className="flex flex-col min-h-screen scroll-container">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/working" element={<Working />} />
            <Route path="/andes-assured" element={<AndesAssured />} />
            <Route path="/other" element={<Other />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </div>
      </div>

      {/* Chat Button */}
      <a
        href="https://wa.me/+918626076578"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaComments className="h-8 w-8" />
      </a>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}