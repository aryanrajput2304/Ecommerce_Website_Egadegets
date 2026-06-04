import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#111111] text-white px-4 mt-4 md:px-16 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16">
        Contact Us
      </h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Have questions about your orders, products, delivery, or support?
            Our team is available 24/7 to help you with anything you need.
          </p>

          {/* INFO CARDS */}
          <div className="space-y-6">
            <div className="flex items-center gap-5 bg-[#111111] border border-[#2a2a2a] p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] duration-300">
              <div className="bg-cyan-400/20 p-4 rounded-full">
                <FiMail className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-lg font-semibold">Email</p>
                <p className="text-gray-400">support@gadgetgalaxy.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#111111] border border-[#2a2a2a] p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] duration-300">
              <div className="bg-cyan-400/20 p-4 rounded-full">
                <FiPhone className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-lg font-semibold">Phone</p>
                <p className="text-gray-400">+91 9579621911</p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-[#111111] border border-[#2a2a2a] p-5 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] duration-300">
              <div className="bg-cyan-400/20 p-4 rounded-full">
                <FiMapPin className="text-cyan-400 text-2xl" />
              </div>

              <div>
                <p className="text-lg font-semibold">Address</p>
                <p className="text-gray-400">
                  Chhatrapati Sambhajinagar, Maharashtra, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-[#111111] border border-[#2a2a2a] p-8 md:p-10 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl font-bold text-white mb-8">Send Message</h2>

          <div className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400 placeholder:text-gray-500"
            />

            <button className="w-full bg-cyan-400 text-black py-4 rounded-xl font-bold hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] duration-300">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
