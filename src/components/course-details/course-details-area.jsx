// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import VideoPopup from '@/src/modals/video-popup';
// // import EditCourseDetailsModal from './EditCourseDetailsModal';
// // import { useRouter } from 'next/router';
// // import styled from 'styled-components';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import Link from 'next/link';
// // import Trainer from './Trainer';

// // // Styled Components
// // const SectionHeader = styled.div`
// //   cursor: pointer;
// //   padding: 15px;
// //   background-color: #f8f9fa;
// //   border: 1px solid #e9ecef;
// //   border-radius: 5px;
// //   margin-bottom: 10px;
// //   font-weight: bold;
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   transition: background-color 0.3s, color 0.3s;

// //   &:hover {
// //     color: #007bff;
// //     background-color: #e9ecef;
// //   }
// // `;

// // const SectionContent = styled.div`
// //   padding: 20px;
// //   background-color: #f1f3f5;
// //   border: 1px solid #dee2e6;
// //   border-radius: 5px;
// //   margin-bottom: 20px;
// // `;

// // const LectureItem = styled.li`
// //   display: flex;
// //   justify-content: space-between;
// //   align-items: center;
// //   padding: 10px 0;
// //   list-style: none;

// //   a {
// //     text-decoration: none;
// //     color: #495057;
// //     padding: 10px;
// //     border: 1px solid #e9ecef;
// //     border-radius: 5px;
// //     background-color: #ffffff;
// //     transition: background-color 0.3s, color 0.3s;

// //     &:hover {
// //       background-color: #e9ecef;
// //       color: #007bff;
// //     }
// //   }

// //   span {
// //     color: #6c757d;
// //     font-size: 0.9rem;
// //   }
// // `;

// // const CourseDetailsArea = ({ courseId, trainerId, courseBannerImage })=> {
// //   const [isVideoOpen, setIsVideoOpen] = useState(false);
// //   const [isEditOpen, setIsEditOpen] = useState(false);
// //   const [courseDetails, setCourseDetails] = useState(null);
// //   const [expandedSection, setExpandedSection] = useState(null);
// //   const [lessons, setLessons] = useState(null);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   // const router = useRouter();
// //   // const { id,trainer_id } = router.query;
// //   // console.log(id,trainer_id,"Deatils")

// //   useEffect(() => {
// //     const fetchCourseDetails = async () => {
// //       if (courseId) {
// //         try {
// //           setIsLoading(true);
// //           const response = await axios.get(
// //             `https://api.novajobs.us/api/trainers/course-details/${courseId}`
// //           );
// //           if (response.data && response.data.data && response.data.data.length > 0) {
// //             setCourseDetails(response.data);
// //           } else {
// //             setError('No course data found');
// //           }
// //         } catch (error) {
// //           console.log(error);
// //           setError('Failed to fetch course details');
// //         } finally {
// //           setIsLoading(false);
// //         }
// //       }
// //     };
// //     fetchCourseDetails();
// //     if (courseId) {
// //       localStorage.setItem('courseId', courseId);
// //     }
// //     if (trainerId) {
// //       localStorage.setItem('trainerId', trainerId);
// //     }
// //     if (courseBannerImage) {
// //       localStorage.setItem('courseBannerImage', courseBannerImage);
// //     }
// //   }, [courseId, trainerId, courseBannerImage]);
// //   console.log('CourseDetailsArea props:', { courseId, trainerId, courseBannerImage });
// //   const handleEditOpen = () => setIsEditOpen(true);
// //   const handleEditClose = () => setIsEditOpen(false);

// //   const handleSave = (updatedDetails) => {
// //     setCourseDetails(updatedDetails);
// //     setIsEditOpen(false);
// //   };

// //   const toggleSection = (sectionId) => {
// //     setExpandedSection(expandedSection === sectionId ? null : sectionId);
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="container mt-5">
// //         <div className="text-center">
// //           <div className="spinner-border" role="status">
// //             <span className="visually-hidden">Loading...</span>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (error || !courseDetails) {
// //     return (
// //       <div className="container mt-5">
// //         <div className="alert alert-warning" role="alert">
// //           <h4 className="alert-heading">Course Not Found</h4>
// //           <p>{error || "We couldn't find the course you're looking for."}</p>
// //           <hr />
// //           <Link href="/" className="btn btn-primary mt-3">
// //             Back to Courses
// //           </Link>
// //         </div>
// //       </div>
// //     );
// //   }
// //   console.log(courseDetails.photo)

// //   return (
// //     <>
// //       <section className="c-details-area pt-120 pb-50 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-8 col-md-12">
// //               <div className="c-details-wrapper mr-25">
// //                 <div className="c-details-thumb p-relative mb-40">
// //                   <img
// //                     src={`https://api.novajobs.us${courseBannerImage}` || "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg"}
// //                     alt="details-bg"
// //                     className="img-fluid rounded"
// //                   />
// //                   <div className="c-details-ava d-md-flex align-items-center mt-3">
// //                     <img
// //                       src="/assets/img/course/c-details-ava-01.png"
// //                       alt="avatar"
// //                       className="img-fluid rounded-circle"
// //                       style={{ width: '50px', marginRight: '10px' }}
// //                     />
// //                     <span>By <a href="#">{courseDetails.instructor || "Instructor"}</a></span>
// //                   </div>
// //                 </div>
// //                 <div className="course-details-content mb-45">
// //                   {courseDetails.data.map((section) => (
// //                     <div key={section.id}>
// //                       <SectionHeader onClick={() => toggleSection(section.id)}>
// //                         <span>{section.section_name}</span>
// //                         <span>{section.lectures.length} lectures • {section.totalDuration}</span>
// //                       </SectionHeader>
// //                       {expandedSection === section.id && (
// //                         <SectionContent>
// //                           <p>{section.section_objective}</p>
// //                           <ul className="list-unstyled">
// //                             {section.lectures.map((lecture) => (
// //                               <LectureItem key={lecture.id}>
// //                                 <Link
// //                                   href={{
// //                                     pathname: `/lecture-details/${lecture.id}`,
// //                                     query: {
// //                                       title: lecture.lecture_name,
// //                                       description: lecture.description,
// //                                       duration: lecture.duration

// //                                     }
// //                                   }}
// //                                   as={`/lecture-details/${lecture.id}`}
// //                                 >
// //                                   {lecture.lecture_name}
// //                                 </Link>
// //                                 <span>{lecture.duration}</span>
// //                               </LectureItem>
// //                             ))}
// //                           </ul>
// //                           <p><strong>Created At:</strong> {new Date(section.created_at).toLocaleString()}</p>
// //                           <p><strong>Updated At:</strong> {new Date(section.updated_at).toLocaleString()}</p>
// //                         </SectionContent>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //               <Trainer trainerID={trainerId}/>
// //             </div>
// //             <div className="col-lg-4 col-md-12">
// //               <div className="c-details-sidebar">
// //                 <div className="c-video-thumb p-relative mb-25">
// //                   <img src="/assets/img/bg/c-details-video-bg.jpg" alt="video-bg" className="img-fluid rounded" />
// //                   <div className="c-video-icon">
// //                     <a className="popup-video" onClick={() => setIsVideoOpen(true)}>
// //                       <i className="fi fi-sr-play"></i>
// //                     </a>
// //                   </div>
// //                 </div>
// //                 <div className="course-details-widget">
// //                   <div className="cd-video-price">
// //                     <h3 className="pricing-video text-center mb-15">$0.00</h3>
// //                     <div className="cd-pricing-btn text-center mb-30">
// //                       <Link className="tp-vp-btn btn btn-outline-primary mr-2" href="/course-details">Add To Cart</Link>
// //                       <Link className="tp-vp-btn-green btn btn-primary" href={'/sign-in'}>Enroll Now</Link>
// //                     </div>
// //                   </div>
// //                   {/* <div className="cd-information mb-35">
// //                     <ul className="list-unstyled">
// //                       <li className="d-flex justify-content-between"><i className="fa-light fa-calendars"></i>
// //                       <label>Lectures</label> <span>{lessons}</span></li>
// //                       <li className="d-flex justify-content-between"><i className="fi fi-rr-chart-pie-alt"></i> <label>Quizzes</label> <span>6</span></li>
// //                       <li className="d-flex justify-content-between"><i className="fi fi-rr-user"></i> <label>Students</label> <span>105</span></li>
// //                       <li className="d-flex justify-content-between"><i className="fa-light fa-clock-desk"></i> <label>Duration</label> <span>16 Hours</span></li>
// //                       <li className="d-flex justify-content-between"><i className="fi fi-sr-stats"></i> <label>Skill Level</label> <span>Beginner</span></li>
// //                       <li className="d-flex justify-content-between"><i className="fi fi-rr-comments"></i> <label>Language</label> <span>English</span></li>
// //                       <li className="d-flex justify-content-between"><i className="fi fi-rs-diploma"></i> <label>Certificate</label> <span>Yes</span></li>
// //                     </ul>
// //                   </div> */}
// //                   <div className="cd-information mb-4 p-4 bg-white shadow rounded">
// //   <ul className="list-unstyled">
// //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
// //       <div className="d-flex align-items-center">
// //         <i className="fa-light fa-calendars text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Lectures</label>
// //       </div>
// //       <span className="text-muted">{lessons}</span>
// //     </li>
// //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
// //       <div className="d-flex align-items-center">
// //         <i className="fi fi-rr-chart-pie-alt text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Quizzes</label>
// //       </div>
// //       <span className="text-muted">6</span>
// //     </li>
// //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
// //       <div className="d-flex align-items-center">
// //         <i className="fi fi-rr-user text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Students</label>
// //       </div>
// //       <span className="text-muted">105</span>
// //     </li>
// //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
// //       <div className="d-flex align-items-center">
// //         <i className="fa-light fa-clock-desk text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Duration</label>
// //       </div>
// //       <span className="text-muted">16 Hours</span>
// //     </li>
// //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
// //       <div className="d-flex align-items-center">
// //         <i className="fi fi-sr-stats text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Skill Level</label>
// //       </div>
// //       <span className="text-muted">Beginner</span>
// //     </li>
// //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
// //       <div className="d-flex align-items-center">
// //         <i className="fi fi-rr-comments text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Language</label>
// //       </div>
// //       <span className="text-muted">English</span>
// //     </li>
// //     <li className="d-flex justify-content-between align-items-center py-2">
// //       <div className="d-flex align-items-center">
// //         <i className="fi fi-rs-diploma text-primary mr-2"></i>
// //         <label className="mb-0 font-weight-bold">Certificate</label>
// //       </div>
// //       <span className="text-muted">Yes</span>
// //     </li>
// //   </ul>
// // </div>

// //                   <div className="c-details-social">
// //                     <h5 className="cd-social-title mb-25">Share Now:</h5>
// //                     <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
// //                     <a href="#"><i className="fa-brands fa-twitter"></i></a>
// //                     <a href="#"><i className="fa-brands fa-instagram"></i></a>
// //                     <a href="#"><i className="fa-brands fa-youtube"></i></a>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //       {isVideoOpen && <VideoPopup closePopup={() => setIsVideoOpen(false)} videoId={courseDetails.video} />}
// //       <EditCourseDetailsModal show={isEditOpen} onHide={handleEditClose} onSave={handleSave} courseDetails={courseDetails} />
// //     </>
// //   );
// // };

// // export default CourseDetailsArea;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import VideoPopup from "@/src/modals/video-popup";
// import EditCourseDetailsModal from "./EditCourseDetailsModal";
// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import Trainer from "./Trainer";

// // Styled Components (keep existing styled components)

// // Styled Components
// const SectionHeader = styled.div`
//   cursor: pointer;
//   padding: 15px;
//   background-color: #f8f9fa;
//   border: 1px solid #e9ecef;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   font-weight: bold;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   transition: background-color 0.3s, color 0.3s;

//   &:hover {
//     color: #007bff;
//     background-color: #e9ecef;
//   }
// `;

// const SectionContent = styled.div`
//   padding: 20px;
//   background-color: #f1f3f5;
//   border: 1px solid #dee2e6;
//   border-radius: 5px;
//   margin-bottom: 20px;
// `;

// const LectureItem = styled.li`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 0;
//   list-style: none;

//   a {
//     text-decoration: none;
//     color: #495057;
//     padding: 10px;
//     border: 1px solid #e9ecef;
//     border-radius: 5px;
//     background-color: #ffffff;
//     transition: background-color 0.3s, color 0.3s;

//     &:hover {
//       background-color: #e9ecef;
//       color: #007bff;
//     }
//   }

//   span {
//     color: #6c757d;
//     font-size: 0.9rem;
//   }
// `;

// const VideoPlayer = styled.video`
//   width: 100%;
//   max-height: 400px;
//   object-fit: contain;
// `;

// const CourseDetailsArea = ({ courseId, trainerId, courseBannerImage }) => {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [isEditOpen, setIsEditOpen] = useState(false);
//   const [courseDetails, setCourseDetails] = useState(null);
//   const [expandedSection, setExpandedSection] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentVideo, setCurrentVideo] = useState(null);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       if (courseId) {
//         try {
//           setIsLoading(true);
//           const response = await axios.get(
//             `https://api.novajobs.us/api/trainers/course-details/${courseId}`
//           );
//           if (
//             response.data &&
//             response.data.data &&
//             response.data.data.length > 0
//           ) {
//             setCourseDetails(response.data);
//           } else {
//             setError("No course data found");
//           }
//         } catch (error) {
//           console.error(error);
//           setError("Failed to fetch course details");
//         } finally {
//           setIsLoading(false);
//         }
//       }
//     };
//     fetchCourseDetails();
//     if (courseId) localStorage.setItem("courseId", courseId);
//     if (trainerId) localStorage.setItem("trainerId", trainerId);
//     if (courseBannerImage)
//       localStorage.setItem("courseBannerImage", courseBannerImage);
//   }, [courseId, trainerId, courseBannerImage]);

//   const handleEditOpen = () => setIsEditOpen(true);
//   const handleEditClose = () => setIsEditOpen(false);

//   const handleSave = (updatedDetails) => {
//     setCourseDetails(updatedDetails);
//     setIsEditOpen(false);
//   };

//   const toggleSection = (sectionId) => {
//     setExpandedSection(expandedSection === sectionId ? null : sectionId);
//   };

//   const handleLectureClick = async (sectionId, lectureId, videoId) => {
//     console.log(sectionId, lectureId, videoId, "Id of video");
//     try {
//       const videoUrl = `https://api.novajobs.us/api/trainers/streaming/${courseId}/${sectionId}/${lectureId}/${videoId}`;
//       setCurrentVideo(videoUrl);
//     } catch (error) {
//       console.error("Error fetching video:", error);
//       setError("Failed to load video");
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="container mt-5">
//         <div className="text-center">
//           <div className="spinner-border" role="status">
//             <span className="visually-hidden">Loading...</span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (error || !courseDetails) {
//     return (
//       <div className="container mt-5">
//         <div className="alert alert-warning" role="alert">
//           <h4 className="alert-heading">Course Not Found</h4>
//           <p>{error || "We couldn't find the course you're looking for."}</p>
//           <hr />
//           <Link href="/" className="btn btn-primary mt-3">
//             Back to Courses
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <section
//         className="c-details-area pt-120 pb-50 wow fadeInUp"
//         data-wow-duration=".8s"
//         data-wow-delay=".2s"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 col-md-12">
//               <div className="c-details-wrapper mr-25">
//                 <div className="c-details-thumb p-relative mb-40">
//                   {currentVideo ? (
//                     <VideoPlayer controls>
//                       <source src={currentVideo} type="video/mp4" />
//                       Your browser does not support the video tag.
//                     </VideoPlayer>
//                   ) : (
//                     <img
//                       src={
//                         `https://api.novajobs.us${courseBannerImage}` ||
//                         "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg"
//                       }
//                       alt="details-bg"
//                       className="img-fluid rounded"
//                     />
//                   )}
//                   <div className="c-details-ava d-md-flex align-items-center mt-3">
//                     <img
//                       src="/assets/img/course/c-details-ava-01.png"
//                       alt="avatar"
//                       className="img-fluid rounded-circle"
//                       style={{ width: "50px", marginRight: "10px" }}
//                     />
//                     <span>
//                       By{" "}
//                       <a href="#">{courseDetails.instructor || "Instructor"}</a>
//                     </span>
//                   </div>
//                 </div>
//                 <div className="course-details-content mb-45">
//                   {courseDetails.data.map((section) => (
//                     <div key={section.id}>
//                       <SectionHeader onClick={() => toggleSection(section.id)}>
//                         <span>{section.section_name}</span>
//                         <span>
//                           {section.lectures.length} lectures •{" "}
//                           {section.totalDuration}
//                         </span>
//                       </SectionHeader>
//                       {expandedSection === section.id && (
//                         <SectionContent>
//                           <p>{section.section_objective}</p>
//                           <ul className="list-unstyled">
//                             {section.lectures.map((lecture) => (
//                               <LectureItem key={lecture.id}>
//                                 <a
//                                   href="#"
//                                   onClick={(e) => {
//                                     e.preventDefault();
//                                     console.log(
//                                       lecture.lecture_videos[0].id,
//                                       "Lecture hu"
//                                     );
//                                     handleLectureClick(
//                                       section.id,
//                                       lecture.id,
//                                       lecture.lecture_videos[0].id
//                                     );
//                                   }}
//                                 >
//                                   {lecture.lecture_name}
//                                 </a>
//                                 <span>{lecture.duration}</span>
//                               </LectureItem>
//                             ))}
//                           </ul>
//                           <p>
//                             <strong>Created At:</strong>{" "}
//                             {new Date(section.created_at).toLocaleString()}
//                           </p>
//                           <p>
//                             <strong>Updated At:</strong>{" "}
//                             {new Date(section.updated_at).toLocaleString()}
//                           </p>
//                         </SectionContent>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//               <Trainer trainerID={trainerId} />
//             </div>
//             <div className="col-lg-4 col-md-12">
//               <div className="c-details-sidebar">
//                 <div className="c-video-thumb p-relative mb-25">
//                   <img
//                     src="/assets/img/bg/c-details-video-bg.jpg"
//                     alt="video-bg"
//                     className="img-fluid rounded"
//                   />
//                   <div className="c-video-icon">
//                     <a
//                       className="popup-video"
//                       onClick={() => setIsVideoOpen(true)}
//                     >
//                       <i className="fi fi-sr-play"></i>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="course-details-widget">
//                   <div className="cd-video-price">
//                     <h3 className="pricing-video text-center mb-15">$0.00</h3>
//                     <div className="cd-pricing-btn text-center mb-30">
//                       <Link
//                         className="tp-vp-btn btn btn-outline-primary mr-2"
//                         href="/course-details"
//                       >
//                         Add To Cart
//                       </Link>
//                       <Link
//                         className="tp-vp-btn-green btn btn-primary"
//                         href={"/sign-in"}
//                       >
//                         Enroll Now
//                       </Link>
//                     </div>
//                   </div>
                  // <div className="cd-information mb-4 p-4 bg-white shadow rounded">
                  //   <ul className="list-unstyled">
                  //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fa-light fa-calendars text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Lectures
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">36</span>
                  //     </li>
                  //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fi fi-rr-chart-pie-alt text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Quizzes
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">6</span>
                  //     </li>
                  //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fi fi-rr-user text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Students
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">105</span>
                  //     </li>
                  //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fa-light fa-clock-desk text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Duration
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">16 Hours</span>
                  //     </li>
                  //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fi fi-sr-stats text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Skill Level
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">Beginner</span>
                  //     </li>
                  //     <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fi fi-rr-comments text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Language
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">English</span>
                  //     </li>
                  //     <li className="d-flex justify-content-between align-items-center py-2">
                  //       <div className="d-flex align-items-center">
                  //         <i className="fi fi-rs-diploma text-primary mr-2"></i>
                  //         <label className="mb-0 font-weight-bold">
                  //           Certificate
                  //         </label>
                  //       </div>
                  //       <span className="text-muted">Yes</span>
                  //     </li>
                  //   </ul>
                  // </div>

                  // <div className="c-details-social">
                  //   <h5 className="cd-social-title mb-25">Share Now:</h5>
                  //   <a href="#">
                  //     <i className="fa-brands fa-facebook-f"></i>
                  //   </a>
                  //   <a href="#">
                  //     <i className="fa-brands fa-twitter"></i>
                  //   </a>
                  //   <a href="#">
                  //     <i className="fa-brands fa-instagram"></i>
                  //   </a>
                  //   <a href="#">
                  //     <i className="fa-brands fa-youtube"></i>
                  //   </a>
                  // </div>
                // </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
//       </section>
//       {isVideoOpen && (
//         <VideoPopup
//           closePopup={() => setIsVideoOpen(false)}
//           videoId={courseDetails.video}
//         />
//       )}
//       <EditCourseDetailsModal
//         show={isEditOpen}
//         onHide={handleEditClose}
//         onSave={handleSave}
//         courseDetails={courseDetails}
//       />
//     </>
//   );
// };

// export default CourseDetailsArea;


import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPopup from "@/src/modals/video-popup";
import EditCourseDetailsModal from "./EditCourseDetailsModal";
import PaymentPopup from "./PaymentPopup";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Trainer from "./Trainer";

// ... (existing styled components)

// Styled Components
const SectionHeader = styled.div`
  cursor: pointer;
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #007bff;
    background-color: #e9ecef;
  }
`;

const SectionContent = styled.div`
  padding: 20px;
  background-color: #f1f3f5;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const LectureItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  list-style: none;

  a {
    text-decoration: none;
    color: #495057;
    padding: 10px;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    background-color: #ffffff;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #e9ecef;
      color: #007bff;
    }
  }

  span {
    color: #6c757d;
    font-size: 0.9rem;
  }
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;
const VideoErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #f8d7da;
  color: #721c24;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
`;

const CourseDetailsArea = ({ courseId, trainerId, courseBannerImage }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [courseDetails, setCourseDetails] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [isVideoReady, setIsVideoReady] = useState(false);
  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (courseId) {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `https://api.novajobs.us/api/trainers/course-details/${courseId}`
          );
          if (
            response.data &&
            response.data.data &&
            response.data.data.length > 0
          ) {
            setCourseDetails(response.data);
          } else {
            setError("No course data found");
          }
        } catch (error) {
          console.error(error);
          setError("Failed to fetch course details");
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchCourseDetails();

    if (courseId) localStorage.setItem("courseId", courseId);
    if (trainerId) localStorage.setItem("trainerId", trainerId);
    if (courseBannerImage)
      localStorage.setItem("courseBannerImage", courseBannerImage);

    // Check if the user is logged in (for demonstration purposes, this can be replaced with actual authentication logic)
    const loggedInStatus = localStorage.getItem("token");
    console.log(loggedInStatus)
    setIsLoggedIn(true);
  }, [courseId, trainerId, courseBannerImage]);

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  const handleSave = (updatedDetails) => {
    setCourseDetails(updatedDetails);
    setIsEditOpen(false);
  };
  const handlePlayClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://api.novajobs.us/api/trainers/streaming/${courseId}`);
      setVideoUrl(response.data.videoUrl);
      setIsVideoReady(true);
      setIsPlaying(true);
    } catch (error) {
      console.error('Error fetching video:', error);
      setIsVideoReady(false);
      setIsPlaying(false);
    }
  };
  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const handleLectureClick = async (sectionId, lectureId, videoId) => {
    console.log(sectionId, lectureId, videoId, "Id of video");
    if(videoId){
      try {
        const videoUrl = `https://api.novajobs.us/api/trainers/streaming/${courseId}/${sectionId}/${lectureId}/${videoId}`;
        setCurrentVideo(videoUrl);
      } catch (error) {
        console.error("Error fetching video:", error);
        setError("Failed to load video");
      }
    }
  };
  console.log("cv",currentVideo)

  const handleEnrollNowClick = () => {
    if (isLoggedIn) {
      setIsPaymentPopupOpen(true);
    } else {
      window.location.href = "/sign-in";
    }
  };

  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !courseDetails) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Course Not Found</h4>
          <p>{error || "We couldn't find the course you're looking for."}</p>
          <hr />
          <Link href="/" className="btn btn-primary mt-3">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        className="c-details-area pt-120 pb-50 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="c-details-wrapper mr-25">
                <div className="c-details-thumb p-relative mb-40">
                  {currentVideo ? (
                    <VideoPlayer controls>
                      <source src={currentVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </VideoPlayer>
                  ) : (
                    <img
                      src={
                        `https://api.novajobs.us${courseBannerImage}` ||
                        "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg"
                      }
                      alt="details-bg"
                      className="img-fluid rounded"
                    />
                  )}
                  <div className="c-details-ava d-md-flex align-items-center mt-3">
                    <img
                      src="/assets/img/course/c-details-ava-01.png"
                      alt="avatar"
                      className="img-fluid rounded-circle"
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <span>
                      By{" "}
                      <a href="#">{courseDetails.instructor || "Instructor"}</a>
                    </span>
                  </div>
                </div>
                <div className="course-details-content mb-45">
                  {courseDetails.data.map((section) => (
                    <div key={section.id}>
                      <SectionHeader onClick={() => toggleSection(section.id)}>
                        <span>{section.section_name}</span>
                        <span>
                          {section.lectures.length} lectures •{" "}
                          {section.totalDuration}
                        </span>
                      </SectionHeader>
                      {expandedSection === section.id && (
                        <SectionContent>
                          <p>{section.section_objective}</p>
                          <ul className="list-unstyled">
                            {section.lectures.map((lecture) => (
                              <LectureItem key={lecture.id}>
                                <a
                                  href="#"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    // console.log(
                                    //   lecture.lecture_videos[0].id,
                                    //   "Lecture hu"
                                    // );
                                    const videoId = lecture.lecture_videos.length > 0 ? lecture.lecture_videos[0].id : null;
                                    handleLectureClick(
                                      section.id,
                                      lecture.id,
                                      videoId
                                    );
                                  }}
                                >
                                  {lecture.lecture_name}
                                </a>
                                <span>{lecture.duration}</span>
                              </LectureItem>
                            ))}
                          </ul>
                          <p>
                            <strong>Created At:</strong>{" "}
                            {new Date(section.created_at).toLocaleString()}
                          </p>
                          <p>
                            <strong>Updated At:</strong>{" "}
                            {new Date(section.updated_at).toLocaleString()}
                          </p>
                        </SectionContent>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <Trainer trainerID={trainerId} />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="c-details-sidebar">
                {/* <div className="c-video-thumb p-relative mb-25">
                  <img
                    src="/assets/img/bg/c-details-video-bg.jpg"
                    alt="video-bg"
                    className="img-fluid rounded"
                  />
                  <div className="c-video-icon">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVideoOpen(true);
                      }}
                    >
                      <i onClick={handlePlayClick} className="fas fa-play"></i>
                    </a>
                  </div>
                </div> */}
                <div className="c-video-thumb p-relative mb-25">
  {isVideoReady && isPlaying ? (
    <VideoPlayer controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </VideoPlayer>
  ) : (
    <>
      <img
        src="/assets/img/bg/c-details-video-bg.jpg"
        alt="video-bg"
        className="img-fluid rounded"
      />
      <div className="c-video-icon"
        
          href="#"
          onClick={handlePlayClick}
        >
          <i className="fas fa-play"></i>
      </div>
    </>
  )}
</div>
                <div className="c-sidebar-form">
                  <h3>Enroll in this Course</h3>
                  <button
                    onClick={handleEnrollNowClick}
                    className="btn btn-primary"
                  >
                    Enroll Now
                  </button>
                </div>
                <div className="cd-information mb-4 p-4 bg-white shadow rounded">
                    <ul className="list-unstyled">
                      <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fa-light fa-calendars text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Lectures
                          </label>
                        </div>
                        <span className="text-muted">36</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fi fi-rr-chart-pie-alt text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Quizzes
                          </label>
                        </div>
                        <span className="text-muted">6</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fi fi-rr-user text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Students
                          </label>
                        </div>
                        <span className="text-muted">105</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fa-light fa-clock-desk text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Duration
                          </label>
                        </div>
                        <span className="text-muted">16 Hours</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fi fi-sr-stats text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Skill Level
                          </label>
                        </div>
                        <span className="text-muted">Beginner</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                        <div className="d-flex align-items-center">
                          <i className="fi fi-rr-comments text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Language
                          </label>
                        </div>
                        <span className="text-muted">English</span>
                      </li>
                      <li className="d-flex justify-content-between align-items-center py-2">
                        <div className="d-flex align-items-center">
                          <i className="fi fi-rs-diploma text-primary mr-2"></i>
                          <label className="mb-0 font-weight-bold">
                            Certificate
                          </label>
                        </div>
                        <span className="text-muted">Yes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">Share Now:</h5>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={
          "https://www.youtube.com/watch?v=_vZjS1X3cEA&ab_channel=DeepSoftware" // Replace with actual video URL if needed
        }
      />
      <EditCourseDetailsModal
        isOpen={isEditOpen}
        onClose={handleEditClose}
        courseDetails={courseDetails}
        onSave={handleSave}
      />
      <PaymentPopup
        show={isPaymentPopupOpen}
        onHide={() => setIsPaymentPopupOpen(false)}
        courseId={courseId}
      />
    </>
  );
};

export default CourseDetailsArea;
