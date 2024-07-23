import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import Link from "next/link";
const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get("https://api.novajobs.us/api/trainers/profile", {
          headers: {
            Authorization: token,
          },
        });
        const data = response.data.data;
        setProfileData({
          img: data.photo,
          name: `${data.first_name} ${data.last_name}`,
          email: data.email,
          phone: data.phone,
          job_title: data.jobtitle,
          biography: data.biography,
          linkedin: data.linkedin,
          experiences_year: data.experiences_year,
          skill_level: data.skill_level,
          language: data.language,
          // Add any other fields you need here
        });
      } catch (error) {
        console.error("Error fetching the profile data:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveProfile = async (updatedProfile) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put("https://api.novajobs.us/api/trainers/profile", updatedProfile, {
        headers: {
          Authorization: token,
        },
      });
      if (response.status === 200) {
        setProfileData(updatedProfile);
        handleCloseModal();
      }
    } catch (error) {
      console.error("Error saving the profile data:", error);
    }
  };

  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src={profileData.img}
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      {profileData.name}
                    </h4>
                    <p>{profileData.biography}</p>
                  </div>
                  <div className="instruc-follower d-flex align-items-center justify-content-center mb-25">
                    <div className="ins-followers">
                      <h4>{profileData.followers}</h4>
                      <span>Followers</span>
                    </div>
                    <div className="ins-following">
                      <h4>{profileData.following}</h4>
                      <span>Following</span>
                    </div>
                  </div>

                  <div className="instruc-side-btn text-center mb-40">
                    <button className="ins-btn" onClick={handleOpenModal}>
                      Edit Profile
                    </button>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <Link href="/create-course">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label>Create Course</label>
                          <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/course-update">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label>Update Course</label>
                          <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/course-list">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label>Course List</label>
                          <span></span>
                        </Link>
                      </li>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label>{" "}
                        <span>{profileData.job_title}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label>{" "}
                        <span>{profileData.phone}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label>{" "}
                        <span>{profileData.email}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Experiences</label>{" "}
                        <span>{profileData.experiences_year}</span>
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>Skill Level</label>{" "}
                        <span>{profileData.skill_level}</span>
                      </li>
                      <li>
                        <i className="fi br-comments"></i>{" "}
                        <label>Language</label>{" "}
                        <span>{profileData.language}</span>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>{" "}
                        <label>LinkedIn</label>{" "}
                        <span>{profileData.linkedin}</span>
                      </li>
                    </ul>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Edit Profile"
        className="modal-content bg-white mt-80"
      >
        <div className="modal-content mt-5 p-5">
          <div className="modal-header">
            <h5 className="modal-title m-3">Edit Profile</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => { e.preventDefault(); handleSaveProfile(profileData); }}>
              <div className="d-flex gap-2">
                <div className="mb-1">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    name="job_title"
                    value={profileData.job_title}
                    onChange={(e) => setProfileData({ ...profileData, job_title: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="mb-1">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="mb-1">
                  <label className="form-label">Experiences Year</label>
                  <input
                    type="text"
                    name="experiences_year"
                    value={profileData.experiences_year}
                    onChange={(e) => setProfileData({ ...profileData, experiences_year: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">Skill Level</label>
                  <input
                    type="text"
                    name="skill_level"
                    value={profileData.skill_level}
                    onChange={(e) => setProfileData({ ...profileData, skill_level: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="d-flex gap-2">
                <div className="mb-1">
                  <label className="form-label">Language</label>
                  <input
                    type="text"
                    name="language"
                    value={profileData.language}
                    onChange={(e) => setProfileData({ ...profileData, language: e.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="mb-1">
                  <label className="form-label">LinkedIn</label>
                  <input
                    type="text"
                    name="linkedin"
                    value={profileData.linkedin}
                    onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="modal-footer gap-3 instruc-side-btn text-center">
                <button type="submit" className="p-2 ins-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="p-2 btn btn-secondary rounded-3"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Dashboard;
