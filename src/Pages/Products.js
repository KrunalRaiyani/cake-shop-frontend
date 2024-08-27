import React, { useState, useEffect } from "react";
import CakeCard from "../components/CakeCard";
import Filters from "../components/Filters";
import { FaFilter } from "react-icons/fa";

const Products = () => {
  const [cakes, setCakes] = useState([]);
  const [filters, setFilters] = useState({
    sort: "priceLowToHigh",
    rating: 0,
    minPrice: 0,
    maxPrice: 1000,
    inStock: false,
    show: false,
  });

  useEffect(() => {
    const fetchCakes = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/2424cbf4-39a3-4040-9ce3-54d020e11e8e"
        );
        const data = await response.json();
        setCakes(data);
      } catch (error) {
        console.error("Error fetching cakes:", error);
      }
    };

    fetchCakes();
  }, []);

  const toggleFilters = () => {
    setFilters({ ...filters, show: !filters.show });
  };

  return (
    <div className="flex">
      <Filters
        filters={filters}
        setFilters={setFilters}
        toggleFilters={toggleFilters}
      />

      <div
        className={`flex-1 transition-all duration-300 ${
          filters.show ? "ml-80 md:ml-96 lg:ml-80" : "ml-0"
        }`}>
        <div className="container mx-auto p-4 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center mb-10">
            <h1 className="text-[28px] font-bold">Our Cakes</h1>
            <button
              className="flex items-center  gap-2 text-white py-2 px-4 rounded-lg bg-primary shadow-lg hover:bg-primary-hover hover:text-white"
              onClick={toggleFilters}>
              <FaFilter />
            </button>
          </div>
          <div
            className={`grid gap-6 ${
              filters.show
                ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
            }`}>
            {cakes.map((cake) => (
              <CakeCard
                key={cake._id}
                img={cake.image}
                name={cake.name}
                price={cake.price}
                orders={cake.stock}
                description={cake.description}
                rating={4.5}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
