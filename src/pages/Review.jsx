import React from 'react';
import Navbar from '../components/Navbar';
// Dummy image URLs for the customers. Replace these with actual URLs.
const testimonials = [
  {
    id: 1,
    name: 'Lucy',
    description: 'She loves badminton',
    image: '/images/lucy.jpg', // Replace with actual image URL
    text: `I’ve rented badminton racquets and shoes from ProPlayer for the last four games with my friends.
           The racquets are top-notch and the shoes always smell so good and fit well! Furthermore, it is both 
           convenient and affordable.`,
  },
  {
    id: 2,
    name: 'Kushal',
    description: 'Ranji Cricketer',
    image: '/images/kushal.jpg', // Replace with actual image URL
    text: `We always rent the bat bundle from ProPlayer. Now no one has to carry bats or worry about defective bats
           as we receive bats of different weights and varieties for box-cricket. Sprentzo handles everything, and 
           I’m still in disbelief that a package costs only Rs.300 per session.`,
  },
];

export const Review = () => {
  return (
    <div className=" bg-gray-200">
    <Navbar />
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-start pt-4">

  {/* Page Title */}
  <h1 className="text-4xl font-bold text-center mb-6">Customer's Say</h1>

      {/* Testimonials Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center md:flex-row"
          >
            {/* Customer Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 object-cover rounded-half mr-6 mb-4 md:mb-0"
            />

            {/* Customer Testimonial Text */}
            <div>
              <p className="text-gray-700 text-lg mb-4">{testimonial.text}</p>
              <p className="font-semibold text-xl">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

//export default App;