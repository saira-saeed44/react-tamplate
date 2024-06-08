import React from "react";
import img from "./images/hero.jpg";
const Hero = () => {
  return (
    <div className=" py-20 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">
          Landing template for startups
        </h1>
        <p className="text-gray-400 mb-6">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div className="mb-8">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6  mr-4">
            Start free trial
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-6 ">
            Learn more
          </button>
        </div>
        <img src={img} alt="Hero Image" className=" max-auto"/>
      </div>
      <h1 className="text-4xl font-bold text-white mb-4 my-200 mt-20">
       The majority our customers do not understand their workflows.       
      </h1>
      <p className="text-gray-400 mb-6">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
};

export default Hero;
