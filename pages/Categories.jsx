import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; 
import { fetchProducts } from "../utils/api";
import '../app/globals.css';


export default function CategoriesPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const CATEGORIES = ["all", "beauty", "furniture", "fragrances", "groceries"];

  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts(0, 30);
      setProducts(data);
      setFilteredProducts(data);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.category.toLowerCase().includes(category.toLowerCase())
        )
      );
    }
  }, [category, products]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Categories</h1>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-md ${
              category === cat
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
