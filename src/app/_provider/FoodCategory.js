"use client";

import { createContext, useContext, useState, useEffect } from "react";

const FoodCategoryContext = (createContext = null);

export const useFoodCategory = () => {
  const context = useContext(FoodCategoryContext);
  if (!context) {
    throw new Error(
      "useFoodCategory must be used inside a <FoodCategoryProvider>"
    );
  }
  return context;
};

export const FoodCategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    const token = localStorage.getItem("authToken") || "";

    try {
      setLoading(true);
      const response = await axios.get("https://localhost:168/food-category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
      toast.error("Failed to fetch categories");
    } finally {
      setLoading(false);
    }
  };

  // const deleteCategory = async (id) => {
  //   try {
  //     await axios.delete(`https://localhost:168/food-category/${id}`);
  //     toast.success("Category deleted successfully!");
  //     fetchCategories();
  //   } catch (error) {
  //     toast.error("Failed to delete category");
  //   }
  // };

  const postFood = async (foodData) => { 
     try {
       await axios.post(`https://localhost:168/post/${id}`);
       toast.success("Category posted successfully!");
       fetchCategories();
     } catch (error) {
       toast.error("Failed to post category");
     }
   };
  }

  const updateFood = async (id, foodData) => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "https://localhost:168/food",
        {
          id,
          ...foodData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Dish changed successfully!");
      return response.data;
    } catch (error) {
      console.error("Failed to update dish", error);
      throw error;
    }
  };

  const deleteFood = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`https://localhost:168/food/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Dish deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete dish", error);
      throw error;
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file".file);
    formData.append("upload_preset", UPLOAD_PRESET);
  };
  return data.secure_url;
} catch (error) {
  console.error("Cloudinary upload failed", error);
  toast.error("Failed to upload image");
  throw error;
}
};

  useEffect(() => {
    fetchCategories();
  }, []);

  //Orders----

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("https://localhost:168/order", {
        headers: {Authorization: `Bearer ${token}`},
      });
      setOrders(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch order", error);
      toast.error("Failed to fetch order");
      return [];
    }
  };

  const postOrder = async(orderData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://localhost:168/order",
        orderData,
        {
          headers: {Authorization: `Bearer ${token}`},
        }
      )
    }
  }
  return (
    <FoodCategoryContext.Provider
      value={{
        categories,
        loading,
        deleteCategory,
      }}
    >
      {children}
    </FoodCategoryContext.Provider>
  );
};
