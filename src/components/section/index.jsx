
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";

import Section from "./Section";

const Sectionprofile = () => {
  return (
    <>
    <Breadcrumb title="Add Section" isDbbl="Sectionprofile" subtitle="Sectionprofile" />
      <Section />
      <CounterArea />
    </>
  );
};

export default Sectionprofile;
