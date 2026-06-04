import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black  text-white">
      <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-extrabold">GADGET GALAXY</h1>
          <p className="mt-3 text-white text-sm">
            Your one-stop shop for all your needs. Quality products at the best
            price.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-white">
            <li>
              <Link to="/" className="hover:text-sky-400 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:text-sky-400 cursor-pointer"
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-sky-400 cursor-pointer">
                Orders
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-sky-400 cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Support</h2>
          <ul className="space-y-2 text-white">
            <li className="hover:text-sky-400 cursor-pointer">Help Center</li>
            <li className="hover:text-sky-400 cursor-pointer">Returns</li>
            <li className="hover:text-sky-400 cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-sky-400 cursor-pointer">Terms</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-white text-sm">Email: support@gadgetgalaxy.com</p>
          <p className="text-white text-sm">Phone: +91 9579621911</p>
          <p className="text-white text-sm">Location: India</p>
        </div>
      </div>

      <div className="border-t border-white text-center py-4 text-white text-sm">
        © 2026 SHOPIFY. All rights reserved.
      </div>
    </footer>
  );
}
