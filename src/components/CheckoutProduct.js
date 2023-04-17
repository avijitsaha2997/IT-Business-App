import PropTypes from "prop-types";
import React from "react";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, img, price, quantity }) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  const updateQuantityAdd = () => {
    dispatch({ type: "add", id });
    console.log("work");
  };

  const updateQuantityRemove = () => {
    dispatch({ type: "remove", id });
    console.log("work");
  };
  return (
    <div className=" cursor-pointer flex flex-col border border-gray-200 items-center justify-between rounded-lg p-8 w-full bg-white shadow-xl hover:shadow-2xl transition duration-300">
      <div>
        <div className="h-10 top-0">
          <p className="text-sm font-bold">{title}</p>
          <p className="text-sm font-extrabold mt-1">$ {price}</p>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={img}
            alt=""
            className="w-full h-52 object-contain p-4 mt-4"
          />
        </div>

        <div className="flex mt-3 mb-3 justify-around items-center">
          <p className="text-4xl pr-5 font-bold" onClick={updateQuantityRemove}>
            -
          </p>
          <p className="text-2xl pr-5">{quantity}</p>
          <p className="text-4xl" onClick={updateQuantityAdd}>
            +
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={removeFromBasket}
        className="bg-black border-2 border-black text-white py-2 px-4 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition duration-300"
      >
        Remove
      </button>
    </div>
  );
}

export default CheckoutProduct;
