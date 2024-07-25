import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Lecture = () => {
  const [lectureName, setLectureName] = useState("");
  const [files, setFiles] = useState([]);
  const [resource, setResource] = useState("");
  const [links, setLinks] = useState("");
  const router = useRouter();
  const { courseId, sectionId } = router.query;

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();

    formData.append("lecture_name", lectureName);
    Array.from(files).forEach(file => {
      formData.append("files", file);
    });
    formData.append("resource", resource);
    formData.append("links", links);

    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${courseId}/${sectionId}/upload`,
        formData,
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'multipart/form-data'
          }
        }
      );

      
      if (response.data.message === "Lecture created successfully") {
        toast.success("Lecture added successfully!");
        router.push(`/leacturelist?courseId=${courseId}`);
        // Clear form fields
        setLectureName("");
        setFiles([]);
        setResource("");
        setLinks("");
      } else {
        toast.error("Failed to add lecture.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the lecture.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Add Lecture</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="lectureName" className="form-label">Lecture Name:</label>
          <input
            id="lectureName"
            type="text"
            value={lectureName}
            onChange={(e) => setLectureName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="files" className="form-label">Files:</label>
          <input
            id="files"
            type="file"
            multiple
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resource" className="form-label">Resource:</label>
          <input
            id="resource"
            type="text"
            value={resource}
            onChange={(e) => setResource(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="links" className="form-label">Links:</label>
          <input
            id="links"
            type="text"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            className="form-control"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add Lecture
        </button>
      </form>
    </div>
  );
};

export default Lecture;
