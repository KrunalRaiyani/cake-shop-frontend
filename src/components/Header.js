import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white text-gray-800 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-7 lg:px-8">
        <div className="text-2xl font-bold">Logo</div>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <a
              href="/how-to-order"
              className="hover:text-primary transition-colors">
              How to Order
            </a>
            <a
              href="/our-menu"
              className="hover:text-primary transition-colors">
              Our Menu
            </a>
            <a
              href="/contact-us"
              className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </nav>
          <button className="border border-gray-800 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center">
            <FaShoppingCart className="mr-2" />
            Cart
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
