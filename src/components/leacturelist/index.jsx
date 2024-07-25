
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";

import Leacturelist from "./Leacturelist";

const Leacturelistprofile = () => {
  return (
    <>
    <Breadcrumb title="" isDbbl="Leacturelist" subtitle="Leacturelist"  />
      <Leacturelist />
      <CounterArea />
    </>
  );
};

export default Leacturelistprofile;
