import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
// FAQ data
const faqs = [
  {
    question: 'How Does The Rental Process Work?',
    answer: 'Browse our selection, choose the desired equipment, select the venue and rental session time, and make a booking online.',
  },
  {
    question: 'Are The Items In Good Condition?',
    answer: 'Absolutely! We take pride in maintaining our equipment to the highest standards for optimal performance.',
  },
  {
    question: 'Can I Cancel Or Modify My Booking?',
    answer: 'Yes, you can cancel or modify your booking up to 60 minutes before the scheduled session. Cancellations within 30 minutes of the rental date and time will not be refunded.',
  },
  {
    question: 'Do I Need To Provide Any Deposit?',
    answer: 'Some products may require deposits, which will have to be made at the time of booking. They will be refunded after the game.',
  },
  {
    question: 'Is There A Penalty For Late Returns?',
    answer: 'Yes, late returns may incur additional charges. Please make sure to return the equipment on time to avoid any penalties.',
  },
];

export const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Timer to automatically slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % faqs.length);
    }, 5000); // 5 seconds interval
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div classname='bg-gray-500'>
        <Navbar />
    
        <div className="min-h-screen flex items-start justify-center bg-gray-200 pt-4">

        
      <div className="max-w-4xl p-8 bg-gray-100 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

        {/* FAQ section */}
        <div className="flex">
          {/* Questions list */}
          <div className="w-1/3 bg-orange-400 rounded-l-lg p-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`p-4 mb-4 cursor-pointer rounded-lg text-white ${
                  index === currentIndex ? 'bg-orange-600 text-orange-400' : ''
                }`}
              >
                {faq.question}
              </div>
            ))}
          </div>

          {/* Answer display */}
          <div className="w-2/3 bg-white rounded-r-lg p-8 flex items-center justify-center">
            <p className="text-gray-700 text-lg">{faqs[currentIndex].answer}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// export default FAQ;
