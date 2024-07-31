import SEO from "@/src/common/seo";
import CourseList from "@/src/components/course-list";
import WrapperFour from "@/src/layout/wrapper-4";
import React from "react";

const index = () => {
  return (
    <WrapperFour>
      <SEO pageTitle={"Course List"} />
      <CourseList />
    </WrapperFour>
  );
};

export default index;
