"use client";
import { useState } from "react";
import { useFormik } from "formik";
import StepOne from "./stepOne";
import Step2 from "./step2";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";

// import { FoodDelivery } from "../../../public/foodDelivery";
import { ChevronLeft } from "../_icons/ChevronLeft";

export const SignUp = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="flex ">
      {/* <div className="w-[416px] h-72 justify-center pl-[70px] flex-col p-6">
        <ChevronLeft className="flex flex-start" />
        <div className="w-[416px] h-[60px] gap-1">
          <p className="font-bold size-6">Create your account</p>
          <p className="font-normal size-4 space-y-8 text-gray-400">
            Sign up to explore your favorite dishes.
          </p>
          <div className="w-[416px] h-9">
            <div className="flex items-center mt-1">
              <input
                type="email"
                id="input-9"
                className="w-full h-10 px-3 text-sm text-gray-700 border border-r-0 rounded-r-none border-gray-400 hover:border-gray-600 focus:outline-none round round-lg shadow-sm"
                placeholder="Enter your email address"
              />
            </div>
          </div>
          <button className="w-[416px] h-9 bg-black" onClick={handleClick}>
            <p className="w-[416px] h-9 text-gray-300 hover:text-gray-200 bg-gray-400 hover:bg-black flex align-center round round-transparent rounded-lg">
              Lets Go
            </p>
          </button>
          <div className="flex flex-row align-center font-normal text-base">
            <p className="text-gray-500">Already have an account?</p>
            <p className="text-blue-600 ">Log in</p>
          </div>
        </div>
      </div> */}
      {/* <FoodDelivery className="flex justify-end" /> */}
    </div>
  );
};
