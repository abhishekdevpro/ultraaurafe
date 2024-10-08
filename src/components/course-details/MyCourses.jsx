

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Link from "next/link";
// import { useRouter } from "next/router";

// const Container = styled.div`
//   padding: 2rem;
// `;

// const Section = styled.div`
//   margin-bottom: 2rem;
// `;

// const CourseCard = styled.div`
//   border: 1px solid #ddd;
//   border-radius: 0.5rem;
//   overflow: hidden;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   margin-bottom: 2rem;
//   cursor: pointer;
//   position: relative;
//   transition: transform 0.3s ease;

//   &:hover .course-info {
//     display: block;
//   }
// `;

// const CourseImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;

// const CourseContent = styled.div`
//   padding: 1rem;
// `;

// const CourseTitle = styled.h5`
//   font-size: 1.5rem;
//   margin-bottom: 1rem;
//   color: #333;
// `;

// const CourseDescription = styled.p`
//   font-size: 1rem;
//   color: #666;
//   margin-bottom: 1rem;
// `;

// const CourseInfo = styled.div`
//   font-size: 0.9rem;
//   color: #555;
//   display: none;
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(255, 255, 255, 0.9);
//   padding: 1rem;
//   box-sizing: border-box;
//   z-index: 10;

//   p {
//     margin: 0.5rem 0;
//   }
// `;

// const EnrollButton = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 0.5rem 1rem;
//   font-size: 1rem;
//   border-radius: 0.25rem;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const Header = styled.h2`
//   margin-bottom: 1rem;
// `;

// const SubHeader = styled.p`
//   margin-bottom: 2rem;
//   font-size: 1.1rem;
//   color: #555;

//   a {
//     color: #007bff;
//     text-decoration: none;

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const WelcomeMessage = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 2rem;
// `;

// const StudentImage = styled.img`
//   border-radius: 50%;
//   width: 80px;
//   height: 80px;
//   margin-right: 1rem;
//   border: 2px solid black;
// `;

// const StudentName = styled.h4`
//   margin: 0;
// `;

// const MyCourses = () => {
//   const [student, setStudent] = useState({ name: "", image: "" });
//   const [courses, setCourses] = useState([]);
//   const [error, setError] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const fetchStudentData = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.novajobs.us/api/student/me",
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         setStudent(response.data);
//       } catch (error) {
//         console.error("Error fetching student data:", error);
//       }
//     };

//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.novajobs.us/api/students/mycourse-lists",
//           {
//             headers: {
//               Authorization: `${token}`,
//             },
//           }
//         );
//         setCourses(response.data.data);
//       } catch (error) {
//         setError("Error fetching courses");
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchStudentData();
//     fetchCourses();
//   }, []);

//   // const fetchCourseDetails = async (courseId) => {
//   //   try {
//   //     const response = await axios.get(
//   //       `https://api.novajobs.us/api/trainers/course-details/${courseId}`,
//   //       {
//   //         headers: {
//   //           Authorization: `${localStorage.getItem("token")}`,
//   //         },
//   //       }
//   //     );
//   //     console.log(response.data);
//   //     router.push(`/course-details/${courseId}`);
//   //   } catch (error) {
//   //     console.error("Error fetching course details:", error);
//   //   }
//   // };

//   const handleEnroll = (courseId) => {
//     console.log(`Enrolled in course with ID: ${courseId}`);
//     fetchCourseDetails(courseId);
//   };

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>;
//   }
  
//   return (
//     <Container className="container">
//       <WelcomeMessage>
//         <StudentImage
//           src={`https://api.novajobs.us${student.image}`}
//           alt={student.name}
//         />
//         <StudentName>Welcome back, {student.name}</StudentName>
//       </WelcomeMessage>
//       {/* <Header>My Courses</Header> */}
//       {/* <SubHeader>
//         Start learning from over 220,000 courses today. When you purchase a
//         course, it will appear here. <Link href="/browse">Browse now.</Link>
//       </SubHeader> */}

//       <Section>
//         <h3 className="mb-4">Enrolled Courses</h3>
//         {courses.length > 0 ? (
//           <div className="row">
//             {courses.map((course) => (
//               <div className="col-md-4" key={course.id}>
//                 <CourseCard
//                   className="card"
//                   onClick={() => fetchCourseDetails(course.id)}
//                 >
//                   <CourseImage
//                     className="card-img-top"
//                     src={`https://api.novajobs.us${course.course_banner_image}`}
//                     alt={course.course_title}
//                   />
//                   <CourseContent className="card-body">
//                     <CourseTitle className="card-title">
//                       <Link href={`/course-details/${course.id}`}>
//                         {course.course_title}
//                       </Link>
//                     </CourseTitle>
//                     <CourseDescription className="card-text">
//                       {course.course_description}
//                     </CourseDescription>
//                     {/* <CourseInfo className="course-info">
//                       <p>
//                         <strong>Instructor:</strong> {course.trainer_first_name}{" "}
//                         {course.trainer_last_name}
//                       </p>
//                       <p>
//                         <strong>Language:</strong> {course.course_language}
//                       </p>
//                       <p>
//                         <strong>Level:</strong> {course.level}
//                       </p>
//                       <p>
//                         <strong>Category:</strong> {course.category}
//                       </p>
//                       <p>
//                         <strong>Time Spent:</strong>{" "}
//                         {course.time_spent_on_course}
//                       </p>
//                       <p>
//                         <strong>Price:</strong> ${course.course_price}
//                       </p>
//                       <p>
//                         <strong>Updated:</strong> {course.updated_date}
//                       </p>
//                       <p>
//                         <strong>Description:</strong> {course.course_description}
//                       </p>
//                     </CourseInfo> */}
//                     {/* <EnrollButton
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         handleEnroll(course.id);
//                       }}
//                     >
//                       Enroll
//                     </EnrollButton> */}
//                   </CourseContent>
//                 </CourseCard>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p>No enrolled courses available</p>
//         )}
//       </Section>
//     </Container>
//   );
// };

// export default MyCourses;


import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const CourseCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover .course-info {
    display: block;
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CourseContent = styled.div`
  padding: 1rem;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: top ; 
  gap:4px;
`;

const CourseTitle = styled.h5`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const CourseDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const EnrollButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }
`;

const WelcomeMessage = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const StudentImage = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  border: 2px solid black;
`;

const StudentName = styled.h4`
  margin: 0;
`;

const MyCourses = () => {
  const [student, setStudent] = useState({});
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/profile",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setStudent(response.data.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/mycourse-lists",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        setCourses(response.data.data);
      } catch (error) {
        setError("Error fetching courses");
        console.error("Error fetching courses:", error);
      }
    };

    fetchStudentData();
    fetchCourses();
  }, []);
  console.log(student,"student info")
  const fetchCourseDetails = async (courseId) => {
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/course-details/${courseId}`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      router.push(`/course-details/${courseId}`);
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }
  
  return (
    <>
       <Container className="container">
      <WelcomeMessage>
        <StudentImage
          src={`https://api.novajobs.us${student.photo}` || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YreOWfDX3kK-QLAbAL4ufCPc84ol2MA8Xg&s"}
          alt={student.name}
        />
        <StudentName>Welcome back, {student.first_name} {student.last_name}</StudentName>
      </WelcomeMessage>

      <Section>
        <h3 className="mb-4">Enrolled Courses</h3>
        {courses.length > 0 ? (
          <div className="row">
            {courses.map((course) => (
              <div className="col-md-4" key={course.id}>
                <CourseCard
                  className="card"
                  onClick={() => fetchCourseDetails(course.id)}
                >
                  <CourseImage
                    className="card-img-top"
                    src={`https://api.novajobs.us${course.course_banner_image}`}
                    alt={course.course_title}
                  />
                  <CourseContent className="card-body">
                    <CourseTitle className="card-title">
                      <Link href={`/course-details/${course.id}`}>
                        {course.course_title}
                      </Link>
                    </CourseTitle>
                    <CourseDescription className="card-text">
                      {course.course_description}
                    </CourseDescription>
                    {/* <EnrollButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnroll(course.id);
                      }}
                    >
                      Enroll
                    </EnrollButton> */}
                  </CourseContent>
                </CourseCard>
              </div>
            ))}
          </div>
        ) : (
          <p>No enrolled courses available</p>
        )}
      </Section>
    </Container>
    </>
  );
};

export default MyCourses;

