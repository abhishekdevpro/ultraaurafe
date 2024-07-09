import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function CourseForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      course_Name: e.target.course_Name.value,
      courseCategory: e.target.courseCategory.value,
      course_description: e.target.course_description.value,
      numberOfClasses: e.target.numberOfClasses.value,
      numberOfStudentsAllowed: e.target.numberOfStudentsAllowed.value,
      coursePrice: e.target.coursePrice.value,
      // Add other fields as per your form
    };

    const token = localStorage.getItem('token'); // Example: Fetch token from local storage

    const config = {
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.post('https://api.novajobs.us/api/trainers/create-course', formData, config);
      if (response.status === 200 && response.data.status === 'success') {
        toast.success(response.data.message);
        // Optionally reset form fields after successful submission
        e.target.reset();
      } else {
        toast.error("Failed to create course.");
      }
    } catch (error) {
      toast.error("Failed to create course.");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Create a New Course</h2>
      <form className="mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Image URL</label>
          <input 
            type="url" 
            className="form-control" 
            id="courseName" 
            name="courseName" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="course_Name" 
            name="course_Name" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseCategory" className="form-label">Course Category</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseCategory" 
            name="courseCategory" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course_description" className="form-label">Course Description</label>
          <textarea 
            className="form-control" 
            id="course_description" 
            name="course_description" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfClasses" className="form-label">Number of Classes</label>
          <input 
            type="text" 
            className="form-control" 
            id="numberOfClasses" 
            name="numberOfClasses" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfStudentsAllowed" className="form-label">Number of Students Allowed</label>
          <input 
            type="text" 
            className="form-control" 
            id="numberOfStudentsAllowed" 
            name="numberOfStudentsAllowed" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coursePrice" className="form-label">Course Price ($)</label>
          <input 
            type='number' 
            className="form-control" 
            id="coursePrice" 
            name="coursePrice" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}

export default CourseForm;
