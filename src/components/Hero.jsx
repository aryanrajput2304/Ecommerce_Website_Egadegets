import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useCart from "../hooks/useCart";
import { FiShoppingCart, FiStar } from "react-icons/fi";

export default function Hero() {
  const [products, setProducts] = useState([]);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const isLoggedIn = () => {
    return localStorage.getItem("user");
  };

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce-backend1-3.onrender.com/api/v1/products",
      );

      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-[#191919] overflow-hidden">
      {/* HERO SECTION */}
      <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-screen overflow-hidden">
        <img
          src="/hero (2).png"
          alt="hero"
          className="w-full h-full object-cover object-center mt-14 sm:mt-16"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* HERO CONTENT */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-4 sm:px-8 md:px-16 lg:px-24 text-white max-w-3xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              Discover Your Style
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mt-4 sm:mt-6 max-w-xl">
              Shop the latest smartphones, accessories, laptops, and premium
              gadgets at unbeatable prices.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link
                to="/product"
                className="inline-block px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-cyan-400 text-black text-sm sm:text-base font-bold rounded-xl hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] duration-300"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="px-4 sm:px-6 md:px-10 py-12 sm:py-16 bg-[#111111]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-14 text-center text-white">
          Our Products
        </h1>

        <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.slice(0, 4).map((item) => (
            <div
              key={item._id}
              className="bg-[#111111] border border-[#2a2a2a] rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:-translate-y-2 duration-300"
            >
              {/* PRODUCT IMAGE */}
              <div className="bg-[#1a1a1a] p-4 flex items-center justify-center">
                <Link to={`/products/${item._id}`}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-full h-52 sm:h-60 md:h-64 object-contain"
                  />
                </Link>
              </div>

              {/* PRODUCT DETAILS */}
              <div className="p-4 sm:p-5">
                <Link to={`/products/${item._id}`}>
                  <h2 className="text-lg sm:text-xl font-semibold text-white hover:text-cyan-400 duration-300 line-clamp-1">
                    {item.name}
                  </h2>
                </Link>

                {/* RATING */}
                <div className="flex items-center flex-wrap mt-3 gap-1 text-yellow-400 mb-3">
                  <FiStar className="fill-yellow-400 text-sm" />
                  <FiStar className="fill-yellow-400 text-sm" />
                  <FiStar className="fill-yellow-400 text-sm" />
                  <FiStar className="fill-yellow-400 text-sm" />
                  <FiStar className="fill-yellow-400 text-sm" />

                  <span className="text-gray-400 text-xs sm:text-sm ml-2">
                    (4.9 Reviews)
                  </span>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-400 mt-2 line-clamp-2 text-sm">
                  {item.description}
                </p>

                {/* PRICE */}
                <div className="mt-4">
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-400">
                    ₹ {item.price}
                  </p>

                  <span className="text-xs sm:text-sm text-gray-500 line-through">
                    ₹ {item.price + 5000}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => {
                    if (!isLoggedIn()) {
                      navigate("/login");
                      return;
                    }

                    addToCart(item);
                  }}
                  className="mt-5 sm:mt-6 w-full flex items-center justify-center gap-2 sm:gap-3 bg-cyan-400 text-black py-3 rounded-xl text-sm sm:text-base font-bold hover:bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.35)] duration-300"
                >
                  <FiShoppingCart />
                  Add To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
