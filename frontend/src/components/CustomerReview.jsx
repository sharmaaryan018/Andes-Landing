/* eslint-disable react/prop-types */

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Martin",
      text: "This entire laundry experience was an absolute delight. The professionalism, efficiency, staff politeness, quality of service, and reasonable cost were all impressive. The service providers gave much-appreciated updates about all steps in the process. I highly recommend Laundryheap. They have perfected the art and science of laundry delivery service.",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source: "Google Reviews",
      sourceImage: "https://plus.unsplash.com/premium_photo-1669879825881-6d4e4bde67d5?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Lisa",
      text: "Happy with the way the app works. Was able to do all the things I could get done on the website. Have used the wash and tumble dry service twice now and so far it's been fantastic; no delays with the pick up or drop off of the bags, no missing or damaged items. I'm very pleased with Laundryheap altogether.",
      rating: 5,
      imageUrl: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      source: "Play Store",
      sourceImage: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Andrew",
      text: "This app is one of the best that I have navigated. It saves me the walking, parking, getting change, waiting to use a dryer in a launderette and folding of clothes. I'm glad I found it.",
      rating: 5,
      imageUrl: "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?w=1060&t=st=1727526688~exp=1727527288~hmac=c0b193554c35f9a09fc3a77b6be0feb0d72fdb9de68fb3edcd760092cfbd4e48",
      source: "Google Reviews",
      sourceImage: "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?w=1060&t=st=1727526688~exp=1727527288~hmac=c0b193554c35f9a09fc3a77b6be0feb0d72fdb9de68fb3edcd760092cfbd4e48",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto p-16 text-center">
      <h2 className="text-4xl font-bold mb-6">Our Happy customers</h2>
      <p className="text-gray-600 mb-6">
        Rated excellent ★★★★★ by 500,000+ users
      </p>
      <a href="#" className="text-blue-600 underline mb-10 inline-block">
        Read more reviews
      </a>
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto"
          >
            <div className="flex items-center mt-4 justify-center">
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
            <p className="text-gray-700 mt-4">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
