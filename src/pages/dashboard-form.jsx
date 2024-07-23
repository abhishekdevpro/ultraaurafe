import Dashboardprofile from "@/src/components/dashboard/";
import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"dashboard"} />
      <Dashboardprofile />
    </WrapperFour>
  );
};

export default index;
