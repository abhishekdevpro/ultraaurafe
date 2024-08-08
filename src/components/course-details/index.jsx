
import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseDetailsArea from "./course-details-area";
import CourseArea from "./course-area";
import Header from "@/src/layout/headers/header";

const CourseDetails = () => {
  return (
    <>  
      <CourseDetailsArea />
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
