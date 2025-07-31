import { Helmet } from "react-helmet-async";
import { FaRegSmileBeam, FaRegMoneyBillAlt, FaRegCheckCircle, FaRegClock, FaRegEnvelope } from "react-icons/fa";

const RefundPolicy = () => (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <Helmet>
      <title>Andes Laundry - Refund Policy</title>
      <meta name="description" content="Read Andes Laundry's customer-friendly refund policy." />
    </Helmet>
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20 animate-fade-in">
        <FaRegSmileBeam className="mx-auto text-5xl text-blue-600 mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Refund Policy</h1>
        <p className="text-lg text-gray-600 italic">
          At Andes, customer satisfaction is our priority.<br />
          Our Refund Policy outlines how refunds are processed if an issue arises with your order.
        </p>
        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Eligible Refund Scenarios */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaRegMoneyBillAlt className="mr-2 text-blue-500" /> Eligible Refund Scenarios
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-5 flex items-start space-x-4 hover:scale-105 transition-transform duration-200">
            <FaRegCheckCircle className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">1. Lost or Damaged Clothes</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Eligible for refund up to <span className="font-bold text-blue-700">10 times</span> the processing cost</li>
                <li>Additional <span className="font-bold text-blue-700">₹500 credit</span> (if applicable)</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex items-start space-x-4 hover:scale-105 transition-transform duration-200">
            <FaRegCheckCircle className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">2. Service Failure or Poor Quality</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>If clothes are not cleaned properly and re-cleaning is not possible</li>
                <li>Refund will be considered on a case-by-case basis</li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex items-start space-x-4 hover:scale-105 transition-transform duration-200">
            <FaRegCheckCircle className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">3. Overcharges or Duplicate Payment</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>If charged incorrectly, the excess amount will be refunded</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaRegClock className="mr-2 text-blue-500" /> Refund Process
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>
            <span className="font-semibold">Raise a complaint</span> at{" "}
            <a href="mailto:care@andes.co.in" className="text-blue-600 underline">care@andes.co.in</a> or WhatsApp us <span className="text-gray-500">(within 24 hours of delivery)</span>
          </li>
          <li>
            <span className="font-semibold">Provide order ID, photos (if applicable), and a brief explanation</span>
          </li>
          <li>
            <span className="font-semibold">Approved refunds</span> will be processed within <span className="text-blue-700 font-bold">7 working days</span>
          </li>
        </ol>
      </section>

      

      {/* Refund Modes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaRegMoneyBillAlt className="mr-2 text-blue-500" /> Refund Modes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><span className="font-semibold">App wallet credit</span></li>
          <li><span className="font-semibold">Direct bank transfer or UPI</span></li>
          <li><span className="font-semibold">Coupon for future use</span> (based on user preference)</li>
        </ul>
      </section>

     

      {/* Contact & Footer */}
      <section className="bg-blue-100 rounded-2xl py-8 px-4 text-center">
      
        <p className="text-gray-500">We’re here to ensure your experience is smooth and worry-free.</p>
      </section>
    </div>
    {/* Animation */}
    <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px);}
        to { opacity: 1; transform: translateY(0);}
      }
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out;
      }
    `}</style>
  </div>
);

export default RefundPolicy;