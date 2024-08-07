import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import { dummyBannerImage } from "public/dummyBannerImage.png";

const StyledSection = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
 width:100%
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
`;

const CourseCard = styled(Card)`
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CourseCategory = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;

const CourseTitle = styled(Card.Title)`
  font-size: 1.2rem;
  margin-top: 10px;
`;

const CourseMetaItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 0.9rem;
  color: #6c757d;

  img {
    width: 20px;
    margin-right: 5px;
  }
`;

const CoursePrice = styled.h5`
  font-size: 1.1rem;
  color: #28a745;
`;

const BrowseButton = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CourseArea = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    publicCourseList();
  }, []);

  const publicCourseList = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/all-courses"
      );
      if (response.data && response.data.data) {
        setCourses(response.data.data);
      } else {
        toast.error("Unexpected API response structure.");
      }
    } catch (error) {
      toast.error("Error fetching course data.");
    }
  };

  return (
    <>
      <Toaster />
      <StyledSection>
        <Container>
          <SectionTitle>Explore Popular Coursesssss</SectionTitle>
          <Row>
            {courses.length > 0 ? (
              courses.slice(0, 6).map((item, i) => (
                <Col key={i} xl={4} lg={6} md={6}>
                  <CourseCard>
                  <Link
                          href={{
                            pathname: `/course-details/${item.id}`,
                            query: {
                              trainer_id: item.trainer_id,
                              course_banner_image: item.course_banner_image,
                            },
                          }}
                          as={`/course-details/${item.id}`}
                        >
                      <ImageWrapper>
                        <CourseImage
                          src={
                            item.course_banner_image
                              ? `https://api.novajobs.us${item.course_banner_image}`
                              : "/dummyBannerImage.png"
                          }
                          alt="course-thumb"
                        />
                      </ImageWrapper>
                    </Link>
                    <Card.Body>
                      <CourseCategory>
                        {item.category || "Category"}
                      </CourseCategory>
                      <CourseTitle>
                        <Link
                          href={{
                            pathname: `/course-details/${item.id}`,
                            query: {
                              trainer_id: item.trainer_id,
                              course_banner_image: item.course_banner_image,
                            },
                          }}
                          as={`/course-details/${item.id}`}
                        >
                          {item.course_title || "Course Title"}
                        </Link>
                      </CourseTitle>
                      <ul className="d-flex align-items-center">
                        <CourseMetaItem>
                          <img
                            src="/assets/img/icon/c-meta-01.png"
                            alt="meta-icon"
                          />
                          <span>{item.enrolled_student_count} students</span>
                        </CourseMetaItem>
                        <CourseMetaItem>
                          <img
                            src="/assets/img/icon/c-meta-02.png"
                            alt="meta-icon"
                          />
                          <span>{item.time_spent_on_course || "N/A"}</span>
                        </CourseMetaItem>
                      </ul>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div className="d-flex align-items-center">
                          <span>4.7</span>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-ss-star"></i>
                          <i className="fi fi-rs-star"></i>
                          <p>(125)</p>
                        </div>
                        <CoursePrice>
                          ${item.course_price || "0.00"}
                        </CoursePrice>
                      </div>
                    </Card.Body>
                  </CourseCard>
                </Col>
              ))
            ) : (
              <p>No courses available.</p>
            )}
          </Row>
          <Row className="text-center mt-5">
            <Col lg={12}>
              <BrowseButton href="/">
                Browse All Courses
              </BrowseButton>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  );
};

export default CourseArea;
