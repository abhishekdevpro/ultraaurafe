import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Lecture = () => {
  const [lecture_name, setlecture_name] = useState("");
  const [files, setFiles] = useState([]);
  const [lecture_resources, setlecture_resources] = useState(null); // Changed to null to handle file object
  const [lecture_resources_links, setlecture_resources_links] = useState("");
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

  const handlelecture_resourcesChange = (e) => {
    // Update lecture_resources state with the file object
    setlecture_resources(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("lecture_name", lecture_name);
    Array.from(files).forEach((file) => {
      formData.append("lecture_location", file);
    });

    if (lecture_resources) {
      formData.append("lecture_resources_pdf", lecture_resources); // Append the lecture_resources file
    }

    formData.append("lecture_resources_links", lecture_resources_links);

    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${courseId}/${sectionId}/upload`,
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );

      if (response.data.message === "Lecture created successfully") {
        toast.success("Lecture added successfully!");
        router.push(`/trainer/edit-course/${courseId}`);
        // Clear form fields
        setlecture_name("");
        setFiles([]);
        setlecture_resources(null);
        setlecture_resources_links("");
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
          <label htmlFor="lecture_name" className="form-label">
            Lecture Name:
          </label>
          <input
            id="lecture_name"
            type="text"
            value={lecture_name}
            onChange={(e) => setlecture_name(e.target.value)}
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
          <label htmlFor="lecture_resources" className="form-label">
            lecture resources (PDF only):
          </label>
          <input
            id="lecture_resources"
            type="file"
            accept=".pdf" // Restricts file input to PDF only
            onChange={handlelecture_resourcesChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lecture_resources_links" className="form-label">
            lecture resources links:
          </label>
          <input
            id="lecture_resources_links"
            type="text"
            value={lecture_resources_links}
            onChange={(e) => setlecture_resources_links(e.target.value)}
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
