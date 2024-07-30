// components/Sidebar.js
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="bg-light sidebar p-3">
      <div className="profile-section text-center mb-3">
        <h4 className="text-danger">Balkrishna Dadhich</h4>
        <p className="text-danger">Finish Your Profile</p>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/HomePage" className="text-danger">
          Dashboard
        </Nav.Link>
        <Nav.Link href="/Testing" className="text-danger">
          Career Ready Plan
        </Nav.Link>
        <Nav.Link href="#resume" className="text-danger">
          Your Resumé/CV
        </Nav.Link>
        <Nav.Link href="#report" className="text-danger">
          Learner Report
        </Nav.Link>
        <Nav.Link href="#premium" className="text-danger">
          Upgrade To Premium
        </Nav.Link>
        <Nav.Link href="#certificates" className="text-danger">
          Test Your Skills
        </Nav.Link>
        <Nav.Link href="#certificates" className="text-danger">
          Claim Your Certificates
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
