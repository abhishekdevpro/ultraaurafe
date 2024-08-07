// // import { getformatedDateTime } from "@/utils/utils";
// // import { useRouter } from "next/router";
// // import React from "react";
// // import { Table, Button } from "react-bootstrap";
// // import { FaCalendarAlt } from "react-icons/fa";

// // const CourseTable = ({ courses }) => {
// //   const router = useRouter();
// //   const handleEdit = (item) => {
// //     sessionStorage.setItem("courseData", JSON.stringify(item));
// //     router.push(`/trainer/edit-course/${item.id}`);
// //     // router.push(` /trainer/edit-course/${item.id}`);
// //     // router.push(` /trainer/edit-course`);
// //   };
// //   const handleDelete = (item) => {
// //     //make api call
// //   };
// //   const handleDuplicate = (item) => {
// //     //make api call
// //   };

// //   const cellStyle = { minWidth: "110px", textAlign: "center" };

// //   return (
// //     <div>
// //       <h3>Displaying 1-4 of {courses?.length} in total</h3>
// //       <Table striped bordered hover>
// //         <thead>
// //           <tr>
// //             <th style={cellStyle}>Id</th>
// //             <th style={cellStyle}>Course Title</th>
// //             <th style={cellStyle}>Course Price</th>
// //             <th style={cellStyle}>Created at</th>
// //             <th style={cellStyle}>Updated at</th>
// //             <th style={cellStyle}>Course Language</th>
// //             <th style={cellStyle}>Edit</th>
// //             <th style={cellStyle}>Duplicate</th>
// //             <th style={cellStyle}>Delete</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {courses?.map((course) => (
// //             <tr key={course.id}>
// //               <td style={cellStyle}>{course.id}</td>
// //               <td style={cellStyle}>{course.course_title}</td>
// //               <td style={cellStyle}>{course.course_price}</td>
// //               <td style={cellStyle}>
// //                 <FaCalendarAlt /> {getformatedDateTime(course.created_at)}
// //               </td>
// //               <td style={cellStyle}>
// //                 <FaCalendarAlt /> {getformatedDateTime(course.updated_at)}
// //               </td>
// //               <td style={cellStyle}>{course.course_language}</td>
// //               <td style={cellStyle}>
// //                 <Button onClick={() => handleEdit(course)} variant="primary">
// //                   Edit
// //                 </Button>
// //               </td>
// //               <td style={cellStyle}>
// //                 <Button
// //                   onClick={() => handleDuplicate(course)}
// //                   style={{ background: "#8cad2b" }}
// //                 >
// //                   Duplicate
// //                 </Button>
// //               </td>
// //               <td style={cellStyle}>
// //                 <Button onClick={() => handleDelete(course)} variant="danger">
// //                   Delete
// //                 </Button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </Table>
// //     </div>
// //   );
// // };

// // export default CourseTable;

// import { getformatedDateTime } from "@/utils/utils";
// import axios from "axios";
// import { useRouter } from "next/router";
// import React from "react";
// import { Table, Button } from "react-bootstrap";
// import { FaCalendarAlt } from "react-icons/fa";
// import styled from "styled-components";

// const StyledTable = styled(Table)`
//   thead th {
//     background-color: #343a40;
//     color: white;
//   }
//   tbody tr:nth-of-type(odd) {
//     background-color: #f8f9fa;
//   }
//   tbody tr:hover {
//     background-color: #e9ecef;
//   }
// `;

// const Title = styled.h3`
//   margin-bottom: 20px;
//   color: #343a40;
// `;

// const CellStyle = styled.td`
//   min-width: 110px;
//   text-align: center;
//   vertical-align: middle;
// `;

// const CalendarIcon = styled(FaCalendarAlt)`
//   margin-right: 5px;
// `;

// const EditButton = styled(Button)`
//   background-color: #007bff;
//   border: none;
// `;

// const DuplicateButton = styled(Button)`
//   background-color: #8cad2b;
//   border: none;
// `;

// const DeleteButton = styled(Button)`
//   background-color: #dc3545;
//   border: none;
// `;

// const CourseTable = ({ courses }) => {
//   const router = useRouter();
//   const handleEdit = (item) => {
//     sessionStorage.setItem("courseData", JSON.stringify(item));
//     router.push(`/trainer/edit-course/${item.id}`);
//     // router.push(`/trainer/course-update/${item.id}`);
//   };

//   const handleDelete = (item) => {
//     // make API call
//   };

//   const handleDuplicate = async (item) => {
//     const token = localStorage.getItem('token')
//     const apiUrl = `https://api.novajobs.us/api/trainers/duplicate-course/${item.id}`;
  
//     try {
//       const response = await axios.post(apiUrl, {} , {
//         headers: {
//           "Authorization": `${token}`,
//         }
//       });
  
//       console.log("Course duplicated successfully:", response.data);
//     } catch (error) {
//       console.error("Error duplicating course:", error);
//     }
//   };

//   return (
//     <div>
//       <Title>Displaying 1-4 of {courses?.length} in total</Title>
//       <StyledTable striped bordered hover>
//         <thead>
//           <tr>
//             <th>Id</th>
//             <th>Course Title</th>
//             <th>Course Price</th>
//             <th>Created at</th>
//             <th>Updated at</th>
//             <th>Course Language</th>
//             <th>Edit</th>
//             <th>Duplicate</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses?.map((course) => (
//             <tr key={course.id}>
//               <CellStyle>{course.id}</CellStyle>
//               <CellStyle>{course.course_title}</CellStyle>
//               <CellStyle>{course.course_price}</CellStyle>
//               <CellStyle>
//                 <CalendarIcon />
//                 {getformatedDateTime(course.created_at)}
//               </CellStyle>
//               <CellStyle>
//                 <CalendarIcon />
//                 {getformatedDateTime(course.updated_at)}
//               </CellStyle>
//               <CellStyle>{course.course_language}</CellStyle>
//               <CellStyle>
//                 <EditButton onClick={() => handleEdit(course)}>Edit</EditButton>
//               </CellStyle>
//               <CellStyle>
//                 <DuplicateButton onClick={() => handleDuplicate(course)}>
//                   Duplicate
//                 </DuplicateButton>
//               </CellStyle>
//               {/* <CellStyle>
//                 <DeleteButton onClick={() => handleDelete(course)}>Delete</DeleteButton>
//               </CellStyle> */}
//             </tr>
//           ))}
//         </tbody>
//       </StyledTable>
//     </div>
//   );
// };

// export default CourseTable;

import { getformatedDateTime } from "@/utils/utils";
import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";
import styled from "styled-components";

const StyledTable = styled(Table)`
  thead th {
    background-color: #343a40;
    color: white;
  }
  tbody tr:nth-of-type(odd) {
    background-color: #f8f9fa;
  }
  tbody tr:hover {
    background-color: #e9ecef;
  }
`;

const Title = styled.h3`
  margin-bottom: 20px;
  color: #343a40;
`;

const CellStyle = styled.td`
  min-width: 110px;
  text-align: center;
  vertical-align: middle;
`;

const CalendarIcon = styled(FaCalendarAlt)`
  margin-right: 5px;
`;

const EditButton = styled(Button)`
  background-color: #007bff;
  border: none;
`;

const DuplicateButton = styled(Button)`
  background-color: #8cad2b;
  border: none;
`;

const DeleteButton = styled(Button)`
  background-color: #dc3545;
  border: none;
`;

const CourseTable = ({ courses }) => {
  const router = useRouter();

  const handleEdit = (item) => {
    sessionStorage.setItem("courseData", JSON.stringify(item));
    router.push(`/trainer/edit-course/${item.id}`);
  };

  const handleDelete = (item) => {
    // make API call
  };

  const handleDuplicate = async (item) => {
    const confirmed = window.confirm("Are you sure you want to duplicate this course?");
    if (confirmed) {
      const token = localStorage.getItem('token');
      const apiUrl = `https://api.novajobs.us/api/trainers/duplicate-course/${item.id}`;
    
      try {
        await axios.post(apiUrl, {}, {
          headers: {
            "Authorization": `${token}`,
          }
        });
    
        // Refresh the page to show the updated course list
        window.location.reload();
      } catch (error) {
        console.error("Error duplicating course:", error);
      }
    }
  };

  return (
    <div>
      <Title>Displaying 1-4 of {courses?.length} in total</Title>
      <StyledTable striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Course Title</th>
            <th>Course Price</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Course Language</th>
            <th>Edit</th>
            <th>Duplicate</th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((course) => (
            <tr key={course.id}>
              <CellStyle>{course.id}</CellStyle>
              <CellStyle>{course.course_title}</CellStyle>
              <CellStyle>{course.course_price}</CellStyle>
              <CellStyle>
                <CalendarIcon />
                {getformatedDateTime(course.created_at)}
              </CellStyle>
              <CellStyle>
                <CalendarIcon />
                {getformatedDateTime(course.updated_at)}
              </CellStyle>
              <CellStyle>{course.course_language}</CellStyle>
              <CellStyle>
                <EditButton onClick={() => handleEdit(course)}>Edit</EditButton>
              </CellStyle>
              <CellStyle>
                <DuplicateButton onClick={() => handleDuplicate(course)}>
                  Duplicate
                </DuplicateButton>
              </CellStyle>
              {/* <CellStyle>
                <DeleteButton onClick={() => handleDelete(course)}>Delete</DeleteButton>
              </CellStyle> */}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </div>
  );
};

export default CourseTable;
