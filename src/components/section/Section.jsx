import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ModalPop from "react-modal";
import { useRouter } from "next/router";
import { Modal, Form, Button } from "react-bootstrap";
import SidebarLayout from "@/src/common/sidebar-layout";

ModalPop.setAppElement("#__next");

const Section = () => {
  const [sectionName, setSectionName] = useState("");
  const [sectionObjective, setSectionObjective] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [sectionId, setSectionId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editSectionName, setEditSectionName] = useState("");
  const [editSectionObjective, setEditSectionObjective] = useState("");
  const [sections, setSections] = useState([]);
  const [modalDimensions, setModalDimensions] = useState({
    width: "auto",
    height: "auto",
  });

  const router = useRouter();
  const tableRef = useRef(null);

  const path = router.asPath;
  const courseIdMatch = path.match(/course_id=(\d+)/);
  const trainerIdMatch = path.match(/trainer_id=(\d+)/);

  const course_id = courseIdMatch ? courseIdMatch[1] : null;
  const trainer_id = trainerIdMatch ? trainerIdMatch[1] : null;

  useEffect(() => {
    if (trainer_id) {
      const fetchSections = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get(
            `https://api.novajobs.us/api/trainers/${course_id}/section`,
            {
              headers: {
                Authorization: token,
              },
            }
          );
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
    }
  }, [trainer_id, isSuccess]);

  useEffect(() => {
    if (isEditModalOpen && tableRef.current) {
      const { offsetWidth, offsetHeight } = tableRef.current;
      setModalDimensions({
        width: `${offsetWidth}px`,
        height: `${offsetHeight}px`,
      });
    }
  }, [isEditModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${course_id}/section`,
        {
          section_name: sectionName,
          section_objective: sectionObjective,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
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
    if (sectionId && course_id) {
      router.push(`/lecture?sectionId=${sectionId}&courseId=${course_id}`);
    }
  };

  const handleEdit = (section) => {
    setEditSectionName(section.section_name);
    setEditSectionObjective(section.section_objective);
    setSectionId(section.id);
    setIsEditModalOpen(true);
  };

  const handleAdd = (section_id) => {
    // need to confirm where we should redirect onclick of add
    router.push(`/lecture?sectionId=${section_id}&courseId=${course_id}`);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await axios.patch(
        `https://api.novajobs.us/api/trainers/${course_id}/${sectionId}/section`,
        {
          section_name: editSectionName,
          section_objective: editSectionObjective,
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.code === 200) {
        setIsEditModalOpen(false);
        setIsSuccess(true);
        toast.success("Section updated successfully!");
        setSections(
          sections.map((section) =>
            section.id === sectionId
              ? {
                  ...section,
                  section_name: editSectionName,
                  section_objective: editSectionObjective,
                }
              : section
          )
        );
      } else {
        toast.error("Failed to update section.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the section.");
    }
  };
  return (
    <SidebarLayout>
      <main className="col-sm-10 p-4">
        {!isSuccess && (
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <label htmlFor="sectionName" className="form-label">
                Section Name:
              </label>
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
              <label htmlFor="sectionObjective" className="form-label">
                Section Objective:
              </label>
              <textarea
                id="sectionObjective"
                value={sectionObjective}
                onChange={(e) => setSectionObjective(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-warning">
              (+) Add Section
            </button>
          </form>
        )}

        <div className="mt-6">
          <h2 className="mb-4">Sections List</h2>
          <div className="table-container" ref={tableRef}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Section Name</th>
                  <th>Objective</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sections.map((section) => (
                  <tr key={section.id}>
                    <td>{section.section_name}</td>
                    <td>{section.section_objective}</td>
                    <td>{new Date(section.created_at).toLocaleDateString()}</td>
                    <td>
                      <button
                        className="btn btn-primary me-2"
                        onClick={() => handleEdit(section)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAdd(section.id)}
                      >
                        Add Lecture
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <ModalPop
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Section Added"
          className="bg-light p-4 rounded-lg shadow-lg max-w-md mx-auto my-10"
          closeTimeoutMS={200}
        >
          <div className="text-center">
            <h1 className="text-xl font-bold mb-4">
              Section added successfully!!! 🎉
            </h1>
            <div className="mt-4">
              <button
                onClick={handleAddAnotherSection}
                className="btn btn-success mx-2"
              >
                📌 Add Another Section
              </button>
              <button
                onClick={handleAddLecture}
                className="btn btn-warning mx-2 text-white"
              >
                📖 Add Lecture to this Section
              </button>
            </div>
          </div>
        </ModalPop>

        <Modal
          show={isEditModalOpen}
          onHide={() => setIsEditModalOpen(false)}
          size="lg"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Section</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleUpdate} className="w-100">
              <Form.Group className="mb-3" controlId="editSectionName">
                <Form.Label>Section Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={editSectionName}
                  onChange={(e) => setEditSectionName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="editSectionObjective">
                <Form.Label>Section Objective:</Form.Label>
                <Form.Control
                  as="textarea"
                  value={editSectionObjective}
                  onChange={(e) => setEditSectionObjective(e.target.value)}
                  required
                />
              </Form.Group>
              <div className="d-flex gap-4">
                <Button variant="success" type="submit">
                  Update Section
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setIsEditModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </main>
    </SidebarLayout>
  );
};

export default Section;
