import Dashboardprofile from "@/src/components/dashboard/";
import Sectionprofile from "@/src//components/section";
import Leacturelistprofile from "@/src/components/leacturelist";
import React from "react";
import SEO from "../common/seo";
import WrapperFour from "../layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"leacturelist"} />
      <Leacturelistprofile/>
    </WrapperFour>
  );
};

export default index;
