import React, { useState } from "react";
import Link from "next/link";
import EditProfileModal from "./EditProfileModal";
import Count from "@/src/common/count.jsx";
import our_course_data from "@/src/data/our-course-data.js";
import course_data_2 from "../../data/course-data-2.js";

// instructor_portfolio_data
const instructor_portfolio_data = [
  {
    id: 6,
    img: "/assets/img/bg/instruc-in-06.jpg",
    name: "Esther Howard",
    total_class: "35",
    total_st: "291",
    title: "Instructor",
    sub_title:
      "UX/UI Designer, Chemical Engineer, Youtuber, Life Style Blogger",
    followers: "35,600",
    following: "135",
    job_title: "Lead UX Engineer",
    phone: "+00 365 9852 65",
    email: "epora@mail.com",
    experiences_year: "12+ Years",
    skill_level: "Pro Level",
    language: "English",
    linkdin:'',
    biography: (
      <>
        <p>
          Synergistically foster 24/7 leadership rather than scalable platforms.
          Conveniently visualize installed base products before interactive
          results. Collaboratively restore corporate experiences and open-source
          applications. Proactively mesh cooperative growth strategies for
          covalent opportunities. Competently create efficient markets through
          best-of-breed potentialities.
        </p>
        <p>
          Compellingly exploit B2B vortals with emerging total linkage.
          Appropriately pursue strategic leadership whe intermandated ideas.
          Proactively revolutionize interoperable "outside the box" thinking
          with fully researched innovation. Dramatically facilitate exceptional
          architectures and bricks-and-clicks data. Progressively genera
          extensible e-services for.
        </p>
      </>
    ),
  },
];

// counter data
const counter_data = [
  {
    id: 1,
    icon: "fi fi-rr-user",
    count_number: 276,
    thousand: "K",
    title: "Worldwide Students",
  },
  {
    id: 2,
    icon: "fi fi-rr-document",
    count_number: 35,
    thousand: "",
    title: "Professional Courses",
  },
  {
    id: 3,
    icon: "fi fi-rr-star",
    count_number: 407,
    thousand: "K",
    title: "Beautiful Review",
  },
];

const InstructorPortfolioArea = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [profileData, setProfileData] = useState(instructor_portfolio_data[0]);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleSaveProfile = (updatedProfile) => {
    setProfileData(updatedProfile);
  };



  return (
    <>
      <section
        className="instructor-portfolio pt-120 pb-80 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-5">
              <div className="instruc-sidebar mb-40">
                <div className="isntruc-side-thumb mb-30">
                  <img
                    src={profileData.img}
                    alt="instructor-thumb"
                  />
                </div>
                <div className="instructor-sidebar-widget">
                  <div className="isntruc-side-content text-center">
                    <h4 className="side-instructor-title mb-15">
                      {profileData.name}
                    </h4>
                    <p>{profileData.sub_title}</p>
                  </div>
                  <div className="instruc-follower d-flex align-items-center justify-content-center mb-25">
                    <div className="ins-followers">
                      <h4>{profileData.followers}</h4>
                      <span>Followers</span>
                    </div>
                    <div className="ins-following">
                      <h4>{profileData.following}</h4>
                      <span>Following</span>
                    </div>
                  </div>
                  
                  <div className="instruc-side-btn text-center mb-40">
                    <button className="ins-btn" onClick={handleOpenModal}>
                      Edit Profile
                    </button>
                  </div>
                  <div className="cd-information instruc-profile-info mb-35">
                    <ul>
                      <li>
                        <Link href="/create-course">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label>Create Course</label>
                          <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/course-update">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label>Update Course</label>
                          <span></span>
                        </Link>
                      </li>
                      <li>
                        <Link href="/course-list">
                          <i className="fi fi-rr-briefcase"></i>{" "}
                          <label>Course List</label>
                          <span></span>
                        </Link>
                      </li>
                      <li>
                        <i className="fi fi-rr-briefcase"></i>{" "}
                        <label>Job Title</label>{" "}
                        <span>{profileData.job_title}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-phone-call"></i>{" "}
                        <label>Phone</label>{" "}
                        <span>{profileData.phone}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-envelope"></i>{" "}
                        <label>Email</label>{" "}
                        <span>{profileData.email}</span>
                      </li>
                      <li>
                        <i className="fi fi-rr-time-forward"></i>{" "}
                        <label>Experiences</label>{" "}
                        <span>{profileData.experiences_year}</span>
                      </li>
                      <li>
                        <i className="fi fi-rs-time-check"></i>{" "}
                        <label>Skill Level</label>{" "}
                        <span>{profileData.skill_level}</span>
                      </li>
                      <li>
                        <i className="fi fi-br-comments"></i>{" "}
                        <label>Language</label>{" "}
                        <span>{profileData.language}</span>
                      </li>
                      <li>
                        <i className="fa-brands fa-linkedin-in"></i>{" "}
                        <label>LinkedIn</label> 
                        <span>{profileData.linkdin}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="c-details-social">
                    <h5 className="cd-social-title mb-25">Follow More:</h5>
                    <div className="cd-social-icon">
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          
            <div className="col-xl-8 col-lg-7">
              <div className="instructor-main-content ml-30 mb-40">
                <div className="instruc-biography mb-50">
                  <h4 className="ins-bio-title mb-30">Biography</h4>
                  <p>
                    Synergistically foster 24/7 leadership rather than scalable
                    platforms. Conveniently visualize installed base products
                    before interactive results. Collaboratively restore
                    corporate experiences and open-source applications.
                    Proactively mesh cooperative growth strategies for covalent
                    opportunities. Competently create efficient markets through
                    best-of-breed potentialities.
                  </p>
                  <p>
                    Compellingly exploit B2B vortals with emerging total
                    linkage. Appropriately pursue strategic leadership whe
                    intermandated ideas. Proactively revolutionize interoperable
                    "outside the box" thinking with fully researched innovation.
                    Dramatically facilitate exceptional architectures and
                    bricks-and-clicks data. Progressively genera extensible
                    e-services for.
                  </p>
                </div>
                <div className="instruc-statics mb-20">
                  <div className="row">

                     {
                        counter_data.map((item, i) =>                         
                        <div key={i} className="col-xl-4 col-lg-6 col-md-4">
                      <div className="isntruc-tp-counter mb-30">
                        <h4 className="isntruc-tp-counter__title p-relative">
                          <span className="counter">
                          <Count
                          add_style={true}
                          number={item.count_number}
                          text={item.thousand}
                          style_3={true}
                        />                          
                           </span>
                        </h4>
                        <p>{item.title}</p>
                      </div>
                    </div>
                        )
                     }
                    
                  </div>
                </div>
                <div className="instructor-tp-course">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="instruc-biography">
                        <h2 className="ins-bio-title mb-35">Courses which you have created</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {our_course_data.slice(0, 4).map((item, i) => (
                      <div key={i} className="col-xl-6 col-lg-12 col-md-6">
                        <div className="tpcourse mb-40">
                          <div className="tpcourse__thumb p-relative w-img fix">
                            <Link href="/course-details">
                              <img src={item.img} alt="course-thumb" />
                            </Link>
                            <div className="tpcourse__tag">
                              <Link href="#">
                                <i className="fi fi-rr-heart"></i>
                              </Link>
                            </div>
                            <div className="tpcourse__img-icon">
                              <img src={item.icon} alt="course-avata" />
                            </div>
                          </div>
                          <div className="tpcourse__content-2">
                            <div className="tpcourse__category mb-10">
                              <ul className="tpcourse__price-list d-flex align-items-center">
                                <li>
                                  <Link
                                    className={item.ct_color}
                                    href="/course-details"
                                  >
                                    {item.course_title}
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className={item.cn_color}
                                    href="/course-details"
                                  >
                                    {item.course_name}
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__ava-title mb-15">
                              <h4 className="tpcourse__title">
                                <Link href="/course-details">{item.title}</Link>
                              </h4>
                            </div>
                            <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                              <ul className="d-flex align-items-center">
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-01.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.cls_text}</span>
                                </li>
                                <li>
                                  <img
                                    src="/assets/img/icon/c-meta-02.png"
                                    alt="meta-icon"
                                  />
                                  <span>{item.st_text}</span>
                                </li>
                              </ul>
                            </div>
                            <div className="tpcourse__rating d-flex align-items-center justify-content-between">
                              <div className="tpcourse__rating-icon">
                                <span>4.7</span>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-ss-star"></i>
                                <i className="fi fi-rs-star"></i>
                                <p>(125)</p>
                              </div>
                              <div className="tpcourse__pricing">
                                <h5 className="price-title">$0.00</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="basic-pagination">
                    <nav>
                      <ul>
                        <li>
                          <Link href="/blog">
                            <i className="far fa-angle-left"></i>
                          </Link>
                        </li>
                        <li>
                          <span className="current">1</span>
                        </li>
                        <li>
                          <Link href="/blog">2</Link>
                        </li>
                        <li>
                          <Link href="/blog">3</Link>
                        </li>
                        <li>
                          <Link href="/blog">
                            <i className="far fa-angle-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
      <EditProfileModal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        profile={profileData}
        onSave={handleSaveProfile}
      />
    </>
  );
};

export default InstructorPortfolioArea;
