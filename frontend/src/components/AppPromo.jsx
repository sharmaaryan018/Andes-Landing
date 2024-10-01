import playstore from "../assets/playstoreicon.svg";

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
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <img
              src={playstore}
              alt="App Store"
              className="w-16 h-auto ml-4"
            />
            <div className="mr-6 ml-6">
              <p className="text-lg font-semibold text-blue-800 mb-2">
                Download Andes
              </p>
              <p className="text-sm text-blue-800">from Playstore</p>
            </div>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end hidden ">
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