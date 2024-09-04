import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import Working from "./pages/Working";
import MyFooter from "./components/MyFooter";
import SocietyForm from "./pages/SocietyForm";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Navbar stays at the top of all pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/working" element={<Working />} />
            <Route path="/book-now" element={<SocietyForm />} />
          </Routes>
        </div>
        <MyFooter /> {/* Footer stays at the bottom of the page */}
      </div>
    </Router>
  );
}

export default App;
