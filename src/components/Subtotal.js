import React from "react";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

function Subtotal() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();
  const totalPrice = getBasketTotal(basket);
  const totalPriceWIthDecimal = totalPrice.toFixed(2);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">
        Total ({basket.length} items): <strong>${totalPriceWIthDecimal}</strong>
      </h1>
      <button className="bg-black border-2 border-black text-white py-2 px-4 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition duration-300 mt-5">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
