import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../ContextAPI/userContext";
import { FiShoppingBag } from "react-icons/fi";

export default function Login() {
  const { setEmail, setPassword, handleLogin } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4 py-8">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl bg-[#111] border border-[#2a2a2a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.55)] grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE (HIDDEN ON MOBILE) */}
        <div className="hidden md:flex relative bg-gradient-to-br from-cyan-500/20 to-black flex-col justify-center items-center p-12 text-center">
          <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <div className="bg-cyan-400/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <FiShoppingBag className="text-cyan-400 text-5xl" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Welcome Back
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-7 max-w-md">
              Login to continue shopping with premium products, fast delivery,
              and secure payments.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleLogin}
          className="p-6 sm:p-10 md:p-14 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
            Login
          </h2>

          <input
            type="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500 mt-5 sm:mt-6"
          />

          <button className="w-full mt-7 sm:mt-8 bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.35)]">
            Login
          </button>

          <p className="text-center text-gray-400 mt-6 sm:mt-8 text-sm sm:text-lg">
            Don't have an account?
            <Link
              to="/Register"
              className="text-cyan-400 font-bold ml-2 hover:text-cyan-300"
            >
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
