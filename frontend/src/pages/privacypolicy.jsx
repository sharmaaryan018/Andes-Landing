import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const PrivacyPolicy = () => {
  const [expandedSections, setExpandedSections] = useState({
    collection: true,
    use: false,
    sharing: false,
    links: false,
    security: false,
    optout: false,
    ads: false,
    consent: false,
    grievance: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-16"> 
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 p-6 md:p-8 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-blue-100">Effective Date: 13th April 2025</p>
        </div>

        {/* Introduction */}
        <div className="p-6 md:p-8 border-b border-gray-200">
          <p className="text-gray-700 mb-4">
            At Andes, we fully understand and respect that the information you share with us is private and needs to be safeguarded. To keep the process transparent, we would like to guide you through our entire information collection process. This privacy policy and all its clauses are applicable to
            <span className="font-semibold"> www.andes.co.in</span>
            , which is a laundry and dry-cleaning services platform, completely owned and operated by
            Andes
            , led by Aryan Gupta (CEO). Please go through the privacy policy to fully understand our information gathering and dissemination practices. It is understood that by using our website
            <span className="font-semibold"> www.andes.co.in</span>
            , you consent to the data gathering practices used anywhere on our website.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
            <p className="text-yellow-700 font-medium">Important Note:</p>
            <p className="text-yellow-600">
              This privacy policy is subject to change at any time without notice. It is our sincere request that you review our website periodically to keep yourself apprised of the privacy policy. By visiting this website, you agree to be bound by the terms and conditions specified herein. If you do not agree, please do not use or access our Website. By merely using the Website, you expressly consent to our use and disclosure of your personal information in accordance with this Privacy Policy. This Privacy Policy is incorporated into and subject to our Terms of Service.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="divide-y divide-gray-200">
          {/* Section 1 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('collection')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">1. Collection of Personal Details and Related Information</h2>
              {expandedSections.collection ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.collection && (
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  When you use our website, we may collect personal information such as your name, email address, contact number, location, and payment details. This information helps us provide a personalized, efficient, and secure experience.
                </p>
                <p>
                You may browse our website without submitting personal data. However, when you access certain features or services, you will be prompted to provide information. We may also automatically track certain information about your visit, including your IP address, browser type, and the URL you came from or go to next. We use data collection tools like cookies to improve your experience.
                </p>
                <p>
                If you engage in transactions through our website, we may collect your billing address and payment method details. Additionally, any feedback, reviews, or
                communication shared by you via messages or emails may
                </p>
              </div>
            )}
          </div>

          {/* Section 2 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('use')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">2. Use of Demographic / Profile Data / Your Information</h2>
              {expandedSections.use ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.use && (
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                We use your personal information to deliver our services, respond to queries, improve our platform, send promotional offers, prevent fraud, and enhance user experience. If we use your information for marketing, you’ll always have the option to opt-out.
                </p>
                <p>
                We may analyze demographic and behavioral data to personalize your experience and administer the website better. Your IP address helps us with troubleshooting and demographic segmentation. Occasionally, we may conduct surveys to understand your preferences and enhance our services accordingly.
                </p>
                <p>
                Cookies help us recognize returning users, store user preferences, and enhance your session. You can decline cookies through your browser settings, though it may affect site functionality.
                </p>
              </div>
            )}
          </div>

          {/* Section 3 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('sharing')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">3. Sharing of Personal Information</h2>
              {expandedSections.sharing ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.sharing && (
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  We do not sell your personal information. We may share data with internal teams and affiliated partners for service enhancement or if legally required. Disclosure might be necessary for enforcing policies, responding to legal claims, or protecting user safety.
                </p>
                <p>
                In the event of a merger, acquisition, or business restructuring, your personal data may be transferred as part of the transaction. Any such new entity will be bound by this policy.
                </p>
              </div>
            )}
          </div>

          {/* Section 4 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('links')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">4. Links to Other Sites</h2>
              {expandedSections.links ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.links && (
              <div className="mt-4 text-gray-600">
                <p>
                  Our website may contain links to other websites. Andes is not responsible for the privacy practices or content of these third-party sites.
                </p>
              </div>
            )}
          </div>

          {/* Section 5 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('security')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">5. Security Precautions</h2>
              {expandedSections.security ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.security && (
              <div className="mt-4 text-gray-600">
                <p>
                  We adopt stringent security measures to protect your data from unauthorized access, misuse, or alteration. Secure servers and encrypted communication channels are used to protect sensitive data.
                </p>
              </div>
            )}
          </div>

          {/* Section 6 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('optout')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">6. Choice/Opt-Out</h2>
              {expandedSections.optout ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.optout && (
              <div className="mt-4 text-gray-600">
                <p>
                  You have the option to opt out of receiving non-essential communications from us. To stop receiving promotional messages, please contact us at the details below or use the unsubscribe options in our communications.
                </p>
              </div>
            )}
          </div>

          {/* Section 7 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('ads')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">7. Advertisements</h2>
              {expandedSections.ads ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.ads && (
              <div className="mt-4 text-gray-600">
                <p>
                  We may allow third-party advertisers on our platform. These companies may use anonymous data (excluding personally identifiable information) about your visits to serve targeted ads.
                </p>
              </div>
            )}
          </div>

          {/* Section 8 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('consent')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">8. Your Consent</h2>
              {expandedSections.consent ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.consent && (
              <div className="mt-4 text-gray-600 space-y-4">
                <p>
                  By using our services and submitting your personal information, you consent to the collection and use of that information as described in this policy. This includes the sharing and processing of your data in accordance with this privacy policy.
                </p>
                <p>
                  You also consent to receive communication from Andes via SMS, WhatsApp, Email, and other channels.
                </p>
              </div>
            )}
          </div>

          {/* Section 9 */}
          <div className="p-6 md:p-8">
            <button 
              onClick={() => toggleSection('grievance')}
              className="flex justify-between items-center w-full text-left"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">9. Grievance Officer</h2>
              {expandedSections.grievance ? <FiChevronUp className="h-6 w-6" /> : <FiChevronDown className="h-6 w-6" />}
            </button>
            
            {expandedSections.grievance && (
              <div className="mt-4 text-gray-600">
                <p className="mb-4">
                  In accordance with the Information Technology Act, 2000 and rules thereunder, the name and contact details of the Grievance Officer are provided below:
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start mb-3">
                    <div className="flex-shrink-0 mt-1">
                      <FiMapPin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">Mr. Aryan Gupta</p>
                      <p className="text-gray-600">CEO, Andes</p>
                      <p className="text-gray-600">Survey No. 124, Paud Rd, Kothrud</p>
                      <p className="text-gray-600">Pune, Maharashtra - 411038</p>
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
                      ⏰
                    </span>
                    <span className="ml-2">Everyday, Anytime, Always for You!</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Andes Laundry Services. All rights reserved.</p>
          <p className="mt-1">Last updated: April 13, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;