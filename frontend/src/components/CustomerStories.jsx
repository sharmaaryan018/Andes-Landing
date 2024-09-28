import React from "react";

const CustomerStories = () => {
  const stories = [
    {
      title: "Daniel's story",
      tags: ["Saving Time", "Repeat Orders", "Door-2-Door Delivery"],
      description:
        "Too busy for your clothing care needs? See how to cut the hassle and time in half with Laundryheap.",
      image: "https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129416.jpg?w=900&t=st=1727438752~exp=1727439352~hmac=c7a814efd31b975f152e1bd23e4f630a265197925b123d66e9ee22264da405a9",
    },
    {
      title: "Angela's Story",
      tags: ["Simple App", "Affordable Prices", "Top Quality"],
      description:
        "Check out how taking care of large amounts of laundry in a household with teenagers looks like.",
      image: "https://img.freepik.com/free-photo/closeup-smiling-young-beautiful-indian-woman_1262-2261.jpg?w=900&t=st=1727438799~exp=1727439399~hmac=814faa7ce492a7f822116d69f441578a9fd46321a899a506fe502071ff40fcfe",
    },
    {
      title: "Sarah’s Story",
      tags: ["Quick Booking", "Next-Day Delivery", "Order Tracking"],
      description:
        "No one likes having piles of laundry lying around. See how to solve that problem in no time.",
      image: "https://img.freepik.com/free-photo/indian-ethnicity-happy-woman-portrait_53876-153598.jpg?w=826&t=st=1727438847~exp=1727439447~hmac=49ae67d60aecb0b84ffffb4d9bb2f5e24beb072c80e1529efadf23e4b9b47bd2",
    },
  ];

  return (
    <section className="bg-yellow-200 py-12">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-8 text-blue-800">
          Meet Laundryheap customers
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
              <h3 className="text-xl font-semibold mb-2 text-center">{story.title}</h3>
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
              <p className="text-gray-600 mb-4 text-center">{story.description}</p>
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
