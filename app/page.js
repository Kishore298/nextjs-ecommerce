'use client';

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../utils/api";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(12);

  useEffect(() => {
    const fetchInitialProducts = async () => {
      const initialProducts = await fetchProducts(0, 12);
      setProducts(initialProducts);
    };

    fetchInitialProducts();
  }, []);

  // Load more products on button click
  const loadMore = async () => {
    setLoading(true);
    const newProducts = await fetchProducts(skip, 12);
    setProducts([...products, ...newProducts]);
    setSkip(skip + 12);
    setLoading(false);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />

      {/* Heading Section */}
      <div className="text-center mt-4 mb-4">
        <h2 className="text-4xl font-bold text-gray-800">Our Featured Products</h2>
      </div>

      <div className="container mx-auto p-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <button
          onClick={loadMore}
          className="block mx-auto my-4 px-6 py-2 bg-blue-600 text-white rounded"
        >
          Show More
        </button>
      )}
    </div>
  );
}
