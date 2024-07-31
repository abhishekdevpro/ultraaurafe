import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Lecture = () => {
  const [LectureName, setLectureName] = useState("");
  const [files, setFiles] = useState([]);
  const [resource, setResource] = useState(null); // Changed to null to handle file object
  const [links, setLinks] = useState("");
  const router = useRouter();
  // const { courseId, sectionId } = router.query;
  const { id } = router.query;

  const [courseId, setCourseId] = useState(null);
  const [sectionId, setSectionId] = useState(null);

  useEffect(() => {
    if (id) {
      const [cId, sId] = id.split("-");
      setCourseId(cId);
      setSectionId(sId);
    }
  }, [id]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleResourceChange = (e) => {
    // Update resource state with the file object
    setResource(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("LectureName", LectureName);
    Array.from(files).forEach((file) => {
      formData.append("files", file);
    });

    if (resource) {
      formData.append("resource", resource); // Append the resource file
    }

    formData.append("links", links);

    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${courseId}/${sectionId}/upload`,
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.message === "Lecture created successfully") {
        toast.success("Lecture added successfully!");
        router.push(`/trainer/edit-course/${courseId}`);
        // Clear form fields
        setLectureName("");
        setFiles([]);
        setResource(null);
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
          <label htmlFor="LectureName" className="form-label">
            Lecture Name:
          </label>
          <input
            id="LectureName"
            type="text"
            value={LectureName}
            onChange={(e) => setLectureName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="files" className="form-label">
            Files:
          </label>
          <input
            id="files"
            type="file"
            multiple
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resource" className="form-label">
            Resource (PDF only):
          </label>
          <input
            id="resource"
            type="file"
            accept=".pdf" // Restricts file input to PDF only
            onChange={handleResourceChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="links" className="form-label">
            Links:
          </label>
          <input
            id="links"
            type="text"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Lecture
        </button>
      </form>
    </div>
  );
};

export default Lecture;
