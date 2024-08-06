// components/Sidebar.js
import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

const SidebarWrapper = styled.div`
  background-color: #343a40;
  height: 100vh;
  width: 250px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const ProfileSection = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h4 {
    color: #ffffff;
    margin-bottom: 5px;
    word-wrap: break-word; /* Ensure the text breaks into the next line if too long */
  }

  p {
    color: #ced4da;
    font-size: 14px;
  }
`;

const StyledNav = styled(Nav)`
  .nav-link {
    color: #ced4da;
    padding: 10px 0;
    transition: all 0.3s ease;

    &:hover {
      background-color: #495057;
      color: #ffffff;
      padding-left: 15px;
    }

    &:focus,
    &:active {
      box-shadow: none;
      outline: none;
    }
  }
`;

const LogoutButton = styled(Button)`
  width: 100%;
  margin-top: 20px;
  background-color: #dc3545;
  border: none;
  color: white;

  &:hover {
    background-color: #c82333;
  }
`;

const StyledLink = styled.a`
  color: #ced4da;
  display: block;
  padding: 10px 0;
  transition: all 0.3s ease;

  &:hover {
    background-color: #495057;
    color: #ffffff;
    padding-left: 15px;
  }

  &:focus,
  &:active {
    box-shadow: none;
    outline: none;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 120px; /* Increased size */
  height: 120px; /* Increased size */
  margin: 60px 35px 10px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #ced4da;

  input[type="file"] {
    display: none;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #ffffff;
  }
`;

const Sidebar = () => {
  const router = useRouter();
  const [profileImage, setProfileImage] = useState("/default-user.png");

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem("token");
    // Redirect to login page
    router.push("/sign-in");
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <SidebarWrapper>
      <ProfileSection>
        <ProfileImageWrapper>
          <label htmlFor="profile-upload">
            <img src={profileImage} alt="Profile Image" />
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
        </ProfileImageWrapper>
        <h4>Balkrishna Dadhich</h4>
        <p>Finish Your Profile</p>
      </ProfileSection>
      <StyledNav defaultActiveKey="/dashboard" className="flex-column">
        <Link href="/dashboard" passHref>
          <StyledLink>Courses</StyledLink>
        </Link>
        <Link href="/dashboard/uploadresume" passHref>
          <StyledLink>Upload Resume</StyledLink>
        </Link>
        <Link href="/dashboard/Skills" passHref>
          <StyledLink>Skill test</StyledLink>
        </Link>
      </StyledNav>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
