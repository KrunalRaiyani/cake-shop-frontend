import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const CakeCard = ({ img, name, price, orders, description, rating }) => {
  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);

    return (
      <>
        {Array(fullStars).fill(<FaStar className="text-yellow-500 text-sm" />)}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-500 text-sm" />}
        {Array(emptyStars).fill(
          <FaRegStar className="text-yellow-500 text-sm" />
        )}
      </>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
      <div className="relative w-full h-64 overflow-hidden rounded-t-lg">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{name}</h2>

        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col">
            <div className="flex gap-2 items-center">
              <p className="text-xl text-primary font-bold">₹{price}</p>
              <p className="text-gray-400 self-end text-sm">{orders} ordered</p>
            </div>
            <div className="flex items-center mt-1">
              <span className="text-gray-500 mr-2">{rating.toFixed(1)}</span>
              {getStars(rating)}
            </div>
          </div>

          <button className="bg-primary whitespace-nowrap self-end text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-transform transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
