
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import Dashboard from "./dashboard";

const Dashboardprofile = () => {
  return (
    <>
    <Breadcrumb title="Dashboard" isDbbl="dashboard" subtitle="dashboard" />
      <Dashboard />
      <CounterArea />
    </>
  );
};

export default Dashboardprofile;
