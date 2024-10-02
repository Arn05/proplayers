import React from 'react';
import Navbar from "../components/Navbar";
export const Payment = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar /> 
    <div className="min-h-screen flex items-center justify-center bg-gray-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Payment Gateway</h1>

        {/* Payment Section */}
        <div className="grid grid-cols-2 gap-8">
          {/* Payment Options */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Choose your payment option :</h2>
            <button className="bg-gray-400 text-white py-2 px-4 rounded mb-4 hover:bg-gray-500 transition duration-300">
              Net Banking
            </button>
            <button className="bg-gray-400 text-white py-2 px-4 rounded mb-4 hover:bg-gray-500 transition duration-300">
              Cash On Delivery
            </button>
            <button className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300">
              Card
            </button>
          </div>

          {/* QR Code and Online Payment */}
          <div className="flex flex-col items-center">
            <button className="bg-purple-400 text-white py-2 px-6 rounded mb-4 hover:bg-purple-500 transition duration-300">
              Online Payment
            </button>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">QR Code</h3>
              <img
                src="/images/QR.png"
                alt="QR Code"
                className="w-40 h-40"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

// export default payment;
