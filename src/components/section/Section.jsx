import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { useRouter } from "next/router";

// Set the app element for react-modal
Modal.setAppElement('#__next');

const Section = () => {
  const [sectionName, setSectionName] = useState("");
  const [sectionObjective, setSectionObjective] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [sectionId, setSectionId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch sections when the component mounts or after adding a section
    const fetchSections = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("https://api.novajobs.us/api/trainers/1/sections", {
          headers: {
            'Authorization': token
          }
        });
        if (response.data.code === 200) {
          setSections(response.data.data);
        } else {
          toast.error("Failed to fetch sections.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching sections.");
      }
    };

    fetchSections();
  }, [isSuccess]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/1/section",
        {
          section_name: sectionName,
          section_objective: sectionObjective
        },
        {
          headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.code === 200) {
        setSectionId(response.data.data.id);
        setIsSuccess(true);
        setIsModalOpen(true);
        toast.success("Section added successfully!");
      } else {
        toast.error("Failed to add section.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the section.");
    }
  };

  const handleAddAnotherSection = () => {
    setIsSuccess(false);
    setIsModalOpen(false);
    setSectionName("");
    setSectionObjective("");
  };

  const handleAddLecture = () => {
    if (sectionId) {
      router.push(`/leacture?sectionId=${sectionId}&courseId=1`);
    }
  };

  return (
    <div className="container my-5">
      {/* Form for adding section */}
      {!isSuccess && (
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="sectionName" className="form-label">Section Name:</label>
            <input
              id="sectionName"
              type="text"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sectionObjective" className="form-label">Section Objective:</label>
            <textarea
              id="sectionObjective"
              value={sectionObjective}
              onChange={(e) => setSectionObjective(e.target.value)}
              required
              className="form-control"
            />
          </div>
          <button
            type="submit"
            className="btn btn-warning "
          >
            (+) Add Section
          </button>
        </form>
      )}

      {/* Table to display sections */}
      <div className="mt-6">
        <h2 className="mb-4">Sections List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Section Name</th>
              <th>Objective</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {sections.map((section) => (
              <tr key={section.id}>
                <td>{section.section_name}</td>
                <td>{section.section_objective}</td>
                <td>{new Date(section.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for success message */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Section Added"
    
        className="bg-light p-4 rounded-lg shadow-lg max-w-sm mx-auto mt-80 pt-80"
        closeTimeoutMS={200}
      >
        <div className="text-center mt-80">
          <h1 className="h1 m-4">Section added successfully!!!  🎉</h1>
          <div className="mt-3 m-5 ">
            <button
              onClick={handleAddAnotherSection}
              className="btn btn-success me-2 mx-3 mt-5 p-4"
            >
              📌 Add Another Section
            </button>
            <button
              onClick={handleAddLecture}
              className="btn btn-warning mx-3 text-white p-4"
            >
             📖 Add Lecture to this Section
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Section;
