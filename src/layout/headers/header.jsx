// import useSticky from "@/hooks/use-sticky";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import NavMenu from "./nav-menu";
// import Sidebar from "./sidebar";
// import axios from "axios";

// const category_data = [
//   { title: "IT courses -Basic and Advanced" },
//   { title: "Home services - Housekeeping" },
//   { title: "Plumbing" },
//   { title: "Electrical" },
//   { title: "Home care- Child care, Aging care and Nursing" },
//   { title: "Soft skills" },
//   { title: "Corporate training" },
//   { title: "Hospitality" },
//   { title: "Agriculture" },
// ];
// const Header = () => {
//   const { sticky } = useSticky();
//   const [isActive, setIsActive] = useState(false);
//   const [profileData, setProfileData] = useState(null);

//   const fetchProfileData = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(
//         "https://api.novajobs.us/api/students/profile",
//         {
//           headers: {
//             Authorization: token,
//           },
//         }
//       );
//       setProfileData(response.data.data);
//     } catch (error) {
//       console.error("Error fetching the profile data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProfileData();
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/sign-in";
//   };

//   return (
//     <>
//       <header className="header__transparent">
//         <div className="header__area">
//           <div
//             className={`main-header header-xy-spacing ${
//               sticky ? "header-sticky" : ""
//             }`}
//             id="header-sticky"
//           >
//             <div className="container-fluid">
//               <div className="row align-items-center">
//                 <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-6 col-6">
//                   <div className="logo-area d-flex align-items-center">
//                     <div className="logo ">
//                       <Link href="/">
//                         <img
//                           src="/assets/img/logo/logo1.png"
//                           alt="logo"
//                           style={{ width: "350px" }}
//                         />
//                       </Link>
//                     </div>
//                     <div className="header-cat-menu ml-40 d-none d-md-block">
//                       <nav>
//                         <ul>
//                           <li>
//                            {/* <a href="#" className="">
//                               ☰
                            
//                           </a> */}
//                             <ul className="sub-menu border">
//                               {category_data.map((item, i) => (
//                                 <li key={i}>
//                                   <Link
//                                     href="/course-grid"
//                                     className="border-bottom p-2"
//                                   >
//                                     {item.title}
//                                   </Link>
//                                 </li>
//                               ))}
//                             </ul>
//                           </li>
//                         </ul>
//                       </nav>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-6 col-6 d-flex align-items-center justify-content-center ">
//                   <div className="main-menu d-flex justify-content-center mr-0 ">
//                     <nav id="mobile-menu" className="d-none d-xl-block">
//                       <NavMenu />
//                     </nav>
//                   </div>
//                   <div className="header-right d-md-flex align-items-center">
//                     <div className="header__search d-none d-lg-block">
//                       <form onSubmit={(e) => e.preventDefault()}>
//                         <div className="header__search-input">
//                           <button className="header__search-btn">
//                             <i className="fa-regular fa-magnifying-glass"></i>
//                           </button>
//                           <input type="text" placeholder="Search Courses" />
//                         </div>
//                       </form>
//                     </div>
//                     <div className="header-meta">
//                       <ul>
//                         <li>
//                           <Link href="/sign-in" className="d-none d-md-block">
//                             <i className="fi fi-rr-user"></i>
//                           </Link>
//                         </li>
//                         <li>
//                           <Link href="/cart" className="d-none d-md-block">
//                             <i className="fi fi-rr-shopping-bag"></i>
//                           </Link>
//                         </li>
//                         <li>
//                           <a
//                             onClick={() => setIsActive(true)}
//                             href="#"
//                             className="tp-menu-toggle d-xl-none"
//                           >
//                             <i className="icon_ul"></i>
//                           </a>
//                         </li>
//                       </ul>
//                       {profileData && (
//                         <div className="user-info flex items-center ml-4">
//                           <div className="user-name mr-2">
//                             {profileData.first_name} {profileData.last_name}
//                           </div>
//                           <div><img src='https://api.novajobs.us/${profileData.photo}' alt="56"/></div>
//                           <button
//                             className="logout-btn flex items-center text-gray-700 hover:text-gray-900 d-none d-md-block"
//                             onClick={handleLogout}
//                           >
//                             <i className="fi fi-rr-sign-out mr-1"></i>
//                             Logout
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <Sidebar isActive={isActive} setIsActive={setIsActive} />
//     </>
//   );
// };

// export default Header;


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
  justify-content:center;
  margin-left: 1.5rem;
`;

const UserName = styled.div`
  margin-right: 0.5rem;
  font-size: 1.5rem; /* Bootstrap equivalent of text-sm */
  font-weight: 400; /* Bootstrap equivalent of font-semibold */
  color: #ffffff;
`;

const UserPhoto = styled.img`
  border-radius: 50%;
  width: 2.5rem; /* Bootstrap equivalent of w-10 */
  height: 2.5rem; /* Bootstrap equivalent of h-10 */
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Bootstrap equivalent of shadow-md */
  margin-right: 0.5rem;
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem; /* Bootstrap equivalent of text-sm */
  color: #000;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #d1d1d1; /* Bootstrap equivalent of text-gray-300 */
  }

  i {
    margin-right: 0.25rem; /* Bootstrap equivalent of mr-1 */
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
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get(
          "https://api.novajobs.us/api/students/profile",
          {
            headers: {
              Authorization: token,
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
                        <div className="header__search-input">
                          <button className="header__search-btn">
                            <i className="fa-regular fa-magnifying-glass"></i>
                          </button>
                          <input type="text" placeholder="Search Courses" />
                        </div>
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
                            <li>
                              <Link href="/cart" className="d-none d-md-block">
                                <i className="fi fi-rr-shopping-bag"></i>
                              </Link>
                            </li>
                          </>
                        ) : (
                          <div className="d-flex align-items-center ml-3">
  <UserInfo>
    <UserPhoto
      src={`https://api.novajobs.us/${profileData.photo}`}
      alt={`${profileData.first_name} ${profileData.last_name}`}
    />
    <Link href={'/dashboard'}>
    <UserName>
      {profileData.first_name} {profileData.last_name}
    </UserName>
    </Link>
    <LogoutButton onClick={handleLogout}>
      <i className="fi fi-rr-sign-out"></i>
      Logout
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
