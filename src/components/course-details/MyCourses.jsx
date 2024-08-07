import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

const Container = styled.div`
  padding: 2rem;
`;

const CourseCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

const CourseImage = styled.img`
  width: 100%;
  height: 200px; /* Set a fixed height for the image */
  object-fit: cover; /* Ensure the image covers the container */
`;

const CourseContent = styled.div`
  padding: 1rem;
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

const CourseInfo = styled.div`
  font-size: 0.9rem;
  color: #555;

  p {
    margin: 0.5rem 0;
  }
`;

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://api.novajobs.us/api/students/mycourse-lists', {
          headers: {
            Authorization: `${token}`, // Add Bearer keyword
          },
        });
        setCourses(response.data.data);
      } catch (error) {
        setError('Error fetching courses');
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <Container className="container">
      <h2 className="mb-4">My Courses</h2>
      {courses.length > 0 ? (
        <div className="row">
          {courses.map(course => (
            <div className="col-md-4" key={course.id}>
              <CourseCard className="card">
                <CourseImage className="card-img-top" src={`https://api.novajobs.us${course.course_banner_image}`} alt={course.course_title} />
                <CourseContent className="card-body">
                  <CourseTitle className="card-title">
                    <Link href={`/course-details/${course.id}`}>
                    {course.course_title}
                    </Link> </CourseTitle>
                  <CourseDescription className="card-text">
                    {course.course_description}
                  </CourseDescription>
                  <CourseInfo>
                    <p><strong>Instructor:</strong> {course.trainer_first_name} {course.trainer_last_name}</p>
                    <p><strong>Language:</strong> {course.course_language}</p>
                    <p><strong>Level:</strong> {course.level}</p>
                    <p><strong>Category:</strong> {course.category}</p>
                    <p><strong>Time Spent:</strong> {course.time_spent_on_course}</p>
                    <p><strong>Price:</strong> ${course.course_price}</p>
                  </CourseInfo>
                </CourseContent>
              </CourseCard>
            </div>
          ))}
        </div>
      ) : (
        <p>No courses available</p>
      )}
    </Container>
  );
};

export default MyCourses;
