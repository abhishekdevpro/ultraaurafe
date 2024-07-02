import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import Update from "./Course_update";

const CourseList = () => {
  return (
    <>
      <Breadcrumb title="Update Course " subtitle="Create Course " isDbbl="Course" />
      
      <Update />
      
    </>
  );
};

export default CourseList;
