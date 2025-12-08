"use client";
import { useState } from "react";
import SignUp from "../app/sign-up/page";
import { useRouter } from "next/navigation";
import StepOne from "../app/sign-up/stepOne";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Image from "next/image";
import LoginOfficialPage from "./login/offcialPage";
import Header from "./homePage.js/header";

const Home = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [apiError, setApiError] = useState("");

  const createUser = async (email, password) => {
    try {
      await axios.post("http://localhost:999/authentication/sign-up", {
        email: email,
        password: password,
      });
      router.push("/login");
    } catch (err) {
      setApiError(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Must be greater than 8")
      .matches(/[a-zA-Z]/, "Must contain letter")
      .matches(/[0-9]/, "Must contain number")
      .matches(/[^a-zA-Z0-9]/, "Must contain symbol")
      .required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "Password not match"
    ),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringly(values, null, 2));
    },
  });

  function increaseStep() {
    setStep((prev) => prev + 1);
  }
  function reduceStep() {
    setStep((prev) => prev - 1);
  }
  return (
    <div className=" h-screen flex relative">
      {/* <div> */}
      {/* <SignUp className="w-[400px] h-[372px] flex align-center justify-start align-start" />
        {step === 1 && <StepOne increaseStep={increaseStep} formik={formik} />}
        {step === 2 && (
          <Step2
            increaseStep={increaseStep}
            reduceStep={reduceStep}
            formik={formik}
          />
        )}
      </div> */}
      <Header />
      {/* <div className=" flex w-screen h-screen relative"> */}
      {/* <Image src="/delivery.png" alt="aa" fill className="max-w-[50%]" />{" "} */}
      {/* </div> */}
    </div>
  );
};
export default Home;
