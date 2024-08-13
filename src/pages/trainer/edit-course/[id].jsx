// import SidebarLayout from "@/src/common/sidebar-layout";
// import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
// import WrapperFour from "@/src/layout/wrapper-4";
// import axios from "axios";
// import { useRouter } from "next/router";
// import React, { useEffect, useState } from "react";

// const EditCourse = () => {
//   const [sections, setSections] = useState([]);
//   const [collapsedSections, setCollapsedSections] = useState(
//     sections.reduce((acc, _, index) => {
//       acc[index] = true; // Start with all sections collapsed
//       return acc;
//     }, {})
//   );
//   const router = useRouter();
//   const { id, data } = router.query;

//   const toggleCollapse = (sectionIndex) => {
//     setCollapsedSections((prev) => ({
//       ...prev,
//       [sectionIndex]: !prev[sectionIndex],
//     }));
//   };

//   const [courseData, setCourseData] = useState(null);

//   useEffect(() => {
//     if (data) {
//       const decodedData = JSON.parse(decodeURIComponent(data));
//       setCourseData(decodedData);
//     }
//   }, [data]);

//   useEffect(() => {
//     if (id !== undefined) {
//       const fetchCourseListData = async () => {
//         try {
//           const token = localStorage.getItem("token");
//           if (!token) {
//             throw new Error("Token not found in localStorage");
//           }

//           const response = await axios.get(
//             ` https://api.novajobs.us/api/trainers/course-details/${id}`,
//             {
//               headers: {
//                 Authorization: token,
//               },
//             }
//           );

//           if (response.data.code == 200 && response.data.status === "success") {
//             setSections(response?.data?.data || []);
//           } else {
//             console.error("Invalid response from API:", response.data);
//             setSections([]);
//           }
//         } catch (error) {
//           console.error("Error fetching course list data:", error);
//         }
//       };
//       fetchCourseListData();
//     }
//   }, [id]);

//   const handleAddSection = () => {
//     router.push(`/trainer/add-section/${id}`);
//   };
//   const handleEditCourse = () => {
//     router.push(`/trainer/course-update/${id}`);
//   };
//   const handleAddLecture = (section) => {
//     router.push(`/trainer/add-lecture/${id}-${section.id}`);
//   };
//   const handleEditSection = (section) => {
//     sessionStorage.setItem("sectionData", JSON.stringify(section));
//     router.push(`/trainer/edit-section/${id}-${section.id}`);
//   };
//   const handleEditLecture = (item) => {
//     sessionStorage.setItem("lectureData", JSON.stringify(item));
//     router.push(`/trainer/edit-lecture/${id}-${item.id}`);
//   };

//   return (
//     <WrapperFour>
//       <Breadcrumb title="Edit Course" subtitle="Edit Course" isDbbl="Course" />

//       <SidebarLayout>
//         <main className="col-sm-10 p-0">
//           <section
//             className="course-list-area pb-120 wow fadeInUp"
//             data-wow-duration=".8s"
//             data-wow-delay=".2s"
//           >
//             <div className="container">
//               <div className="row">
//                 <div className="col-lg-12">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <h3 className="tp-section-title">Course Name</h3>
//                     <button
//                       className="btn btn-primary"
//                       onClick={handleEditCourse}
//                     >
//                       Edit Course
//                     </button>
//                     <button
//                       className="btn btn-primary"
//                       onClick={handleAddSection}
//                     >
//                       + Add Section
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-lg-12">
//                   <div className="course-details">
//                     {sections.length > 0 &&
//                       sections?.map((section, sectionIndex) => (
//                         <div key={sectionIndex} className="section-item mb-6">
//                           <div className="flex flex-col gap-4 mb-4">
//                             <h4 className="tp-course-name">
//                               Section: <span>{section.section_name}</span>
//                             </h4>
//                             <div className="flex gap-4 mb-2">
//                               <button
//                                 className="btn btn-success"
//                                 onClick={() => handleEditSection(section)}
//                               >
//                                 📝 Edit Section
//                               </button>{" "}
//                               <button
//                                 className="btn btn-warning"
//                                 onClick={() => handleAddLecture(section)}
//                               >
//                                 ➕ Add Lecture
//                               </button>{" "}
//                               <button
//                                 className="btn btn-info"
//                                 onClick={() => toggleCollapse(sectionIndex)}
//                               >
//                                 {collapsedSections[sectionIndex]
//                                   ? "🔽 Show Lectures"
//                                   : "🔼 Hide Lectures"}
//                               </button>
//                             </div>

//                             {!collapsedSections[sectionIndex] && (
//                               <div className="flex flex-col gap-2">
//                                 {section?.lectures?.length > 0 &&
//                                   section.lectures.map(
//                                     (lecture, lectureIndex) => (
//                                       <div
//                                         key={lectureIndex}
//                                         className="lecture-item"
//                                       >
//                                         <h5 className="tp-lecture-name">
//                                           Lecture:{" "}
//                                           <span>{lecture.lecture_name}</span>
//                                         </h5>
//                                         <div className="flex gap-4">
//                                           <button
//                                             className="btn btn-success"
//                                             onClick={() =>
//                                               handleEditLecture(lecture)
//                                             }
//                                           >
//                                             Edit Lecture
//                                           </button>{" "}
//                                           <button className="btn btn-warning">
//                                             Delete Lecture
//                                           </button>
//                                         </div>
//                                       </div>
//                                     )
//                                   )}
//                               </div>
//                             )}
//                           </div>
//                         </div>
//                       ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </main>
//       </SidebarLayout>
//     </WrapperFour>
//   );
// };

// export default EditCourse;

import SidebarLayout from "@/src/common/sidebar-layout";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import WrapperFour from "@/src/layout/wrapper-4";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// Styled Components
const Container = styled.div`
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    button {
      margin-bottom: 0.5rem;
    }
  }
`;

const SectionItem = styled.div`
  margin-bottom: 1.5rem;
`;

const CourseName = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
`;

const LectureItem = styled.div`
  margin-bottom: 1rem;
`;

const LectureName = styled.h5`
  font-size: 1rem;
  font-weight: 500;
`;

const StyledButton = styled(Button)`
  margin-right: 0.5rem;
`;

const CollapsibleContent = styled.div`
  padding: 0.5rem 0;
`;

const EditCourse = () => {
  const [sections, setSections] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({});
  const [courseTitle, setCourseTitle] = useState("");
  const router = useRouter();
  const { id, data } = router.query;

  useEffect(() => {
    if (data) {
      const decodedData = JSON.parse(decodeURIComponent(data));
      sessionStorage.setItem("courseData", JSON.stringify(decodedData));
    }
  }, [data]);

  useEffect(() => {
    const storedCourseData = sessionStorage.getItem("courseData");
    if (storedCourseData) {
      const courseData = JSON.parse(storedCourseData);
      setCourseTitle(courseData.course_title);
    }
  }, []);

  useEffect(() => {
    if (id !== undefined) {
      const fetchCourseListData = async () => {
        try {
          const token = localStorage.getItem("trainerToken");
          if (!token) {
            throw new Error("Token not found in localStorage");
          }

          const response = await axios.get(
            `https://api.novajobs.us/api/trainers/course-details/${id}`,
            {
              headers: {
                Authorization: token,
              },
            }
          );

          if (response.data.code === 200 && response.data.status === "success") {
            setSections(response?.data?.data || []);
          } else {
            console.error("Invalid response from API:", response.data);
            setSections([]);
          }
        } catch (error) {
          console.error("Error fetching course list data:", error);
        }
      };
      fetchCourseListData();
    }
  }, [id]);

  const toggleCollapse = (sectionIndex) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  const handleAddSection = () => {
    router.push(`/trainer/add-section/${id}`);
  };
  const handleEditCourse = () => {
    router.push(`/trainer/course-update/${id}`);
  };
  const handleAddLecture = (section) => {
    router.push(`/trainer/add-lecture/${id}-${section.id}`);
  };
  const handleEditSection = (section) => {
    sessionStorage.setItem("sectionData", JSON.stringify(section));
    router.push(`/trainer/edit-section/${id}-${section.id}`);
  };
  const handleEditLecture = (item) => {
    sessionStorage.setItem("lectureData", JSON.stringify(item));
    router.push(`/trainer/edit-lecture/${id}-${item.id}`);
  };

  return (
    <WrapperFour>
      <Breadcrumb title="Edit Course" subtitle="Edit Course" isDbbl="Course" />

      <SidebarLayout>
        <main className="col-sm-10 p-0">
          <Container>
            <Header>
              <CourseName>{courseTitle}</CourseName>
              <div>
                <StyledButton variant="primary" onClick={handleEditCourse}>
                  Edit Course
                </StyledButton>
                <StyledButton variant="primary" onClick={handleAddSection}>
                  + Add Section
                </StyledButton>
              </div>
            </Header>

            <section className="course-list-area pb-120 wow fadeInUp">
              {sections.length > 0 &&
                sections.map((section, sectionIndex) => (
                  <SectionItem key={sectionIndex}>
                    <div className="flex flex-col gap-4 mb-4">
                      <CourseName>
                        Section: <span>{section.section_name}</span>
                      </CourseName>
                      <div className="flex gap-4 mb-2">
                        <StyledButton
                          variant="success"
                          onClick={() => handleEditSection(section)}
                        >
                          📝 Edit Section
                        </StyledButton>
                        <StyledButton
                          variant="warning"
                          onClick={() => handleAddLecture(section)}
                        >
                          ➕ Add Lecture
                        </StyledButton>
                        <StyledButton
                          variant="info"
                          onClick={() => toggleCollapse(sectionIndex)}
                        >
                          {collapsedSections[sectionIndex]
                            ? "🔽 Show Lectures"
                            : "🔼 Hide Lectures"}
                        </StyledButton>
                      </div>

                      {!collapsedSections[sectionIndex] && (
                        <CollapsibleContent>
                          {section?.lectures?.length > 0 &&
                            section.lectures.map((lecture, lectureIndex) => (
                              <LectureItem key={lectureIndex}>
                                <LectureName>
                                  Lecture: <span>{lecture.lecture_name}</span>
                                </LectureName>
                                <div className="flex gap-4">
                                  <StyledButton
                                    variant="success"
                                    onClick={() => handleEditLecture(lecture)}
                                  >
                                    Edit Lecture
                                  </StyledButton>
                                  <StyledButton variant="warning">
                                    Delete Lecture
                                  </StyledButton>
                                </div>
                              </LectureItem>
                            ))}
                        </CollapsibleContent>
                      )}
                    </div>
                  </SectionItem>
                ))}
            </section>
          </Container>
        </main>
      </SidebarLayout>
    </WrapperFour>
  );
};

export default EditCourse;
