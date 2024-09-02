import React from "react";

const AppPromo = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 py-12 bg-white">
      {/* Left Section */}
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Committed to making things easy for you
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Managing your laundry and dry cleaning in the 21st century should be
          simple and accessible from anywhere.
        </p>
        <p className="text-lg text-gray-700 mb-10">
          We created the app that allows you to schedule an order in less than 2
          minutes, whether at home, at the office or on the go. No need to speak
          to any representative, you can now manage all your orders with our
          easy-to-use website or mobile app.
        </p>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <div className="mr-6">
            <p className="text-lg font-semibold text-blue-800 mb-2">
              Get the app
            </p>
            <div className="flex space-x-4">
              <img
                src="/path/to/appstore.png"
                alt="App Store"
                className="w-32 h-auto"
              />
              <img
                src="/path/to/playstore.png"
                alt="Google Play"
                className="w-32 h-auto"
              />
            </div>
          </div>
          <img
            src="/path/to/qr-code.png"
            alt="QR Code"
            className="w-24 h-24 ml-auto"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src="/path/to/app-preview.png"
          alt="App Preview"
          className="max-w-xs lg:max-w-md"
        />
      </div>
    </div>
  );
};

export default AppPromo;
