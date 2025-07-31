import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  FaClock, FaTruck, FaShieldAlt, FaRedo, FaTshirt, FaBoxOpen,
  FaTags, FaCreditCard, FaPhone, FaBalanceScale, FaGavel, FaCheckCircle, FaEnvelope
} from 'react-icons/fa';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Andes Laundry - Terms & Conditions</title>
        <meta name="description" content="Read our terms and conditions for using Andes Laundry services." />
      </Helmet>

      <div className="max-w-3xl mx-auto px-4 py-10 font-sans">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">
            Andes Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last Updated: 31st July 2025
          </p>
          <div className="mt-3 h-1 w-20 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="bg-indigo-50 rounded-xl p-6 mb-8 text-indigo-800 text-center">
          By using Andes services, you agree to the following Terms & Conditions. These apply to all services, including laundry, dry cleaning, and pick-up/drop.
        </div>

        {/* Terms List */}
        <div className="space-y-8">
          {/* 1. Service Timelines */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaClock className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Service Timelines</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Standard delivery within <span className="font-medium">48 hours</span></li>
                <li>Urgent delivery upon request <span className="text-gray-500">(charges may apply)</span></li>
              </ul>
            </div>
          </div>

          {/* 2. Pick-up & Delivery */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaTruck className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Pick-up & Delivery</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Free for orders above <span className="font-medium">₹300</span></li>
                <li>Identity verification required for delivery if bill is missing</li>
              </ul>
            </div>
          </div>

          {/* 3. Damage or Loss */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaShieldAlt className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Damage or Loss</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Up to <span className="font-medium">10x processing cost refund</span></li>
                <li><span className="font-medium">₹500 app credit</span> (if applicable)</li>
                <li>Claims must be made within <span className="font-medium">24 hours of delivery</span></li>
              </ul>
            </div>
          </div>

          {/* 4. Re-cleaning Policy */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaRedo className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Re-cleaning Policy</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>If dissatisfied, Andes will <span className="font-medium">re-clean for free</span> (report within 24 hours).</li>
              </ul>
            </div>
          </div>

          {/* 5. Garment Care */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaTshirt className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Garment Care</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Not liable for:
                  <ul className="list-circle pl-5 mt-1 space-y-1">
                    <li>Color bleeding, shrinkage, fabric defects</li>
                    <li>Embroidery, buttons, or embellishment damage</li>
                  </ul>
                </li>
                <li>Articles accepted at <span className="font-medium">customer's risk</span></li>
              </ul>
            </div>
          </div>

          {/* 6. Lost Items */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaBoxOpen className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Lost Items</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Clothes unclaimed after <span className="font-medium">15 days</span> will not be stored</li>
                <li>Andes is not liable for lost personal belongings in garments</li>
              </ul>
            </div>
          </div>

          {/* 7. Custom Pricing */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaTags className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">7. Custom Pricing</h3>
              <p className="text-gray-700">
                Designer or delicate wear may be priced based on material complexity.
              </p>
            </div>
          </div>

          {/* 8. Payments */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaCreditCard className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">8. Payments</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Payment is mandatory before delivery</li>
                <li>Modes: Online, UPI, App wallet, or cash</li>
                <li>Refunds will follow Andes' <a href="/refund-policy" className="text-indigo-600 underline">refund policy</a></li>
              </ul>
            </div>
          </div>

          {/* 9. Communication Consent */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaPhone className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">9. Communication Consent</h3>
              <p className="text-gray-700 mb-2">
                By using Andes, you agree to receive messages and offers via:
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">WhatsApp</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Email</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SMS</span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Phone</span>
              </div>
            </div>
          </div>

          {/* 10. Legal */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
            <div className="flex-shrink-0">
              <div className="bg-indigo-100 p-4 rounded-full">
                <FaBalanceScale className="text-indigo-600 text-2xl" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">10. Legal</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Max liability: <span className="font-medium">₹3000 or 10x item cost, whichever is lower</span></li>
                <li>Jurisdiction: <span className="font-medium">Pune, Maharashtra</span></li>
                <li>Terms may change anytime without prior notice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Acceptance Section */}
        <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
          <FaCheckCircle className="mx-auto text-3xl text-indigo-600 mb-2" />
          <h3 className="text-xl font-semibold text-indigo-800 mb-2">Acceptance of Terms</h3>
          <p className="text-indigo-700">
            By using Andes services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
          </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;