import React from "react";
import { FaStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = ({
  image,
  author,
  price,
  genre,
  rating,
  link,
  cardSize = "w-full",
  ratingDisplay = "flex",
  cartDisplay,
}) => {
  return (
    <Link to={link}>
      <div className={`${cardSize}`}>
        <img src={image} className="object-cover w-full mb-2 hover-preset-4" />
        <div className="text-primary-500">
          <h2 className="text-xs font-normal xl:text-2xl">{author}</h2>
          <div className="flex items-center justify-between font-light text-primary-300">
            <div className="flex flex-col">
              <div className="flex flex-col gap-1 mb-2 text-xs xl:flex-row xl:text-base">
                <p className="font-light">{price},</p>
                <p className="">{genre}</p>
              </div>
              <div
                className={`${ratingDisplay} gap-2 text-primary-300 text-xs xl:text-lg`}
              >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <div className="hidden p-2 bg-primary-500 hover-preset-1">
              <MdOutlineShoppingCart
                className={`xl:text-lg text-sm text-white ${cartDisplay} `}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
