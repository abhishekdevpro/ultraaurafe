import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import Create from "./create-form";

const CourseList = () => {
  return (
    <>
      <Breadcrumb title="Create Course " subtitle="Create Course " isDbbl="Course" />
      
      <Create />
      
    </>
  );
};

export default CourseList;
