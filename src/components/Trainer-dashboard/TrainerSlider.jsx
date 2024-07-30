import React from "react";
import { Nav } from "react-bootstrap";

const TrainerSlider = () => {
  return (
    <div className="bg-light sidebar p-3">
      <div className="profile-section text-center mb-3">
        <h4 className="text-danger">Trainer Name</h4>
        <p className="text-danger">Finish Your Profile</p>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="#HomePage" className="text-danger">
          Home
        </Nav.Link>
        <Nav.Link href="#Testing" className="text-danger">
          Create Course
        </Nav.Link>
        <Nav.Link href="#resume" className="text-danger">
          Trainer Profile
        </Nav.Link>
        <Nav.Link href="#report" className="text-danger">
          Logout
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default TrainerSlider;
