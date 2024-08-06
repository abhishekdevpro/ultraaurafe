import React from "react";
import Layout from "@/src/components/admin-dashboard";
import CourseArea from "@/src/components/course-details/course-area";

const dashbaord = () => {
  return (
    <Layout>
      <CourseArea/>
    </Layout>
  );
};

export default dashbaord;
