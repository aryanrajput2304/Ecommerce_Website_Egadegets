import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { ImTerminal } from "react-icons/im";

export default function Product() {
  const [products, setProducts] = useState([]);

  // SUCCESS MODAL
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const { addToCart } = useCart();

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://ecommerce-backend1-3.onrender.com/api/v1/products",
        );

        console.log(response.data.products);

        setProducts(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  // HANDLE ADD TO CART
  const handleAddToCart = async (item) => {
    const user = JSON.parse(localStorage.getItem("user"));

    // CHECK LOGIN
    if (!user) {
      navigate("/login");
      return;
    }

    await addToCart(item);

    // SHOW SUCCESS MODAL
    setShowModal(true);

    // AUTO HIDE
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#111111] px-6 md:px-12 py-16">
      {/* SUCCESS MODAL */}
      {showModal && (
        <div className="fixed top-6 right-6 bg-cyan-400 text-black px-6 py-4 rounded-2xl shadow-[0_0_25px_rgba(34,211,238,0.5)] z-50 font-semibold animate-bounce">
          Product Added To Cart Successfully
        </div>
      )}

      {/* HEADING */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-12">
          All Products
        </h1>

        <p className="text-gray-400 mt-5 text-lg">
          Discover premium gadgets, smartphones, accessories, and more.
        </p>
      </div>

      {/* PRODUCT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((item) => (
          <div
            key={item._id}
            className="bg-[#111111] border border-[#2a2a2a] rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:-translate-y-3  hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] duration-300 flex flex-col"
          >
            {/* IMAGE */}
            <div className="bg-[#1a1a1a] p-6">
              <Link to={`/products/${item._id}`}>
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-64 object-contain"
                />
              </Link>
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col flex-1">
              {/* PRODUCT NAME */}
              <Link to={`/products/${item._id}`}>
                <h2 className="text-xl font-bold text-white hover:text-cyan-400 duration-300 line-clamp-1">
                  {item.name}
                </h2>
              </Link>

              {/* RATING */}
              <div className="flex items-center mt-4 gap-1 text-yellow-400 mb-4">
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />
                <FiStar className="fill-yellow-400" />

                <span className="text-gray-400 text-sm ml-2">
                  (4.9 Reviews)
                </span>
              </div>

              {/* DESCRIPTION */}
              <Link to={`/products/${item._id}`}>
                <p className="text-gray-400 mt-4 line-clamp-2 hover:text-cyan-400 duration-300 leading-7 min-h-[56px]">
                  {item.description}
                </p>
              </Link>

              {/* PRICE */}
              <p className="text-3xl font-extrabold text-cyan-400 mt-6">
                ₹ {item.price}
              </p>
              <span className="text-xl text-gray-500 line-through">
                ₹ {item.price + 5000}
              </span>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-auto pt-8">
                {/* ADD TO CART */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 flex items-center justify-center gap-5 bg-cyan-400 text-black py-3 rounded-xl font-bold hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)] duration-300"
                >
                  <FiShoppingCart className=" text-xl  " />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
