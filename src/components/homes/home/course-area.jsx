// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Link from "next/link";
// // import { toast, Toaster } from "react-hot-toast";

// // const CourseArea = () => {
// //   const [courses, setCourses] = useState([]);
// //   console.log(courses, "courses");
// //   useEffect(() => {
// //     publicCourseList();
// //   }, []);

// //   const publicCourseList = async () => {
// //     try {
// //       const token = localStorage.getItem('token'); // Get token from local storage
// //       const response = await axios.get(
// //         "https://api.novajobs.us/api/trainers/all-courses",
// //         {
// //           headers: {
// //             Authorization: `${token}` // Add token to headers
// //           }
// //         }
// //       );
// //       if (response.data && response.data.data) {
// //         setCourses(response.data.data);
// //       } else {
// //         toast.error("Unexpected API response structure.");
// //       }
// //     } catch (error) {
// //       toast.error("Error fetching course data.");
// //     }
// //   };
// //   console.log(courses,"courses")

// //   return (
// //     <>
// //       <Toaster />
// //       <section
// //         className="course-area pt-115 pb-110 wow fadeInUp"
// //         data-wow-duration=".8s"
// //         data-wow-delay=".4s"
// //       >
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-md-12">
// //               <div className="section-title mb-65">
// //                 <h2 className="tp-section-title mb-20 ">
// //                   Explore Popular Courses
// //                 </h2>
// //               </div>
// //             </div>
// //           </div>
// //           {/* <div className="row justify-content-center">
// //             {courses.length > 0 ? (
// //               courses.map((item) => (
// //                 <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
// //                   <div className="tpcourse mb-40">
// //                     <div className="tpcourse__thumb p-relative w-img fix">
// //                       {item.course_link ? (
// //                         <Link href={item.course_link}>
// //                           <img
// //                             src={item.course_banner_image}
// //                             alt="course-thumb"
// //                           />
// //                         </Link>
// //                       ) : (
// //                         <img
// //                           src={item.course_banner_image}
// //                           alt="course-thumb"
// //                         />
// //                       )}
// //                       <div className="tpcourse__tag">
// //                         {item.course_link ? (
// //                           <Link href={item.course_intro_video_url}>
// //                             <i className="fi fi-rr-heart"></i>
// //                           </Link>
// //                         ) : (
// //                           <i className="fi fi-rr-heart"></i>
// //                         )}
// //                       </div>
// //                     </div>
// //                     <div className="tpcourse__content">
// //                       <div className="tpcourse__avatar d-flex align-items-center mb-20">
// //                         <img src={item.icon} alt="course-avatar" />
// //                         <h4 className="tpcourse__title">
// //                           {item.course_link ? (
// //                             <Link href={item.course_link}>
// //                               {item.course_title}
// //                             </Link>
// //                           ) : (
// //                             item.course_title
// //                           )}
// //                         </h4>
// //                       </div>
// //                       <div className="tpcourse__meta pb-15 mb-20">
// //                         <ul className="d-flex align-items-center">
// //                           <li>
// //                             <img
// //                               src="/assets/img/icon/c-meta-01.png"
// //                               alt="meta-icon"
// //                             />
// //                             <span>{item.cls_text}</span>
// //                           </li>
// //                           <li>
// //                             <img
// //                               src="/assets/img/icon/c-meta-02.png"
// //                               alt="meta-icon"
// //                             />
// //                             <span>{item.st_text}</span>
// //                           </li>
// //                           <li>
// //                             <img
// //                               src="/assets/img/icon/c-meta-03.png"
// //                               alt="meta-icon"
// //                             />
// //                             <span>{item.start_text}</span>
// //                           </li>
// //                         </ul>
// //                       </div>
// //                       <div className="tpcourse__category d-flex align-items-center justify-content-between">
// //                         <ul className="tpcourse__price-list d-flex align-items-center">
// //                           <li>
// //                             {item.course_link ? (
// //                               <Link href={item.course_link}>
// //                                 {item.course_title}
// //                               </Link>
// //                             ) : (
// //                               item.course_title
// //                             )}
// //                           </li>
// //                           <li>
// //                             {item.course_link ? (
// //                               <Link href={item.course_link}>
// //                                 {item.course_name}
// //                               </Link>
// //                             ) : (
// //                               item.course_name
// //                             )}
// //                           </li>
// //                         </ul>
// //                         <h5 className="tpcourse__course-price">
// //                           ${item.course_price}
// //                         </h5>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))
// //             ) : (
// //               <p>No courses available.</p>
// //             )}
// //           </div> */}
// //           {/* <div className="row mb-20">
// //             {courses.slice(0, 6).map((item, i) => (
// //               <div key={i} className="col-xl-4 col-lg-6 col-md-6">
// //                 <div
// //                   className="tpcourse mb-40 wow fadeInUp"
// //                   data-wow-duration=".8s"
// //                   data-wow-delay=".2s"
// //                 >
// //                     <div className="tpcourse__thumb p-relative w-img fix">
// //                     <Link href="/course-details">
// //                       <img src={item.course_banner_image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASwwqtlRflCsglbBsY5Nb0oo_w8PDq9EgIg&s"} alt="course-thumb" />
// //                     </Link>
// //                     <div className="tpcourse__tag">
// //                       <Link href="/course-details">
// //                         <i className="fi fi-rr-heart"></i>
// //                       </Link>
// //                     </div>
// //                     <div className="tpcourse__img-icon">
// //                       <img src={item.icon} alt="course-avata" />
// //                     </div>
// //                   </div>
// //                   <div className="tpcourse__content-2">
// //                     <div className="tpcourse__category mb-10">
// //                       <ul className="tpcourse__price-list d-flex align-items-center">
// //                         <li>
// //                           <Link
// //                             className={item.ct_color}
// //                             href="/course-details"
// //                           >
// //                             {item.course_title}
// //                           </Link>
// //                         </li>
// //                         <li>
// //                           <Link
// //                             className={item.cn_color}
// //                             href="/course-details"
// //                           >
// //                             {item.course_name}
// //                           </Link>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                     <div className="tpcourse__ava-title mb-15">
// //                       <h4 className="tpcourse__title tp-cours-title-color">
// //                         <Link href="/course-details">{item.title}</Link>
// //                       </h4>
// //                     </div>
// //                     <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
// //                       <ul className="d-flex align-items-center">
// //                         <li>
// //                           <img
// //                             src="/assets/img/icon/c-meta-01.png"
// //                             alt="meta-icon"
// //                           />{" "}
// //                           <span>{item.cls_text}</span>
// //                         </li>
// //                         <li>
// //                           <img
// //                             src="/assets/img/icon/c-meta-02.png"
// //                             alt="meta-icon"
// //                           />{" "}
// //                           <span>{item.st_text}</span>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                     <div className="tpcourse__rating d-flex align-items-center justify-content-between">
// //                       <div className="tpcourse__rating-icon">
// //                         <span>4.7</span>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-rs-star"></i>
// //                         <p>(125)</p>
// //                       </div>
// //                       <div className="tpcourse__pricing">
// //                         <h5 className="price-title">$0.00</h5>
// //                       </div>
// //                     </div>
// //                   </div>
                  
// //                 </div>
// //               </div>
// //             ))}
// //           </div> */}
// //           <div className="row mb-20">
// //             {courses.slice(0, 6).map((item, i) => (
// //               <div key={i} className="col-xl-4 col-lg-6 col-md-6">
// //                 <div
// //                   className="tpcourse mb-40 wow fadeInUp"
// //                   data-wow-duration=".8s"
// //                   data-wow-delay=".2s"
// //                 >
// //                   <div className="tpcourse__thumb p-relative w-img fix">
// //                     <Link href={`/course-details`}>
// //                       {/* <img
// //               src={item.course_banner_image || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASwwqtlRflCsglbBsY5Nb0oo_w8PDq9EgIg&s"}
// //               alt="course-thumb"
// //             /> */}

// //                       {/* <img
// //                         src={
// //                           item.course_banner_image !== undefined
// //                             ? `https://api.novajobs.us/${item.course_banner_image}`
// //                             : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRASwwqtlRflCsglbBsY5Nb0oo_w8PDq9EgIg&s"
// //                         } */}
// //                       <img
// //                         src={
// //                           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s"
// //                         }
// //                         alt="course-thumb"
// //                       />
// //                     </Link>
// //                     <div className="tpcourse__tag">
// //                       <Link href={`/course-details`}>
// //                         <i className="fi fi-rr-heart"></i>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                   <div className="tpcourse__content-2">
// //                     <div className="tpcourse__category mb-10">
// //                       <ul className="tpcourse__price-list d-flex align-items-center">
// //                         {/* <li>
// //                 <Link className={item.ct_color || "default-color"} href={`/course-details/${item.id}`}>
// //                   {item.course_title || "Course Title"}
// //                 </Link>
// //               </li> */}
// //                         <li>
// //                           <Link
// //                             className={item.cn_color || "default-color"}
// //                             href={`/course-details/${item.id}`}
// //                           >
// //                             {item.category || "Category"}
// //                           </Link>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                     <div className="tpcourse__ava-title mb-15">
// //                       <h4 className="tpcourse__title tp-cours-title-color">
// //                         <Link href={`/course-details/${item.id}`}>
// //                           {item.course_title || "Course Title"}
// //                         </Link>
// //                       </h4>
// //                     </div>
// //                     <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
// //                       <ul className="d-flex align-items-center">
// //                         <li>
// //                           <img
// //                             src="/assets/img/icon/c-meta-01.png"
// //                             alt="meta-icon"
// //                           />{" "}
// //                           <span>{item.enrolled_student_count} students</span>
// //                         </li>
// //                         <li>
// //                           <img
// //                             src="/assets/img/icon/c-meta-02.png"
// //                             alt="meta-icon"
// //                           />{" "}
// //                           <span>{item.time_spent_on_course || "N/A"}</span>
// //                         </li>
// //                       </ul>
// //                     </div>
// //                     <div className="tpcourse__rating d-flex align-items-center justify-content-between">
// //                       <div className="tpcourse__rating-icon">
// //                         <span>4.7</span>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-ss-star"></i>
// //                         <i className="fi fi-rs-star"></i>
// //                         <p>(125)</p>
// //                       </div>
// //                       <div className="tpcourse__pricing">
// //                         <h5 className="price-title">
// //                           ${item.course_price || "0.00"}
// //                         </h5>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="row text-center">
// //             <div className="col-lg-12">
// //               <div className="course-btn mt-20">
// //                 <Link className="tp-btn" href="/course-grid">
// //                   Browse All Courses
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default CourseArea;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { toast, Toaster } from "react-hot-toast";
// import styled from "styled-components";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const StyledSection = styled.section`
//   padding: 80px 0;
//   background-color: #f8f9fa;
// `;

// const SectionTitle = styled.h2`
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

// const CourseImage = styled(Card.Img)`
//   height: 200px;
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
//   background-color: #007bff;
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
//         "https://api.novajobs.us/api/trainers/all-courses",
       
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
//     <StyledSection>
//       <Toaster />
//       <Container>
//         <SectionTitle>Explore Popular Courses</SectionTitle>
//         <Row>
//           {courses.slice(0, 6).map((item, i) => (
//             <Col key={i} lg={4} md={6} className="mb-4">
//               <CourseCard>
//                 <CourseImage 
//                   variant="top" 
//                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwRConBYl2t6L8QMOAQqa5FDmPB_bg7EnGA&s" 
//                   alt="course-thumb"
//                 />
//                 <Card.Body>
//                   <CourseCategory>{item.category || "Category"}</CourseCategory>
//                   <CourseTitle>{item.course_title || "Course Title"}</CourseTitle>
//                   <ul className="list-unstyled d-flex mt-3">
//                     <CourseMetaItem>
//                       <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" />
//                       <span>{item.enrolled_student_count} students</span>
//                     </CourseMetaItem>
//                     <CourseMetaItem>
//                       <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />
//                       <span>{item.time_spent_on_course || "N/A"}</span>
//                     </CourseMetaItem>
//                   </ul>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <div className="d-flex align-items-center">
//                       <span className="mr-2">4.7</span>
//                       {[...Array(5)].map((_, index) => (
//                         <i key={index} className="fi fi-ss-star text-warning"></i>
//                       ))}
//                       <span className="ml-2">(125)</span>
//                     </div>
//                     <CoursePrice>${item.course_price || "0.00"}</CoursePrice>
//                   </div>
//                 </Card.Body>
//               </CourseCard>
//             </Col>
//           ))}
//         </Row>
//         <div className="text-center mt-5">
//           <BrowseButton href="/course-grid">
//             Browse All Courses
//           </BrowseButton>
//         </div>
//       </Container>
//     </StyledSection>
//   );
// };

// export default CourseArea;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { toast, Toaster } from "react-hot-toast";
// import styled from "styled-components";
// import { Container, Row, Col, Card } from "react-bootstrap";

// const StyledSection = styled.section`
//   padding: 80px 0;
//   background-color: #f8f9fa;
// `;

// const SectionTitle = styled.h2`
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

// const CourseImage = styled(Card.Img)`
//   height: 200px;
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
//           <SectionTitle>Explore Popular Courses</SectionTitle>
//           <Row>
//             {courses.length > 0 ? (
//               courses.slice(0, 6).map((item, i) => (
//                 <Col key={i} xl={4} lg={6} md={6}>
//                   <CourseCard>
//                     <Link href={`/course-details/${item.id}`}>
//                       <CourseImage
//                         src={`https://api.novajobs.us${item.course_banner_image}`}
//                         alt="course-thumb"
//                       />
//                     </Link>
//                     <Card.Body>
//                       <CourseCategory>
//                         {item.category || "Category"}
//                       </CourseCategory>
//                       <CourseTitle>
//                   <Link href={`/course-details/${item.id}`}>
//                     {item.course_title || "Course Title"}
//                   </Link>
//                 </CourseTitle>
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
//               <BrowseButton href="/course-grid">Browse All Courses</BrowseButton>
//             </Col>
//           </Row>
//         </Container>
//       </StyledSection>
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
          <SectionTitle>Explore Popular Courses</SectionTitle>
          <Row>
            {courses.length > 0 ? (
              courses.slice(0, 6).map((item, i) => (
                <Col key={i} xl={4} lg={6} md={6}>
                  <CourseCard>
                    <Link href={`/course-details/${item.id}`}>
                      <ImageWrapper>
                        <CourseImage
                          src={`https://api.novajobs.us${item.course_banner_image}`}
                          alt="course-thumb"
                        />
                      </ImageWrapper>
                    </Link>
                    <Card.Body>
                      <CourseCategory>
                        {item.category || "Category"}
                      </CourseCategory>
                      <CourseTitle>
                        <Link href={`/course-details/${item.id}`}>
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
              <BrowseButton href="/course-grid">Browse All Courses</BrowseButton>
            </Col>
          </Row>
        </Container>
      </StyledSection>
    </>
  );
};

export default CourseArea;
