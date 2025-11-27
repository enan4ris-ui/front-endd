"use client";

import { useState } from "react";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
// import { MailIcon } from "../_icons/MailIcon";
import { Button } from "@/components/ui/button";

export default function Step2({
  increaseStep,
  reduceStep,
  formik,
  // errors,
  // touched,
}) {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  // const [touched, setTouched] = useState(false);
  const hasLetters = /[a-zA-Z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  const router = useRouter();

  const { values, handleChange, handleBlur, errors, touched } = formik;

  let strength = "weak";
  if (password.length >= 8 && hasLetters && hasNumbers && hasSpecial) {
    strength = "strong";
  } else if (password.length >= 6 && hasLetters && hasNumbers) {
    strength = "medium";
  }

  const isValid = password.length >= 6 && password === confirm && hasSpecial;

  const error = touched && !isValid;

  console.log("values", values);
  // let img = document.createElement('img');

  return (
    <div className="flex h-screen w-screen justify-center align-center overflow-hidden">
      <div className="flex flex-col items-center justify-center w-1/2">
        <div className="w-100 h-93 flex flex-col gap-1">
          <div
            className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]"
            onClick={() => router.back()}
          >
            <ChevronLeft className="cursor-pointer" onClick={reduceStep} />
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
              error ? "border-red-300 focus-visible: ring-red-300" : ""
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

          <div className="flex items-center gap-2">
            <Checkbox id="terms-2" defaultChecked />
            <p className="text-[14px] text-[#71717A]">Show password</p>
          </div>
        </div>
        <div className="w-104 h-9 bg-[#18181B]  rounded-[6px] flex justify-center items-center">
          <p className="text-[#FAFAFA] text-[14px] font-medium">
            Let&apos;s Go
          </p>
        </div>
        <div className="flex gap-3 text-4 justify-center items-center">
          <p className="text-[#71717A]">Already have an account?</p>
          <button disable="true" className="text-[#2563EB]">
            Log in{" "}
          </button>
          <Button
            disable={errors.password || !values.password}
            className={`w-[416px] h-9 mb-6 cursor-pointer
            ${
              confirmPassword
                ? "bg-[#18181B] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
          >
            Let&apos;s Go
          </Button>
        </div>
      </div>
      <div className="w-[856px] h-[904px] relative">
        <MailIcon
          // src="/mailIcon.png"
          // fill
          // alt="the picture"
          className="object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}
