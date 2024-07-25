import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

// social_links
const social_links = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f",
    name: "Facebook",
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",
    name: "Twitter",
  },
  {
    link: "https://www.instagram.com/",
    target: "_blank",
    icon: "fab fa-instagram",
    name: "Instagram",
  },
  {
    link: "https://www.youtube.com/",
    target: "_blank",
    icon: "fab fa-youtube",
    name: "Youtube",
  },
];

// setting
const setting = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const InstructorArea = ({ style_2 }) => {
  const sliderRef = useRef(null);
  const [instructorInfo, setInstructorInfo] = useState([]);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get("https://api.novajobs.us/api/trainers/getalltrainer");
        setInstructorInfo(response.data.data); // Adjust according to the response structure
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchInstructors();
  }, []);

  return (
    <>
      <section
        className="instructor-area pt-110 pb-110 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            {style_2 ? (
              <div className="col-lg-12">
                <div className="section-title mb-35 text-center">
                  <span className="tp-sub-title-box mb-15">Instructor</span>
                  <h2 className="tp-section-title">Our Expert Instructor</h2>
                </div>
              </div>
            ) : (
              <>
                <div className="col-xl-6 col-lg-8 col-md-7 col-12">
                  <div className="section-title mb-65">
                    <h2 className="tp-section-title mb-20">
                      Our Expert Instructor
                    </h2>
                  </div>
                </div>

                <div className="col-xl-6 col-lg-4 col-md-5 col-6">
                  <div className="tp-instruc-arrow d-flex justify-content-md-end">
                    <button
                      type="button"
                      onClick={() => sliderRef.current.slickPrev()}
                      className="slick-prev slick-arrow"
                    >
                      <i className="arrow_carrot-left"></i>
                    </button>
                    <button
                      type="button"
                      onClick={() => sliderRef.current.slickNext()}
                      className="slick-next slick-arrow"
                    >
                      <i className="arrow_carrot-right"></i>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="intruc-active mb-15 tp-slide-space">
            <Slider {...setting} ref={sliderRef}>
              {instructorInfo.map(({ trainer }) => (
                <div key={trainer.id} className="tp-instruc-item">
                  <div className="tp-instructor text-center p-relative mb-30">
                    <div className="tp-instructor__thumb mb-25 d-flex justify-content-center">
                      <img src={`https://api.novajobs.us${trainer.photo}`} alt="instructor-profile" style={{width:"310px",height:"250px"}}/>
                    </div>
                    <div className="tp-instructor__content">
                      <h4 className="tp-instructor__title mb-20">
                        <Link href={`/instructor-profile/${trainer.id}`}>
                          {trainer.first_name} {trainer.last_name}
                        </Link>
                      </h4>
                      <span>{trainer.jobtitle}</span>
                      <div className="tp-instructor__social">
                        <ul>
                          {social_links.map((link, i) => (
                            <li key={i}>
                              <a target={link.target} href={link.link}>
                                <i className={link.icon}></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="instructor-btn text-center">
                <Link className="tp-btn" href="/instructor">
                  All Instructor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorArea;
