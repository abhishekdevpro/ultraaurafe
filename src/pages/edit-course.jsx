import React, { useState } from "react";
import SidebarLayout from "@/src/common/sidebar-layout";
import WrapperFour from "../layout/wrapper-4";
import Breadcrumb from "../components/bredcrumb/breadcrumb";

// Dummy data for sections and lectures
const sections = [
  {
    name: "Section 1",
    lectures: ["Lecture 1.1", "Lecture 1.2", "Lecture 1.3"],
  },
  {
    name: "Section 2",
    lectures: ["Lecture 2.1", "Lecture 2.2"],
  },
  // Add more sections as needed
];

const EditCourse = () => {
  // State to manage collapse for each section
  const [collapsedSections, setCollapsedSections] = useState(
    sections.reduce((acc, _, index) => {
      acc[index] = true; // Start with all sections collapsed
      return acc;
    }, {})
  );

  // Toggle collapse state for a section
  const toggleCollapse = (sectionIndex) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [sectionIndex]: !prev[sectionIndex],
    }));
  };

  return (
    <WrapperFour>
      <Breadcrumb title="Edit Course" subtitle="Edit Course" isDbbl="Course" />

      <SidebarLayout>
        <main className="col-sm-10 p-0">
          <section
            className="course-list-area pb-120 wow fadeInUp"
            data-wow-duration=".8s"
            data-wow-delay=".2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* Header Section */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="tp-section-title">Course Name</h3>
                    <button className="btn btn-primary">Edit Course</button>
                    <button className="btn btn-primary">+ Add Section</button>
                  </div>
                </div>
                <div className="col-lg-12">
                  {/* Course Details Section */}
                  <div className="course-details">
                    {sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="section-item mb-6">
                        <div className="flex flex-col gap-4 mb-4">
                          <h4 className="tp-course-name">
                            Section: <span>{section.name}</span>
                          </h4>
                          <div className="flex gap-4 mb-2">
                            <button className="btn btn-success">
                              📝 Edit Section
                            </button>{" "}
                            <button className="btn btn-warning">
                              ➕ Add Lecture
                            </button>{" "}
                            <button
                              className="btn btn-info"
                              onClick={() => toggleCollapse(sectionIndex)}
                            >
                              {collapsedSections[sectionIndex]
                                ? "🔽 Show Lectures"
                                : "🔼 Hide Lectures"}
                            </button>
                          </div>

                          {/* List of Lectures */}
                          {!collapsedSections[sectionIndex] && (
                            <div className="flex flex-col gap-2">
                              {section.lectures.map((lecture, lectureIndex) => (
                                <div
                                  key={lectureIndex}
                                  className="lecture-item"
                                >
                                  <h5 className="tp-lecture-name">
                                    Lecture: <span>{lecture}</span>
                                  </h5>
                                  <div className="flex gap-4">
                                    <button className="btn btn-success">
                                      Edit Lecture
                                    </button>{" "}
                                    <button className="btn btn-warning">
                                      Delete Lecture
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </SidebarLayout>
    </WrapperFour>
  );
};

export default EditCourse;
