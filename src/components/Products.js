import React, { useEffect } from "react";
import Item from "./Item";

function Products() {
  useEffect(() => {}, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 m-10 gap-16">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}

export default Products;
