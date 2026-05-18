import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FiMapPin, FiPhone, FiUser } from "react-icons/fi";
import { CartContext } from "../../ContextAPI/CartContext";
import { UserContext } from "../../ContextAPI/userContext";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const { cart, setCart } = useContext(CartContext);
  // console.log("my cart:", cart);

  const { user } = useContext(UserContext);

  // console.log("user Id:", user.id);

  const [address, setAddress] = useState({
    address: "",
  });
  // console.log("my addresss:", address);

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async (e) => {
    e.preventDefault();

    try {
      if (!address.address) {
        return alert("Please fill all details");
      }
      const data = address.address;
      // console.log("d:", data);

      // console.log("shiping:", address);

      const response = await axios.post(
        "https://ecommerce-backend1-3.onrender.com/api/v1/user/order/checkout",
        {
          userId: user.id,
          shippingAddress: data,
        },
      );

      console.log("ORDER SUCCESS:", response.data);

      alert("Order Placed Successfully");

      setCart([]);
      navigate("/");
    } catch (error) {
      console.log("ORDER ERROR:", error.response?.data || error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#111111] px-6 md:px-12 py-16 text-white mt-12">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">Checkout</h1>
        <p className="text-gray-400 mt-5 text-lg">
          Complete your shipping details.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        {/* FORM */}
        <form
          onSubmit={placeOrder}
          className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-8 flex flex-col gap-6"
        >
          <h2 className="text-3xl font-bold text-cyan-400">Shipping Details</h2>

          <div className="relative">
            <FiMapPin className="absolute left-4 top-4 text-cyan-400" />
            <textarea
              name="address"
              value={address.address}
              onChange={handleChange}
              placeholder="Full Address"
              rows="15"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl py-4 pl-12 pr-4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-4 rounded-2xl text-xl font-bold"
          >
            Place Order
          </button>
        </form>

        {/* SUMMARY (UI ONLY - NOT SENT TO BACKEND) */}
        <div className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-10 h-fit">
          <h2 className="text-3xl font-bold text-cyan-400 mb-8">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.productId._id}
              className="flex items-center gap-5 border-b border-[#2a2a2a] pb-5 mb-5"
            >
              <img
                src={item.productId.imageUrl}
                className="w-70 h-60 object-contain"
                alt=""
              />

              <div>
                <h3 className="text-4xl font-bold">{item.productId.name}</h3>
                <p className="text-gray-400 text-xl">Qty: {item.quantity}</p>
                <p className="text-cyan-400 font-bold text-2xl">
                  ₹ {item.productId.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
