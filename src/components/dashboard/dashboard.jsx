import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [modalShow, setModalShow] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem("trainerToken");
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

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("FirstName", profileData.first_name);
      formData.append("LastName", profileData.last_name);
      formData.append("email", profileData.email);
      formData.append("phone", profileData.phone);
      formData.append("Jobtitle", profileData.jobtitle);
      formData.append("Biography", profileData.biography);
      formData.append("HeadLine", profileData.headline);
      formData.append("Website", profileData.website);
      formData.append("Linkedin", profileData.linkedin);
      formData.append("Address", profileData.address);
      formData.append("Youtube", profileData.youtube);
      formData.append("Twitter", profileData.twitter);
      formData.append("Facebook", profileData.facebook);

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
        setModalShow(false);
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
    return <div className="d-flex align-items-center justify-content-center h-100">Loading...</div>;
  }

  // Get current pathname for active tab
  const { pathname } = router;
  const activeTab = pathname;

  return (
    <div className="container m-0 ">
      <div className="row">
        {/* Sidebar */}
        <aside className="col px-4 " style={{backgroundColor:"#FF7D4D"}}>
          <div className="bg">
            <ul className=" fs-6 mt-3" >
              {[
                { path: "/", label: "Home", icon: "home" },
                { path: "/trainer/create-course", label: "Create Course", icon: "briefcase" },
                { path: "/dashboard-form", label: "Trainer Profile", icon: "user" },
                { path: "/sign-in", label: "Logout", icon: "sign-out" },
              ].map(({ path, label, icon }) => (
                <li
                  key={path}
                  className={`mb-3  ${activeTab === path ? " text-white" : ""}`}
                >
                  <Link href={path} className={`d-flex align-items-center text-decoration-none ${activeTab === path ? "text-white" : "text-primary"}`}>
                    <i className={`fi fi-rr-${icon} me-3 fs-4 py-2 text-white`} ></i>
                    <span  className="text-white">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Profile Details */}
        <main className="col-sm-10 p-0 ">
          <div className="fs-3 p-5 text-center d-flex align-items-center" style={{backgroundColor:"#FFC7B3",fontWeight:"800",height:"180px"}} > Welcome, {profileData.first_name} {profileData.last_name} Publisher Dashboard</div>
          <div className="bg-white p- ">
            <div className="d-flex flex-column  position-relative">
              <div className="d-flex align-items-center justify-content-between me-5 mb-4 ms-2 mt-3">
                <div
                  className=" overflow-hidden bg-secondary border border-light me-3 float"
                  style={{ width: '220px', height: '200px' }}
                >
                  <img
                    className="img-fluid"
                    src={
                      imagePreview
                        ? imagePreview
                        : profileData.photo
                        ? `https://api.novajobs.us${profileData.photo}`
                        : "/path/to/default/image.jpg"
                    }
                    alt="Profile"
                  />
                </div>
                <Button
                style={{backgroundColor:"#FE6652"}}
                  variant=""
                  className="ins-btn text-white px-5 py-2 float-"
                  onClick={() => setModalShow(true)}
                >
                  Edit Profile
                </Button>
              </div>
              <table className=" table border " >
              <tbody className="p-2" >
                {[{ label: "Job Title", value: profileData.jobtitle },
                   { label: "First Name", value: profileData.first_name },
                   { label: "Last Name", value: profileData.last_name },
                   
                  { label: "Phone", value: profileData.phone },
                  { label: "Email", value: profileData.email },
                  { label: "Biography", value: profileData.biography },
                  { label: "HeadLine", value: profileData.headline },
                  { label: "Website", value: profileData.website },
                  { label: "LinkedIn", value: profileData.linkedin },
                  { label: "Facebook", value: profileData.facebook },
                  { label: "YouTube", value: profileData.youtube },
                  { label: "Twitter", value: profileData.twitter },
                ].map(({ label, value }) => (
                  <tr key={label} >
                    <td className="p-3 fs-6 w-25" ><strong>{label}:</strong></td>
                    <td className="fs-6">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
          </div>
        </main>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Your Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSaveProfile}>
            <div className="mb-3">
              <label htmlFor="profileImage" className="form-label">
                Profile Image
              </label>
              <input
                type="file"
                id="profileImage"
                className="form-control"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  className="img-fluid mt-3"
                  src={imagePreview}
                  alt="Preview"
                />
              )}
            </div>
            {[
              { name: "first_name", label: "First Name" },
              { name: "last_name", label: "Last Name" },
              { name: "jobtitle", label: "Job Title" },
              { name: "biography", label: "Biography" },
              { name: "headline", label: "HeadLine" },
              { name: "website", label: "Website" },
              { name: "linkedin", label: "LinkedIn" },
              { name: "address", label: "Address" },
              { name: "youtube", label: "YouTube" },
              { name: "twitter", label: "Twitter" },
              { name: "facebook", label: "Facebook" },
            ].map(({ name, label }) => (
              <div className="mb-3" key={name}>
                <label htmlFor={name} className="form-label">{label}</label>
                <input
                  type="text"
                  id={name}
                  name={name}
                  value={profileData[name] || ''}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      [name]: e.target.value,
                    })
                  }
                  className="form-control p-3"
                />
              </div>
            ))}
            <Button variant="" type="submit"  style={{backgroundColor:"#FE6652"}}>
           
              Save Changes
            </Button>
            <Button
              variant="secondary"
              className="ms-2"
              onClick={() => setModalShow(false)}
            >
              Cancel
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;
