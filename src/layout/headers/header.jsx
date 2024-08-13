
import useSticky from "@/hooks/use-sticky";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavMenu from "./nav-menu";
import Sidebar from "./sidebar";
import axios from "axios";
import styled from "styled-components";

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
`;

const UserName = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-right: 0.5rem;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #ffffff;
  background-color: #ff6b6b; /* Theme color */
  border: none;
  border-radius: 20px; /* Rounded corners */
  padding: 0.5rem 1rem; /* Padding */
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  margin-left: 1rem; /* Space between username and button */

  &:hover {
    background-color: #e05252; /* Darker shade on hover */
    color: #fff;
  }

  i {
    margin-right: 0.5rem; /* Space between icon and text */
  }
`;

const category_data = [
  { title: "IT courses -Basic and Advanced" },
  { title: "Home services - Housekeeping" },
  { title: "Plumbing" },
  { title: "Electrical" },
  { title: "Home care- Child care, Aging care and Nursing" },
  { title: "Soft skills" },
  { title: "Corporate training" },
  { title: "Hospitality" },
  { title: "Agriculture" },
];

const Header = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = async () => {
    try {
      const userToken = localStorage.getItem("token");
      const trainerToken = localStorage.getItem("trainerToken");

      if (userToken) {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/profile",
          {
            headers: {
              Authorization: userToken,
            },
          }
        );
        setProfileData(response.data.data);
      } else if (trainerToken) {
        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/profile",
          {
            headers: {
              Authorization: trainerToken,
            },
          }
        );
        setProfileData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching the profile data:", error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("trainerToken");
    window.location.href = "/sign-in";
  };

  return (
    <>
      <header className="header__transparent">
        <div className="header__area">
          <div
            className={`main-header header-xy-spacing ${
              sticky ? "header-sticky" : ""
            }`}
            id="header-sticky"
          >
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
                  <div className="logo-area d-flex align-items-center">
                    <div className="logo">
                      <Link href="/">
                        <img
                          src="/assets/img/logo/logo1.png"
                          alt="logo"
                          style={{ width: "350px" }}
                        />
                      </Link>
                    </div>
                    <div className="header-cat-menu ml-40 d-none d-md-block">
                      <nav>
                        <ul>
                          <li>
                            <ul className="sub-menu border">
                              {category_data.map((item, i) => (
                                <li key={i}>
                                  <Link
                                    href="/course-grid"
                                    className="border-bottom p-2"
                                  >
                                    {item.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-center">
                  <div className="main-menu d-flex justify-content-center mr-0">
                    <nav id="mobile-menu" className="d-none d-xl-block">
                      <NavMenu />
                    </nav>
                  </div>
                  <div className="header-right d-md-flex align-items-center">
                    <div className="header__search d-none d-lg-block">
                      <form onSubmit={(e) => e.preventDefault()}>
                       <Link href={"/course-grid"}>
                       <div className="header__search-input">
                          <button className="header__search-btn">
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </button>
                          <input type="text" placeholder="Search Courses" />
                        </div>
                       </Link>
                      </form>
                    </div>
                    <div className="header-meta">
                      <ul>
                        {!profileData ? (
                          <>
                            <li>
                              <Link
                                href="/sign-in"
                                className="d-none d-md-block"
                              >
                                <i className="fi fi-rr-user"></i>
                              </Link>
                            </li>
                            {/* <li>
                              <Link href="/cart" className="d-none d-md-block">
                                <i className="fi fi-rr-shopping-bag"></i>
                              </Link>
                            </li> */}
                          </>
                        ) : (
                          <div className="d-flex align-items-center ml-3">
                            <UserInfo>
                              <UserPhoto
                                src={`https://api.novajobs.us/${profileData.photo}`}
                                alt={`${profileData.first_name} `}
                              />
                              <Link
                                href={
                                  localStorage.getItem("token")
                                    ? "/dashboard"
                                    : "/trainer"
                                }
                              >
                                <UserName>
                                  {profileData.first_name}
                                </UserName>
                              </Link>
                              <LogoutButton onClick={handleLogout}>
                                <i className="fi fi-rr-sign-out"></i>
                                
                              </LogoutButton>
                            </UserInfo>
                          </div>
                        )}
                        <li>
                          <a
                            onClick={() => setIsActive(true)}
                            href="#"
                            className="tp-menu-toggle d-xl-none"
                          >
                            <i className="icon_ul"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default Header;
