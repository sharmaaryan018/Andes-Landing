import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-500 py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/">
              <img src={logo} alt="Andes logo" className="mr-3 h-10 w-10" />
            </a>
            <a href="/">
              <span className="text-white text-2xl font-bold">Andes</span>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/working"
              className={`text-white hover:text-gray-200 transition duration-300 ${
                isActive("/working") ? "underline" : ""
              }`}
            >
              How it works
            </a>
            <a
              href="/services"
              className={`text-white hover:text-gray-200 transition duration-300 ${
                isActive("/services") ? "underline" : ""
              }`}
            >
              Services & Pricing
            </a>
            <a
              href="/andes-assured"
              className={`text-white hover:text-gray-200 transition duration-300 ${
                isActive("/andes-assured") ? "underline" : ""
              }`}
            >
              Andes Assured
            </a>
            <a
              href="/about"
              className={`text-white hover:text-gray-200 transition duration-300 ${
                isActive("/about") ? "underline" : ""
              }`}
            >
              About us
            </a>
            <a
              href="/book-now"
              className={`bg-white text-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ${
                isActive("/book-now") ? "bg-gray-100" : ""
              }`}
            >
              Book now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden mt-4`}>
          <a
            href="/working"
            className={`block text-white py-2 hover:bg-blue-600 transition duration-300 ${
              isActive("/working") ? "bg-blue-600" : ""
            }`}
          >
            How it works
          </a>
          <a
            href="/services"
            className={`block text-white py-2 hover:bg-blue-600 transition duration-300 ${
              isActive("/services") ? "bg-blue-600" : ""
            }`}
          >
            Services & Pricing
          </a>
          <a
            href="/andes-assured"
            className={`block text-white py-2 hover:bg-blue-600 transition duration-300 ${
              isActive("/andes-assured") ? "bg-blue-600 underline" : ""
            }`}
          >
            Andes Assured
          </a>
          <a
            href="/about"
            className={`block text-white py-2 hover:bg-blue-600 transition duration-300 ${
              isActive("/about") ? "bg-blue-600" : ""
            }`}
          >
            About us
          </a>
          <a
            href="/book-now"
            className={`bg-white text-blue-500 px-2 py-1 rounded-full font-semibold mt-2 hover:bg-gray-100 transition duration-300 ${
              isActive("/book-now") ? "bg-gray-100" : ""
            }`}
          >
            Book now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;