// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import dummyBannerImage from 'public/dummyBannerImage.png';

// // Styled Components
// const CourseAreaWrapper = styled.section`
//   margin-bottom: 80px;
//   background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
//   padding: 50px 0;
// `;

// const CourseCard = styled.div`
//   background-color: white;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CourseThumb = styled.div`
//   position: relative;
//   width: 100%;
//   height: 250px;
//   overflow: hidden;
//   border-bottom: 2px solid #f0f0f0;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.3s ease-in-out;
//   }

//   &:hover img {
//     transform: scale(1.05);
//   }
// `;

// const CourseTag = styled.div`
//   position: absolute;
//   top: 15px;
//   right: 15px;

//   i {
//     font-size: 1.5rem;
//     color: #fff;
//     background-color: rgba(0, 0, 0, 0.8);
//     border-radius: 50%;
//     padding: 10px;
//     transition: background-color 0.3s ease-in-out;
    
//     &:hover {
//       background-color: #007bff;
//     }
//   }
// `;

// const CourseContent = styled.div`
//   padding: 25px;

//   .category {
//     margin-bottom: 10px;
//   }

//   .category a {
//     text-decoration: none;
//     color: #007bff;
//     font-weight: bold;
//     font-size: 0.9rem;
//     transition: color 0.3s ease-in-out;

//     &:hover {
//       color: #0056b3;
//     }
//   }

//   .title {
//     margin-bottom: 15px;
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #333;

//     a {
//       text-decoration: none;
//       color: inherit;
//       transition: color 0.3s ease-in-out;

//       &:hover {
//         color: #007bff;
//       }
//     }
//   }

//   .meta {
//     display: flex;
//     justify-content: space-between;
//     margin-bottom: 15px;
//     color: #666;
//   }

//   .rating {
//     display: flex;
//     align-items: center;

//     i {
//       color: #ffc107;
//     }

//     p {
//       margin-left: 5px;
//       color: #666;
//     }
//   }

//   .pricing {
//     font-size: 1.5rem;
//     font-weight: bold;
//     color: #333;
//   }
// `;

// const Loading = styled.div`
//   text-align: center;
//   padding: 40px;
//   font-size: 1.5rem;
// `;

// const CourseArea = () => {
//   const [courseDetails, setCourseDetails] = useState(null);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/all-courses`
//         );
//         console.log(response);
//         setCourseDetails(response.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCourseDetails();
//   }, []);

//   if (!courseDetails) {
//     return <Loading>Loading...</Loading>;
//   }

//   return (
//     <CourseAreaWrapper>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="section-title mb-65 text-center">
//               <h2 className="tp-section-title mb-20">Related Courses</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {courseDetails.map((item, i) => (
//             <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-4">
//               <CourseCard>
//                 <CourseThumb>
//                   <Link
//                     href={{
//                       pathname: `/course-details/${item.id}`,
//                       query: {
//                         trainer_id: item.trainer_id,
//                         course_banner_image: item.course_banner_image,
//                       },
//                     }}
//                     as={`/course-details/${item.id}`}
//                   >
//                     <img
//                       src={
//                         item.course_banner_image
//                           ? `https://api.novajobs.us${item.course_banner_image}`
//                           : "/dummyBannerImage.png"
//                       }
//                       alt="course-thumb"
//                     />
//                   </Link>
//                   <CourseTag>
//                     <Link href={item.course_link || "#"}>
//                       <i className="fi fi-rr-heart"></i>
//                     </Link>
//                   </CourseTag>
//                 </CourseThumb>
//                 <CourseContent>
//                   <div className="category">
//                     <ul className="list-inline">
//                       <li className="list-inline-item">
//                         <Link
//                           className={item.ct_color}
//                           href={{
//                             pathname: `/course-details/${item.id}`,
//                             query: {
//                               trainer_id: item.trainer_id,
//                               course_banner_image: item.course_banner_image,
//                             },
//                           }}
//                           as={`/course-details/${item.id}`}
//                         >
//                           {item.course_title}
//                         </Link>
//                       </li>
//                       <li className="list-inline-item">
//                         <Link
//                           className={item.cn_color}
//                           href={item.course_link || "#"}
//                         >
//                           {item.category}
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="title">
//                     <Link href={item.course_link || "#"}>{item.title}</Link>
//                   </div>
//                   <div className="meta">
//                     <div>
//                       <img
//                         src="/assets/img/icon/c-meta-01.png"
//                         alt="meta-icon"
//                       />{" "}
//                       <span>{item.enrolled_student_count}</span>
//                     </div>
//                     <div>
//                       <img
//                         src="/assets/img/icon/c-meta-02.png"
//                         alt="meta-icon"
//                       />{" "}
//                       <span>{item.time_spent_on_course}</span>
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <div className="rating">
//                       <span>{item.start_text}</span>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-rs-star"></i>
//                     </div>
//                     <div className="pricing">${item.course_price}</div>
//                   </div>
//                 </CourseContent>
//               </CourseCard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </CourseAreaWrapper>
//   );
// };

// // export default CourseArea;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import dummyBannerImage from 'public/dummyBannerImage.png';

// // Helper function to generate random colors
// const getRandomColor = () => {
//   const colors = [
//     "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5",
//     "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50",
//     "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800"
//   ];
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// // Styled Components
// const CourseAreaWrapper = styled.section`
//   margin-bottom: 80px;
//   background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
//   padding: 50px 0;
// `;

// const CourseCard = styled.div`
//   background-color: white;
//   border-radius: 15px;
//   overflow: hidden;
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
//   }
// `;

// const CourseThumb = styled.div`
//   position: relative;
//   width: 100%;
//   height: 250px;
//   overflow: hidden;
//   border-bottom: 2px solid #f0f0f0;

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.3s ease-in-out;
//   }

//   &:hover img {
//     transform: scale(1.05);
//   }
// `;

// const CourseTag = styled.div`
//   position: absolute;
//   top: 15px;
//   right: 15px;

//   i {
//     font-size: 1.5rem;
//     color: #fff;
//     background-color: rgba(0, 0, 0, 0.8);
//     border-radius: 50%;
//     padding: 10px;
//     transition: background-color 0.3s ease-in-out;
    
//     &:hover {
//       background-color: #007bff;
//     }
//   }
// `;

// const CourseContent = styled.div`
//   padding: 25px;
// `;

// const CategoryBox = styled.div`
//   display: inline-block;
//   padding: 5px 10px;
//   border-radius: 5px;
//   background-color: ${getRandomColor()};
//   color: white;
//   font-weight: bold;
//   font-size: 0.85rem;
//   margin-bottom: 15px;
//   transition: background-color 0.3s ease-in-out;

//   a {
//     text-decoration: none;
//     color: white;
//   }
// `;

// const Title = styled.div`
//   margin-bottom: 20px;
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #333;

//   a {
//     text-decoration: none;
//     color: inherit;
//     transition: color 0.3s ease-in-out;

//     &:hover {
//       color: #007bff;
//     }
//   }
// `;

// const Meta = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 15px;
//   color: #666;

//   img {
//     margin-right: 5px;
//   }
// `;

// const Rating = styled.div`
//   display: flex;
//   align-items: center;

//   i {
//     color: #ffc107;
//   }

//   p {
//     margin-left: 5px;
//     color: #666;
//   }
// `;

// const Pricing = styled.div`
//   font-size: 1.5rem;
//   font-weight: bold;
//   color: #333;
// `;

// const Loading = styled.div`
//   text-align: center;
//   padding: 40px;
//   font-size: 1.5rem;
// `;

// const CourseArea = () => {
//   const [courseDetails, setCourseDetails] = useState(null);

//   useEffect(() => {
//     const fetchCourseDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/all-courses`
//         );
//         console.log(response);
//         setCourseDetails(response.data.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchCourseDetails();
//   }, []);

//   if (!courseDetails) {
//     return <Loading>Loading...</Loading>;
//   }

//   return (
//     <CourseAreaWrapper>
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="section-title mb-65 text-center">
//               <h2 className="tp-section-title mb-20">Related Courses</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           {courseDetails.map((item, i) => (
//             <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-4">
//               <CourseCard>
//                 <CourseThumb>
//                   <Link
//                     href={{
//                       pathname: `/course-details/${item.id}`,
//                       query: {
//                         trainer_id: item.trainer_id,
//                         course_banner_image: item.course_banner_image,
//                       },
//                     }}
//                     as={`/course-details/${item.id}`}
//                   >
//                     <img
//                       src={
//                         item.course_banner_image
//                           ? `https://api.novajobs.us${item.course_banner_image}`
//                           : "/dummyBannerImage.png"
//                       }
//                       alt="course-thumb"
//                     />
//                   </Link>
//                   <CourseTag>
//                     <Link href={item.course_link || "#"}>
//                       <i className="fi fi-rr-heart"></i>
//                     </Link>
//                   </CourseTag>
//                 </CourseThumb>
//                 <CourseContent>
//                  <Link
//                    href={{
//                     pathname: `/course-details/${item.id}`,
//                     query: {
//                       trainer_id: item.trainer_id,
//                       course_banner_image: item.course_banner_image,
//                     },
//                   }}
//                   as={`/course-details/${item.id}`}
//                  >
//                   <p>{item.course_title} </p>
//                  </Link>
//                   <CategoryBox>
//                     <Link
//                       className={item.cn_color}
//                       href={item.course_link || "#"}
//                     >
//                       {item.category}
//                     </Link>
//                   </CategoryBox>
//                   <Title>
//                     <Link href={item.course_link || "#"}>{item.title}</Link>
//                   </Title>
//                   <Meta>
//                     <div>
//                       <img
//                         src="/assets/img/icon/c-meta-01.png"
//                         alt="meta-icon"
//                       />{" "}
//                       <span>{item.enrolled_student_count}</span>
//                     </div>
//                     <div>
//                       <img
//                         src="/assets/img/icon/c-meta-02.png"
//                         alt="meta-icon"
//                       />{" "}
//                       <span>{item.time_spent_on_course}</span>
//                     </div>
//                   </Meta>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <Rating>
//                       <span>{item.start_text}</span>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-ss-star"></i>
//                       <i className="fi fi-rs-star"></i>
//                     </Rating>
//                     <Pricing>${item.course_price}</Pricing>
//                   </div>
//                 </CourseContent>
//               </CourseCard>
//             </div>
//           ))}
//         </div>
//       </div>
//     </CourseAreaWrapper>
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
              <h2 className="tp-section-title mb-20">Related Courses</h2>
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
                    <Link href={item.course_link || "#"}>{item.course_title}</Link>
                  </Title>
                  <CategoryBox>
                    <Link
                      className={item.cn_color}
                      href={item.course_link || "#"}
                    >
                      {item.category}
                    </Link>
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
