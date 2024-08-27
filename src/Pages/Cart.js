import React from "react";
import { FaTrash, FaArrowRight } from "react-icons/fa";

const Cart = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      {/* Cart Items */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        <div className="space-y-4">
          {/* Example cart item */}
          <div className="flex items-center border-b py-4">
            <img
              src="https://bkmedia.bakingo.com/sq-starry-white-half-vanilla-cake-cake2387vani-B_0.jpg"
              alt="Vanilla Half Cake"
              className="w-24 h-24 object-cover rounded-lg mr-4"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Vanilla Half Cake</h2>
              <p className="text-gray-600">$775</p>
              <p className="text-gray-600">Quantity: 1</p>
            </div>
            <button className="text-red-600 hover:text-red-800 transition-colors">
              <FaTrash size={20} />
            </button>
          </div>

          {/* Add more cart items here as needed */}
        </div>
      </div>

      {/* Summary */}
      <div className="border rounded-lg p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Subtotal:</span>
          <span>$775</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Tax:</span>
          <span>$77.50</span>
        </div>
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="text-xl font-bold">$852.50</span>
        </div>
        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover transition-transform transform hover:scale-105 w-full">
          Proceed to Checkout
          <FaArrowRight className="inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Cart;
