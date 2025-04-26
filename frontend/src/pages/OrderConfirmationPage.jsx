// OrderConfirmation.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

const OrderConfirmation = () => {
  const { orderNumber } = useParams(); // Get orderNumber from URL params

  return (
    <div className="min-h-screen bg-gray-50 py-12 mt-20">
      <Helmet>
        <title>Order Confirmed - Andes Laundry</title>
      </Helmet>

      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
            <CheckCircleIcon className="h-6 w-6 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-6">
            Your order #{orderNumber} has been placed successfully.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <h2 className="font-medium text-gray-800 mb-2">What's Next?</h2>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>Our team will prepare your order</li>
              <li>Pickup scheduled for today between 6-10 PM</li>
              <li>Estimated delivery: 48 hours</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to={`/orders/${orderNumber}`}  // Link to specific order details
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              View Order Details
            </Link>
            <Link
              to="/services"
              className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-xl shadow-md p-6 text-left">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Need Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-700">Customer Support</h3>
              <p className="text-gray-600">+91 9876543210</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Email</h3>
              <p className="text-gray-600">care@andes.co.in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;