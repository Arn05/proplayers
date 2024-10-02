import React from "react";
import Navbar from "../components/Navbar";

export const Cricket = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-6xl text-center font-bold mb-10">CRICKET</h1>
        <div className="grid grid-cols-3 gap-5">
          {/* Cricket Bat Card */}
          <div className="bg-white rounded-lg shadow-lg p-5 text-center" style={{width:'400px', height: '350px', borderRadius:'50px', marginLeft: '50px' }}>
            <img
              className="mx-auto w-40 h-40 object-cover rounded-xl"
              src="/images/cricket-bat.jpg"
              alt="Cricket Bat"
            />
            <h2 className="text-2xl font-bold mt-5">Cricket Bat</h2>
            <p className="text-lg mt-2">Rent Prize: 100.00 Rs. per Day</p>
            <button className="mt-4 px-5 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
              Add to Cart
            </button>
          </div>
          {/* Seasoned Ball Card */}
          <div className="bg-white rounded-lg shadow-lg p-5 text-center" style={{width:'400px', height: '350px', borderRadius:'50px', marginLeft: '25px' }}>
            <img
              className="mx-auto w-40 h-40 object-cover rounded-xl"
              src="/images/seasoned-ball.jpg"
              alt="Seasoned Ball"
            />
            <h2 className="text-2xl font-bold mt-5">Seasoned Ball</h2>
            <p className="text-lg mt-2">Rent Prize: 400.00 Rs. per Day</p>
            <button className="mt-4 px-5 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
              Add to Cart
            </button>
          </div>
          {/* Stumps Card */}
          <div className="bg-white rounded-lg shadow-lg p-5 text-center" style={{width:'400px', height: '350px', borderRadius:'50px'}}>
            <img
              className="mx-auto w-40 h-40 object-cover rounded-xl"
              src="/images/stumps.jpg"
              alt="Stumps"
            />
            <h2 className="text-2xl font-bold mt-5">Stumps</h2>
            <p className="text-lg mt-2">Rent Prize: 150.00 Rs. per Day</p>
            <button className="mt-4 px-5 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};