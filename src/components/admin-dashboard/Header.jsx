// // components/Header.js
// import { Navbar, Container } from "react-bootstrap";

// const Header = () => {
//   return (
//     <Navbar bg="light" expand="lg" className="mb-4 header-custom">
//       <Container>
//         <Navbar.Brand href="/">My Dashboard</Navbar.Brand>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;


// components/Header.js
import { Navbar, Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/sign-in");
    console.log("Logout clicked");
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4 header-custom">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand href="/">My Dashboard</Navbar.Brand>
        <Button variant="outline-danger" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
