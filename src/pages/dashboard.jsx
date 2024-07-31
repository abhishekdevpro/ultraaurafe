import React from "react";
import Layout from "../components/admin-dashboard";
import HomePage from "../components/admin-dashboard/HomePage";
import CourseArea from "../components/homes/home/course-area";

const dashbaord = () => {
  return (
    <Layout>
      {/* <HomePage /> */}
      <CourseArea/>
    </Layout>
  );
};

export default dashbaord;
