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

import our_course_data from "@/src/data/our-course-data";
import Link from "next/link";
import React from "react";
import styled from 'styled-components';

const CourseCard = styled.div`
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const CourseTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1rem;
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: #0056b3;
    }
  }
`;

const Price = styled.h5`
  font-size: 1.5rem;
  color: #007bff;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  margin: 0;
`;

const CourseArea = () => {
  return (
    <section className="course-area py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h2 className="text-center">Explore Courses</h2>
          </div>
        </div>
        {our_course_data.slice(0, 9).map((item, i) => (
          <CourseCard key={i} className="card mb-4">
            <div className="row g-0">
              <div className="col-md-4 position-relative">
                <img src={item.img} alt="course-thumb" className="img-fluid rounded-start h-100 object-fit-cover" />
                <div className="position-absolute top-0 end-0 m-2">
                  <Link href="/course-details" className="btn btn-light rounded-circle">
                    <i className="fi fi-rr-heart"></i>
                  </Link>
                </div>
                <div className="position-absolute bottom-0 start-0 m-2">
                  <img src={item.icon} alt="course-avatar" className="rounded-circle" width="50" height="50" />
                </div>
              </div>
              <div className="col-md-8 position-relative">
                <div className="card-body">
                  <div className="mb-2">
                    <Link href="/course-details" className="badge bg-primary me-2 text-decoration-none py-2 px-4 text-2xl font-semibold">
                      {item.course_title}
                    </Link>
                    <Link href="/course-details" className="badge bg-secondary text-decoration-none py-2 px-4 text-2xl font-semibold ">
                      {item.course_name}
                    </Link>
                  </div>
                  <CourseTitle className="card-title mb-3">
                    <Link href="/course-details">{item.title}</Link>
                  </CourseTitle>
                  <div className="d-flex mb-3">
                    <div className="me-4">
                      <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" className="me-1" width="20" />
                      <small>{item.cls_text}</small>
                    </div>
                    <div>
                      <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" className="me-1" width="20" />
                      <small>{item.st_text}</small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="me-1">4.7</span>
                      <i className="fi fi-ss-star text-warning"></i>
                      <i className="fi fi-ss-star text-warning"></i>
                      <i className="fi fi-ss-star text-warning"></i>
                      <i className="fi fi-ss-star text-warning"></i>
                      <i className="fi fi-rs-star text-warning"></i>
                      <small className="text-muted">(125)</small>
                    </div>
                  </div>
                  <Price>$0.00</Price>
                </div>
              </div>
            </div>
          </CourseCard>
        ))}
      </div>
    </section>
  );
};

export default CourseArea;
