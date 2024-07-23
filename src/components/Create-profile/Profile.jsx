import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

function CourseForm() {
  const handleSubmit = async (e) => {
  }

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center">Create your Profile</h2>
      <form className="mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow" >
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Profile Picture</label>
          <input 
            type="file" 
            className="form-control" 
            id="image" 
            name="image" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="Name" 
            name="Name" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Id</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="JobTitle" className="form-label">Job Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="JobTitle" 
            name="JobTitle" 
            required 
          />
        </div>
       <div className="mb-3">
          <label htmlFor="number" className="form-label">Phone Number</label>
          <input 
            type="number" 
            className="form-control" 
            id="number" 
            name="number" 
            required 
          />
        </div> 
        <div className="mb-3">
          <label htmlFor="Skill" className="form-label">Skill Level</label>
          <input 
            type="text" 
            className="form-control" 
            id="Skill" 
            name="Skill" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="introduction" className="form-label">About Yourself</label>
          <textarea 
            className="form-control" 
            id="introduction" 
            name="introduction" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="LinkedIn" className="form-label">LinkedIn</label>
          <input 
            type="url" 
            className="form-control" 
            id="LinkedIn" 
            name="LinkedIn" 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Experience" className="form-label">Enter Your Relevant Experience (in Years)</label>
          <input 
            type="number" 
            className="form-control" 
            id="Experience" 
            name="Experience" 
            required 
          />
        </div>
        
        <Link href='/instructor-profile'>
        <button type="submit" className="btn btn-success">Submit</button>
          </Link>
       
      </form>
    </div>
  );
}

export default CourseForm;
