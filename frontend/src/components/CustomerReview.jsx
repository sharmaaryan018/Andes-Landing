/* eslint-disable react/prop-types */

import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Atharva ",
      text: "Andes always delivers my laundry on time! their 2-hour service is perfect for busy days",
      rating: 5,
      imageUrl: customer1,
      source: "Google Reviews",
    },
    {
      name: "Yashwini",
      text: "I've been using Andes for a while now and I'm very happy with their service",
      rating: 4,
      imageUrl: customer2,
      source: "Play Store",
    },
    {
      name: "Shankhadeep",
      text: "Fast and stress-free service. Highly recommend!",
      rating: 5,
      imageUrl: customer3,
      source: "Google Reviews",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-16 text-center mt-0">
      <h2 className="text-4xl font-bold mb-6">Our Happy customers</h2>
      <p className="text-gray-600 mb-6">
        Rated excellent ★★★★★ by ourusers
      </p>
      <a href="#" className="text-blue-600 underline mb-10 inline-block">
        Read more reviews
      </a>
      <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 justify-center px-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto w-full sm:w-auto min-w-full md:min-w-0"
          >
            <div className="flex items-center mt-4 justify-center">
              <img
                src={review.imageUrl}
                alt={review.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 mt-4">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
