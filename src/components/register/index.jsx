
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import RegisterForm from "../form/register-form";
import { Toaster } from "react-hot-toast";

const Register = () => {
  return (
    <>
      <Breadcrumb title="Register"  subtitle="Register"  isDbbl="Pages"/>
      <RegisterForm />
      <Toaster/>
    </>
  );
};

export default Register;
