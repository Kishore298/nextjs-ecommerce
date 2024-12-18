import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaBars } from "react-icons/fa"; 
import { IoCloseCircle } from "react-icons/io5";

export default function Navbar({ cart = [], setCart }) {
  const [cartVisible, setCartVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const Cart = ({ cart, setCart, toggleCart }) => {
    const increaseQuantity = (id) => {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    };

    const decreaseQuantity = (id) => {
      setCart(
        cart.map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    };

    const removeItem = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };

    const calculateTotal = () => {
      return cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ).toFixed(2);
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
        onClick={toggleCart}
      >
        <div
          className="bg-white w-full lg:w-1/3 h-full p-4 overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-black text-xl font-bold">Your Cart</h2>
            <button className='text-red-800' onClick={toggleCart}>
              <IoCloseCircle size={30} />
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-gray-800 font-semibold text-xl mt-4" >Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row justify-between items-center mb-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-32 lg:h-32 object-cover"
                    />
                    <div>
                      <p className="text-md lg:text-xl text-gray-800 font-semibold mt-2 w-36 lg:w-48">{item.title}</p>
                      <p className="text-sm lg:text-xl text-gray-700 mt-2">Price: ${item.price}</p>
                      <p className="text-sm lg:text-xl text-gray-500 mt-2">
                        Total price: ${item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-36 mt-2 lg:ml-0">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    <p className="text-gray-800 font-semibold">{item.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="px-2 py-1 bg-gray-300 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex justify-between items-center">
                <p className="ml-4 text-black font-semibold">Total: ${calculateTotal()}</p>
                <button
                  onClick={toggleCart}
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">E-Shop</Link>
        <div className="hidden lg:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/Categories">Categories</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              <FaBars />
            </button>
          </div>
          <div className="relative">
            <button onClick={toggleCart} className="text-2xl">
              <FaShoppingCart />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                  {cart.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuVisible && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-blue-600 p-4">
          <div className="flex justify-between items-center">
            <button onClick={toggleMenu} className="text-white text-2xl">
              <IoCloseCircle />
            </button>
          </div>
          <div className=" space-x-4 mt-1">
            <Link href="/">Home</Link>
            <Link href="/Categories">Categories</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
      )}

      {cartVisible && <Cart cart={cart} setCart={setCart} toggleCart={toggleCart} />}
    </nav>
  );
}
