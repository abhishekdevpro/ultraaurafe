// components/Sidebar.js
import React from "react";
import { Nav, Button } from "react-bootstrap";
import styled from "styled-components";
import { useRouter } from "next/router";

const SidebarWrapper = styled.div
  `background-color: #343a40;
  height: 100vh;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div
  `text-align: center;
  margin-bottom: 30px;

  h4 {
    color: #ffffff;
    margin-bottom: 5px;
  }

  p {
    color: #ced4da;
    font-size: 14px;
  }
`;

const StyledNav = styled(Nav)
  `.nav-link {
    color: #ced4da;
    padding: 10px 0;
    transition: all 0.3s ease;

    &:hover {
      background-color: #495057;
      color: #ffffff;
      padding-left: 15px;
    }
  }
`;

const LogoutButton = styled(Button)
  `width: 100%;
  margin-top: 20px;
  background-color: #dc3545;
  border: none;
  &:hover {
    background-color: #c82333;
  }
`;

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/sign-in");
  };

  return (
    <SidebarWrapper>
      <ProfileSection>
        <h4>Balkrishna Dadhich</h4>
        <p>Finish Your Profile</p>
      </ProfileSection>
      <StyledNav defaultActiveKey="/dashboard" className="flex-column">
        <Nav.Link href="/dashboard">Courses</Nav.Link>
        <Nav.Link href="/dashboard/uploadresume">Upload Resume</Nav.Link>
        <Nav.Link href="/dashboard/Skills">Skill test</Nav.Link>
      </StyledNav>
      <LogoutButton onClick={handleLogout}>
        Logout
      </LogoutButton>
    </SidebarWrapper>
  );
};

export default Sidebar;