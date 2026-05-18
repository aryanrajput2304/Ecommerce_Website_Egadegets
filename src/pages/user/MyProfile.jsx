import React, { useContext } from "react";
import { UserContext } from "../../ContextAPI/userContext";
import { useNavigate } from "react-router-dom";
import { FiUser, FiShoppingBag, FiMapPin, FiLogOut } from "react-icons/fi";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  // LOGOUT
  const handleLogout = () => {
    setUser(null);

    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#111111] text-white px-6 py-12 mt-16">
      {/* TOP PROFILE CARD */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-[35px] p-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* PROFILE IMAGE */}
            <div className="w-32 h-32 rounded-full bg-cyan-400/20 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,0.25)]">
              <FiUser className="text-cyan-400 text-6xl" />
            </div>

            {/* USER INFO */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-wide">
                {user?.name?.toUpperCase()}
              </h1>

              <p className="text-gray-400 text-lg mt-3">{user?.email}</p>

              <div className="mt-5 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                Account Active
              </div>
            </div>
          </div>
        </div>
        {/* ACTION CARDS */}
        <div className="mt-12 flex justify-center">
          <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
            {/* ORDERS */}
            <div
              onClick={() => navigate("/order")}
              className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-cyan-400 rounded-3xl p-8 cursor-pointer duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-400/20 flex items-center justify-center">
                <FiShoppingBag className="text-cyan-400 text-3xl" />
              </div>

              <h2 className="text-2xl font-bold mt-6">My Orders</h2>

              <p className="text-gray-400 mt-3 leading-7">
                Track and view all your orders easily.
              </p>
            </div>

            {/* LOGOUT */}
            <div
              onClick={handleLogout}
              className="flex-1 bg-[#1a1a1a] border border-red-500/30 hover:border-red-500 rounded-3xl p-8 cursor-pointer duration-300 hover:-translate-y-1"
            >
              <div className="w-16 h-16 rounded-2xl bg-red-500/20 flex items-center justify-center">
                <FiLogOut className="text-red-400 text-3xl" />
              </div>

              <h2 className="text-2xl font-bold mt-6">Logout</h2>

              <p className="text-gray-400 mt-3 leading-7">
                Securely logout from your account.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
