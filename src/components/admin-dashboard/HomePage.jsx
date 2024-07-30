// components/DashboardContent.js
import { Card, Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Courses In Progress</Card.Title>
          <Card.Text>
            <div>
              <img
                src="https://cdn01.alison-static.net/courses/1392/alison_courseware_intro_1392.jpg"
                alt="Course"
                style={{ width: "25%" }}
              />
              <p>Critical Facility: Critical Infrastructure</p>
              <p>13% Complete</p>
              <Button variant="primary">Continue Learning</Button>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <h2>Enroll In Similar Courses</h2>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn01.alison-static.net/courses/1392/alison_courseware_intro_1392.jpg"
            />
            <Card.Body>
              <Card.Title>Becoming a HVAC Professional</Card.Title>
              <Button variant="primary">More Information</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn01.alison-static.net/courses/1392/alison_courseware_intro_1392.jpg"
            />
            <Card.Body>
              <Card.Title>
                Basics of Air Conditioning and Refrigeration Systems
              </Card.Title>
              <Button variant="primary">More Information</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://cdn01.alison-static.net/courses/1392/alison_courseware_intro_1392.jpg"
            />
            <Card.Body>
              <Card.Title>Diploma in Plumbing Studies</Card.Title>
              <Button variant="primary">More Information</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
