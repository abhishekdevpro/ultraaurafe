// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import EditProfileModal from "./EditProfileModal";
// import Count from "@/src/common/count.jsx";
// import our_course_data from "@/src/data/our-course-data.js";

// const InstructorPortfolioArea = () => {
//   const router = useRouter();
//   const { id } = router.query; // Get trainerId from URL query parameters
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [profileData, setProfileData] = useState({});
//   const [CourseList , setCourseList] = useState([])
//   console.log(id)
//   useEffect(() => {
//     // Ensure id is available before making the request
//     if (id) {
//       const fetchProfileData = async () => {
//         try {
//           const token = localStorage.getItem("token");
//           const response = await axios.get(
//             `https://api.novajobs.us/api/trainers/trainer-profile/${id}`,
//             {
//               headers: {
//                 Authorization: token,
//               },
//             }
//           );
//           const data = response.data.data.trainer;
//           console.log(data)
//           setCourseList(response.data.data.courses)
//           setProfileData({
//             img: data.photo || "default-image.jpg",
//             name: `${data.first_name || "N/A"} ${data.last_name || "N/A"}`,
//             email: data.email || "N/A",
//             phone: data.phone || "N/A",
//             job_title: data.jobtitle || "N/A",
//             biography: data.biography || "N/A",
//             linkedin: data.linkedin || "N/A",
//             followers: data.followers || "N/A",
//             following: data.following || "N/A",
//             experiences_year: data.experiences_year || "N/A",
//             skill_level: data.skill_level || "N/A",
//             language: data.language || "N/A",
//           });
//         } catch (error) {
//           console.error("Error fetching the profile data:", error);
//         }
//       };

//       fetchProfileData();
//     }
//   }, [id]);
//   console.log(CourseList)
//   const handleOpenModal = () => setModalIsOpen(true);
//   const handleCloseModal = () => setModalIsOpen(false);
//   const handleSaveProfile = (updatedProfile) => setProfileData(updatedProfile);

//   const counter_data = [
//     {
//       id: 1,
//       icon: "fi fi-rr-user",
//       count_number: profileData.followers || 0,
//       thousand: "K",
//       title: "Worldwide Students",
//     },
//     {
//       id: 2,
//       icon: "fi fi-rr-document",
//       count_number: 35,
//       thousand: "",
//       title: "Professional Courses",
//     },
//     {
//       id: 3,
//       icon: "fi fi-rr-star",
//       count_number: 407,
//       thousand: "K",
//       title: "Beautiful Review",
//     },
//   ];

//   return (
//     <>
//       <section
//         className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
//         data-wow-duration=".8s"
//         data-wow-delay=".2s"
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-xl-4 col-lg-5">
//               <div className="instruc-sidebar mb-40">
//                 <div className="isntruc-side-thumb mb-30">
//                   <img src={`https://api.novajobs.us${profileData.img}`} alt="instructor-thumb" />
//                 </div>
//                 <div className="instructor-sidebar-widget">
//                   <div className="isntruc-side-content text-center">
//                     <h4 className="side-instructor-title mb-15">
//                       {profileData.name}
//                     </h4>
//                     <p>{profileData.biography}</p>
//                   </div>
//                   <div className="instruc-follower d-flex align-items-center justify-content-center mb-25">
//                     <div className="ins-followers ">
//                       <h4>{profileData.followers || "0"}</h4>
//                       <span>Followers</span>
//                     </div>
//                     <div className="ins-following">
//                       <h4>{profileData.following || "0"}</h4>
//                       <span>Following</span>
//                     </div>
//                   </div>

//                   <div className="cd-information instruc-profile-info mb-35">
//                     <ul>
//                       <li>
//                         <Link href="/create-course">
//                           <i className="fi fi-rr-briefcase"></i>{" "}
//                           <label>Create Course</label>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/course-update">
//                           <i className="fi fi-rr-briefcase"></i>{" "}
//                           <label>Update Course</label>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="/course-list">
//                           <i className="fi fi-rr-briefcase"></i>{" "}
//                           <label>Course List</label>
//                         </Link>
//                       </li>
//                       <li>
//                         <i className="fi fi-rr-briefcase"></i>{" "}
//                         <label>Job Title</label>{" "}
//                         <span>{profileData.job_title}</span>
//                       </li>
//                       <li>
//                         <i className="fi fi-rr-phone-call"></i>{" "}
//                         <label>Phone</label> <span>{profileData.phone}</span>
//                       </li>
//                       <li>
//                         <i className="fi fi-rr-envelope"></i>{" "}
//                         <label>Email</label> <span>{profileData.email}</span>
//                       </li>
//                       <li>
//                         <i className="fi fi-rr-time-forward"></i>{" "}
//                         <label>Experiences</label>{" "}
//                         <span>{profileData.experiences_year}</span>
//                       </li>
//                       <li>
//                         <i className="fi fi-rs-time-check"></i>{" "}
//                         <label>Skill Level</label>{" "}
//                         <span>{profileData.skill_level}</span>
//                       </li>
//                       <li>
//                         <i className="fi fi-br-comments"></i>{" "}
//                         <label>Language</label>{" "}
//                         <span>{profileData.language}</span>
//                       </li>
//                       <li>
//                         <i className="fa-brands fa-linkedin-in"></i>{" "}
//                         <label>LinkedIn</label>{" "}
//                         <span>{profileData.linkedin}</span>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="c-details-social">
//                     <h5 className="cd-social-title mb-25">Follow More:</h5>
//                     <div className="cd-social-icon">
//                       <a href="#">
//                         <i className="fa-brands fa-facebook-f"></i>
//                       </a>
//                       <a href="#">
//                         <i className="fa-brands fa-twitter"></i>
//                       </a>
//                       <a href="#">
//                         <i className="fa-brands fa-instagram"></i>
//                       </a>
//                       <a href="#">
//                         <i className="fa-brands fa-linkedin-in"></i>
//                       </a>
//                       <a href="#">
//                         <i className="fa-brands fa-youtube"></i>
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-xl-8 col-lg-7">
//               <div className="instructor-main-content ml-30 mb-40">
//                 <div className="instruc-biography mb-50">
//                   <h4 className="ins-bio-title mb-30">Biography</h4>
//                   <p>{profileData.biography}</p>
//                 </div>
//                 <div className="instruc-statics mb-20">
//                   <div className="row">
//                     {counter_data.map((item, i) => (
//                       <div key={i} className="col-xl-4 col-lg-6 col-md-4">
//                         <div className="isntruc-tp-counter mb-30">
//                           <h4 className="isntruc-tp-counter__title p-relative">
//                             <span className="counter">
//                               <Count
//                                 add_style={true}
//                                 number={item.count_number}
//                                 text={item.thousand}
//                                 style_3={true}
//                               />
//                             </span>
//                           </h4>
//                           <p>{item.title}</p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="instruc-course-list mb-20">
//                   <h4 className="course-title mb-35">Course List</h4>
//                   {/* <ul>
//                     {CourseList.map((item, i) => (
//                       <li key={i} className="single-course-item">
//                         <div className="single-course-thumb">
//                           <img src={item.img} alt="course-thumb" />
//                         </div>
//                         <div className="single-course-content">
//                           <h5>
//                             <Link href={`/course-details/${item.id}`}>
//                               {item.title}
//                             </Link>
//                           </h5>
//                           <p>{item.desc}</p>
//                         </div>
//                       </li>
//                     ))}
//                   </ul> */}
//                   <ul>
//           {CourseList.map((course, i) => (
//             <li key={i} className="single-course-item">
//               <div className="single-course-thumb">
//                 <img 
//                   src={course.course_banner_image ? `https://api.novajobs.us${course.course_banner_image}` : "/path/to/default/image.jpg"} 
//                   alt={course.course_title} 
//                 />
//               </div>
//               <div className="single-course-content">
//                 <h5>
//                   <Link href={`/course-details/${course.id}`}>
//                     {course.course_title}
//                   </Link>
//                 </h5>
//                 <p>{course.course_description}</p>
//                 <div className="course-info">
//                   <span>Level: {course.level}</span>
//                   <span>Language: {course.course_language}</span>
//                   <span>Category: {course.category}</span>
//                   <span>Price: ${course.course_price}</span>
//                   {course.discount_percent > 0 && (
//                     <span>Discounted Price: ${course.after_discount_price}</span>
//                   )}
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default InstructorPortfolioArea;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';
import EditProfileModal from "./EditProfileModal";
import Count from "@/src/common/count.jsx";

const CourseCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transform: translateY(-5px);
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 20px;
`;

const CourseTitle = styled.h5`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const CourseDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`;

const CourseInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  color: #444;
`;

const CourseInfoItem = styled.span`
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 20px;
`;

const PriceTag = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #28a745;
  margin-top: 10px;
`;

const DiscountedPrice = styled.span`
  color: #dc3545;
  text-decoration: line-through;
  margin-right: 10px;
`;

const InstructorPortfolioArea = () => {
  const router = useRouter();
  const { id } = router.query;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (id) {
      const fetchProfileData = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get(
            `https://api.novajobs.us/api/trainers/trainer-profile/${id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
          const data = response.data.data.trainer;
          setCourses(response.data.data.courses);
          setProfileData({
            img: data.photo || "default-image.jpg",
            name: `${data.first_name || "N/A"} ${data.last_name || "N/A"}`,
            email: data.email || "N/A",
            phone: data.phone || "N/A",
            job_title: data.jobtitle || "N/A",
            biography: data.biography || "N/A",
            linkedin: data.linkedin || "N/A",
            followers: data.followers || "N/A",
            following: data.following || "N/A",
            experiences_year: data.experiences_year || "N/A",
            skill_level: data.skill_level || "N/A",
            language: data.language || "N/A",
          });
        } catch (error) {
          console.error("Error fetching the profile data:", error);
        }
      };

      fetchProfileData();
    }
  }, [id]);

  const handleOpenModal = () => setModalIsOpen(true);
  const handleCloseModal = () => setModalIsOpen(false);
  const handleSaveProfile = (updatedProfile) => setProfileData(updatedProfile);

  const counter_data = [
    {
      id: 1,
      icon: "fi fi-rr-user",
      count_number: profileData.followers || 0,
      thousand: "K",
      title: "Worldwide Students",
    },
    {
      id: 2,
      icon: "fi fi-rr-document",
      count_number: 35,
      thousand: "",
      title: "Professional Courses",
    },
    {
      id: 3,
      icon: "fi fi-rr-star",
      count_number: 407,
      thousand: "K",
      title: "Beautiful Review",
    },
  ];

  return (
    <>
      <section className="instructor-portfolio pt-120 pb-80 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img src={`https://api.novajobs.us${profileData.img}`} alt="instructor-thumb" />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">{profileData.name}</h4>
                    <p>{profileData.biography}</p>
                  </div>
                  <div className="instruc-follower d-flex align-items-center justify-content-center mb-25">
                    <div className="ins-followers">
                      <h4>{profileData.followers || "0"}</h4>
                      <span>Followers</span>
                    </div>
                    <div className="ins-following">
                      <h4>{profileData.following || "0"}</h4>
                      <span>Following</span>
                    </div>
                  </div>

                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label>{" "}
                        <span>{profileData.job_title}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label> <span>{profileData.phone}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label> <span>{profileData.email}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Experiences</label>{" "}
                        <span>{profileData.experiences_year}</span>
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>Skill Level</label>{" "}
                        <span>{profileData.skill_level}</span>
                      </li>
                      <li>
                        <i className="fi fi-br-comments"></i>{" "}
                        <label>Language</label>{" "}
                        <span>{profileData.language}</span>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>{" "}
                        <label>LinkedIn</label>{" "}
                        <span>{profileData.linkedin}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">Follow More:</h5>
                    <div className="cd-social-icon">
                      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i className="fa-brands fa-twitter"></i></a>
                      <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                      <a href="#"><i className="fa-brands fa-youtube"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>
                  <p>{profileData.biography}</p>
                </div>
                <div className="instruc-statics mb-20">
                  <div className="row">
                    {counter_data.map((item, i) => (
                      <div key={i} className="col-xl-4 col-lg-6 col-md-4">
                        <div className="isntruc-tp-counter mb-30">
                          <h4 className="isntruc-tp-counter__title p-relative">
                            <span className="counter">
                              <Count
                                add_style={true}
                                number={item.count_number}
                                text={item.thousand}
                                style_3={true}
                              />
                            </span>
                          </h4>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="instruc-course-list mb-20">
                  <h4 className="course-title mb-35">Course List</h4>
                  <div className="row">
                    {courses.map((course, i) => (
                      <div key={i} className="col-md-6 mb-4">
                        <CourseCard>
                          <CourseImage 
                            src={course.course_banner_image ? `https://api.novajobs.us${course.course_banner_image}` : "/dummyBannerImage.png"} 
                            alt={course.course_title} 
                          />
                          <CourseContent>
                            <CourseTitle>
                              <Link href={`/course-details/${course.id}`}>
                                {course.course_title}
                              </Link>
                            </CourseTitle>
                            <CourseDescription>{course.course_description}</CourseDescription>
                            <CourseInfo>
                              <CourseInfoItem>Level: {course.level}</CourseInfoItem>
                              <CourseInfoItem>Language: {course.course_language}</CourseInfoItem>
                              <CourseInfoItem>Category: {course.category}</CourseInfoItem>
                            </CourseInfo>
                            <PriceTag>
                              {course.discount_percent > 0 && (
                                <DiscountedPrice>${course.course_price}</DiscountedPrice>
                              )}
                              ${course.after_discount_price || course.course_price}
                            </PriceTag>
                          </CourseContent>
                        </CourseCard>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorPortfolioArea;