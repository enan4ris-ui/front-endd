"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "@/app/icons/ChevronLeft";
// import { MailIcon } from "../_icons/MailIcon";
import { Button } from "@/components/ui/button";
import LoginPage from "../login/page";
import { useRouter } from "next/navigation";

export default function StepOne({ increaseStep, formik }) {
  const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
    formik;

  const router = useRouter();

  const createUser = async (email, password) => {
    try {
      await axios.post("https://localhost:999/authentication/signup", {
        email: email,
        password: password,
      });
      router.push("/login");
    } catch (err) {
      setApiError(err.response.data);
    } finally {
      console.log("finished");
    }
  };

  function validEmail(email) {
    const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return re.test(email);
  }

  const handleNavigate = () => {
    router.push("/login");
  };

  console.log("errors", errors);

  return (
    <div className="flex h-full overflow-hidden flex-col">
      <div className="flex h-screen justify-center flex-col w-1/2">
        <div
          className="w-full max-w-[416px]"
          onSubmit={(e) => {
            e.preventDefault();
            formik.setTouched({ email: true });
            formik.validateForm().then((errors) => {
              if (!errors.email) {
                next();
              }
            });
          }}
        >
          <div className="mb-6">
            <ChevronLeft />
          </div>

          <div className="w-[416px] mb-6 flex flex-col ">
            <h1 className="font-semibold text-2xl text-[24px]">
              Create your account
            </h1>
            <p className="text-[#71717A]">
              Sign up to explore your favorite dishes.
            </p>
          </div>

          <div className="relative mb-2 flex flex-col">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className={`pl-10 w-[416px] ${
                errors.email && touched
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
              <p className="text-red-500 text-sm font-inter font-normal leading-5 ">
                Invalid email. Use a format like example@email.com
              </p>
            )}
          </div>

          <Button
            onClick={increaseStep}
            disabled={errors.email || !values.email}
            className={`w-[416px] h-9 mb-6 cursor-pointer
            ${
              validEmail
                ? "bg-[#18181B] text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }
            `}
          >
            Let&apos;s Go
          </Button>
        </div>
        <div className="flex w-[400px] gap-3 text-4 justify-center items-center flex-row">
          <p className="text-[#71717A]">Already have an account?</p>
          <span className="text-[#2563EB]" onClick={handleNavigate}>
            Log in
          </span>
        </div>
      </div>
    </div>
  );
}
