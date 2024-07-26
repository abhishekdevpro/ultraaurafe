import InstructorProfile from "@/src/components/instructor-profile/[index]";
import React from "react";
import SEO from "@/src/common/seo";
import WrapperFour from "@/src/layout/wrapper-4";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Instructor Profile"} />
      <InstructorProfile />
    </WrapperFour>
  );
};

export default index;
