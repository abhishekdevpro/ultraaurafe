// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { toast, Toaster } from "react-hot-toast";
// import styled from "styled-components";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { dummyBannerImage } from "public/dummyBannerImage.png";

// const StyledSection = styled.section`
//   padding: 80px 0;
//   background-color: #f8f9fa;
// `;

// const SectionTitle = styled.h2`
//  width:100%
//   font-size: 2.5rem;
//   color: #333;
//   text-align: center;
//   margin-bottom: 40px;
// `;

// const CourseCard = styled(Card)`
//   transition: all 0.3s ease;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   }
// `;

// const ImageWrapper = styled.div`
//   height: 200px;
//   overflow: hidden;
//   border-radius: 10px;
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const CourseCategory = styled.span`
//   font-size: 0.9rem;
//   color: #6c757d;
// `;

// const CourseTitle = styled(Card.Title)`
//   font-size: 1.2rem;
//   margin-top: 10px;
// `;

// const CourseMetaItem = styled.li`
//   display: flex;
//   align-items: center;
//   margin-right: 15px;
//   font-size: 0.9rem;
//   color: #6c757d;

//   img {
//     width: 20px;
//     margin-right: 5px;
//   }
// `;

// const CoursePrice = styled.h5`
//   font-size: 1.1rem;
//   color: #28a745;
// `;

// const BrowseButton = styled(Link)`
//   display: inline-block;
//   padding: 10px 20px;
//   background-color: black;
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const CourseArea = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     publicCourseList();
//   }, []);

//   const publicCourseList = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/trainers/all-courses"
//       );
//       if (response.data && response.data.data) {
//         setCourses(response.data.data);
//       } else {
//         toast.error("Unexpected API response structure.");
//       }
//     } catch (error) {
//       toast.error("Error fetching course data.");
//     }
//   };

//   return (
//     <>
//       <Toaster />
//       <StyledSection>
//         <Container>
//           <SectionTitle>Explore Popular Coursesssss</SectionTitle>
//           <Row>
//             {courses.length > 0 ? (
//               courses.slice(0, 6).map((item, i) => (
//                 <Col key={i} xl={4} lg={6} md={6}>
//                   <CourseCard>
//                   <Link
//                           href={{
//                             pathname: `/course-details/${item.id}`,
//                             query: {
//                               trainer_id: item.trainer_id,
//                               course_banner_image: item.course_banner_image,
//                             },
//                           }}
//                           as={`/course-details/${item.id}`}
//                         >
//                       <ImageWrapper>
//                         <CourseImage
//                           src={
//                             item.course_banner_image
//                               ? `https://api.novajobs.us${item.course_banner_image}`
//                               : "/dummyBannerImage.png"
//                           }
//                           alt="course-thumb"
//                         />
//                       </ImageWrapper>
//                     </Link>
//                     <Card.Body>
//                       <CourseCategory>
//                         {item.category || "Category"}
//                       </CourseCategory>
//                       <CourseTitle>
//                         <Link
//                           href={{
//                             pathname: `/course-details/${item.id}`,
//                             query: {
//                               trainer_id: item.trainer_id,
//                               course_banner_image: item.course_banner_image,
//                             },
//                           }}
//                           as={`/course-details/${item.id}`}
//                         >
//                           {item.course_title || "Course Title"}
//                         </Link>
//                       </CourseTitle>
//                       <ul className="d-flex align-items-center">
//                         <CourseMetaItem>
//                           <img
//                             src="/assets/img/icon/c-meta-01.png"
//                             alt="meta-icon"
//                           />
//                           <span>{item.enrolled_student_count} students</span>
//                         </CourseMetaItem>
//                         <CourseMetaItem>
//                           <img
//                             src="/assets/img/icon/c-meta-02.png"
//                             alt="meta-icon"
//                           />
//                           <span>{item.time_spent_on_course || "N/A"}</span>
//                         </CourseMetaItem>
//                       </ul>
//                       <div className="d-flex align-items-center justify-content-between mt-3">
//                         <div className="d-flex align-items-center">
//                           <span>4.7</span>
//                           <i className="fi fi-ss-star"></i>
//                           <i className="fi fi-ss-star"></i>
//                           <i className="fi fi-ss-star"></i>
//                           <i className="fi fi-ss-star"></i>
//                           <i className="fi fi-rs-star"></i>
//                           <p>(125)</p>
//                         </div>
//                         <CoursePrice>
//                           ${item.course_price || "0.00"}
//                         </CoursePrice>
//                       </div>
//                     </Card.Body>
//                   </CourseCard>
//                 </Col>
//               ))
//             ) : (
//               <p>No courses available.</p>
//             )}
//           </Row>
//           <Row className="text-center mt-5">
//             <Col lg={12}>
//               <BrowseButton href="/">
//                 Browse All Courses
//               </BrowseButton>
//             </Col>
//           </Row>
//         </Container>
//       </StyledSection>
//     </>
//   );
// };

// export default CourseArea;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { toast, Toaster } from "react-hot-toast";
// import styled from "styled-components";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import dummyBannerImage from "public/dummyBannerImage.png";

// const StyledSection = styled.section`
//   padding: 60px 0;
//   background-color: #f9f9f9;
// `;

// const SectionTitle = styled.h2`
//   font-size: 2.5rem;
//   color: #333;
//   text-align: center;
//   margin-bottom: 40px;
//   font-weight: bold;
// `;

// const CourseCard = styled(Card)`
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   background-color: #fff;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
//   }
// `;

// const ImageWrapper = styled.div`
//   height: 200px;
//   overflow: hidden;
//   position: relative;
// `;

// const FavoriteButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background: #fff;
//   border: none;
//   padding: 5px;
//   border-radius: 50%;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   z-index: 10;
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   transition: transform 0.3s ease;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

// const CourseCategory = styled.div`
//   margin-top: 15px;
//   display: flex;
//   gap: 10px;
// `;

// const Badge = styled.span`
//   background-color: #ffe7e7;
//   color: #ff5a5a;
//   padding: 5px 10px;
//   font-size: 0.9rem;
//   border-radius: 20px;
// `;

// const CourseTitle = styled(Card.Title)`
//   font-size: 1.2rem;
//   color: #222;
//   margin-top: 15px;
//   font-weight: bold;
//   min-height: 50px;
// `;

// const CourseMeta = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 10px;
//   font-size: 0.9rem;
//   color: #6c757d;
// `;

// const PriceWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 20px;
// `;

// const CoursePrice = styled.h5`
//   font-size: 1.5rem;
//   color: #28a745;
//   font-weight: bold;
//   margin: 0;
// `;
// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 1rem;
//   color: #ffffff;
//   background-color: #ff6b6b; /* Theme color */
//   border: none;
//   border-radius: 20px; /* Rounded corners */
//   padding: 0.5rem 1rem; /* Padding */
//   cursor: pointer;
//   transition: background-color 0.3s ease, color 0.3s ease;
//   margin-auto; /* Space between username and button */

//   &:hover {
//     background-color: #e05252; /* Darker shade on hover */
//     color: #fff;
//   }

//   i {
//     margin-right: 0.5rem; /* Space between icon and text */
//   }
// `;


// const CourseArea = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     publicCourseList();
//   }, []);

//   const publicCourseList = async () => {
//     try {
//       const response = await axios.get(
//         "https://api.novajobs.us/api/trainers/all-courses"
//       );
//       if (response.data && response.data.data) {
//         setCourses(response.data.data);
//       } else {
//         toast.error("Unexpected API response structure.");
//       }
//     } catch (error) {
//       toast.error("Error fetching course data.");
//     }
//   };

//   return (
//     <>
//       <Toaster />
//       <StyledSection>
//         <Container>
//           <SectionTitle>Explore Popular Courses</SectionTitle>
//           <Row>
//             {courses.length > 0 ? (
//               courses.slice(0, 6).map((item, i) => (
//                 <Col key={i} xl={4} lg={6} md={6} sm={12} className="mb-4">
//                   <CourseCard>
//                     <ImageWrapper>
//                       <FavoriteButton>
//                         <i className="fi fi-rr-heart"></i>
//                       </FavoriteButton>
//                       <Link
//                         href={{
//                           pathname: `/course-details/${item.id}`,
//                           query: {
//                             trainer_id: item.trainer_id,
//                             course_banner_image: item.course_banner_image,
//                           },
//                         }}
//                         as={`/course-details/${item.id}`}
//                       >
//                         <CourseImage
//                           src={
//                             item.course_banner_image
//                               ? `https://api.novajobs.us${item.course_banner_image}`
//                               : dummyBannerImage.src
//                           }
//                           alt="course-thumb"
//                         />
//                       </Link>
//                     </ImageWrapper>
//                     <Card.Body>
//                       <CourseTitle>
//                         <Link
//                           href={{
//                             pathname: `/course-details/${item.id}`,
//                             query: {
//                               trainer_id: item.trainer_id,
//                               course_banner_image: item.course_banner_image,
//                             },
//                           }}
//                           as={`/course-details/${item.id}`}
//                         >
//                           {item.course_title || "Course Title"}
//                         </Link>
//                       </CourseTitle>
//                       <CourseMeta>
//                         <div>
//                           <span>{item.time_spent_on_course} </span>
//                           <span> | </span>
//                           <span>{item.enrolled_student_count} Students</span>
//                         </div>
//                         <div>
//                           <span>⭐ {item.rating || "4.7"}</span>
//                         </div>
//                       </CourseMeta>
//                       <CourseCategory>
//                         <Badge>{item.category}</Badge>
//                         <Badge>{item.course_language}</Badge>
//                         <Badge>{item.level}</Badge>
//                       </CourseCategory>
//                       <PriceWrapper>
//                         <CoursePrice>
//                           ${item.course_price || "0.00"}
//                         </CoursePrice>
//                       </PriceWrapper>
//                     </Card.Body>
//                   </CourseCard>
//                 </Col>
//               ))
//             ) : (
//               <p>No courses available.</p>
//             )}
//           </Row>
//         </Container>
//       </StyledSection>
//      <Link href={'/course-grid'}>
//      <Button>
//          Browse Courses
//       </Button>
//      </Link>
//     </>
//   );
// };

// export default CourseArea;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";
import styled from "styled-components";
import { Container, Row, Col, Card } from "react-bootstrap";
import dummyBannerImage from "public/dummyBannerImage.png";

const StyledSection = styled.section`
  padding: 60px 0;
  background-color: #f9f9f9;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
  font-weight: bold;
`;

const CourseCard = styled(Card)`
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ImageWrapper = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #fff;
  border: none;
  padding: 5px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 10;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CourseCategory = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const Badge = styled.span`
  background-color: #ffe7e7;
  color: #ff5a5a;
  padding: 5px 10px;
  font-size: 0.9rem;
  border-radius: 20px;
`;

const CourseTitle = styled(Card.Title)`
  font-size: 1.2rem;
  color: #222;
  margin-top: 15px;
  font-weight: bold;
  min-height: 50px;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #6c757d;
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const CoursePrice = styled.h5`
  font-size: 1.5rem;
  color: #28a745;
  font-weight: bold;
  margin: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #ffffff;
  background-color: #ff6b6b; /* Theme color */
  border: none;
  border-radius: 20px; /* Rounded corners */
  padding: 0.5rem 1.5rem; /* Padding */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #e05252; /* Darker shade on hover */
    color: #fff;
  }

  i {
    margin-right: 0.5rem; /* Space between icon and text */
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
          <SectionTitle>Explore Popular Courses</SectionTitle>
          <Row>
            {courses.length > 0 ? (
              courses.slice(0, 6).map((item, i) => (
                <Col key={i} xl={4} lg={6} md={6} sm={12} className="mb-4">
                  <CourseCard>
                    <ImageWrapper>
                      <FavoriteButton>
                        <i className="fi fi-rr-heart"></i>
                      </FavoriteButton>
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
                        <CourseImage
                          src={
                            item.course_banner_image
                              ? `https://api.novajobs.us${item.course_banner_image}`
                              : dummyBannerImage.src
                          }
                          alt="course-thumb"
                        />
                      </Link>
                    </ImageWrapper>
                    <Card.Body>
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
                      <CourseMeta>
                        <div>
                          <span>{item.time_spent_on_course} </span>
                          <span> | </span>
                          <span>{item.enrolled_student_count} Students</span>
                        </div>
                        <div>
                          <span>⭐ {item.rating || "4.7"}</span>
                        </div>
                      </CourseMeta>
                      <CourseCategory>
                        <Badge>{item.category}</Badge>
                        <Badge>{item.course_language}</Badge>
                        <Badge>{item.level}</Badge>
                      </CourseCategory>
                      <PriceWrapper>
                        <CoursePrice>
                          ${item.course_price || "0.00"}
                        </CoursePrice>
                      </PriceWrapper>
                    </Card.Body>
                  </CourseCard>
                </Col>
              ))
            ) : (
              <p>No courses available.</p>
            )}
          </Row>
          <ButtonWrapper>
            <Link href={"/course-grid"}>
              <Button>
                Browse Courses
              </Button>
            </Link>
          </ButtonWrapper>
        </Container>
      </StyledSection>
    </>
  );
};

export default CourseArea;
