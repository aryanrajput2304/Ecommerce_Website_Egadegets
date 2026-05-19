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
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 lg:px-12 py-10 mt-10">
      {/* HEADER */}
      <div className="text-center mb-10 sm:mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          Checkout
        </h1>

        <p className="text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
          Complete your shipping details
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SHIPPING FORM */}
        <form
          onSubmit={placeOrder}
          className="bg-[#141414] border border-[#2a2a2a] rounded-3xl p-5 sm:p-8 flex flex-col gap-6 shadow-xl"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400">
            Shipping Details
          </h2>

          <div className="relative">
            <FiMapPin className="absolute left-4 top-4 text-cyan-400 text-xl" />

            <textarea
              name="address"
              value={address.address}
              onChange={handleChange}
              placeholder="Enter Full Address"
              rows="8"
              className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-cyan-400 resize-none text-sm sm:text-base"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 text-black py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold"
          >
            Place Order
          </button>
        </form>

        {/* ORDER SUMMARY */}
        <div className="bg-[#141414] border border-[#2a2a2a] rounded-3xl p-5 sm:p-8 h-fit shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-8">
            Order Summary
          </h2>

          {/* EMPTY CART */}
          {cart.length === 0 && (
            <div className="text-center text-gray-400 py-10">Cart is Empty</div>
          )}

          {/* PRODUCTS */}
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.productId._id}
                className="flex flex-col sm:flex-row gap-4 sm:gap-5 border-b border-[#2a2a2a] pb-5"
              >
                {/* IMAGE */}
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={item.productId.imageUrl}
                    className="w-full max-w-[220px] h-[180px] sm:w-40 sm:h-40 object-contain rounded-xl bg-[#1a1a1a] p-2"
                    alt={item.productId.name}
                  />
                </div>

                {/* DETAILS */}
                <div className="flex flex-col justify-center flex-1">
                  <h3 className="text-lg sm:text-2xl font-bold">
                    {item.productId.name}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm sm:text-base">
                    Qty: {item.quantity}
                  </p>

                  <p className="text-cyan-400 font-bold text-lg sm:text-2xl mt-2">
                    ₹ {item.productId.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
