
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import LoginForm from "../form/login-form";
import { Toaster } from "react-hot-toast";

const SignIn = () => {
  return (
    <>
    <Breadcrumb title="Log In" subtitle="Login" isDbbl="Pages" />
      <LoginForm />
      <Toaster/>
    </>
  );
};

export default SignIn;
