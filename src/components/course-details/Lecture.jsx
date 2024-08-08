// Lecture.js
import React from 'react';
import styled from 'styled-components';

const LectureItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:hover {
    background-color: #f9f9f9;
  }
`;

const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LectureHeader = styled.div`
  display: flex;
  align-items: center;
`;

const LectureLink = styled.a`
  text-decoration: none;
  color: #0073e6;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Duration = styled.span`
  margin-left: 10px;
  font-size: 0.9em;
  color: #666;
`;

const PdfLink = styled.a`
  margin-left: 10px;
  font-size: 0.9em;
  color: #0073e6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
          <PdfLink>
            {lecture.lecture_content}
          </PdfLink>
        )}
        {lecture.lecture_resources_pdf && (
          <PdfLink href={`https://api.novajobs.us${lecture.lecture_resources_pdf}`} target="_blank">
            View Resources
          </PdfLink>
        )}
        {lecture.lecture_resources_link && (
          <PdfLink href={`https://api.novajobs.us${lecture.lecture_resources_pdf}`} target="_blank">
            View Resources Link
          </PdfLink>
        )}
      </LectureContainer>
    </LectureItem>
  );
};

export default Lecture;
