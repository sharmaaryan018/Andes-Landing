import React from "react";

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Martin",
      text: "This entire laundry experience was an absolute delight. The professionalism, efficiency, staff politeness, quality of service, and reasonable cost were all impressive. The service providers gave much-appreciated updates about all steps in the process. I highly recommend Laundryheap. They have perfected the art and science of laundry delivery service.",
      rating: 5,
      imageUrl: "https://path-to-image/martin.jpg",
      source: "Google Reviews",
      sourceImage: "https://path-to-google-reviews-logo.jpg",
    },
    {
      name: "Lisa",
      text: "Happy with the way the app works. Was able to do all the things I could get done on the website. Have used the wash and tumble dry service twice now and so far it's been fantastic; no delays with the pick up or drop off of the bags, no missing or damaged items. I'm very pleased with Laundryheap altogether.",
      rating: 5,
      imageUrl: "https://path-to-image/lisa.jpg",
      source: "Play Store",
      sourceImage: "https://path-to-play-store-logo.jpg",
    },
    {
      name: "Andrew",
      text: "This app is one of the best that I have navigated. It saves me the walking, parking, getting change, waiting to use a dryer in a launderette and folding of clothes. I'm glad I found it.",
      rating: 5,
      imageUrl: "https://path-to-image/andrew.jpg",
      source: "Google Reviews",
      sourceImage: "https://path-to-google-reviews-logo.jpg",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto p-4 text-center">
      <h2 className="text-3xl font-semibold mb-4">Our happy customers</h2>
      <p className="text-gray-600 mb-6">
        Rated excellent ★★★★★ by 500,000+ users
      </p>
      <a href="#" className="text-blue-600 underline mb-10 inline-block">
        Read more reviews
      </a>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-gray-700 mb-4">{review.text}</p>
            <div className="flex items-center mt-4">
              <img
                src={review.imageUrl}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
