// import React from "react";
// import Layout from "@/src/components/admin-dashboard";
// // import CourseArea from "@/src/components/course-details/course-area";
// import MyCourses from "@/src/components/course-details/MyCourses";
// import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";

// const dashbaord = () => {
//   return (
//     <>
//       <Breadcrumb title="Student Dashboard" subtitle="Student Dashboard" isDbbl="Student Dashboard" />
//     <Layout>
//       <MyCourses />
//       {/* <CourseArea/> */}
//     </Layout>
//     </>
//   );
// };

// export default dashbaord;
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "@/src/components/admin-dashboard";
import MyCourses from "@/src/components/course-details/MyCourses";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";

const DashboardWrapper = styled.div`
  padding: 2rem 0;
`;

const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
`;

const dashboard = () => {
  return (
    <>
      <Layout>
        <DashboardWrapper>
          <Container>
            <Row>
              <Col>
                <DashboardTitle>Student Dashboard</DashboardTitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <MyCourses />
              </Col>
            </Row>
          </Container>
        </DashboardWrapper>
      </Layout>
    </>
  );
};

export default dashboard;