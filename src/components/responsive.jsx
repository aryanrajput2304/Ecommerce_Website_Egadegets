import React from "react";
import { Link } from "react-router-dom";
import {
  FiX,
  FiShoppingCart,
  FiUser,
  FiPhone,
  FiInfo,
  FiHome,
  FiBox,
} from "react-icons/fi";

export default function Responsive({ menuOpen, setMenuOpen, user }) {
  return (
    <div>
      {/* Overlay */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[300px] bg-[#111] z-50 transform transition-transform duration-300 shadow-2xl ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-700">
          <div>
            <h2 className="text-3xl font-extrabold text-cyan-400">
              GADGET GALAXY
            </h2>

            <p className="text-gray-400 text-sm mt-1">
              Premium Ecommerce Store
            </p>
          </div>

          <button onClick={() => setMenuOpen(false)}>
            <FiX className="text-3xl text-white hover:text-cyan-400 duration-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col p-5 gap-7 text-white text-lg font-medium">
          {/* HOME */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-cyan-400 duration-300 hover:translate-x-2"
          >
            <FiHome className="text-xl" />
            Home
          </Link>

          {/* PRODUCTS */}
          <Link
            to="/product"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-cyan-400 duration-300 hover:translate-x-2"
          >
            <FiBox className="text-xl" />
            Products
          </Link>

          {/* CONTACT */}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-cyan-400 duration-300 hover:translate-x-2"
          >
            <FiPhone className="text-xl" />
            Contact Us
          </Link>

          {/* ABOUT */}
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-cyan-400 duration-300 hover:translate-x-2"
          >
            <FiInfo className="text-xl" />
            About Us
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 hover:text-cyan-400 duration-300 hover:translate-x-2"
          >
            <FiShoppingCart className="text-xl" />
            Cart
          </Link>

          {/* PROFILE */}
          {user && (
            <Link
              to="/profile"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 hover:text-cyan-400 duration-300 hover:translate-x-2"
            >
              <FiUser className="text-xl" />
              Profile
            </Link>
          )}
        </div>

        {/* Bottom Description */}
        <div className="absolute bottom-0 left-0 w-full p-5 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-6">
            Gadget Galaxy is your trusted ecommerce destination for premium
            fashion, electronics, and lifestyle products with fast delivery and
            secure shopping.
          </p>
        </div>
      </div>
    </div>
  );
}
