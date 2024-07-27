import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const EditLecture = () => {
  const [lectureName, setLectureName] = useState("");
  const [files, setFiles] = useState([]);
  const [resource, setResource] = useState(null);
  const [links, setLinks] = useState("");

  const router = useRouter();
  const { id } = router.query;
  console.log("iddd", id);
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleResourceChange = (e) => {
    setResource(e.target.files[0]);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchLectureById = async (lectureId) => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/get-lecture/${lectureId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data) {
          const data = response.data.data;
          setLectureName(data.lecture_name);
          setFiles([data.lecture_location]);
          setLinks(data.lecture_resources_link?.[0]);
          setResource(data.lecture_resources_pdf?.[0]);
        } else {
          toast.error("Failed to fetch lecture.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching the lecture.");
      }
    };
    if (id) {
      fetchLectureById(id);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("lecture_name", lectureName);
    files.forEach((file) => {
      formData.append("files", file);
    });

    if (resource) {
      formData.append("resource", resource);
    }

    formData.append("links", links);

    try {
      const response = await axios.patch(
        `https://api.novajobs.us/api/trainers/update-course/${id}`,
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
        // router.push(/leacturelist?courseId=${courseId});
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
      <h2>Edit Lecture</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="lectureName" className="form-label">
            Lecture Name:
          </label>
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
            accept=".pdf"
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
          Update Lecture
        </button>
      </form>
    </div>
  );
};

export default EditLecture;
