import Dashboardprofile from "@/src/components/dashboard/";
import Sectionprofile from "@/src//components/section";
import Leacture from "@/src/components/Leacture";
import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"leacture"} />
      <Leacture/>
    </WrapperFour>
  );
};

export default index;
