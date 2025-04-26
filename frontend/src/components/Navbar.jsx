import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import logo from "../assets/logo.png";
import CartIcon from "./CartIcon";
import { toast } from "react-hot-toast";
import LoginPopup from "../pages/Loginpopup"; // Add this import


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); // Add this state

  const { user, isLoggedIn, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <>
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg py-2" : "bg-white/95 py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <img src={logo} alt="Andes logo" className="h-16 w-16" />
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/working"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg ${
                isActive("/working") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              How it works
            </a>
            
            <a
              href="/services"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg ${
                isActive("/services") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Services & Pricing
            </a>
         
            <a
              href="/about"
              className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg ${
                isActive("/about") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              About us
            </a>

            {isLoggedIn && (
              <a
                href="/my-orders"
                className={`text-gray-700 hover:text-blue-600 transition-colors duration-300 font-medium text-lg ${
                  isActive("/my-orders") ? "text-blue-600 font-semibold" : ""
                }`}
              >
                My Orders
              </a>
            )}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <div className="mr-2">
                  <CartIcon />
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-600 font-medium">
                    Hi, {user?.name || user?.email.split('@')[0]}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="bg-white text-gray-700 border-2 border-gray-300 px-5 py-2.5 rounded-full font-semibold hover:bg-gray-50 transition duration-300 text-lg"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                
                   {!isLoggedIn && (
                    <button
                      onClick={() => setShowLoginPopup(true)}
                      className="bg-white text-blue-600 border-2 border-blue-600 px-5 py-2.5 rounded-full font-semibold hover:bg-blue-50 transition duration-300 text-lg"
                    >
                      Sign In
                    </button>
                  )}
              </>
            )}
            
            <a
              href="https://play.google.com/store/apps/details?id=com.andes.laundry"
              className="bg-blue-600 text-white px-7 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition duration-300 flex items-center space-x-2 text-lg"
            >
              <span>Download Now</span>
              <span className="text-lg">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {isLoggedIn && (
              <>
                <div className="mr-2">
                  <CartIcon />
                </div>
              </>
            )}
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:hidden transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <div className="pt-4 pb-6 space-y-4">
            <a
              href="/working"
              className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300 text-lg ${
                isActive("/working") ? "bg-blue-50 text-blue-600 font-semibold" : ""
              }`}
            >
              How it works
            </a>
    
            <a href="/services"
              className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300 text-lg ${
                isActive("/services") ? "bg-blue-50 text-blue-600 font-semibold" : ""
              }`}
            >
              Services & Pricing
            </a>
           
            <a
              href="/about"
              className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300 text-lg ${
                isActive("/about") ? "bg-blue-50 text-blue-600 font-semibold" : ""
              }`}
            >
              About us
            </a>

            {isLoggedIn && (
              <a
                href="/my-orders"
                className={`block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors duration-300 text-lg ${
                  isActive("/my-orders") ? "bg-blue-50 text-blue-600 font-semibold" : ""
                }`}
              >
                My Orders
              </a>
            )}

            <div className="pt-4 space-y-3">
              {isLoggedIn ? (
                <>
                  <div className="px-4 py-2 text-center text-gray-600 font-medium">
                    Logged in as {user?.name || user?.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 text-lg"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                    {!isLoggedIn && (
          <button
            onClick={() => setShowLoginPopup(true)}
            className="block text-center bg-white text-blue-600 border border-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 text-lg"
          >
            Sign In
          </button>
        )}
               
                </>
              )}
              
              <a
                href="https://play.google.com/store/apps/details?id=com.andes.laundry"
                className="block text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-lg"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
          {showLoginPopup && <LoginPopup onClose={() => setShowLoginPopup(false)} />}
</>
  );
};

export default Navbar;