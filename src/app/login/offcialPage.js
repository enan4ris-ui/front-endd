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

const LoginOfficialPage = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email. Use a format like example@email.com. ")
      .required("Required"),
    password: Yup.string()
      .password("Incorrect password. Please try again.")
      .required("Required"),
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
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push(href);
  // };
  return (
    <>
      {step === 1 && <LoginPage1 increaseStep={increaseStep} formik={formik} />}
      {step === 2 && (
        <resetPassword
          increaseStep={increaseStep}
          reduceStep={reduceStep}
          formik={formik}
        />
      )}
      {apiError && <div style={{ color: "red" }}>{apiError}</div>}
    </>
  );
};

export default LoginOfficialPage;
