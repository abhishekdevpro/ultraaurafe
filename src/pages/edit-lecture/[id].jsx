import React from "react";
import SEO from "@/src/common/seo";
import WrapperFour from "@/src/layout/wrapper-4";
import Leactureprofile from "@/src/components/lecture";
import EditLecture from "./EditLecture";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"leacture"} />
      <Breadcrumb title="Leacture" isDbbl="Leacture" subtitle="Leacture" />
      <EditLecture />
    </WrapperFour>
  );
};

export default index;
