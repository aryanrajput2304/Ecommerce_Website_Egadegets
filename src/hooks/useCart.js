import { useContext } from "react";
import axios from "axios";
import { CartContext } from "../ContextAPI/CartContext";
import { UserContext } from "../ContextAPI/userContext";
import { useNavigate } from "react-router-dom";

export default function useCart() {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // FETCH CART
  const fetchCart = async () => {
    try {
      if (!user) {
        setCart([]);
        return;
      }

      const response = await axios.get(
        `https://ecommerce-backend1-3.onrender.com/api/v1/user/cart/${user.id}`,
      );

      console.log(response.data);

      setCart(response.data.items || []);
    } catch (error) {
      console.log(error);
      setCart([]);
    }
  };

  // ADD TO CART
  const addToCart = async (product) => {
    try {
      if (!user) {
        alert("Please login first");
        return;
      }

      const newProduct = {
        userId: user.id,
        productId: product._id,
        quantity: 1,
      };

      await axios.post(
        `https://ecommerce-backend1-3.onrender.com/api/v1/user/cart/add`,
        newProduct,
      );
      navigate("/cart");
      await fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  // REMOVE FROM CART
  const removeFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://ecommerce-backend1-3.onrender.com/api/v1/user/cart/remove`,
        {
          data: {
            userId: user.id,
            productId: productId,
          },
        },
      );

      // UPDATE UI
      setCart((prev) =>
        prev.filter(
          (item) => item.productId._id.toString() !== productId.toString(),
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  // INCREASE QUANTITY
  const increaseQty = (product) => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId._id.toString() === product.productId._id.toString()
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // DECREASE QUANTITY
  const decreaseQty = async (product) => {
    if (product.quantity === 1) {
      await removeFromCart(product.productId._id);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.productId._id.toString() === product.productId._id.toString()
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item,
      ),
    );
  };

  return {
    cart,
    fetchCart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  };
}
