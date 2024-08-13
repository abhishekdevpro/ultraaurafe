// Lecture.js
import React from 'react';
import styled from 'styled-components';

const LectureItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LectureHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const LectureLink = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 1.1em;
  &:hover {
    text-decoration: underline;
    color: #005bb5;
  }
`;

const Duration = styled.span`
  margin-left: 15px;
  font-size: 0.85em;
  color: #999;
`;

const PdfLink = styled.a`
  display: inline-block;
  margin-top: 8px;
  padding: 8px 12px;
  font-size: 0.9em;
  color: #fff;
  background-color: #0073e6;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #005bb5;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const Lecture = ({ sectionId, lecture, handleLectureClick }) => {
  return (
    <LectureItem>
      <LectureContainer>
        <LectureHeader>
          <LectureLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const videoId =
                lecture.lecture_videos.length > 0
                  ? lecture.lecture_videos[0].id
                  : null;
              handleLectureClick(sectionId, lecture.id, videoId);
            }}
          >
            {lecture.lecture_name}
          </LectureLink>
          <Duration>{lecture.duration}</Duration>
        </LectureHeader>
        {lecture.lecture_content && (
          <PdfLink href={`https://api.novajobs.us${lecture.lecture_content}`} target="_blank">
            Download Lecture Content
          </PdfLink>
        )}
        {lecture.lecture_resources_pdf && (
          <PdfLink href={`https://api.novajobs.us${lecture.lecture_resources_pdf}`} target="_blank">
            View PDF Resources
          </PdfLink>
        )}
        {lecture.lecture_resources_link && (
          <PdfLink href={`https://api.novajobs.us${lecture.lecture_resources_link}`} target="_blank">
            View Resource Links
          </PdfLink>
        )}
      </LectureContainer>
    </LectureItem>
  );
};

export default Lecture;
