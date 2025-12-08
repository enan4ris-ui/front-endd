"use client";
import { useState } from "react";
import { useFormik } from "formik";
import StepOne from "./stepOne";
import Step2 from "./step2";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [apiError, setApiError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address (m@example.com)")
      .required("Required"),
    password: Yup.string()
      .min(8, "it must above 8 characters")

      .matches(/[a-zA-Z]/, "it must contain letters")

      .matches(/[0-9]/, "it must contain numbers")

      .matches(/[^a-zA-Z0-9]/, "it must contain symbols")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please confirm your password"),
  });

  const createUser = async (email, password) => {
    try {
      setLoading(true);
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
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const { email, password } = values;

      await createUser(email, password);
    },
  });

  return (
    <div>
      {step === 1 && <StepOne increaseStep={increaseStep} formik={formik} />}
      {step === 2 && (
        <Step2
          increaseStep={increaseStep}
          reduceStep={reduceStep}
          formik={formik}
        />
      )}
      {apiError && <div style={{ color: "red" }}>{apiError}</div>}
      <div className=" flex w-screen h-screen relative">
        <Image src="/delivery.png" alt="aa" fill className="max-w-[50%]" />{" "}
      </div>
    </div>
  );
};

export default SignUp;
