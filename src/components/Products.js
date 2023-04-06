/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Item from "./Item";
import axios from "axios";

function Products() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("https://fakestoreapi.com/products");
      setItems(req.data);
      console.log(items);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-8 gap-16">
      {items &&
        items.map((item) => (
          <Item
            key={item.id}
            img={item.image}
            id={item.id}
            title={item.title}
            category={item.category}
            rating={item.rating}
            price={item.price}
          />
        ))}
    </div>
  );
}

export default Products;
