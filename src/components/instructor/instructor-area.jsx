// import instructor_info_data from "@/src/data/instructor-data";
// import Link from "next/link";
// import React from "react";

// const InstructorArea = () => {
//   return (
//     <>
//       <section className="instructor-area pb-110">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="section-title mb-65 text-center">
//                 <span className="tp-sub-title-box mb-15">Instructor</span>
//                 <h2 className="tp-section-title">Our Expert Instructor</h2>
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             {instructor_info_data.map((item, i) => (
//               <div key={i} className="col-lg-4 col-md-6 col-12">
//                 <div
//                   className="tp-instruc-item wow fadeInUp"
//                   data-wow-duration=".8s"
//                   data-wow-delay=".2s"
//                 >
//                   <div className="tp-instructor text-center p-relative mb-40">
//                     <div className="tp-instructor__thumb mb-25">
//                       <img src={item.img} alt="instructor-profile" />
//                     </div>
//                     <div className="tp-instructor__content">
//                       <span>{item.title}</span>
//                       <h4 className="tp-instructor__title tp-instructor__title-info p-relative mb-35 mt-5">
//                         <Link href="/instructor-profile">{item.name}</Link>
//                       </h4>
//                       <div className="tp-instructor__stu-info">
//                         <ul className="d-flex align-items-center justify-content-center">
//                           <li className="d-flex align-items-center">
//                             <img
//                               src="/assets/img/icon/c-meta-01.png"
//                               alt="meta-icon"
//                             />
//                             <i>{item.total_class} Classes</i>
//                           </li>
//                           <li className="d-flex align-items-center">
//                             <img
//                               src="/assets/img/icon/c-meta-02.png"
//                               alt="meta-icon"
//                             />
//                             <i>{item.total_st}+ Students</i>
//                           </li>
//                         </ul>
//                       </div>
//                       <div className="tp-instructor__social">
//                         <ul>
//                           <li>
//                             <a href="#">
//                               <i className="fa-brands fa-facebook-f"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#">
//                               <i className="fa-brands fa-twitter"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#">
//                               <i className="fa-brands fa-instagram"></i>
//                             </a>
//                           </li>
//                           <li>
//                             <a href="#">
//                               <i className="fa-brands fa-youtube"></i>
//                             </a>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
            
//           </div>
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="instructor-btn text-center mt-20">
//                 <Link className="tp-btn" href="/instructor">
//                   All Instructor
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default InstructorArea;


import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Link from 'next/link';
import instructor_info_data from "@/src/data/instructor-data";

const StyledSection = styled.section`
  padding-bottom: 110px;
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 65px;
`;

const SubTitle = styled.span`
  display: inline-block;
  padding: 5px 15px;
  background-color: #f0f2f5;
  border-radius: 4px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
`;

const InstructorCard = styled(Card)`
  text-align: center;
  margin-bottom: 40px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const InstructorImage = styled(Card.Img)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const InstructorInfo = styled.div`
  padding: 20px;
`;

const InstructorTitle = styled.span`
  color: #666;
`;

const InstructorName = styled.h4`
  margin: 10px 0 20px;
  font-weight: 600;
`;

const InstructorStats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const StatItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0 10px;
  
  img {
    margin-right: 5px;
  }
`;

const SocialLinks = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const SocialLink = styled.li`
  margin: 0 5px;
  
  a {
    display: inline-block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-color: #f0f2f5;
    border-radius: 50%;
    color: #333;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #007bff;
      color: #fff;
    }
  }
`;

const ViewAllButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const InstructorArea = () => {
  return (
    <StyledSection>
      <Container>
        <Row>
          <Col lg={12}>
            <SectionTitle>
              <SubTitle>Instructor</SubTitle>
              <Title>Our Expert Instructors</Title>
            </SectionTitle>
          </Col>
        </Row>
        <Row>
          {instructor_info_data.map((item, i) => (
            <Col key={i} lg={4} md={6} sm={12}>
              <InstructorCard>
                <InstructorImage variant="top" src={item.img} alt={item.name} />
                <InstructorInfo>
                  <InstructorTitle>{item.title}</InstructorTitle>
                  <InstructorName>
                    <Link href="/instructor-profile">{item.name}</Link>
                  </InstructorName>
                  <InstructorStats>
                    <StatItem>
                      <img src="/assets/img/icon/c-meta-01.png" alt="class icon" />
                      <span>{item.total_class} Classes</span>
                    </StatItem>
                    <StatItem>
                      <img src="/assets/img/icon/c-meta-02.png" alt="student icon" />
                      <span>{item.total_st}+ Students</span>
                    </StatItem>
                  </InstructorStats>
                  <SocialLinks>
                    <SocialLink><a href="#"><i className="fa-brands fa-facebook-f"></i></a></SocialLink>
                    <SocialLink><a href="#"><i className="fa-brands fa-twitter"></i></a></SocialLink>
                    <SocialLink><a href="#"><i className="fa-brands fa-instagram"></i></a></SocialLink>
                    <SocialLink><a href="#"><i className="fa-brands fa-youtube"></i></a></SocialLink>
                  </SocialLinks>
                </InstructorInfo>
              </InstructorCard>
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={12} className="text-center mt-4">
            <ViewAllButton href="/instructor">All Instructors</ViewAllButton>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};

export default InstructorArea;