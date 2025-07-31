import { Helmet } from "react-helmet-async";
import { FaUndoAlt, FaTshirt, FaRegClock, FaRegCheckCircle, FaRegEnvelope, FaExclamationTriangle } from "react-icons/fa";

const ReturnPolicy = () => (
  <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-20 px-4 sm:px-6 lg:px-8">
    <Helmet>
      <title>Andes Laundry - Return Policy</title>
      <meta name="description" content="Read Andes Laundry's customer-friendly return and re-cleaning policy." />
    </Helmet>
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10animate-fade-in">
        <FaUndoAlt className="mx-auto text-5xl text-blue-600 mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Return & Re-cleaning Policy</h1>
        <p className="text-lg text-gray-600 italic">
          As a laundry service provider, Andes does not offer traditional "returns." <br />
          However, we address issues with cleaned items promptly and fairly.
        </p>
        <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Return & Re-cleaning Scenarios */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaTshirt className="mr-2 text-blue-500" /> Return & Re-cleaning Scenarios
        </h2>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-5 flex items-start space-x-4 hover:scale-105 transition-transform duration-200">
            <FaRegCheckCircle className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">1. Not Happy with Cleaning?</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Raise concern within <span className="font-bold text-blue-700">24 hours</span></li>
                <li>We will re-clean your clothes at <span className="font-bold text-blue-700">no extra charge</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex items-start space-x-4 hover:scale-105 transition-transform duration-200">
            <FaRegCheckCircle className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">2. Wrong Item Delivered</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Contact customer care <span className="font-bold text-blue-700">immediately</span></li>
                <li>We will arrange a pick-up and correct delivery within <span className="font-bold text-blue-700">24–48 hours</span></li>
              </ul>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-5 flex items-start space-x-4 hover:scale-105 transition-transform duration-200">
            <FaRegCheckCircle className="text-2xl text-green-500 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-700">3. Damaged Garment Return</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>If we accept responsibility for damage, we will initiate refund as per our <a href="/refund_policy" className="text-blue-600 underline">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FaExclamationTriangle className="mr-2 text-yellow-500" /> Important Notes
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Garments once processed cannot be "returned" in the traditional retail sense</li>
          <li>Claims beyond <span className="font-bold text-blue-700">24 hours</span> of delivery will not be considered</li>
          <li>Please ensure all personal items are removed before handing over clothes</li>
        </ul>
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

export default ReturnPolicy;