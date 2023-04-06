import React from "react";

function Hero() {
  return (
    <div className="relative">
      <div className="hidden lg:absolute lg:flex flex-col items-center top-60">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#001950] to-cyan-500   text-gray-800 opacity-80 text-6xl font-bold ml-60 lg:flex flex-col items-center tracking-[15px] ">
          {`WELCOME..!`}
          <br />
          <span className="mt-5">TO OUR SHOP</span>
        </h1>
      </div>
      <img
        alt=""
        src="https://wallpaperaccess.com/full/2859944.jpg"
        className="object-cover"
      />
    </div>
  );
}

export default Hero;
