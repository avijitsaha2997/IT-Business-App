import React from "react";

function Item({ img, id, category, title, price, rating }) {
  return (
    <div className=" cursor-pointer flex flex-col border border-gray-200 items-center justify-between rounded-lg p-8 w-full bg-white shadow-xl hover:shadow-2xl transition duration-300">
      <div>
        <div className="h-10 top-0">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm font-extrabold mt-1">$ {price}</p>
        </div>

        <div className="flex mt-6">
          <p className="text-xl pr-2">❤️</p>
          <p className="text-xl">{rating.rate}</p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={img}
            alt=""
            className="w-full h-52 object-contain p-4 mt-4"
          />
        </div>
      </div>

      <button
        type="button"
        className="bg-black border-2 border-black text-white py-2 px-4 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
