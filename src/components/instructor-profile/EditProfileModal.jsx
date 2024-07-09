import React, { useState } from "react";
import Modal from "react-modal";

const EditProfileModal = ({ isOpen, onRequestClose, profile, onSave }) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Profile"
       className="modal-content bg-white  mt-80">
    
      <div className="modal-content  mt-5 p-5 ">
        <div className="modal-header">
          <h5 className="modal-title m-3 ">Edit Profile</h5>
          <button type="button" className="btn-close" aria-label="Close" onClick={onRequestClose}></button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="d-flex gap-2">
            <div className="mb-1">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control  "
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Job Title</label>
              <input
                type="text"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
                className="form-control "
              />
            </div>
            </div>
           <div className="d-flex gap-2">
           <div className="mb-1">
              <label className="form-label">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-control "
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                value={formData.experiences_year}
                onChange={handleChange}
                className="form-control "
              />
            </div>
            <div className="mb-1">
              <label className="form-label">Skill Level</label>
              <input
                type="text"
                name="skill_level"
                value={formData.skill_level}
                onChange={handleChange}
                className="form-control "
              />
            </div>
           </div>
           <div className="d-flex gap-2">
           <div className="mb-1">
              <label className="form-label">Language</label>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="form-control "
              />
            </div>
            <div className="mb-1">
              <label className="form-label">LinkedIn</label>
              <input
                type="text"
                name="linkdin"
                value={formData.linkdin}
                onChange={handleChange}
                className="form-control "
              />
            </div>
           </div>
            <div className="modal-footer gap-3 instruc-side-btn text-center">
              <button type="submit" className="p-2 ins-btn">
                Save
              </button>
              <button type="button" className="p-2 btn btn-secondary rounded-3" onClick={onRequestClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfileModal;
