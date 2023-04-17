import React from "react";
import { useStateValue } from "../StateProvider";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
function Item({ img, id, category, title, price, rating, quantity }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        img,
        price,
        rating,
        category,
        quantity,
      },
    });
  };
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
          <LazyLoadImage
            effect="blur"
            src={img}
            height={"250px"}
            width={"250px"}
            alt=""
            className="w-full h-52 object-contain p-4 mt-4"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={addToBasket}
        className="bg-black border-2 border-black text-white py-2 px-4 rounded-md font-bold cursor-pointer hover:bg-white hover:text-black transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Item;
