import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

const TrainerHompage = () => {
  const courses = [
    {
      id: 2003,
      title: "HTML Course",
      author: "Anil Sharma",
      created: "2023-07-28 09:00",
      updated: "2023-07-28 11:00",
      status: "In Progress",
    },
    {
      id: 2004,
      title: "CSS Course",
      author: "Anil Sharma",
      created: "2023-07-27 09:00",
      updated: "2023-07-27 11:00",
      status: "In Progress",
    },
    {
      id: 2005,
      title: "JavaScript Course",
      author: "Anil Sharma",
      created: "2023-07-26 09:00",
      updated: "2023-07-26 11:00",
      status: "In Progress",
    },
    {
      id: 2006,
      title: "React Course",
      author: "Anil Sharma",
      created: "2023-07-25 09:00",
      updated: "2023-07-25 11:00",
      status: "In Progress",
    },
  ];
  return (
    <div>
      <h1>Trainer Dashboard</h1>
      <Card className="mb-4 m-5">
        <div className="container mt-5">
          <h1>Courses List</h1>
          <p>
            Displaying {courses.length} of {courses.length} in total
          </p>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Course Title</th>
                <th>Author</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Duplicate</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, index) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td>{course.title}</td>
                  <td>{course.author}</td>
                  <td>{course.created}</td>
                  <td>{course.updated}</td>
                  <td>
                    <span
                      className={`badge ${
                        course.status === "In Progress"
                          ? "bg-success"
                          : "bg-secondary"
                      }`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td>
                    <Button variant="primary">Edit</Button>
                  </td>
                  <td>
                    <Button variant="success">Duplicate</Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default TrainerHompage;
