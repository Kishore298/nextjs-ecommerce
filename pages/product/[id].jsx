import { useState } from "react";
import Navbar from "../../components/Navbar";
import ProductCarousel from "../../components/ProductCarousel";
import { fetchProductById } from "../../utils/api";
import '../../app/globals.css';

export default function ProductDetails({ product }) {
  const [cart, setCart] = useState([]);

  // Add product to cart
  const addToCart = () => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Navbar cart={cart} setCart={setCart} />
      <div className="container mx-auto p-4 flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <ProductCarousel images={product.images} />
        </div>
        <div className="lg:w-1/2 p-4">
          <h1 className="text-2xl font-bold mt-2">{product.title}</h1>
          <p className="text-gray-700 mt-2">${product.price}</p>
          <p className="text-sm text-yellow-500 mt-2">Rating: {product.rating}</p>
          <p className="mt-2">{product.description}</p>
          <button
            onClick={addToCart}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const product = await fetchProductById(params.id);
  return { props: { product } };
}
