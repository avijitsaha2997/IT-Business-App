/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

function Products() {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const handleCategoryClick = (newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        const req = await axios.get("https://fakestoreapi.com/products");
        if (isMounted) {
          setItems(req.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row justify-evenly items-center text-2xl mt-16 mb-8">
        <button
          className={`${
            category === "" ? "bg-black" : "bg-gray-400"
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick("")}
        >
          All Items
        </button>

        <button
          className={`${
            category === "women's clothing" ? "bg-black" : "bg-gray-400"
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick("women's clothing")}
        >
          Women's Clothing
        </button>
        <button
          className={`${
            category === "electronics" ? "bg-black" : "bg-gray-400"
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick("electronics")}
        >
          Electronics
        </button>
        <button
          className={`${
            category === "jewelery" ? "bg-black" : "bg-gray-400"
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick("jewelery")}
        >
          Jewelery
        </button>
        <button
          className={`${
            category === "men's clothing" ? "bg-black" : "bg-gray-400"
          } text-white py-2 px-4 rounded`}
          onClick={() => handleCategoryClick("men's clothing")}
        >
          Men's Clothing
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-16">
        {items &&
          items.map((item) => {
            if (category === item.category) {
              return (
                <Item
                  key={item.id}
                  img={item.image}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  rating={item.rating}
                  price={item.price}
                />
              );
            } else if (category === "") {
              return (
                <Item
                  key={item.id}
                  img={item.image}
                  id={item.id}
                  title={item.title}
                  category={item.category}
                  rating={item.rating}
                  price={item.price}
                  quantity={1}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default Products;
