/* eslint-disable react/prop-types */

const CustomerReviews = () => {
  const reviews = [
    {
      name: "Rahul",
      text: "As a software engineer working long hours, Rahul found it hard to keep up with laundry. Our service saved him hours each week by offering quick pickups and doorstep deliveries, making life a lot easier.",
      rating: 5,
      imageUrl: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=900&t=st=1727438752~exp=1727439352~hmac=c7a814efd31b975f152e1bd23e4f630a265197925b123d66e9ee22264da405a9",
      source: "Google Reviews",
      sourceImage: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=900&t=st=1727438752~exp=1727439352~hmac=c7a814efd31b975f152e1bd23e4f630a265197925b123d66e9ee22264da405a9",
    },
    {
      name: "Priya",
      text: "Happy with the way the app works. Was able to do all the things I could get done on the website. Have used the wash and tumble dry service twice now and so far it's been fantastic; no delays with the pick up or drop off of the bags, no missing or damaged items. I'm very pleased with Laundryheap altogether.",
      rating: 4,
      imageUrl: "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?w=900&t=st=1727438799~exp=1727439399~hmac=814faa7ce492a7f822116d69f441578a9fd46321a899a506fe502071ff40fcfe",
      source: "Play Store",
      sourceImage: "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?w=900&t=st=1727438799~exp=1727439399~hmac=814faa7ce492a7f822116d69f441578a9fd46321a899a506fe502071ff40fcfe",
    },
    {
      name: "Amit",
      text: "This app is one of the best that I have navigated. It saves me the walking, parking, getting change, waiting to use a dryer in a launderette and folding of clothes. I'm glad I found it.",
      rating: 5,
      imageUrl: "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg?w=740&t=st=1727793417~exp=1727794017~hmac=c107848fc96d2d4494a289f46bfc8b316bd0e827471bda91c36954da2fe4cbd4",
      source: "Google Reviews",
      sourceImage: "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg?w=740&t=st=1727793417~exp=1727794017~hmac=c107848fc96d2d4494a289f46bfc8b316bd0e827471bda91c36954da2fe4cbd4",
    },
  ];
  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-16 text-center">
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
            className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 mx-auto w-full sm:w-auto"
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
