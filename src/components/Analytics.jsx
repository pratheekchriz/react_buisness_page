import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            TejDms is a Windows application developed using Flutter, designed
            specifically for managing diagnostics in networking equipment
            manufactured by Tejas Networks. It serves as a comprehensive system
            for running tests, collecting data, and managing diagnostic
            processes efficiently.
          </p>
          <button
            className="relative px-8 my-4 py-3 rounded-md bg-black isolation-auto z-10 border-2 font-bold w-[200px] text-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#00df9a] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
