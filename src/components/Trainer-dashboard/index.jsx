import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrainerHeader from "./TrainerHeader";
import TrainerSlider from "./TrainerSlider";

const TrainerDashboard = ({ children }) => {
  return (
    <div>
      <TrainerHeader />
      <Container fluid>
        <Row>
          <Col md={2} className="p-0">
            <TrainerSlider />
          </Col>
          <Col md={10} className="main-content">
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrainerDashboard;
