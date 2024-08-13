// import our_course_data from "@/src/data/our-course-data";
// import Link from "next/link";
// import React from "react";

// const CourseArea = () => {
//   return (
//     <>
//       <section className="course-area pb-120">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="section-title text-center mb-65">
//                 {/* <span className="tp-sub-title-box mb-15">Our Courses</span> */}
//                 <h2 className="tp-section-title mb-20">
//                   Explore Courses
//                 </h2>
//               </div>
//             </div>
//           </div>
//           <div className="col mb-20">
//             {our_course_data.slice(0, 9).map((item, i) => (
//               <div key={i} className="col-xl-4 col-lg-6 col-md-6">
//                 <div
//                   className="tpcourse mb-40 wow fadeInUp"
//                   data-wow-duration=".8s"
//                   data-wow-delay=".2s"
//                 >
//                     <div className="tpcourse__thumb p-relative w-img fix">
//                     <Link href="/course-details">
//                       <img src={item.img} alt="course-thumb" />
//                     </Link>
//                     <div className="tpcourse__tag">
//                       <Link href="/course-details">
//                         <i className="fi fi-rr-heart"></i>
//                       </Link>
//                     </div>
//                     <div className="tpcourse__img-icon">
//                       <img src={item.icon} alt="course-avata" />
//                     </div>
//                   </div>
//                   <div className="tpcourse__content-2">
//                     <div className="tpcourse__category mb-10">
//                       <ul className="tpcourse__price-list d-flex align-items-center">
//                         <li>
//                           <Link
//                             className={item.ct_color}
//                             href="/course-details"
//                           >
//                             {item.course_title}
//                           </Link>
//                         </li>
// <li>
//   <Link
//     className={item.cn_color}
//     href="/course-details"
//   >
//     {item.course_name}
//   </Link>
// </li>
//                       </ul>
//                     </div>
//                     <div className="tpcourse__ava-title mb-15">
//                       <h4 className="tpcourse__title tp-cours-title-color">
//                         <Link href="/course-details">{item.title}</Link>
//                       </h4>
//                     </div>
//                     <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
//                       <ul className="d-flex align-items-center">
//                         <li>
//                           <img
//                             src="/assets/img/icon/c-meta-01.png"
//                             alt="meta-icon"
//                           />{" "}
//                           <span>{item.cls_text}</span>
//                         </li>
//                         <li>
//                           <img
//                             src="/assets/img/icon/c-meta-02.png"
//                             alt="meta-icon"
//                           />{" "}
//                           <span>{item.st_text}</span>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="tpcourse__rating d-flex align-items-center justify-content-between">
//                       <div className="tpcourse__rating-icon">
//                         <span>4.7</span>
//                         <i className="fi fi-ss-star"></i>
//                         <i className="fi fi-ss-star"></i>
//                         <i className="fi fi-ss-star"></i>
//                         <i className="fi fi-ss-star"></i>
//                         <i className="fi fi-rs-star"></i>
//                         <p>(125)</p>
//                       </div>
//                       <div className="tpcourse__pricing">
//                         <h5 className="price-title">$0.00</h5>
//                       </div>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* <div className="basic-pagination">
//             <nav>
//               <ul>
//                 <li>
//                   <Link href="/blog">
//                     <i className="far fa-angle-left"></i>
//                   </Link>
//                 </li>
//                 <li>
//                   <span className="current">1</span>
//                 </li>
//                 <li>
//                   <Link href="/blog">2</Link>
//                 </li>
//                 <li>
//                   <Link href="/blog">3</Link>
//                 </li>
//                 <li>
//                   <Link href="/blog">
//                     <i className="far fa-angle-right"></i>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           </div> */}
//         </div>
//       </section>
//     </>
//   );
// };

// export default CourseArea;

// import our_course_data from "@/src/data/our-course-data";
// import Link from "next/link";
// import React from "react";
// import styled from 'styled-components';

// const CourseCard = styled.div`
//   transition: box-shadow 0.3s ease-in-out;
//   &:hover {
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   }
// `;

// const CourseTitle = styled.h4`
//   a {
//     color: inherit;
//     text-decoration: none;
//     &:hover {
//       color: #0056b3;
//     }
//   }
// `;

// const CourseArea = () => {
//   return (
//     <section className="course-area py-5">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12">
//             <h2 className="text-center">Explore Courses</h2>
//           </div>
//         </div>
//         {our_course_data.slice(0, 9).map((item, i) => (
//           <CourseCard key={i} className="card mb-4">
//             <div className="row g-0">
//               <div className="col-md-4 position-relative">
//                 <img src={item.img} alt="course-thumb" className="img-fluid rounded-start h-100 object-fit-cover" />
//                 <div className="position-absolute top-0 end-0 m-2">
//                   <Link href="/course-details" className="btn btn-light rounded-circle">
//                     <i className="fi fi-rr-heart"></i>
//                   </Link>
//                 </div>
//                 <div className="position-absolute bottom-0 start-0 m-2">
//                   <img src={item.icon} alt="course-avatar" className="rounded-circle" width="50" height="50" />
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <div className="mb-2">
//                     <Link href="/course-details" className={`badge bg-primary me-2 text-decoration-none`}>
//                       {item.course_title}
//                     </Link>
//                     <Link href="/course-details" className={`badge bg-secondary text-decoration-none`}>
//                       {item.course_name}
//                     </Link>
//                   </div>
//                   <CourseTitle className="card-title mb-3">
//                     <Link href="/course-details">{item.title}</Link>
//                   </CourseTitle>
//                   <div className="d-flex mb-3">
//                     <div className="me-4">
//                       <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" className="me-1" width="20" />
//                       <small>{item.cls_text}</small>
//                     </div>
//                     <div>
//                       <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" className="me-1" width="20" />
//                       <small>{item.st_text}</small>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div>
//                       <span className="me-1">4.7</span>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-rs-star text-warning"></i>
//                       <small className="text-muted">(125)</small>
//                     </div>
//                     <h5 className="text-primary mb-0">$0.00</h5>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CourseCard>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CourseArea;

// import our_course_data from "@/src/data/our_course_data";
// import Link from "next/link";
// import React from "react";
// import styled from "styled-components";

// const CourseCard = styled.div`
//   transition: box-shadow 0.3s ease-in-out;
//   &:hover {
//     box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   }
// `;

// const CourseTitle = styled.h4`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   a {
//     color: inherit;
//     text-decoration: none;
//     &:hover {
//       color: #0056b3;
//     }
//   }
// `;

// const Price = styled.h5`
//   font-size: 1.5rem;
//   color: #007bff;
//   position: absolute;
//   bottom: 1rem;
//   right: 1rem;
//   margin: 0;
// `;

// const CourseArea = () => {
//   return (
//     <section className="course-area py-5">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12">
//             <h2 className="text-center">Explore Courses</h2>
//           </div>
//         </div>
//         {our_course_data.slice(0, 9).map((item, i) => (
//           <CourseCard key={i} className="card mb-4">
//             <div className="row g-0">
//               <div className="col-md-4 position-relative">
//                 <img
//                   src={item.img}
//                   alt="course-thumb"
//                   className="img-fluid rounded-start h-100 object-fit-cover"
//                 />
//                 <div className="position-absolute top-0 end-0 m-2">
//                   <Link
//                     href="/course-details"
//                     className="btn btn-light rounded-circle"
//                   >
//                     <i className="fi fi-rr-heart"></i>
//                   </Link>
//                 </div>
//                 <div className="position-absolute bottom-0 start-0 m-2">
//                   <img
//                     src={item.icon}
//                     alt="course-avatar"
//                     className="rounded-circle"
//                     width="50"
//                     height="50"
//                   />
//                 </div>
//               </div>
//               <div className="col-md-8 position-relative">
//                 <div className="card-body">
//                   <div className="mb-2">
//                     <Link
//                       href="/course-details"
//                       className="badge bg-primary me-2 text-decoration-none py-2 px-4 text-2xl font-semibold"
//                     >
//                       {item.course_title}
//                     </Link>
//                     <Link
//                       href="/course-details"
//                       className="badge bg-secondary text-decoration-none py-2 px-4 text-2xl font-semibold "
//                     >
//                       {item.course_name}
//                     </Link>
//                   </div>
//                   <CourseTitle className="card-title mb-3">
//                     <Link href="/course-details">{item.title}</Link>
//                   </CourseTitle>
//                   <div className="d-flex mb-3">
//                     <div className="me-4">
//                       <img
//                         src="/assets/img/icon/c-meta-01.png"
//                         alt="meta-icon"
//                         className="me-1"
//                         width="20"
//                       />
//                       <small>{item.cls_text}</small>
//                     </div>
//                     <div>
//                       <img
//                         src="/assets/img/icon/c-meta-02.png"
//                         alt="meta-icon"
//                         className="me-1"
//                         width="20"
//                       />
//                       <small>{item.st_text}</small>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div>
//                       <span className="me-1">4.7</span>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-ss-star text-warning"></i>
//                       <i className="fi fi-rs-star text-warning"></i>
//                       <small className="text-muted">(125)</small>
//                     </div>
//                   </div>
//                   <Price>$0.00</Price>
//                 </div>
//               </div>
//             </div>
//           </CourseCard>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CourseArea;
  

// import our_course_data from "@/src/data/our-course-data";
// import Link from "next/link";
// import React from "react";
// import styled from 'styled-components';

// const CourseCard = styled.div`
//   transition: all 0.3s ease-in-out;
//   border: none;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CourseImage = styled.img`
//   object-fit: cover;
//   height: 200px;
//   width: 100%;
// `;

// const CourseTitle = styled.h4`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   a {
//     color: #333;
//     text-decoration: none;
//     transition: color 0.2s ease;
//     &:hover {
//       color: #007bff;
//     }
//   }
// `;

// const Price = styled.h5`
//   font-size: 1.5rem;
//   color: #28a745;
//   font-weight: bold;
//   margin: 0;
// `;

// const Badge = styled(Link)`
//   text-decoration: none;
//   font-size: 0.85rem;
//   font-weight: 600;
//   padding: 0.5rem 1rem;
//   border-radius: 50px;
//   margin-right: 0.5rem;
//   transition: all 0.2s ease;
//   &:hover {
//     transform: translateY(-2px);
//   }
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 1rem;
//   img {
//     margin-right: 0.5rem;
//   }
// `;

// const StarRating = styled.div`
//   color: #ffc107;
//   font-size: 0.9rem;
// `;

// const CourseArea = () => {
//   return (
//     <section className="course-area py-5 bg-light">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12">
//             <h2 className="text-center font-weight-bold mb-4">Explore Our Courses</h2>
//             <p className="text-center text-muted">Discover a wide range of courses to enhance your skills</p>
//           </div>
//         </div>
//         {our_course_data.slice(0, 9).map((item, i) => (
//           <CourseCard key={i} className="card">
//             <div className="row g-0">
//               <div className="col-md-4 position-relative">
//                 <CourseImage src={item.img} alt="course-thumb" className="img-fluid rounded-start" />
//                 <div className="position-absolute top-0 end-0 m-2">
//                   <Link href="/course-details" className="btn btn-light rounded-circle">
//                     <i className="fi fi-rr-heart"></i>
//                   </Link>
//                 </div>
//                 <div className="position-absolute bottom-0 start-0 m-2">
//                   <img src={item.icon} alt="course-avatar" className="rounded-circle" width="50" height="50" />
//                 </div>
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <div className="mb-3">
//                     <Badge href="/course-details" className="badge bg-primary">{item.course_title}</Badge>
//                     <Badge href="/course-details" className="badge bg-secondary">{item.course_name}</Badge>
//                   </div>
//                   <CourseTitle className="card-title">
//                     <Link href="/course-details">{item.title}</Link>
//                   </CourseTitle>
//                   <div className="d-flex mb-3">
//                     <IconWrapper>
//                       <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" height="20" width="20" />
//                       <small>{item.cls_text}</small>
//                     </IconWrapper>
//                     <IconWrapper>
//                       <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" height="20" width="20" />
//                       <small>{item.st_text}</small>
//                     </IconWrapper>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <StarRating>
//                       <span className="me-1">4.7</span>
//                       {"★".repeat(4)}{"☆".repeat(1)}
//                       <small className="text-muted">(125)</small>
//                     </StarRating>
//                     <Price>$0.00</Price>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CourseCard>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default CourseArea;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import styled from 'styled-components';

// const CourseCard = styled.div`
//   transition: all 0.3s ease-in-out;
//   border: none;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CourseImage = styled.img`
//   object-fit: cover;
//   height: 200px;
//   width: 100%;
// `;

// const CourseTitle = styled.h4`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   a {
//     color: #333;
//     text-decoration: none;
//     transition: color 0.2s ease;
//     &:hover {
//       color: #007bff;
//     }
//   }
// `;

// const Price = styled.h5`
//   font-size: 1.5rem;
//   color: #28a745;
//   font-weight: bold;
//   margin: 0;
// `;

// const Badge = styled(Link)`
//   text-decoration: none;
//   font-size: 0.85rem;
//   font-weight: 600;
//   padding: 0.5rem 1rem;
//   border-radius: 50px;
//   margin-right: 0.5rem;
//   transition: all 0.2s ease;
//   &:hover {
//     transform: translateY(-2px);
//   }
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 1rem;
//   img {
//     margin-right: 0.5rem;
//   }
// `;

// const StarRating = styled.div`
//   color: #ffc107;
//   font-size: 0.9rem;
// `;

// const CourseArea = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch the courses data from the API
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/trainers/all-courses");
//         setCourses(response.data.data);
//       } catch (error) {
//         console.error("Error fetching courses data:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <section className="course-area py-5 bg-light">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12">
//             <h2 className="text-center font-weight-bold mb-4">Explore Our Courses</h2>
//             <p className="text-center text-muted">Discover a wide range of courses to enhance your skills</p>
//           </div>
//         </div>
//         {courses.map((item, i) => (
//           <CourseCard key={i} className="card">
//             <div className="row g-0">
//               <div className="col-md-4 position-relative">
//                 <CourseImage src={
//                             item.course_banner_image
//                               ? `https://api.novajobs.us${item.course_banner_image}`
//                               : "/dummyBannerImage.png"
//                           } alt="course-thumb" className="img-fluid rounded-start" />
//                 <div className="position-absolute top-0 end-0 m-2">
//                   <Link href="/course-details" className="btn btn-light rounded-circle">
//                     <i className="fi fi-rr-heart"></i>
//                   </Link>
//                 </div>
//                 {/* <div className="position-absolute bottom-0 start-0 m-2">
//                   <img src={item.icon} alt="course-avatar" className="rounded-circle" width="50" height="50" />
//                 </div> */}
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <div className="mb-3">
//                     <Badge href="/course-details" className="badge bg-primary">{item.course_title}</Badge>
//                     <Badge href="/course-details" className="badge bg-secondary">{item.course_name}</Badge>
//                   </div>
//                   <CourseTitle className="card-title">
//                     <Link href="/course-details">{item.title}</Link>
//                   </CourseTitle>
//                   <div className="d-flex mb-3">
//                     <IconWrapper>
//                       <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" height="20" width="20" />
//                       <small>{item.cls_text}</small>
//                     </IconWrapper>
//                     <IconWrapper>
//                       <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" height="20" width="20" />
//                       <small>{item.st_text}</small>
//                     </IconWrapper>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <StarRating>
//                       <span className="me-1">4.7</span>
//                       {"★".repeat(4)}{"☆".repeat(1)}
//                       <small className="text-muted">(125)</small>
//                     </StarRating>
//                     <Price>$0.00</Price>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </CourseCard>
//         ))}
//       </div>
//     </section>
//   );
// };

// // export default CourseArea;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import styled from 'styled-components';

// const CourseCard = styled.div`
//   transition: all 0.3s ease-in-out;
//   border: none;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
//   height: 100%;  /* Make sure the card takes up the full height of the parent */
//   display: flex;
//   flex-direction: column;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CourseImage = styled.img`
//   object-fit: cover;
//   height: 200px;
//   width: 100%;
// `;

// const CourseTitle = styled.h4`
//   font-size: 1.25rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   a {
//     color: #333;
//     text-decoration: none;
//     transition: color 0.2s ease;
//     &:hover {
//       color: #007bff;
//     }
//   }
// `;

// const Price = styled.h5`
//   font-size: 1.5rem;
//   color: #28a745;
//   font-weight: bold;
//   margin: 0;
// `;

// const Badge = styled(Link)`
//   text-decoration: none;
//   font-size: 0.85rem;
//   font-weight: 600;
//   padding: 0.5rem 1rem;
//   border-radius: 50px;
//   margin-right: 0.5rem;
//   transition: all 0.2s ease;
//   &:hover {
//     transform: translateY(-2px);
//   }
// `;

// const IconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 1rem;
//   img {
//     margin-right: 0.5rem;
//   }
// `;

// const StarRating = styled.div`
//   color: #ffc107;
//   font-size: 0.9rem;
// `;

// const CourseArea = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     // Fetch the courses data from the API
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get("https://api.novajobs.us/api/trainers/all-courses");
//         setCourses(response.data.data);
//       } catch (error) {
//         console.error("Error fetching courses data:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <section className="course-area py-5 bg-light">
//       <div className="container">
//         <div className="row mb-5">
//           <div className="col-12">
//             <h2 className="text-center font-weight-bold mb-4">Explore Our Courses</h2>
//             <p className="text-center text-muted">Discover a wide range of courses to enhance your skills</p>
//           </div>
//         </div>
//         <div className="row">
//           {courses.map((item, i) => (
//             <div key={i} className="col-md-4 d-flex">
//               <CourseCard className="card">
//                 <CourseImage
//                   src={
//                     item.course_banner_image
//                       ? `https://api.novajobs.us${item.course_banner_image}`
//                       : "/dummyBannerImage.png"
//                   }
//                   alt="course-thumb"
//                   className="img-fluid rounded-start"
//                 />
//                 <div className="position-absolute top-0 end-0 m-2">
//                   <Link href="/course-details" className="btn btn-light rounded-circle">
//                     <i className="fi fi-rr-heart"></i>
//                   </Link>
//                 </div>
//                 <div className="card-body d-flex flex-column">
//                 <CourseTitle className="card-title">
//                     <Link href="/course-details">{item.course_title}</Link>
//                   </CourseTitle>
//                   <div className="mb-3">
//                     <Badge href="/course-details" className="badge bg-secondary">{item.category}</Badge>
//                     <Badge href="/course-details" className="badge bg-primary">{item.course_language}</Badge>
//                     <Badge href="/course-details" className="badge bg-primary">{item.level}</Badge>
//                   </div>
                  
//                   <div className="d-flex mb-3">
//                     <IconWrapper>
//                       <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" height="20" width="20" />
//                       <small>{item.time_spent_on_course}</small>
//                     </IconWrapper>
//                     <IconWrapper>
//                       <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" height="20" width="20" />
//                       <small>{item.enrolled_student_count}</small>
//                     </IconWrapper>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center mt-auto">
//                     <StarRating>
//                       <span className="me-1">4.7</span>
//                       {"★".repeat(4)}{"☆".repeat(1)}
//                       <small className="text-muted">(125)</small>
//                     </StarRating>
//                     <Price>$0.00</Price>
//                   </div>
//                 </div>
//               </CourseCard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CourseArea;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyBannerImage from 'public/dummyBannerImage.png';

// Helper function to generate random colors
const getRandomColor = () => {
  const colors = [
    "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",
    "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50",
    "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Styled Components
const CourseAreaWrapper = styled.section`
  margin-bottom: 80px;
  background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  padding: 50px 0;
  font-family: 'Roboto', sans-serif;
`;

const CourseCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const CourseThumb = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-bottom: 2px solid #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const CourseTag = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  i {
    font-size: 1.5rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    padding: 10px;
    transition: background-color 0.3s ease-in-out;
    
    &:hover {
      background-color: #007bff;
    }
  }
`;

const CourseContent = styled.div`
  padding: 25px;
`;

const CategoryBox = styled.div`
  display: inline-block;
  padding: 6px 12px;
  border-radius: 5px;
  background-color: ${getRandomColor()};
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-left:5px;

  a {
    text-decoration: none;
    color: white;
  }
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #666;
  font-size: 0.85rem;

  img {
    margin-right: 5px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;

  i {
    color: #ffc107;
  }

  p {
    margin-left: 5px;
    color: #666;
  }
`;

const Pricing = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
`;

const Loading = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
`;

const CourseArea = () => {
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/all-courses`
        );
        console.log(response);
        setCourseDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseDetails();
  }, []);

  if (!courseDetails) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <CourseAreaWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-65 text-center">
              <h2 className="tp-section-title mb-20">ALL Courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {courseDetails.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-4">
              <CourseCard>
                <CourseThumb>
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
                    <img
                      src={
                        item.course_banner_image
                          ? `https://api.novajobs.us${item.course_banner_image}`
                          : "/dummyBannerImage.png"
                      }
                      alt="course-thumb"
                    />
                  </Link>
                  <CourseTag>
                    <Link href={item.course_link || "#"}>
                      <i className="fi fi-rr-heart"></i>
                    </Link>
                  </CourseTag>
                </CourseThumb>
                <CourseContent>
                <Title>
                    <Link href={{
                      pathname: `/course-details/${item.id}`,
                      query: {
                        trainer_id: item.trainer_id,
                        course_banner_image: item.course_banner_image,
                      },
                    }}
                    as={`/course-details/${item.id}`}>{item.course_title}</Link>
                  </Title>
                  <CategoryBox>
                    <Link
                      className={item.cn_color}
                      href={item.course_link || "#"}
                    >
                      {item.category}
                    </Link>
                  </CategoryBox>
                  <CategoryBox>
                    {item.level}
                  </CategoryBox>
                  <CategoryBox>
                    {item.course_language}
                  </CategoryBox>
                  
                  <Meta>
                    <div>
                      <img
                        src="/assets/img/icon/c-meta-01.png"
                        alt="meta-icon"
                      />{" "}
                      <span>{item.enrolled_student_count}</span>
                    </div>
                    <div>
                      <img
                        src="/assets/img/icon/c-meta-02.png"
                        alt="meta-icon"
                      />{" "}
                      <span>{item.time_spent_on_course}</span>
                    </div>
                  </Meta>
                  <div className="d-flex justify-content-between align-items-center">
                    <Rating>
                      <span>{item.start_text}</span>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </Rating>
                    <Pricing>${item.course_price}</Pricing>
                  </div>
                </CourseContent>
              </CourseCard>
            </div>
          ))}
        </div>
      </div>
    </CourseAreaWrapper>
  );
};

export default CourseArea;
