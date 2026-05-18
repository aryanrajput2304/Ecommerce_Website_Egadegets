import { useContext, useEffect } from "react";
import useCart from "../hooks/useCart";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../ContextAPI/userContext";

export default function CartPage() {
  const { cart, fetchCart, increaseQty, decreaseQty, removeFromCart } =
    useCart();
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const totalPrice = cart.reduce(
    (total, item) => total + item.productId.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-[#111111] px-6 mt-12 md:px-12 py-16 text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">
          Shopping Cart
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          Review your selected products before checkout.
        </p>
      </div>

      {/* Empty Cart*/}
      {(cart || []).length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24">
          <div className="bg-[#111111] border border-[#2a2a2a] px-14 py-12 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <h2 className="text-3xl font-bold text-cyan-400 text-center">
              Cart Is Empty
            </h2>

            <p className="text-gray-400 mt-4 text-center">
              Add products to your cart and start shopping.
            </p>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto grid gap-8">
          {/* CART ITEMS */}
          {(cart || []).map((item) => (
            <div
              key={item.productId._id}
              className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-6 shadow-[0_0_30px_rgba(0,0,0,0.45)] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] duration-300 flex flex-col lg:flex-row items-center gap-8"
            >
              {/* IMAGE */}
              <div className="bg-[#1a1a1a] p-5 rounded-2xl">
                <img
                  src={item.productId.imageUrl}
                  alt={item.productId.name}
                  className="w-52 h-52 object-contain"
                />
              </div>

              {/* PRODUCT DETAILS */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-white">
                  {item.productId.name}
                </h2>

                <p className="text-cyan-400 text-3xl font-extrabold mt-6">
                  ₹ {item.productId.price}
                </p>
              </div>

              {/* QUANTITY */}
              <div className="flex items-center gap-5">
                {/* DECREASE */}
                <button
                  onClick={() => decreaseQty(item)}
                  className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white text-2xl font-bold duration-300"
                >
                  -
                </button>

                {/* QUANTITY */}
                <span className="text-3xl font-extrabold text-white">
                  {item.quantity}
                </span>

                {/* INCREASE */}
                <button
                  onClick={() => increaseQty(item)}
                  className="w-12 h-12 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-2xl font-bold duration-300 shadow-[0_0_15px_rgba(34,211,238,0.35)]"
                >
                  +
                </button>
              </div>

              {/* DELETE BUTTON */}
              <button
                onClick={() => removeFromCart(item.productId._id)}
                className="bg-black border border-[#2a2a2a] hover:border-red-500 text-white px-6 py-3 rounded-2xl duration-300 flex items-center gap-3"
              >
                <FiTrash2 className="text-xl" />
                Delete
              </button>
            </div>
          ))}

          {/* TOTAL SECTION */}
          <div className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-8 mt-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* TOTAL */}
            <div>
              <h2 className="text-4xl font-extrabold text-white">Total:</h2>

              <p className="text-cyan-400 text-5xl font-extrabold mt-3">
                ₹ {totalPrice}
              </p>
            </div>

            {/* CHECKOUT BUTTON */}
            <button
              onClick={() => navigate("/checkout")}
              className="bg-cyan-400 hover:bg-cyan-300 text-black px-12 py-4 rounded-2xl text-xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.35)] duration-300"
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
