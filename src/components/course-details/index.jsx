
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseDetailsArea from "./course-details-area";
import CourseArea from "./course-area";

const CourseDetails = () => {
  return (
    <>
      <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
      <CourseDetailsArea />
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
