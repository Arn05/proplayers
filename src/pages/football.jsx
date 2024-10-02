import React from "react";
import Navbar from "../components/Navbar";

export const Football = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-6xl text-center font-bold mb-10">FOOTBALL</h1>
        <div className="grid grid-cols-3 gap-5">
          {/* Studs */}
          <div className="bg-white rounded-lg shadow-lg p-5 text-center" style={{width:'400px', height: '350px', borderRadius:'50px', marginLeft: '50px' }}>
            <img
              className="mx-auto w-40 h-40 object-cover rounded-xl"
              src="/images/studs.jpg"
              alt="Studs"
            />
            <h2 className="text-2xl font-bold mt-5">Nivia Football Shoes</h2>
            <p className="text-lg mt-2">Rent Prize: 75.00 Rs. per Day</p>
            <button className="mt-4 px-5 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
              Add to Cart
            </button>
          </div>
          {/* jersey */}
          <div className="bg-white rounded-lg shadow-lg p-5 text-center" style={{width:'400px', height: '350px', borderRadius:'50px', marginLeft: '25px' }}>
            <img
              className="mx-auto w-40 h-40 object-cover rounded-xl"
              src="/images/jersey.jpg"
              alt="Football Shirt"
            />
            <h2 className="text-2xl font-bold mt-5">Football Shirt</h2>
            <p className="text-lg mt-2">Rent Prize: 300.00 Rs. per Day</p>
            <button className="mt-4 px-5 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
              Add to Cart
            </button>
          </div>
          {/* Football */}
          <div className="bg-white rounded-lg shadow-lg p-5 text-center" style={{width:'400px', height: '350px', borderRadius:'50px'}}>
            <img
              className="mx-auto w-40 h-40 object-cover rounded-xl"
              src="/images/telstar.jpg"
              alt="Telstar Ball"
            />
            <h2 className="text-2xl font-bold mt-5">Telstar ball</h2>
            <p className="text-lg mt-2">Rent Prize: 200.00 Rs. per Day</p>
            <button className="mt-4 px-5 py-2 bg-gray-300 rounded-full hover:bg-gray-400">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};