import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function CourseForm() {
  const [formData, setFormData] = useState({
    courseName: "",
    courseCategory: "",
    courseDescription: "",
    numberOfClasses: "",
    numberOfStudentsAllowed: "",
    coursePrice: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseId = "replace_with_course_id"; // Replace with actual course ID
  
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User not authenticated. Please login.");
        return;
      }
  
      const response = await axios.put(
        `https://api.novajobs.us/api/trainers/update-course/${courseId}`,
        formData,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'application/json',
          },
        }
      );
  
      if (response.status === 200) {
        toast.success("Course updated successfully!");
        // Optionally, reset the form or navigate to another page
      } else {
        toast.error("Failed to update course.");
        console.error('Error updating course:', response.data);
      }
    } catch (error) {
      toast.error("Failed to update course.");
      console.error('Error updating course:', error);
    }
  };
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Update Course</h2>
      <form className="mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Updated Course Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseName" 
            name="courseName" 
            value={formData.courseName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseCategory" className="form-label">Updated Course Category</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseCategory" 
            name="courseCategory" 
            value={formData.courseCategory} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseDescription" className="form-label">Updated Course Description</label>
          <textarea 
            className="form-control" 
            id="courseDescription" 
            name="courseDescription" 
            value={formData.courseDescription} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfClasses" className="form-label">Updated Number of Classes</label>
          <input 
            type="text" 
            className="form-control" 
            id="numberOfClasses" 
            name="numberOfClasses" 
            value={formData.numberOfClasses} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfStudentsAllowed" className="form-label">Updated Number of Students Allowed</label>
          <input 
            type="text" 
            className="form-control" 
            id="numberOfStudentsAllowed" 
            name="numberOfStudentsAllowed" 
            value={formData.numberOfStudentsAllowed} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coursePrice" className="form-label">Updated Course Price ($)</label>
          <input 
            type='number' 
            className="form-control" 
            id="coursePrice" 
            name="coursePrice" 
            value={formData.coursePrice} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default CourseForm;
