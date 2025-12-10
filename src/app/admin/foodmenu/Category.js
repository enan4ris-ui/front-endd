import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import CategoriesMap from "@/app/_components/CategoriesMap";
import { useFoodCategory } from "@/app/_provider/food-category";

export function Categories() {
  const [categories, setCategories] = useState([]);

  const [newCategoryName, setNewCategoryName] = useState("");
  const [foodCounts, setFoodCounts] = useState({});

  const fetchCategories = async () => {
    const token = localStorage.getItem("authToken") || "";
    console.log(token);
    try {
      const response = await axios.get("https://localhost:168/food-category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Failed to fetch categories", error);
      toast.error("Failed to fetch categories");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategoryButton = async () => {
    if (!newCategoryName.trim()) {
      toast.error("Please enter category name");
      return;
    }
    try {
      await createCategory(newCategoryName);

      // const token = localStorage.getItem()
      // const response = await axios.post("https://localhost:168/food-category", {
      // categoryName: newCategoryName,
      // }, {
      // headers: {
      //   'Authorization': `Bearer ${token}`
      // }
      // });
      setCategories([...categories, response.data]);
      toast.success("Category added successfully");
      setNewCategoryName("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add category");
    }
  };

  const handleDeleteButton = async (id) => {
    try {
      const response = await axios.delete(
        `https://localhost:168/food-category/${id}`
      );
      toast.success("Category deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete category");
    }
  };

  if (loading) {
    return <div>...loading</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col w-full h-44 border rounded-xl p-6 gap-4 bg-amber-50">
        <div className="text-[#09090B] font-inter text-[20px] font-semibold leading-1">
          Dishes Category
        </div>
      </div>
    </div>
  );
}
