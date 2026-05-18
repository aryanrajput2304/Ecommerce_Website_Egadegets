import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserContextProvider({ children }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        console.log("Invalid user in localStorage, removing...");
        localStorage.removeItem("user");
        setUser(null);
      }
    }
  }, []);

  // LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "https://dummy-backend1.onrender.com/api/v1/user/login",
        {
          email,
          password,
        },
      );

      const data = response.data;
      console.log("API RESPONSE:", data);

      const loggedUser = data.user || data;

      setUser(loggedUser);

      localStorage.setItem("user", JSON.stringify(loggedUser));

      navigate("/profile");
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <UserContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        user,
        setUser,
        handleLogin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
