import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    Product_Name: "",
    Product_Specification: "",
    Price: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/products",formData,
      );

      if (response.status === 201) {
        alert("Product Added Successfully");

        setFormData({
          Product_Name: "",
          Product_Specification: "",
          Price: "",
          image: "",
        });

        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Failed To Add Product");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center">Add Product</h2>

        {/* PRODUCT NAME */}
        <input
          type="text"
          placeholder="Product Name"
          value={formData.Product_Name}
          onChange={(e) =>
            setFormData({
              ...formData,
              Product_Name: e.target.value,
            })
          }
          className="w-full p-3 mb-4 border rounded-lg outline-none"
          required
        />

        {/* PRODUCT SPECIFICATION */}
        <textarea
          placeholder="Product Specification"
          value={formData.Product_Specification}
          onChange={(e) =>
            setFormData({
              ...formData,
              Product_Specification: e.target.value,
            })
          }
          className="w-full p-3 mb-4 border rounded-lg outline-none"
          rows="4"
          required
        />

        {/* PRICE */}
        <input
          type="number"
          placeholder="Price"
          value={formData.Price}
          onChange={(e) =>
            setFormData({
              ...formData,
              Price: e.target.value,
            })
          }
          className="w-full p-3 mb-4 border rounded-lg outline-none"
          required
        />

        {/* IMAGE URL */}
        <input
          type="url"
          placeholder="Enter Image URL"
          value={formData.image}
          onChange={(e) =>
            setFormData({
              ...formData,
              image: e.target.value,
            })
          }
          className="w-full p-3 mb-6 border rounded-lg outline-none"
          required
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 duration-300"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
