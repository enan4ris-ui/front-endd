"use client";
import { useState } from "react";
import { SignUp } from "../app/sign-up/page";
import StepOne from "../app/sign-up/stepOne";
import Step2 from "../app/sign-up/step2";
// import Step3 from "@/app/components/step3.jsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";
// import { MailIcon } from "../app/_icons/MailIcon";
import Image from "next/image";
const Home = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [apiError, setApiError] = useState("");
  // const validationSchema = Yup.object().shape({
  //   email: Yup.string()
  //     .email("Please enter a valid email address")
  //     .required("Required"),
  //   password: Yup.string()
  //     .min(8, "it must be above 8 characters")
  //     .matches(/[a-zA-Z]/, "it must contain letters")
  //     .matches(/[0-9]/, "it must contain numbers")
  //     .matches(/[^a-zA-Z0-9]/, "it must contain symbols")
  //     .required("Required"),
  //   confirmPassword: Yup.string()
  //     .oneOf([Yup.ref("password")], "Passwords must match")
  //     .required("Please confirm your password"),
  // });

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

  const formil = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  function increaseStep() {
    setStep((prev) => prev + 1);
  }
  function reduceStep() {
    setStep((prev) => prev - 1);
  }

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
  return (
    <div className=" h-screen flex gap-90 relative">
      {/* <div> */}
      <SignUp className="w-[400px] h-[372px] flex align-center justify-start align-start" />
      {step === 1 && <StepOne increaseStep={increaseStep} formik={formik} />}
      {step === 2 && (
        <Step2
          increaseStep={increaseStep}
          reduceStep={reduceStep}
          formik={formik}
        />
      )}
      {/* {step === 3 && (
        <Step3 increaseStep={increaseStep} reduceStep={reduceStep} />
      )} */}
      {/* </div> */}
      <div className=" flex w-[856px] h-[904px] relative">
        <Image src="/delivery.png" alt="aa" fill />{" "}
      </div>
    </div>
  );
};
export default Home;
