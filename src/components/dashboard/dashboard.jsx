import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Modal from "react-modal";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileData, setProfileData] = useState(null); // Set initial state to null
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/profile",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setProfileData(response.data.data);
    } catch (error) {
      console.error("Error fetching the profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("first_name", profileData.first_name);
      formData.append("last_name", profileData.last_name);
      formData.append("email", profileData.email);
      formData.append("phone", profileData.phone);
      formData.append("jobtitle", profileData.jobtitle);
      formData.append("biography", profileData.biography);
      formData.append("headline", profileData.headline);
      formData.append("website", profileData.website);
      formData.append("linkedin", profileData.linkedin);
      formData.append("address", profileData.address);
      formData.append("youtube", profileData.youtube);
      formData.append("twitter", profileData.twitter);
      formData.append("facebook", profileData.facebook);

      if (selectedImage) {
        formData.append("photo", selectedImage);
      }

      const response = await axios.patch(
        "https://api.novajobs.us/api/trainers/update-trainer-profile",
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setProfileData(response.data.data);
        setSelectedImage(null);
        setImagePreview(null);
        toast.success("Profile updated successfully!");
        handleCloseModal();
        fetchProfileData(); // Fetch the updated profile data
      }
    } catch (error) {
      console.error("Error saving the profile data:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section
        className="instructor-portfolio pt- pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl- col-lg- p-5">
              <div className="instruc-sidebar mb-40 ">
                <div className="isntruc-side-thumb mb-30 p-">
                  <div className="instruc-side-btn text-center float-end">
                   
                    <section
          className="instructor-portfolio pt-5 wow fadeInUp border-4"
          data-wow-duration=".8s"
          data-wow-delay=".2s"
        >
          <div className="instruc-sidebar mb-20 col-xl- col-lg- p-5 border-2">
            <div className="">
              <ul className="col">
              <li>
                        <Link href="/create-course">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label className="font-extrabold">Create Course</label>
                          <span></span>
                        </Link>
                      </li>
              </ul>
              
            </div>
          </div>
        </section>
        <button className="ins-btn px-5" onClick={handleOpenModal}>
                      Edit Profile
                    </button>
                   
                  </div>
                  <div
                    className="border text-center"
                    style={{
                      width: "500px",
                      height: "300px",
                      size: "20px",
                      backgroundPosition: "center",
                    }}
                  >
                    <img
                      className="border"
                      src={
                        imagePreview
                          ? imagePreview
                          : profileData.photo
                          ? `https://api.novajobs.us${profileData.photo}`
                          : "/path/to/default/image.jpg"
                      }
                      alt="Upload Your Profile photo"
                    />
                  </div>
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="cd-information instruc-profile-info ">
                    <ul className="p-5">
                      
                      <li>
                      <i className="fa-brands fa-spotify"></i>{" "}
                        <label>First Name</label>{" "}
                        <span className="fs-4">{profileData.first_name}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Last Name</label>{" "}
                        <span className="fs-4">{profileData.last_name}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label>{" "}
                        <span className="fs-4">{profileData.jobtitle}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label>{" "}
                        <span className="fs-4">{profileData.phone}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label>{" "}
                        <span className="fs-4">{profileData.email}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Biography</label>{" "}
                        <span className="fs-4">{profileData.biography}</span>
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>headline</label>{" "}
                        <span className="fs-4">{profileData.headline}</span>
                      </li>
                      <li>
                        <i className="fi fi-br-browser"></i>{" "}
                        <label>website</label>{" "}
                        <span className="fs-4">{profileData.website}</span>
                      </li>

                      <li>
                      <i className="fa-brands fa-safari"></i>{" "}
                        <label>address</label>{" "}
                        <span className="fs-4">{profileData.address}</span>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>{" "}
                        <label>LinkedIn</label>
                        <span className="fs-4">{profileData.linkedin}</span>
                      </li>

                      <li>
                        <i className="fa-brands fa-facebook"></i>{" "}
                        <label>Facebook</label>{" "}
                        <span className="fs-4">{profileData.facebook}</span>
                      </li>

                      <li>
                      <i className="fa-brands fa-youtube"></i>{" "}
                        <label>youtube</label>{" "}
                        <span className="fs-4">{profileData.youtube}</span>
                      </li>

                      <li>
                      <i className="fa-brands fa-twitter"></i>{" "}
                        <label>Twitter</label>{" "}
                        <span className="fs-4">{profileData.twitter}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={handleCloseModal}
                  contentLabel="Edit Profile"
                  
                >
                  <form onSubmit={handleSaveProfile}   className="mt-80 pt-20"><h1 className="text-center">EDIT YOUR PROFILE</h1>
                    <div className="form-group mt-40">
                      <label htmlFor="profileImage">Profile Image</label>
                      <input type="file" onChange={handleImageChange} />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        name="first_name"
                        value={profileData.first_name || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            first_name: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        name="last_name"
                        value={profileData.last_name || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            last_name: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Job Title</label>
                      <input
                        type="text"
                        name="jobtitle"
                        value={profileData.jobtitle || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            jobtitle: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    
                    <div className="mb-1">
                      <label className="form-label">Biography</label>
                      <input
                        type="text"
                        name="biography"
                        value={profileData.biography || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            biography: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Headline</label>
                      <input
                        type="text"
                        name="headline"
                        value={profileData.headline || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            headline: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Website</label>
                      <input
                        type="text"
                        name="website"
                        value={profileData.website || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            website: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">LinkedIn</label>
                      <input
                        type="text"
                        name="linkedin"
                        value={profileData.linkedin || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            linkedin: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={profileData.address || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            address: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">YouTube</label>
                      <input
                        type="text"
                        name="youtube"
                        value={profileData.youtube || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            youtube: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Twitter</label>
                      <input
                        type="text"
                        name="twitter"
                        value={profileData.twitter || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            twitter: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                    <div className="mb-1">
                      <label className="form-label">Facebook</label>
                      <input
                        type="text"
                        name="facebook"
                        value={profileData.facebook || ''}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            facebook: e.target.value,
                          })
                        }
                        className="form-control"
                      />
                    </div>
                  <div>
                      <button type="submit" className="btn btn-warning text-white me-4 mt-2">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary mt-2"
                      onClick={handleCloseModal}
                    >
                      Cancel
                    </button>
                  </div>
                  </form>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
