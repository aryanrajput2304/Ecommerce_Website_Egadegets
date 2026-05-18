import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiSearch, FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdOutlineLogout } from "react-icons/md";
import Responsive from "./Responsive";

export default function Navbar() {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const [menuOpen, setMenuOpen] = useState(false);

  // CART
  const { cart, fetchCart } = useCart();

  // FETCH CART
  useEffect(() => {
    fetchCart();
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("user");

    alert("Logout Successfully");

    navigate("/login");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#0b0b0b] py-4 px-4 md:px-8 flex items-center justify-between border-b border-[#1f1f1f] shadow-[0_4px_30px_rgba(0,0,0,0.6)] z-50 backdrop-blur-lg">
        {/* LEFT SECTION */}
        <div className="flex items-center gap-4">
          {/* HAMBURGER */}
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <FiMenu className="text-white text-3xl" />
          </button>

          {/* LOGO */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-cyan-400">
            Shopify
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-xl font-semibold text-white">
          <li>
            <Link
              to="/"
              className="hover:text-sky-400 border-b-2 border-transparent hover:border-sky-400 transition"
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              to="/product"
              className="hover:text-sky-400 border-b-2 border-transparent hover:border-sky-400 transition"
            >
              PRODUCTS
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-sky-400 border-b-2 border-transparent hover:border-sky-400 transition"
            >
              CONTACT
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-sky-400 border-b-2 border-transparent hover:border-sky-400 transition"
            >
              ABOUT
            </Link>
          </li>
        </ul>

        {/* SEARCH */}
        <div className="hidden lg:flex items-center bg-white rounded-lg px-3 py-1 w-[300px] mx-6">
          <FiSearch className="text-gray-500 text-lg" />

          <input
            type="text"
            placeholder="Search products"
            className="outline-none px-2 py-1 w-full text-black"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-5 md:gap-8">
          {/* CART */}
          <Link to="/cart" className="relative">
            <BsCart3 className="text-white hover:text-cyan-500 text-2xl md:text-3xl" />

            <span className="absolute -top-2 -right-3 bg-cyan-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cart?.length || 0}
            </span>
          </Link>

          {/* PROFILE */}
          {user && (
            <Link to="/profile">
              <FaUserCircle className="text-white hover:text-cyan-500 text-2xl md:text-3xl" />
            </Link>
          )}

          {/* LOGOUT / LOGIN */}
          {user ? (
            <button onClick={handleLogout}>
              <MdOutlineLogout className="text-white hover:text-cyan-500 text-2xl md:text-3xl" />
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-400 transition text-sm md:text-base"
            >
              LOGIN
            </Link>
          )}
        </div>
      </nav>

      {/* MOBILE SIDEBAR */}
      <Responsive menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={user} />
    </>
  );
}
