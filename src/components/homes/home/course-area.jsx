import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast, Toaster } from "react-hot-toast";

const CourseArea = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    publicCourseList();
  }, []);

  const publicCourseList = async () => {
    try {
      const response = await axios.get(
        "https://api.novajobs.us/api/trainers/all-courses"
      );
      if (response.data && response.data.data) {
        setCourses(response.data.data);
      } else {
        toast.error("Unexpected API response structure.");
      }
    } catch (error) {
      toast.error("Error fetching course data.");
    }
  };

  return (
    <>
      <Toaster />
      <section
        className="course-area pt-115 pb-110 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title mb-65">
                <h2 className="tp-section-title mb-20">
                  Explore Popular Courses
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {courses.length > 0 ? (
              courses.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  <div className="tpcourse mb-40">
                    <div className="tpcourse__thumb p-relative w-img fix">
                      {item.course_link ? (
                        <Link href={item.course_link}>
                          <img
                            src={item.course_banner_image}
                            alt="course-thumb"
                          />
                        </Link>
                      ) : (
                        <img
                          src={item.course_banner_image}
                          alt="course-thumb"
                        />
                      )}
                      <div className="tpcourse__tag">
                        {item.course_link ? (
                          <Link href={item.course_intro_video_url}>
                            <i className="fi fi-rr-heart"></i>
                          </Link>
                        ) : (
                          <i className="fi fi-rr-heart"></i>
                        )}
                      </div>
                    </div>
                    <div className="tpcourse__content">
                      <div className="tpcourse__avatar d-flex align-items-center mb-20">
                        <img src={item.icon} alt="course-avatar" />
                        <h4 className="tpcourse__title">
                          {item.course_link ? (
                            <Link href={item.course_link}>
                              {item.course_title}
                            </Link>
                          ) : (
                            item.course_title
                          )}
                        </h4>
                      </div>
                      <div className="tpcourse__meta pb-15 mb-20">
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
                          <li>
                            <img
                              src="/assets/img/icon/c-meta-03.png"
                              alt="meta-icon"
                            />
                            <span>{item.start_text}</span>
                          </li>
                        </ul>
                      </div>
                      <div className="tpcourse__category d-flex align-items-center justify-content-between">
                        <ul className="tpcourse__price-list d-flex align-items-center">
                          <li>
                            {item.course_link ? (
                              <Link href={item.course_link}>
                                {item.course_title}
                              </Link>
                            ) : (
                              item.course_title
                            )}
                          </li>
                          <li>
                            {item.course_link ? (
                              <Link href={item.course_link}>
                                {item.course_name}
                              </Link>
                            ) : (
                              item.course_name
                            )}
                          </li>
                        </ul>
                        <h5 className="tpcourse__course-price">
                          ${item.course_price}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No courses available.</p>
            )}
          </div>
          <div className="row text-center">
            <div className="col-lg-12">
              <div className="course-btn mt-20">
                <Link className="tp-btn" href="/course-details">
                  Browse All Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseArea;
