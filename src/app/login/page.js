"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft } from "@/app/_icons/ChevronLeft";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

export default function LoginPage1() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email. Use a format like example@gmail.com. ")
      .required("Required"),
    password: Yup.string().min(6, "min 6").required("Required"),
  });

  const createUser = async (email, password) => {
    try {
      setLoading(true);
      await axios.post("https://localhost:999/authentication/login", {
        email: email,
        password: password,
      });
      router.push("/signup");
    } catch (err) {
      setApiError(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  function increaseStep() {
    setStep((prev) => prev + 1);
  }
  function reduceStep() {
    setStep((prev) => prev - 1);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;
      await logUser(email, password);
    },
  });

  const handleClick = () => {
    router.push("/sign-up");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[1440px] h-[944px] p-5 flex gap-12 pl-20 items-center">
        <div className="w-100 h-93 flex flex-col gap-6">
          <div className="w-9 h-9 flex justify-center items-center rounded-[10px] border border-[#E4E4E7]">
            <ChevronLeft />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-2xl">Log in </h3>
            <p className="font-normal text-[#71717A]">
              Log in to enjoy your favorite dishes.
            </p>
          </div>
          <div className="w-100 h-30 flex flex-col gap-4">
            <Input type="email" placeholder="Enter your email address" />
            <Input type="password" placeholder="Password" />
            <div className="flex items-center gap-2">
              <p className="text-[14px] text-[#71717A]">Forgot password ?</p>
            </div>
          </div>
          <div className="w-104 h-9 bg-[#18181B]  rounded-[6px] flex justify-center items-center">
            <p
              className="text-[#FAFAFA] text-[14px] font-medium"
              onClick={<resetPassword />}
            >
              Let&apos;s Go
            </p>
          </div>
          <div className="flex gap-3 text-4 justify-center items-center">
            <p className="text-[#71717A]">Don’t have an account?</p>
            <button className="text-[#2563EB]" onClick={handleClick}>
              Sign up{" "}
            </button>
          </div>
        </div>
        <div className="w-[856px] h-[904px] relative">
          <Image
            src="/delivery.png"
            fill
            alt="the picture"
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
