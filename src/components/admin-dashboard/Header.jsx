// components/Header.js
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-4 header-custom">
      <Container>
        <Navbar.Brand href="/">My Dashboard</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
