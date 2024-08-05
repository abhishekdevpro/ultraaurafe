import React from "react";
import SEO from "@/src/common/seo";
import WrapperFour from "@/src/layout/wrapper-4";
import CourseDetails from "@/src/components/course-details";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course Details"} />
      <CourseDetails />
    </WrapperFour>
  );
};

export default index;
