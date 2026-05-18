import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import UserContextProvider from "./ContextAPI/UserContextProvider.jsx";
import CartProvider from "./ContextAPI/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
