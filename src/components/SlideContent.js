import React from "react";
import Slider from "./Slider";

function SlideContent() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-base md:text-xl lg:text-2xl text-center text-gray-800 uppercase mb-8">
        Most Popular Products
      </h1>
      <Slider />
    </div>
  );
}

export default SlideContent;
