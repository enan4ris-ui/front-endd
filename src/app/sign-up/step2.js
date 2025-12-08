"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function Step2({ next, back, formik, reduceStep }) {
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
  } = formik;

  const [show, setShow] = useState(false);
  const router = useRouter();

  return (
    <div className="flex h-screen w-screen justify-center align-center overflow-hidden">
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="w-100 h-93 flex flex-col gap-1">
          <div
            className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]"
            onClick={reduceStep}
          >
            <ChevronLeft className="cursor-pointer" />
          </div>

          <h1 className="font-semibold text-2xl mb-2">
            Create a strong password
          </h1>
          <p className="text-[#71717A] mb-6">
            Create a strong password with letters, numbers.
          </p>

          <Input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={` ${
              errors.password
                ? "border-red-300 focus-visible: ring-red-300"
                : ""
            }`}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="reltaive h-5">
            {errors.password && touched.password && (
              <div className="text-red-500">{errors.password}</div>
            )}
          </div>

          <Input
            type={show ? "text" : "password"}
            placeholder="Confirm"
            name="confirmPassword"
            className={`${
              errors.confirmPassword
                ? "border-red-300 focus-visible: ring-red-300"
                : ""
            }`}
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <div className="relative h-5 mb-4">
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="absolute left-0 top-0 text-red-300 text-sm">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <div
            className="flex items-center gap-2"
            onClick={() => setShow((prev) => !prev)}
          >
            <Checkbox checked={show} id="terms-2" />
            <p className="text-[14px] text-[#71717A]">Show password</p>
          </div>
        </div>

        <Button
          disabled={isSubmitting || errors.password || errors.confirmPassword}
          onClick={() => handleSubmit(values)}
          className={`w-[416px] h-9 mb-6 cursor-pointer bg-black text-white`}
        >
          {isSubmitting ? "loading" : "Lets Go"}
        </Button>

        <div className="flex flex-row gap-3 text-4 justify-center items-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <button disable="true" className="text-[#2563EB]">
            Log in{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
