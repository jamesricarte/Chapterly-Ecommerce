import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Card = ({ image, title, author, price, genre, rating }) => {
  return (
    <div>
      <div className="mb-4 border rounded shadow-md">
        <img src={image} className="object-cover w-full rounded-t-lg h-72" />
      </div>
      <div className="text-primary-500">
        <h2 className="text-lg font-normal">{author}</h2>
        <div className="flex items-center justify-between text-sm font-light text-primary-300">
          <div className="flex gap-1">
            <p className="font-light">{price}</p>
            <p className="">{genre}</p>
          </div>
          <FaShoppingCart className="text-lg text-primary-500" />
        </div>
      </div>
    </div>
  );
};

export default Card;
