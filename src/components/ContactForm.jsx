import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending the data to a backend
    console.log('Form submitted:', formData);
    alert('We will contact you soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-lg w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Phone Number"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Message"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-black text-white py-2 rounded">
          Submit
        </button>
        
        <div className="mt-4 text-center">
          <p className="text-blue-600">We will contact you soon!</p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
