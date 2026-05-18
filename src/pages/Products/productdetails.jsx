import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useCart from "../../hooks/useCart";
import { UserContext } from "../../ContextAPI/userContext";
import {
  FiShield,
  FiTruck,
  FiCheckCircle,
  FiShoppingCart,
  FiStar,
} from "react-icons/fi";

export default function Products() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useContext(UserContext);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-backend1-3.onrender.com/api/v1/products/${id}`,
      );
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    if (!user) return navigate("/login");
    addToCart(product);
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#191919] flex items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] mt-10 sm:mt-12 px-4 sm:px-6 md:px-10 lg:px-14 py-10 sm:py-14 md:py-16">
      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto bg-[#111] border border-[#2a2a2a] rounded-2xl sm:rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
        {/* IMAGE */}
        <div className="bg-[#1a1a1a] flex justify-center items-center p-6 sm:p-8 md:p-10">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-contain hover:scale-105 duration-300"
          />
        </div>

        {/* DETAILS */}
        <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            {product.name}
          </h1>

          {/* RATING */}
          <div className="flex flex-wrap items-center mt-4 sm:mt-5 gap-1 text-yellow-400">
            <FiStar className="fill-yellow-400" />
            <FiStar className="fill-yellow-400" />
            <FiStar className="fill-yellow-400" />
            <FiStar className="fill-yellow-400" />
            <FiStar className="fill-yellow-400" />
            <span className="text-gray-400 text-xs sm:text-sm ml-2">
              (4.9 Reviews)
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mt-6 sm:mt-8 text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
            {product.description}
          </p>

          {/* PRICE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mt-6 sm:mt-10">
            ₹ {product.price}
          </h2>

          <span className="text-lg sm:text-xl md:text-2xl text-gray-500 line-through">
            ₹ {product.price + 5000}
          </span>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-12">
            <button
              onClick={handleAddToCart}
              className="bg-cyan-400 flex items-center justify-center gap-3 hover:bg-cyan-300 text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold shadow-[0_0_20px_rgba(34,211,238,0.35)] duration-300"
            >
              <FiShoppingCart />
              Add To Cart
            </button>

            <button className="bg-black border border-[#2a2a2a] hover:border-cyan-400 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base md:text-lg font-bold duration-300">
              Buy Now
            </button>
          </div>

          {/* DETAILS BOX */}
          <div className="mt-10 sm:mt-14 bg-[#1a1a1a] border border-[#2a2a2a] p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8">
              Product Details
            </h2>

            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-cyan-400/20 p-2 sm:p-3 rounded-full">
                  <FiCheckCircle className="text-cyan-400 text-lg sm:text-xl md:text-2xl" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Premium High Quality Product
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-cyan-400/20 p-2 sm:p-3 rounded-full">
                  <FiShield className="text-cyan-400 text-lg sm:text-xl md:text-2xl" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  1 Year Official Warranty
                </p>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="bg-cyan-400/20 p-2 sm:p-3 rounded-full">
                  <FiTruck className="text-cyan-400 text-lg sm:text-xl md:text-2xl" />
                </div>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg">
                  Fast & Secure Delivery Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
