import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Products from "./pages/Products/productdetails";
import About from "./About";
import Contact from "./Contact";
import Cart from "./components/Cart";
import Product from "./pages/Products/product";
import MyProfile from "./pages/user/MyProfile";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import AddProduct from "./components/ProductRegisteration/ProductAdd";
import ProtectedRoute from "./components/ProtectedRoute";
import Checkout from "./pages/Order/Checkout";
import Order from "./pages/Order/Orders";
import Responsive from "./components/responsive";

export default function App() {
  return (
    <div>
      <div className="overflow-hidden overflow-y-scroll">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products/:id" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ProductAdd" element={<AddProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order" element={<Order />} />
        <Route paht="/responsive" element={<Responsive />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
