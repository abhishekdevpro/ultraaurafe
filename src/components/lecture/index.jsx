
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";

import Leacture from "./lecture";

const Leactureprofile = () => {
  return (
    <>
    <Breadcrumb title="Leacture" isDbbl="Leacture" subtitle="Leacture" />
      <Leacture />
      <CounterArea />
    </>
  );
};

export default Leactureprofile;
