import React from "react";
import { FiTruck, FiShield, FiAward } from "react-icons/fi";

export default function About() {
  return (
    <div className="min-h-screen bg-[#111111]  mt-4 text-white px-6 md:px-16 py-20">
      {/* HEADING */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white">
          About Us
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-8">
          We are committed to delivering the best online shopping experience
          with premium quality products, secure payments, and fast delivery.
        </p>
      </div>

      {/* WHO WE ARE */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center mt-24">
        {/* LEFT */}
        <div>
          <h2 className="text-4xl font-bold text-cyan-400 mb-8">Who We Are</h2>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            Gadget Galaxy is your trusted ecommerce platform where you can
            discover high-quality gadgets, smartphones, accessories, and premium
            tech products at the best prices.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            Our mission is to make online shopping simple, secure, modern, and
            enjoyable for everyone with a premium shopping experience.
          </p>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] duration-300">
          <img
            src="/hero (2).png"
            alt="about"
            className="w-full h-[350px] object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="mt-28">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-white mb-16">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {/* CARD 1 */}
          <div className="bg-[#111111] border border-[#2a2a2a] p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] duration-300">
            <div className="bg-cyan-400/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <FiTruck className="text-cyan-400 text-4xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Fast Delivery
            </h3>

            <p className="text-gray-400 text-lg leading-7">
              We deliver your products quickly and safely right to your
              doorstep.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#111111] border border-[#2a2a2a] p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] duration-300">
            <div className="bg-cyan-400/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <FiShield className="text-cyan-400 text-4xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Secure Payment
            </h3>

            <p className="text-gray-400 text-lg leading-7">
              Your payments and personal information are always protected and
              secure.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#111111] border border-[#2a2a2a] p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] duration-300">
            <div className="bg-cyan-400/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6">
              <FiAward className="text-cyan-400 text-4xl" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Best Quality</h3>

            <p className="text-gray-400 text-lg leading-7">
              We provide only premium and high-quality products for the best
              shopping experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
