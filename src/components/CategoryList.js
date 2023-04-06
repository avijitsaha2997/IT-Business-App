import React from "react";

function CategoryList() {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center text-2xl mt-16 mb-8">
      <button>Women's Clothing</button>
      <button>Jewelery</button>
      <button>Electronics</button>
      <button>Men's Clothing</button>
    </div>
  );
}

export default CategoryList;
