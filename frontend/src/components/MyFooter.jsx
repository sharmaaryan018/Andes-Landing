import React from 'react';

const MyFooter = () => {
  return (
    <footer className="bg-[#0A1321] text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        {/* Upper Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6 mb-6">
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-center md:text-left">
            <a href="#book-now" className="hover:text-blue-400">Book now</a>
            <a href="#how-it-works" className="hover:text-blue-400">How it works</a>
            <a href="#pricing" className="hover:text-blue-400">Pricing</a>
            <a href="#about-us" className="hover:text-blue-400">About us</a>
          </nav>
          <p className="text-gray-400 text-sm mt-4 md:mt-0 text-center md:text-left">
            <a href="#terms" className="hover:text-blue-400">Terms & Conditions</a>, 
            <a href="#privacy" className="hover:text-blue-400"> Privacy Policy</a>, 
            <a href="#contact" className="hover:text-blue-400"> Contact</a>
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-center mb-8">
          <form className="flex justify-center items-center space-x-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 w-full max-w-sm bg-white text-black rounded-full focus:outline-none"
            />
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full">
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">
            <i className="fab fa-youtube"></i> YouTube
          </a>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2024 Andes Inc.</p>
          <p>Powered by Andes.</p>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
