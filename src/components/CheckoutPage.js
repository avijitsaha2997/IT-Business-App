import React, { useState } from "react";

import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "./Subtotal";

function CheckoutPage() {
  const [qty, setQty] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="">
      <div className="mt-16">
        <Subtotal />
      </div>
      <div className="flex p-20 bg-white h-max justify-around">
        <div className="mr-10 p-10">
          <h2 className="text-xl font-bold mb-4">Your shopping Cart list...</h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
              quantity={item.quantity}
              class="mb-4"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
