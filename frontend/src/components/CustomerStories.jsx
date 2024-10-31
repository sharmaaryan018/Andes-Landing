import React from "react";
import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";

const CustomerStories = () => {
  const stories = [
    {
      title: "Atharva's Story",
      tags: ["2-Hour Service", "On-Time Delivery", "Repeat Orders"],
      description:
        "Andes always delivers my laundry on time! Their 2-hour service is perfect for busy days.",
      image: customer1,
    },
    {
      title: "Yashwini's Story",
      tags: ["Great Service", "Affordable Prices", "Highly Satisfied"],
      description:
        "I've been using Andes for a while now and I'm very happy with their service.",
      image: customer2,
    },
    {
      title: "Shankhadeep's Story",
      tags: ["Fast Service", "Stress-Free", "Highly Recommended"],
      description:
        "Fast and stress-free service. Highly recommend!",
      image: customer3,
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
