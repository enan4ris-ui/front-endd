"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { MailIcon } from "../_icons/MailIcon";
import { Button } from "@/components/ui/button";

export default function StepOne({ increaseStep, formik }) {
  const { values, handleChange, handleBlur, errors, touched } = formik;
  function validEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  }

  var img = document.createElement("img");
  img.src = "mailIcon.png";
  document.body.appendChild(img);

  return (
    <div className="flex h-full w-screen overflow-hidden flex-col">
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="w-full max-w-[416px]">
          <div className="mb-6">
            <ChevronLeft />
          </div>

          <div className="mb-6 flex flex-col ">
            <h1 className="font-semibold text-2xl">Create your account</h1>
            <p className="text-[#71717A]">
              Sign up to explore your favorite dishes.
            </p>
          </div>

          <div className="relative mb-2 flex flex-col">
            <MailIcon
              className={`absolute hidden left-3 top-1/2 -translate-y-1/2 h-4 w-4
              ${!validEmail && touched ? "text-red-300" : "text-[#71717A]"}`}
            />

            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`pl-10 w-[416px] ${
                !validEmail && touched
                  ? "border-red-300 focus-visible:ring-red-300"
                  : ""
              }`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <div className="h-5 mb-4 flex flex-col">
            {errors.email && touched && (
              <p className="text-red-500 text-sm">
                Invalid email. Use a format like example@email.com
              </p>
            )}
          </div>

          <Button
            onClick={increaseStep}
            disable={errors.email || !values.email}
            className={`w-[416px] h-9 mb-6 cursor-pointer
            ${
              validEmail
                ? "bg-[#18181B] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Let&apos;s Go
          </Button>
        </div>
        <div className="flex gap-3 text-4 justify-center items-center flex-row">
          <p className="text-[#71717A]">Already have an account?</p>
          <span className="text-[#2563EB]">Log in</span>
        </div>
      </div>
      <div className="w-[856px] h-[904px] relative">
        <MailIcon
          //   src="/mailIcon.png"
          fill
          //   alt="the picture"
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
