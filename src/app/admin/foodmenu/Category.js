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

export function Categories() {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [foodCounts, setFoodCounts] = useState({});

  const handleAddCategoryButton = async () => {
    if (!newCategoryName.trim()) {
      toast.error("Please enter category name");
      return;
    }
    try {
      const token = localStorage.getItem("token") || "";
      const response = await axios.post(
        "https://localhost:168/food-category",
        {
          categoryName: newCategoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
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
    } catch (error) {}
  };
}
