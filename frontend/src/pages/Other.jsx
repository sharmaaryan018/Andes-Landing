import React from 'react';
import { FaClock, FaTruck, FaShieldAlt, FaRedo, FaHeadset, 
         FaTint, FaTshirt, FaBoxOpen, FaGem, FaTags, 
         FaCreditCard, FaCamera, FaPhone, FaBalanceScale, FaGavel } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const other = () => {
  return (

    <>
        <Helmet>
            <title>Andes Laundry - Terms & Conditions</title>
            <meta name="description" content="Read our terms and conditions for using Andes Laundry services." />
        </Helmet>

    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
          Andes Terms & Conditions
        </h1>
        <p className="text-lg text-gray-600">
          Last Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Introduction */}
      <div className="bg-indigo-50 rounded-xl p-6 mb-8">
        <p className="text-indigo-800">
          Welcome to Andes! We're committed to delivering high-quality laundry and dry-cleaning services 
          with convenience, care, and customer satisfaction. By using our services, you agree to the 
          following terms and conditions:
        </p>
      </div>

      {/* Terms List */}
      <div className="space-y-8">
        {/* Term 1 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaClock className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">1. Service Timelines</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>All laundry and dry-cleaning orders are delivered within <span className="font-medium">48 hours</span></li>
              <li>Urgent delivery may be accommodated on request and may incur extra charges</li>
            </ul>
          </div>
        </div>

        {/* Term 2 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaTruck className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">2. Free Pick-up & Delivery</h3>
            <p className="text-gray-700">
              Free pick-up and delivery services are available for orders above <span className="font-medium">Rs. 300</span>
            </p>
          </div>
        </div>

        {/* Term 3 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaShieldAlt className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">3. Damage or Loss Protection</h3>
            <p className="text-gray-700 mb-3">At Andes, your clothes are protected:</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>If any item is <span className="font-medium">lost or damaged</span> during processing, customers are eligible for a <span className="font-medium">refund of up to 10 times the item's processing cost</span></li>
              <li>Additionally, we may provide <span className="font-medium">₹500 in laundry credits</span> for future orders (through the Andes app)</li>
              <li>Claims must be made <span className="font-medium">within 24 hours of delivery</span></li>
            </ul>
          </div>
        </div>

        {/* Term 4 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaRedo className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">4. Not Happy with the Cleaning?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>If you're not satisfied with the cleaning quality, we will <span className="font-medium">re-clean your clothes for free</span></li>
              <li>Customers must raise such issues <span className="font-medium">within 24 hours</span> of receiving the clothes</li>
            </ul>
          </div>
        </div>

        {/* Term 5 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaHeadset className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">5. Customer Care Benefits</h3>
            <p className="text-gray-700">
              If an issue occurs, Andes offers: <span className="font-medium">Priority Service</span> for your every orders
            </p>
          </div>
        </div>

        {/* Term 6 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaTint className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">6. Stain Removal & Garment Care</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>We make every effort to remove stains, but <span className="font-medium">stain removal is not guaranteed</span></li>
              <li>We are <span className="font-medium">not responsible</span> for:
                <ul className="list-circle pl-5 mt-2 space-y-1">
                  <li>Color bleeding or fading</li>
                  <li>Shrinkage</li>
                  <li>Damage to embellishments, embroidery, buttons, etc.</li>
                </ul>
              </li>
              <li>Articles are accepted at the <span className="font-medium">customer's risk</span></li>
            </ul>
          </div>
        </div>

        {/* Term 7 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaTshirt className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">7. Garment Condition Disclaimer</h3>
            <p className="text-gray-700">
              We are not liable for issues that arise due to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
              <li>Defective materials or manufacturing flaws</li>
              <li>Ageing, wear and tear, or adulteration</li>
            </ul>
          </div>
        </div>

        {/* Term 8 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaBoxOpen className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">8. Order Verification & Delivery</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Customers must <span className="font-medium">check their clothes at the time of delivery</span></li>
              <li>If the original bill or challan is missing, delivery will only be made after proper identity verification</li>
            </ul>
          </div>
        </div>

        {/* Term 9 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaClock className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">9. Leftover Items & Storage</h3>
            <p className="text-gray-700">
              We will <span className="font-medium">not be responsible for uncollected clothes</span> after <span className="font-medium">15 days</span> from the scheduled delivery date
            </p>
          </div>
        </div>

        {/* Term 10 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaGem className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">10. Valuables & Personal Belongings</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Please ensure <span className="font-medium">no personal items or valuables</span> (money, jewellery, etc.) are left in the clothes</li>
              <li>Andes is <span className="font-medium">not responsible</span> for any such items lost or damaged</li>
            </ul>
          </div>
        </div>

        {/* Term 11 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaTags className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">11. Custom Pricing</h3>
            <p className="text-gray-700">
              Rates for designer wear, heavy embroidery, or special garments may vary based on the garment's complexity
            </p>
          </div>
        </div>

        {/* Term 12 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaCreditCard className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">12. Payment & Refund Policy</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Payment must be made before delivery for all orders</li>
              <li>Refunds (if any) will be processed as per Andes' compensation policy and may include cash, app credits, or both</li>
            </ul>
          </div>
        </div>

        {/* Term 13 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaCamera className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">13. Promotional Use</h3>
            <p className="text-gray-700">
              We may use images of cleaned garments for promotional purposes
            </p>
          </div>
        </div>

        {/* Term 14 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaPhone className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">14. Social Media & Communication</h3>
            <p className="text-gray-700 mb-2">
              By using Andes, you consent to receive updates and offers via:
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">WhatsApp</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">SMS</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Email</span>
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Phone calls</span>
            </div>
          </div>
        </div>

        {/* Term 15 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaBalanceScale className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">15. Limitation of Liability</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Andes is not responsible for any loss due to <span className="font-medium">fire, theft, or natural disasters</span></li>
              <li>Maximum liability for any damage/loss is <span className="font-medium">limited to 10x the item's processing cost or ₹3000, whichever is lower</span></li>
            </ul>
          </div>
        </div>

        {/* Term 16 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaGavel className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">16. Jurisdiction</h3>
            <p className="text-gray-700">
              All disputes will be subject to the jurisdiction of courts located in <span className="font-medium">Pune, Maharashtra</span>
            </p>
          </div>
        </div>

        {/* Term 17 */}
        <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <div className="flex-shrink-0">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FaGavel className="text-indigo-600 text-2xl" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">17. Policy Changes</h3>
            <p className="text-gray-700">
              Andes reserves the right to <span className="font-medium">modify these terms</span> at any time without prior notice
            </p>
          </div>
        </div>
      </div>

      {/* Acceptance Section */}
      <div className="mt-12 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
        <h3 className="text-xl font-semibold text-indigo-800 mb-4">Acceptance of Terms</h3>
        <p className="text-indigo-700">
          By using Andes services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>
    </div>
    </>
  );
};

export default other;