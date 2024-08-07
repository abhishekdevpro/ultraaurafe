import React, { useState } from "react";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSignOutAlt,
  faTachometerAlt,
  faFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const CustomNavbar = styled(Navbar)`
  background-color: #343a40 !important;
  padding: 15px 20px;
`;

const Brand = styled(Navbar.Brand)`
  color: #ffffff !important;
  font-size: 1.5rem;
  &:hover {
    color: #ffffff !important;
  }
`;

const ProfileDropdown = styled(Dropdown)`
  position: relative;
  .dropdown-toggle::after {
    display: none;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #ced4da;
  background-color: #343a40;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #ffffff;
  }
`;

const DropdownMenu = styled(Dropdown.Menu)`
  animation: ${slideIn} 0.3s ease-out;
  position: absolute;
  top: 100%;
  right: 0;
  left: auto;
  width: 100vw;
  max-width: 400px;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0;
  z-index: 1050;
`;

const DropdownItem = styled(Dropdown.Item)`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #343a40 !important;
  &:hover {
    background-color: #f8f9fa;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.2rem;
  margin-right: 10px;
`;

const Header = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/sign-in");
  };

  return (
    <CustomNavbar expand="lg">
      <Container className="d-flex justify-content-between align-items-center">
        <Brand href="/">My Dashboard</Brand>
        <ProfileDropdown align="end">
          <Dropdown.Toggle as={ProfileImageWrapper}>
            <FontAwesomeIcon icon={faUser} color="#ffffff" />
          </Dropdown.Toggle>
          <DropdownMenu>
            <DropdownItem>
              <IconWrapper>
                <FontAwesomeIcon icon={faUser} />
              </IconWrapper>
              <div>
                <div>Balkrishna Dadhich</div>
                <small className="text-muted">Finish Your Profile</small>
              </div>
            </DropdownItem>
            <Dropdown.Divider />
            <DropdownItem href="/dashboard">
              <IconWrapper>
                <FontAwesomeIcon icon={faTachometerAlt} />
              </IconWrapper>
              Dashboard
            </DropdownItem>
            <DropdownItem href="/create-resume-cv">
              <IconWrapper>
                <FontAwesomeIcon icon={faFileAlt} />
              </IconWrapper>
              Create Resume/CV
            </DropdownItem>
            <Dropdown.Divider />
            <DropdownItem onClick={handleLogout}>
              <IconWrapper>
                <FontAwesomeIcon icon={faSignOutAlt} />
              </IconWrapper>
              Logout
            </DropdownItem>
          </DropdownMenu>
        </ProfileDropdown>
      </Container>
    </CustomNavbar>
  );
};

export default Header;
