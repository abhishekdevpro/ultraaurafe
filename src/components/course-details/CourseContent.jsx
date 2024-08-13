
import React, { useState } from "react";
import styled from "styled-components";
import PDFViewerModal from "./PdfViewerModal";

const SectionHeader = styled.div`
  cursor: pointer;
  padding: 15px;
  background-color: white;
  color: #0e62e8;
  border-radius: 8px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
  .toggle-icon {
    transition: transform 0.3s;
    transform: ${props => props.isExpanded ? 'rotate(180deg)' : 'rotate(0)'};
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;

const SectionContent = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const LectureItem = styled.div`
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const LectureLink = styled.a`
  font-size: 1.1rem;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Duration = styled.span`
  font-size: 0.9rem;
  color: #6c757d;
`;

const PdfLink = styled.a`
  display: inline-block;
  margin-top: 5px;
  font-size: 0.9rem;
  color: #28a745;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LectureHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LectureContent = styled.p`
  margin-top: 10px;
  color: #343a40;
`;

const ResourceContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const SectionTitle = styled.span`
  display: flex;
  align-items: center;
`;
const SectionNumber = styled.span`
  margin-right: 10px;
  color: #0e62e8;
`;
const CourseContent = ({ courseDetails, handleLectureClick }) => {
  const [expandedSections, setExpandedSections] = useState([]);
  const [expandedLecture, setExpandedLecture] = useState(null);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");

  const toggleSection = (sectionId) => {
    setExpandedSections((prevSections) =>
      prevSections.includes(sectionId)
        ? prevSections.filter((id) => id !== sectionId)
        : [...prevSections, sectionId]
    );
  };

  const toggleLecture = (lectureId) => {
    setExpandedLecture((prevLecture) =>
      prevLecture === lectureId ? null : lectureId
    );
  };

  const handlePdfClick = (pdfUrl) => {
    setCurrentPdfUrl(`https://api.novajobs.us${pdfUrl}`);
    setIsPdfModalOpen(true);
  };

  return (
    <div className="course-details-content mb-45">
      {courseDetails.map((section,index) => (
        <div key={section.id}>
          <SectionHeader onClick={() => toggleSection(section.id)}>
          <SectionTitle>
              <SectionNumber>{index + 1}.</SectionNumber>
              {section.section_name}
            </SectionTitle>
            <span>
              {section.lectures.length} lectures • {section.totalDuration}
            </span>
          </SectionHeader>
          {expandedSections.includes(section.id) && (
            <SectionContent>
              {section.lectures.map((lecture) => (
                <LectureItem key={lecture.id}>
                  <LectureContainer>
                    <LectureHeader onClick={() => toggleLecture(lecture.id)}>
                      <LectureLink
                        onClick={(e) => {
                          e.preventDefault();
                          const videoId =
                            lecture.lecture_videos.length > 0
                              ? lecture.lecture_videos[0].id
                              : null;
                          handleLectureClick(section.id, lecture.id, videoId);
                        }}
                      >
                        {lecture.lecture_name}
                      </LectureLink>
                      <Duration>{lecture.duration}</Duration>
                    </LectureHeader>
                    {expandedLecture === lecture.id && (
                      <>
                        <LectureContent>{lecture.lecture_content}</LectureContent>
                        <ResourceContainer>
                          {lecture.lecture_resources_pdf &&
                            lecture.lecture_resources_pdf.length > 0 && (
                              <div>
                                {lecture.lecture_resources_pdf.map(
                                  (pdf, index) => {
                                    const pdfName = pdf.split("/").pop();
                                    const cleanPrefix = pdfName.match(
                                      /^[a-zA-Z0-9_]+/
                                    );
                                    return (
                                      <PdfLink
                                        key={index}
                                        href="#"
                                        onClick={(e) => {
                                          e.preventDefault();
                                          handlePdfClick(pdf);
                                        }}
                                      >
                                        {cleanPrefix
                                          ? `${cleanPrefix[0]}.pdf`
                                          : pdfName}
                                      </PdfLink>
                                    );
                                  }
                                )}
                              </div>
                            )}
                          {lecture.lecture_resources_link &&
                            lecture.lecture_resources_link.length > 0 && (
                              <div>
                                {lecture.lecture_resources_link.map(
                                  (link, index) => (
                                    <PdfLink
                                      key={index}
                                      href={link}
                                      target="_blank"
                                    >
                                      Link {index + 1}
                                    </PdfLink>
                                  )
                                )}
                              </div>
                            )}
                        </ResourceContainer>
                      </>
                    )}
                  </LectureContainer>
                </LectureItem>
              ))}
            </SectionContent>
          )}
        </div>
      ))}
      <PDFViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        pdfUrl={currentPdfUrl}
      />
    </div>
  );
};

export default CourseContent;
