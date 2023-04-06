import React from "react";

function Item() {
  return (
    <div class=" cursor-pointer flex flex-col border border-gray-200 items-center justify-end rounded-lg p-8 w-full  bg-white shadow-xl hover:shadow-2xl transition duration-300">
      <div class="h-10 mb-4">
        <p class="text-lg font-bold">I Phone</p>
        <p class="text-sm font-bold">$10</p>
      </div>

      <div class="flex">
        <p class="text-xl pr-2">❤️</p>
        <p class="text-xl">❤️</p>
      </div>

      <img
        src="https://adminapi.applegadgetsbd.com/storage/media/large/iPhone-14-Pro-Max-Silver-8456.jpg"
        alt=""
        class="w-full object-contain "
      />

      <button
        type="button"
        class="bg-black border-2 border-black text-white py-2 px-4 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
