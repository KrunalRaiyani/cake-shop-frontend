import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductDetail = () => {
  const product = {
    _id: "66b313136123871e0f43b058",
    name: "Vanilla Half Cake",
    image:
      "https://bkmedia.bakingo.com/sq-starry-white-half-vanilla-cake-cake2387vani-B_0.jpg",
    description:
      "Frosted with cream & decorated with fondant made stars, this is a classic vanilla half cake, ideal for celebrating 6 month milestones.",
    price: 775,
    stock: 40,
    category: "regular_cake",
  };

  const additionalImages = [
    "https://bkmedia.bakingo.com/sq-starry-white-half-vanilla-cake-cake2387vani-B_1.jpg",
    "https://bkmedia.bakingo.com/sq-starry-white-half-vanilla-cake-cake2387vani-B_2.jpg",
    "https://bkmedia.bakingo.com/sq-starry-white-half-vanilla-cake-cake2387vani-B_3.jpg",
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="flex flex-col">
          <div className="relative mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index}`}
                className="w-full h-24 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-4">
            ${product.price}
          </p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center mb-4">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStarHalfAlt className="text-yellow-500" />
            <span className="text-gray-500 ml-2">4.5 (25 reviews)</span>
          </div>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-gray-600 mb-4">Stock: {product.stock} available</p>
          <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover transition-transform transform hover:scale-105">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
