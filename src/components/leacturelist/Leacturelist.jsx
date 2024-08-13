import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const LectureList = () => {
  const [sections, setSections] = useState([]);
  const [expandedSections, setExpandedSections] = useState({});
  const router = useRouter();
  const { courseId } = router.query;

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const token = localStorage.getItem("trainerToken");
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/lectures/${courseId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setSections(response.data.data.section_response);
      } catch (error) {
        toast.error("An error occurred while fetching lectures.");
      }
    };

    if (courseId) {
      fetchLectures();
    }
  }, [courseId]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const handleEditClick = (lectureId) => {
    router.push(`/edit-lecture/${lectureId}`);
  };

  return (
    <div className="container my-5">
      <h2 className="my-5">📜 Lectures List</h2>
      {sections.length === 0 ? (
        <p>No sections available.</p>
      ) : (
        sections.map((section) => (
          <div
            key={section.id}
            className="mb-4 border border-success rounded  border-3  border-success  border-opacity-50 p-2"
          >
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="badge rounded fs-5 px-4 py-2 text-bg-success ">
                Section Name : {section.section_name}
                <br />
              </h3>
              {section.lectures.map((lecture) => (
                <button
                  key={lecture.id}
                  className="btn btn-warning"
                  onClick={() => handleEditClick(lecture.id)}
                >
                  Edit
                </button>
              ))}
              <button
                className="btn btn-sm btn-outline-success p-2 fs-5 "
                onClick={() => toggleSection(section.id)}
              >
                {expandedSections[section.id]
                  ? "Hide Lectures 🔼"
                  : "Show Lectures 🔽"}
              </button>
            </div>
            <p>
              <strong>Objective:</strong> {section.section_objective}
            </p>
            {expandedSections[section.id] &&
              (section.lectures ? (
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Lecture Name</th>
                      <th>Lecture Content</th>
                      <th>Lecture Location</th>
                      <th>Lecture Resources PDF</th>
                      <th>Lecture Resources Link</th>
                      <th>Created At</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.lectures.map((lecture) => (
                      <tr key={lecture.id}>
                        <td>{lecture.lecture_name}</td>
                        <td>{lecture.lecture_content}</td>
                        <td>
                          <a
                            href={lecture.lecture_location}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {lecture.lecture_location.split("/").pop()}
                          </a>
                        </td>
                        <td>{lecture.lecture_resources_pdf || "N/A"}</td>
                        <td>
                          {lecture.lecture_resources_link.length > 0
                            ? lecture.lecture_resources_link.map(
                                (link, index) => (
                                  <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {link}
                                  </a>
                                )
                              )
                            : "N/A"}
                        </td>
                        <td>
                          {new Date(lecture.created_at).toLocaleDateString()}
                        </td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => handleEditClick(lecture.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No lectures available for this section.</p>
              ))}
          </div>
        ))
      )}
    </div>
  );
};

export default LectureList;
