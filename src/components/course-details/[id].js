import React from "react";
import Breadcrumb from "../bredcrumb/breadcrumb";
import CounterArea from "../homes/home-3/counter-area";
import CourseDetailsArea from "./course-details-area";
import { useRouter } from 'next/router';

const CourseDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
      <CourseDetailsArea courseId={id} />
      <CounterArea />
    </>
  );
};

export default CourseDetails;