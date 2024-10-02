import React from "react";
import Navbar from "../components/Navbar";

export const HomePage = () => {
  return (
    <div className="bg-[url(/images/sport-tools.jpeg)] w-full h-screen">
      <Navbar />
      <div className="celebrate-sports-day mx-auto m-5 h-[35%] w-[70%] relative rounded-3xl overflow-hidden bg-white">
      <h3 className="text-5xl text-blue-900 z-20 p-5 relative bg-blue-100 bg-opacity-50 rounded-md inline-block">
  Let's Celebrate Sports!!
</h3>

        <img className="absolute object-cover top-0 w-full h-full" src="/images/home-img-1.jpeg" alt="" />
      </div>
      <div className="your-favorites mx-auto m-5 h-[35%] w-[80%] relative rounded-3xl overflow-hidden bg-white/90">
        <h3 className="text-5xl z-20 p-5">
          Your Favorites
        </h3>
        <div className="favorite-imgs flex gap-20 px-10">
          <img className="w-40 h-40 rounded-2xl" src="/images/home-img-2.jpeg" alt="" />
          <img className="w-40 h-40 rounded-2xl" src="/images/home-img-3.jpeg" alt="" />
          <img className="w-40 h-40 rounded-2xl" src="/images/home-img-4.jpeg" alt="" />
          <img className="w-40 h-40 rounded-2xl" src="/images/home-img-5.jpeg" alt="" />
          <img className="w-40 h-40 rounded-2xl" src="/images/seasoned-ball.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
