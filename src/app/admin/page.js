"use client";

import TruckIcon from "../icons/TruckIcon";
import LogoIcon from "../icons/LogoIcon";
import MenuIcon from "../icons/MenuIcon";
import { useState } from "react";
import { Order } from "./orders/Order";
import { cn } from "@/lib/utils";
import { Categories } from "./foodmenu/Category";
import { useFoodCategory } from "../_provider/FoodCategory";

export default function Adminstrator() {
  const [orders, setOrders] = useState(false);
  const { categories } = useFoodCategory();
  const handleClickOrdersButton = () => {
    setOrders(true);
  };
  const handleClickFoodMenuButton = () => {
    setOrders(false);
  };
  return (
    <div className="flex w-screen gap-6 items-center justify-start bg-[#F4F4F5]">
      <div className="w-[205px] h-screen sticky top-0 border flex flex-col items-center">
        <div className="flex gap-2">
          <LogoIcon />
          <div>
            <p className="text-[#09090B] font-inter text-[18px] font-semibold leading-0">
              NymNym
            </p>
            <p className="text-[#71717A] font-inter text-[12px] font-normal leading-2">
              Swift Delivery
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <button
            className={cn(
              "w-[165px] h-10 flex gap-2.5 items-center justify-center rounded-full border",
              !orders
                ? "bg-[#09090B text-white"
                : "bg-white text-[#09090B border-none"
            )}
            onClick={handleClickFoodMenuButton}
          >
            <MenuIcon/>
            <p className="font-inter text-[14px] font-medium leading-5 flex items-center">
                Food Menu
            </p>
          </button>
          <button
             className={cn(
                "w-[165px] h-10 flex gap-2.5 items-center justify-center rounded-full border",
                !orders
                 ? "bg-[#09090B text-white"
                : "bg-white text-[#09090B border-none"
             )}>
              
             </button>
        </div>
        </div>
  );
}
