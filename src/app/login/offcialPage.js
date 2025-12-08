"use client";
import { useState } from "react";
import Image from "next/image";
import LoginPage1 from "../login/page";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import SignUp from "../sign-up/page";
import resetPassword from "./resetPassword";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { Toaster } from "@/components/ui/toaster";

export default function LoginPage({ className }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  // const { toast } = useToast();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email.").required("Required"),
    password: Yup.string().required("Required"),
  });

  const formil = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setServerError("");
        const response = await axios.post(
          "https://localhost:168/authentication/login",
          {
            email: values.email,
            password: values.password,
          }
        );
        console.log("this is response", response.data.token);

        // localStorage.setItem("authToken", response.data.token);

        console.log("Push to homepage success");
        toast.success("Login successful!");
        // router.push("/");
      } catch (error) {
        console.log(error.response?.data);
        toast.error(error.response?.data || "User not found");
        setServerError(error.response?.data);
      }
    },
  });
  const { values, errors } = formik;
  const handleClickSignupButton = () => {
    router.push("/sign-up");
  };
  const handleClickChevronButton = () => {
    router.push("/sign-up");
  };

  return (
    <>
      <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-sm md:max-w-4xl">
          <div className={cn("flex flex-col gap-6 items-center", className)}>
            {step === 1 && (
              <LoginPage1 increaseStep={increaseStep} formik={formik} />
            )}
            {step === 2 && (
              <SignUp
                increaseStep={increaseStep}
                reduceStep={reduceStep}
                formik={formik}
              />
            )}
            {apiError && <div style={{ color: "red" }}>{apiError}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
