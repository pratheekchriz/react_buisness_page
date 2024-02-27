import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl">
            Want Tips And Tricks To Optimize Your Flow ?
          </h1>
          <p>Sign Up To Our News Letter And Stay Up To Date.</p>
        </div>
        <div className="my-4">
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input type="email" className='p-3 flex rounded-md w-full text-black' placeholder="Enter Email" />
            <button
              className="relative px-6 my-6 ml-4 py-3 rounded-md bg-black isolation-auto z-10 border-2 font-bold w-[200px] text-white
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-[#00df9a] before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 "
            >
              Notify Me
            </button>
          </div>
          <p>We care about the protection of data. Read Our <span className='text-[#00df9a]'> Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
