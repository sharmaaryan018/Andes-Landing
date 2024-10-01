import React from 'react';

const teamMembers = [
  'team-member-1.jpg', // Replace with actual image paths
  'team-member-2.jpg',
  'team-member-3.jpg',
  'team-member-4.jpg',
  'team-member-5.jpg',
];

const TeamSection = () => {
  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="text-center mb-12">
        <div className="text-xl font-bold">Meet the team</div>
        <p className="mt-2 p-4">
          We're a global team of laundry, tech, and logistics experts on a mission to free people
          from laundry so that they can spend more time doing what they <span className="text-yellow-400">💛</span>
        </p>
        <p className="mt-1 font-semibold">TEAM ANDES</p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {teamMembers.map((image, index) => (
          <div key={index} className="relative w-48 h-48 overflow-hidden">
            <img
              src={image}
              alt={`Team member ${index + 1}`}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
