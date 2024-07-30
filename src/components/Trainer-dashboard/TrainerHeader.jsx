import React from "react";
import { Navbar, Container } from "react-bootstrap";

const TrainerHeader = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 header-custom">
      <Container>
        <Navbar.Brand href="/">Trainer Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default TrainerHeader;
