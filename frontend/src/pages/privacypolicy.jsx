import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16">
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 p-6 md:p-8 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-blue-100">Effective Date: 13th April 2025</p>
      </div>

      {/* Introduction */}
      <div className="p-6 md:p-8 border-b border-gray-200">
        <p className="text-gray-700 mb-4">
          At Andes, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard the data you provide when using our website (<span className="font-semibold">www.andes.co.in</span>) and services. By accessing our platform, you agree to the practices described herein.
        </p>
      </div>

      {/* Policy Sections */}
      <div className="divide-y divide-gray-200">
        {/* 1. Information We Collect */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">1. Information We Collect</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-semibold">Personal Details:</span> Name, phone number, email, address, and payment information when placing an order or signing up.
            </li>
            <li>
              <span className="font-semibold">Device Data:</span> IP address, browser type, access date/time, and location data.
            </li>
            <li>
              <span className="font-semibold">Cookies & Tracking:</span> We use cookies to personalize your experience and analyze user behavior.
            </li>
          </ul>
        </div>

        {/* 2. How We Use Your Information */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Fulfill service requests and process payments</li>
            <li>Send order updates and promotional offers</li>
            <li>Improve user experience and website functionality</li>
            <li>Prevent fraud and resolve customer issues</li>
          </ul>
        </div>

        {/* 3. Sharing of Information */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">3. Sharing of Information</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>We do not sell your personal information.</li>
            <li>Information may be shared with internal staff or affiliates for order processing and customer support.</li>
            <li>Data may be disclosed if required by law, or in cases of merger/acquisition.</li>
          </ul>
        </div>

        {/* 4. Security Practices */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">4. Security Practices</h2>
          <p className="text-gray-700">
            We implement secure servers, encryption, and firewalls to protect your information from unauthorized access or misuse.
          </p>
        </div>

        {/* 5. Your Rights & Choices */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">5. Your Rights & Choices</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>You may opt out of marketing emails or messages anytime.</li>
            <li>You can disable cookies via browser settings (note: this may affect your experience).</li>
          </ul>
        </div>

        {/* 6. Third-party Links */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">6. Third-party Links</h2>
          <p className="text-gray-700">
            Our website may contain links to external sites. We are not responsible for their privacy practices.
          </p>
        </div>

        {/* 7. Consent & Communication */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">7. Consent & Communication</h2>
          <p className="text-gray-700">
            By using our services, you consent to our data collection practices and to receiving updates via Email, SMS, WhatsApp, or phone.
          </p>
        </div>

        {/* 8. Grievance Officer */}
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">8. Grievance Officer</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-start mb-3">
              <FiMapPin className="h-5 w-5 text-blue-600 mt-1" />
              <div className="ml-3">
                <p className="font-medium">Mr. Aryan Ramesh Gupta</p>
                <p className="text-gray-600">CEO, Andes</p>
                <p className="text-gray-600">Survey No. 124, Paud Rd, Kothrud, Pune - 411038</p>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <FiMail className="h-5 w-5 text-blue-600" />
              <a href="mailto:care@andes.co.in" className="ml-3 text-blue-600 hover:underline">care@andes.co.in</a>
            </div>
            <div className="flex items-center">
              <FiPhone className="h-5 w-5 text-blue-600" />
              <a href="tel:+918626076578" className="ml-3 text-blue-600 hover:underline">+91 86260 76578</a>
            </div>
            <p className="mt-3 text-gray-500 flex items-center">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                🕒
              </span>
              <span className="ml-2">Everyday, Anytime, Always for You</span>
            </p>
          </div>
        </div>
      </div>

  
    </div>
  </div>
);

export default PrivacyPolicy;