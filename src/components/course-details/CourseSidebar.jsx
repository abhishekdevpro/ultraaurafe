import React, { useState } from "react";
import styled from "styled-components";
import PaymentPopup from "./PaymentPopup";

const VideoPlayer = styled.video`
  width: 100%;
  max-height: 400px;
  object-fit: contain;
`;

const CourseSidebar = ({ courseId, isEnrolled }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isPaymentPopupOpen, setIsPaymentPopupOpen] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

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

  const handleEnrollNowClick = () => {
    const isLoggedIn = !!localStorage.getItem("token");
    if (isLoggedIn) {
      setIsPaymentPopupOpen(true);
    } else {
      window.location.href = "/sign-in";
    }
  };
//  console.log(courseDetails,"From sidebar")
  return (
    <div className="c-details-sidebar">
      {/* ... (video thumbnail component) */}
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
                  
      {!isEnrolled && (
        <div className="c-sidebar-form">
          <h3>Enroll in this Course</h3>
          <button 
    onClick={handleEnrollNowClick} 
    style={{ 
      backgroundColor: '#007bff', 
      borderColor: '#007bff', 
      color: '#fff', 
      padding: '10px 20px', 
      fontSize: '1.1rem', 
      borderRadius: '5px', 
      cursor: 'pointer', 
      transition: 'background-color 0.3s, box-shadow 0.3s' ,
      margin:"auto"
    }}
    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
  >
    Enroll Now
  </button>
        </div>
      )}
      {/* ... (course information component) */}
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
        {/* ... (social sharing component) */}
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
      <PaymentPopup
        show={isPaymentPopupOpen}
        onHide={() => setIsPaymentPopupOpen(false)}
        courseId={courseId}
      />
    </div>
  );
};

export default CourseSidebar;
