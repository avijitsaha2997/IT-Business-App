import React from "react";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute flex flex-col items-center top-40 md:top-80">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#001950] to-cyan-500 text-gray-800 opacity-80 text-base font-bold md:text-6xl ml-20 md:ml-60 flex flex-col items-center tracking-[15px] ">
          {`WELCOME..!`}
          <br />
          <span className="mt-6">TO OUR</span>
          <span className="mt-3">GADGET STORE</span>
        </h1>

        <div className="flex items-center ml-20 md:ml-60 mt-10">
          <img
            alt=""
            src="https://content.invisioncic.com/p289038/monthly_2020_05/arrow-down.gif.8d9aec7b8f92f2a50a1a64fce1733f3a.gif"
            className="w-20"
          />
        </div>
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
