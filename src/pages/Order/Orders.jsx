import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../ContextAPI/userContext";
import { useNavigate } from "react-router-dom";

export default function Order() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(
        `https://ecommerce-backend1-3.onrender.com/api/v1/user/order/${user.id}`,
      );

      console.log("ORDER RESPONSE:", response.data);

      const data = response.data;

      setOrders(data.orders || data || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setOrders([]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center text-white text-3xl font-bold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 md:px-12 py-16 mt-10">
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold">My Orders</h1>
        <p className="text-gray-400 mt-4 text-lg">
          View all your placed orders.
        </p>
      </div>

      {/* EMPTY */}
      {(orders?.length || 0) === 0 ? (
        <div className="flex flex-col items-center justify-center mt-24">
          <h2 className="text-3xl font-bold text-gray-300">No Orders Found</h2>

          <button
            onClick={() => navigate("/products")}
            className="mt-8 bg-cyan-400 hover:bg-cyan-300 text-black px-8 py-4 rounded-2xl text-xl font-bold duration-300"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-[#111111] border border-[#2a2a2a] rounded-3xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            >
              {/* ORDER HEADER */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-[#2a2a2a] pb-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-cyan-400">
                    Order Id{" "}
                  </h2>
                  <p className="text-gray-400 mt-2 break-all">{order._id}</p>
                </div>
                <div>
                  <p className="text-gray-400 mt-2 text-lg">
                    {new Date(order.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="flex flex-col items-start md:items-end">
                  <p className="mt-2 text-green-400 font-bold text-lg">
                    {order.orderStatus || "Placed"}
                  </p>
                </div>
              </div>

              {/* PRODUCTS */}
              <div className="flex flex-col gap-8">
                {(order.items || []).map((item) => (
                  <div
                    key={item._id}
                    className="flex flex-col md:flex-row items-center gap-6 border-b border-[#2a2a2a] pb-6"
                  >
                    {/* IMAGE */}
                    <div className="bg-[#1a1a1a] p-4 rounded-2xl">
                      <img
                        src={item.imageUrl || "Product"}
                        alt={item.name || "Product"}
                        className="w-28 h-28 object-contain"
                      />
                    </div>

                    {/* DETAILS */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold">
                        {item.name || "Product Name"}
                      </h3>

                      <p className="text-gray-400 mt-3 text-lg">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-cyan-400 text-2xl font-bold mt-3">
                        ₹ {item.price || 0}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ADDRESS */}
              <div className="mt-8 border-t border-[#2a2a2a] pt-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  Shipping Address
                </h2>

                <div className="text-gray-300 flex flex-col gap-2 text-lg">
                  <p>
                    <span className="font-bold text-white">Address:</span>{" "}
                    {order.shippingAddress}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
