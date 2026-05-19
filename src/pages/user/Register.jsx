import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiUserPlus } from "react-icons/fi";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "https://ecommerce-backend1-3.onrender.com/api/v1/user/register",
        formData,
      );

      if (response.status === 200 || response.status === 201) {
        alert("Registration Successful");
        navigate("/login");
      } else {
        alert("Registration Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="min-h-screen bg-[#111] flex items-center justify-center px-4 py-8">
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-6xl bg-[#111] border border-[#2a2a2a] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.55)] grid grid-cols-1 md:grid-cols-2">
        {/* LEFT SIDE (HIDDEN ON MOBILE) */}
        <div className="hidden md:flex relative bg-gradient-to-br from-cyan-500/20 to-black flex-col justify-center items-center p-12 text-center">
          <div className="absolute w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

          <div className="relative z-10">
            <div className="bg-cyan-400/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <FiUserPlus className="text-cyan-400 text-5xl" />
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              Create Account
            </h1>

            <p className="text-gray-400 mt-6 text-lg leading-7 max-w-md">
              Register to start shopping premium products with secure checkout
              and fast delivery.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleRegister}
          className="p-6 sm:p-10 md:p-14 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-8">
            Register
          </h2>

          {/* NAME */}
          <input
            type="text"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl mt-5 sm:mt-6 outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl mt-5 sm:mt-6 outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-7 sm:mt-8 bg-cyan-400 hover:bg-cyan-300 text-black font-bold py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.35)]"
          >
            Sign Up
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-gray-400 mt-6 sm:mt-8 text-sm sm:text-lg">
            Already have an account?
            <Link
              to="/login"
              className="text-cyan-400 font-bold ml-2 hover:text-cyan-300"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
