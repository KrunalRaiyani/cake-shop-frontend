import React from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

const Filters = ({ filters, setFilters, toggleFilters }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white shadow-lg p-6 transition-transform transform ${
        filters.show ? "translate-x-0" : "-translate-x-full"
      } z-10 w-full md:w-96 lg:w-80`}>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold text-primary flex items-center">
          <FaFilter className="mr-2" />
          Filters
        </h2>
        <button
          className="text-xl text-primary hover:text-primary-hover"
          onClick={toggleFilters}>
          <FaTimes />
        </button>
      </div>

      <div className="my-6">
        <h3 className="text-lg font-semibold mb-2">Sort By</h3>
        <select
          value={filters.sort}
          onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary">
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Rating</h3>
        <input
          type="number"
          min="0"
          max="5"
          value={filters.rating}
          onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <input
          type="number"
          min="0"
          value={filters.minPrice}
          onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
          placeholder="Min Price"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="number"
          min="0"
          value={filters.maxPrice}
          onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
          placeholder="Max Price"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">In Stock</h3>
        <input
          type="checkbox"
          checked={filters.inStock}
          onChange={(e) =>
            setFilters({ ...filters, inStock: e.target.checked })
          }
          className="mr-2"
        />
        <label>Show only in-stock items</label>
      </div>
    </div>
  );
};

export default Filters;
