import { getformatedDateTime } from "@/utils/utils";
import { useRouter } from "next/router";
import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaCalendarAlt } from "react-icons/fa";

const CourseTable = ({ courses }) => {
  const router = useRouter();
  const handleEdit = (item) => {
    sessionStorage.setItem("courseData", JSON.stringify(item));
    router.push(`/trainer/edit-course/${item.id}`);
    // router.push(` /trainer/edit-course/${item.id}`);
    // router.push(` /trainer/edit-course`);
  };
  const handleDelete = (item) => {
    //make api call
  };
  const handleDuplicate = (item) => {
    //make api call
  };

  const cellStyle = { minWidth: "110px", textAlign: "center" };

  return (
    <div>
      <h3>Displaying 1-4 of {courses?.length} in total</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={cellStyle}>Id</th>
            <th style={cellStyle}>Course Title</th>
            <th style={cellStyle}>Course Price</th>
            <th style={cellStyle}>Created at</th>
            <th style={cellStyle}>Updated at</th>
            <th style={cellStyle}>Course Language</th>
            <th style={cellStyle}>Edit</th>
            <th style={cellStyle}>Duplicate</th>
            <th style={cellStyle}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {courses?.map((course) => (
            <tr key={course.id}>
              <td style={cellStyle}>{course.id}</td>
              <td style={cellStyle}>{course.course_title}</td>
              <td style={cellStyle}>{course.course_price}</td>
              <td style={cellStyle}>
                <FaCalendarAlt /> {getformatedDateTime(course.created_at)}
              </td>
              <td style={cellStyle}>
                <FaCalendarAlt /> {getformatedDateTime(course.updated_at)}
              </td>
              <td style={cellStyle}>{course.course_language}</td>
              <td style={cellStyle}>
                <Button onClick={() => handleEdit(course)} variant="primary">
                  Edit
                </Button>
              </td>
              <td style={cellStyle}>
                <Button
                  onClick={() => handleDuplicate(course)}
                  style={{ background: "#8cad2b" }}
                >
                  Duplicate
                </Button>
              </td>
              <td style={cellStyle}>
                <Button onClick={() => handleDelete(course)} variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CourseTable;
