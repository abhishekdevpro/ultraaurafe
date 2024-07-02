// components/CourseForm.js
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

function CourseForm() {
//   const [formData, setFormData] = useState({
//     courseName: "",
//     courseDescription: "",
//     courseDuration: ""
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/courses', formData);
//       if (response.status === 200) {
//         toast.success("Course created successfully!");
//       }
//     } catch (error) {
//       toast.error("Failed to create course.");
//     }
//   };

  return (
    <div className="container mt-5 mb-5">
      <h2 className=" text-center">Create a New Course</h2>
      <form className=" mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow" >
      <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Image url</label>
          <input 
            type="url" 
            className="form-control" 
            id="courseName" 
            name="courseName" 
            // value={formData.courseName} 
            // onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseName" 
            name="courseName" 
            // value={formData.courseName} 
            // onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Course Category</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseCategory" 
            name="courseCategory" 
            // value={formData.courseName} 
            // onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label" >Course Description</label>
          <textarea 
            // type="textarea" 
            className="form-control" 
            id="courseCategory" 
            name="courseCategory" 
            // value={formData.courseName} 
            // onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Number of classes</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseCategory" 
            name="courseCategory" 
            // value={formData.courseName} 
            // onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseName" className="form-label">Number of students allowed</label>
          <input 
            type="text" 
            className="form-control" 
            id="courseCategory" 
            name="courseCategory" 
            // value={formData.courseName} 
            // onChange={handleChange} 
            required 
          />
        </div>
        
        {/* <div className="mb-3">
          <label htmlFor="courseDescription" className="form-label">Course Description</label>
          <textarea 
            className="form-control" 
            id="courseDescription" 
            name="courseDescription" 
            // value={formData.courseDescription} 
            // onChange={handleChange} 
            required 
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="courseDuration" className="form-label">Course Price ($)</label>
          <input 
            type='number' 
            className="form-control" 
            id="courseDuration" 
            name="courseDuration" 
            // value={formData.courseDuration} 
            // onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-success text-center justify-content-center d-flex ">Submit</button>
      </form>
    </div>
  );
}

export default CourseForm;
