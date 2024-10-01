import React from "react";

const CustomerStories = () => {
  const stories = [
    {
      title: "Rahul's Story",
      tags: ["Saving Time", "Repeat Orders", "Door-to-Door Delivery"],
      description:
        "As a software engineer working long hours, Rahul found it hard to keep up with laundry. Our service saved him hours each week by offering quick pickups and doorstep deliveries, making life a lot easier.",
      image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=900&t=st=1727438752~exp=1727439352~hmac=c7a814efd31b975f152e1bd23e4f630a265197925b123d66e9ee22264da405a9",
    },
    {
      title: "Priya's Story",
      tags: ["Simple App", "Affordable Prices", "Top Quality"],
      description:
        "Between her job and weekend MBA classes, Priya was always on the go. She loves how easy it is to book a laundry pickup through the app, and the prices fit her budget perfectly.",
      image: "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?w=900&t=st=1727438799~exp=1727439399~hmac=814faa7ce492a7f822116d69f441578a9fd46321a899a506fe502071ff40fcfe",
    },
    {
      title: "Amit’s Story",
      tags: ["Quick Booking", "Next-Day Delivery", "Order Tracking"],
      description:
        "As a bachelor living in Pune, Amit always had laundry piling up. Thanks to the quick booking and next-day delivery service, he can now stay on top of his laundry without hassle.",
      image: "https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-14466.jpg?w=740&t=st=1727793417~exp=1727794017~hmac=c107848fc96d2d4494a289f46bfc8b316bd0e827471bda91c36954da2fe4cbd4",
    },
  ];

  return (
    <section className="bg-yellow-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Meet Our Customers
        </h2>
        <div className="flex flex-wrap justify-center">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 m-4 w-80"
            >
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 bg-cover bg-center rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[40px] overflow-hidden">
                  <img
                    src={story.image}
                    alt={`${story.title} image`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {story.title}
              </h3>
              <div className="flex flex-wrap justify-center mb-4">
                {story.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-yellow-200 text-gray-800 px-2 py-1 text-sm rounded-full mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 text-center">
                {story.description}
              </p>
              <div className="text-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  See more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;
