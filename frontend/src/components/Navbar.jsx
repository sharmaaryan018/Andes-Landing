import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/api/placeholder/40/40"
              alt="Laundryheap logo"
              className="mr-2"
            />
            <span className="text-white text-2xl font-bold">Andes</span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/working" className="text-white hover:text-gray-200">
              How it works
            </a>
            <a href="/services" className="text-white hover:text-gray-200">
              Services & Pricing
            </a>
            <a href="/about" className="text-white hover:text-gray-200">
              About us
            </a>
            <a
              href="/book-now"
              className="bg-white text-blue-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-100"
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
          <a href="#" className="block text-white py-2">
            How it works
          </a>
          <a href="#" className="block text-white py-2">
            Prices & Services
          </a>
          <a href="#" className="block text-white py-2">
            About us
          </a>
          <a href="#" className="block text-white py-2">
            FAQ
          </a>
          <a href="#" className="block text-white py-2">
            For business
          </a>
          <a href="#" className="block text-white py-2">
            Log in
          </a>
          <a
            href="#"
            className="block bg-white text-blue-500 px-4 py-2 rounded-full font-semibold mt-2"
          >
            Book now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
