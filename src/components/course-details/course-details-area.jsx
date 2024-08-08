import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoPopup from "@/src/modals/video-popup";
import EditCourseDetailsModal from "./EditCourseDetailsModal";
import PaymentPopup from "./PaymentPopup";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Trainer from "./Trainer";

// ... (existing styled components)

// Styled Components
const SectionHeader = styled.div`
  cursor: pointer;
  padding: 15px;
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    color: #007bff;
    background-color: #e9ecef;
  }
`;

const SectionContent = styled.div`
  padding: 20px;
  background-color: #f1f3f5;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  margin-bottom: 20px;
`;

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

const LectureContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LectureHeader = styled.div`
  display: flex;
  align-items: center;
`;

const VideoPlayer = styled.video`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;
const VideoErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #f8d7da;
  color: #721c24;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
`;

const CourseDetailsArea = ({ courseId, trainerId, courseBannerImage }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [courseDetails, setCourseDetails] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [expandedLecture, setExpandedLecture] = useState(null);
  const [expandedSections, setExpandedSections] = useState([]);
  const [isenroll,setisEnroll] =useState()

  // Function to toggle the expanded lecture
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
  // useEffect(() => {
  //   const fetchCourseDetails = async () => {
  //     if (courseId) {
  //       try {
  //         setIsLoading(true);
  //         const response = await axios.get(
  //           `https://api.novajobs.us/api/trainers/course-details/${courseId}`
  //         );
  //         if (
  //           response.data &&
  //           response.data.data &&
  //           response.data.data.length > 0
  //         ) {
  //           setCourseDetails(response.data);
  //         } else {
  //           setError("No course data found");
  //         }
  //       } catch (error) {
  //         console.error(error);
  //         setError("Failed to fetch course details");
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }
  //   };
  //   fetchCourseDetails();

  //   if (courseId) localStorage.setItem("courseId", courseId);
  //   if (trainerId) localStorage.setItem("trainerId", trainerId);
  //   if (courseBannerImage)
  //     localStorage.setItem("courseBannerImage", courseBannerImage);

  //   // Check if the user is logged in (for demonstration purposes, this can be replaced with actual authentication logic)
  //   const loggedInStatus = localStorage.getItem("token");
  //   if (loggedInStatus) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  //   console.log(isLoggedIn, "log");
  // }, [courseId]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      if (courseId) {
        try {
          setIsLoading(true);
          const token = localStorage.getItem("token");
          if (token) {
            const response = await axios.get(
              `https://api.novajobs.us/api/students/mycourse-details/${courseId}`,
              {
                headers: {
                  Authorization: `${token}`,
                },
              }
            );
            console.log(response, "arey data ji");
             
            if (
              response.data
            ) {
              setCourseDetails(response.data.data.section_response);
              setisEnroll(response.data.data.is_student_enroll)
            } else {
              setError("No course data found");
            }
          } else {
            const response = await axios.get(
              `https://api.novajobs.us/api/students/course-details/${courseId}`
            );
            console.log(response.data
              , "Areay data");

            if (
              response
            ) {
              setCourseDetails(response.data.data.section_response);
              setisEnroll(response.data.data.is_student_enroll)
            } else {
              setError("No course data found");
            }
          }
        } catch (error) {
          console.error(error);
          setError("Failed to fetch course details");
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchCourseDetails();

    if (courseId) localStorage.setItem("courseId", courseId);
    if (trainerId) localStorage.setItem("trainerId", trainerId);
    if (courseBannerImage)
      localStorage.setItem("courseBannerImage", courseBannerImage);
  }, [courseId]);

  console.log(courseDetails,isenroll, "Section");

  const handleEditOpen = () => setIsEditOpen(true);
  const handleEditClose = () => setIsEditOpen(false);

  const handleSave = (updatedDetails) => {
    setCourseDetails(updatedDetails);
    setIsEditOpen(false);
  };
  const handlePlayClick = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.novajobs.us/api/trainers/streaming/${courseId}`
      );
      setVideoUrl(response.data.videoUrl);
      setIsVideoReady(true);
      setIsPlaying(true);
    } catch (error) {
      console.error("Error fetching video:", error);
      setIsVideoReady(false);
      setIsPlaying(false);
    }
  };
  // const toggleSection = (sectionId) => {
  //   setExpandedSection(expandedSection === sectionId ? null : sectionId);
  // };

  const handleLectureClick = async (sectionId, lectureId, videoId) => {
    console.log(sectionId, lectureId, videoId, "Id of video");
    if (videoId) {
      try {
        const videoUrl = `https://api.novajobs.us/api/trainers/streaming/${courseId}/${sectionId}/${lectureId}/${videoId}`;
        setCurrentVideo(videoUrl);
      } catch (error) {
        console.error("Error fetching video:", error);
        setError("Failed to load video");
      }
    }
  };
  console.log("cv", currentVideo);

  const handleEnrollNowClick = () => {
    if (isLoggedIn) {
      setIsPaymentPopupOpen(true);
    } else {
      window.location.href = "/sign-in";
    }
  };
  // const tID = localStorage.getItem("")
  // const image =
  if (isLoading) {
    return (
      <div className="container mt-5">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || !courseDetails) {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Course Not Found</h4>
          <p>{error || "We couldn't find the course you're looking for."}</p>
          <hr />
          <Link href="/" className="btn btn-primary mt-3">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section
        className="c-details-area pt-120 pb-50 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="c-details-wrapper mr-25">
                <div className="c-details-thumb p-relative mb-40">
                  {currentVideo ? (
                    <VideoPlayer controls>
                      <source src={currentVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </VideoPlayer>
                  ) : (
                    <img
                      src={
                        `https://api.novajobs.us${courseBannerImage}` ||
                        "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg"
                      }
                      alt="details-bg"
                      className="img-fluid rounded"
                    />
                  )}
                  <div className="c-details-ava d-md-flex align-items-center mt-3">
                    <img
                      src="/assets/img/course/c-details-ava-01.png"
                      alt="avatar"
                      className="img-fluid rounded-circle"
                      style={{ width: "50px", marginRight: "10px" }}
                    />
                    <span>
                      By{" "}
                      <a href="#">{courseDetails.instructor || "Instructor"}</a>
                    </span>
                  </div>
                </div>

                <div className="course-details-content mb-45">
                  {courseDetails.map((section) => (
                    <div key={section.id}>
                      <SectionHeader onClick={() => toggleSection(section.id)}>
                        <span>{section.section_name}</span>
                        <span>
                          {section.lectures.length} lectures •{" "}
                          {section.totalDuration}
                        </span>
                      </SectionHeader>
                      {expandedSections.includes(section.id) && (
                        <div>
                          {section.lectures.map((lecture) => (
                            <LectureItem key={lecture.id}>
                              <LectureContainer>
                                <LectureHeader
                                  onClick={() => toggleLecture(lecture.id)}
                                >
                                  <LectureLink
                                    href="#"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      const videoId =
                                        lecture.lecture_videos.length > 0
                                          ? lecture.lecture_videos[0].id
                                          : null;
                                      handleLectureClick(
                                        section.id,
                                        lecture.id,
                                        videoId
                                      );
                                    }}
                                  >
                                    {lecture.lecture_name}
                                  </LectureLink>
                                  <Duration>{lecture.duration}</Duration>
                                </LectureHeader>
                                {expandedLecture === lecture.id && (
                                  <>
                                    <p>{lecture.lecture_content}</p>
                                    {lecture.lecture_resources_pdf &&
                                      lecture.lecture_resources_pdf.length >
                                        0 && (
                                        <div>
                                          {lecture.lecture_resources_pdf &&
                                            lecture.lecture_resources_pdf
                                              .length > 0 && (
                                              <div>
                                                {lecture.lecture_resources_pdf.map(
                                                  (pdf, index) => {
                                                    const pdfName = pdf
                                                      .split("/")
                                                      .pop(); // Extract the file name from the URL
                                                    const cleanPrefix =
                                                      pdfName.match(
                                                        /^[a-zA-Z0-9_]+/
                                                      ); // Extract a clean prefix before any special characters and numeric part
                                                    return (
                                                      <PdfLink
                                                        key={index}
                                                        href={`https://api.novajobs.us${pdf}`}
                                                        target="_blank"
                                                      >
                                                        {cleanPrefix
                                                          ? `${cleanPrefix[0]}.pdf`
                                                          : pdfName}{" "}
                                                        {/* Display clean prefix with ".pdf" */}
                                                      </PdfLink>
                                                    );
                                                  }
                                                )}
                                              </div>
                                            )}
                                        </div>
                                      )}
                                    {lecture.lecture_resources_link &&
                                      lecture.lecture_resources_link.length >
                                        0 && (
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
                                  </>
                                )}
                              </LectureContainer>
                            </LectureItem>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <Trainer trainerID={trainerId} />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="c-details-sidebar">
                {/* <div className="c-video-thumb p-relative mb-25">
                  <img
                    src="/assets/img/bg/c-details-video-bg.jpg"
                    alt="video-bg"
                    className="img-fluid rounded"
                  />
                  <div className="c-video-icon">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVideoOpen(true);
                      }}
                    >
                      <i onClick={handlePlayClick} className="fas fa-play"></i>
                    </a>
                  </div>
                </div> */}
                <div className="c-video-thumb p-relative mb-25">
                  {isVideoReady && isPlaying ? (
                    <VideoPlayer controls>
                      <source src={videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </VideoPlayer>
                  ) : (
                    <>
                      <img
                        src="/assets/img/bg/c-details-video-bg.jpg"
                        alt="video-bg"
                        className="img-fluid rounded"
                      />
                      <div
                        className="c-video-icon"
                        href="#"
                        onClick={handlePlayClick}
                      >
                        <i className="fas fa-play"></i>
                      </div>
                    </>
                  )}
                </div>
                  
                  {
                    isenroll===true? "" :
                <div className="c-sidebar-form">

                    <h3>Enroll in this Course</h3>
                    <button
                    onClick={handleEnrollNowClick}
                    className="btn btn-primary"
                  >
                    Enroll Now
                  </button>
                  
                </div>
                  }
                <div className="cd-information mb-4 p-4 bg-white shadow rounded">
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <i className="fa-light fa-calendars text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">
                          Lectures
                        </label>
                      </div>
                      <span className="text-muted">36</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <i className="fi fi-rr-chart-pie-alt text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">Quizzes</label>
                      </div>
                      <span className="text-muted">6</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <i className="fi fi-rr-user text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">
                          Students
                        </label>
                      </div>
                      <span className="text-muted">105</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <i className="fa-light fa-clock-desk text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">
                          Duration
                        </label>
                      </div>
                      <span className="text-muted">16 Hours</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <i className="fi fi-sr-stats text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">
                          Skill Level
                        </label>
                      </div>
                      <span className="text-muted">Beginner</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
                      <div className="d-flex align-items-center">
                        <i className="fi fi-rr-comments text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">
                          Language
                        </label>
                      </div>
                      <span className="text-muted">English</span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2">
                      <div className="d-flex align-items-center">
                        <i className="fi fi-rs-diploma text-primary mr-2"></i>
                        <label className="mb-0 font-weight-bold">
                          Certificate
                        </label>
                      </div>
                      <span className="text-muted">Yes</span>
                    </li>
                  </ul>
                </div>

                <div className="c-details-social">
                  <h5 className="cd-social-title mb-25">Share Now:</h5>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={
          "https://www.youtube.com/watch?v=_vZjS1X3cEA&ab_channel=DeepSoftware" // Replace with actual video URL if needed
        }
      />
      <EditCourseDetailsModal
        isOpen={isEditOpen}
        onClose={handleEditClose}
        courseDetails={courseDetails}
        onSave={handleSave}
      />
      <PaymentPopup
        show={isPaymentPopupOpen}
        onHide={() => setIsPaymentPopupOpen(false)}
        courseId={courseId}
      />
    </>
  );
};

export default CourseDetailsArea;
