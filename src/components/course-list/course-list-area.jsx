import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarLayout from "@/src/common/sidebar-layout";

const CourseListArea = () => {
  const [courseListData, setCourseListData] = useState([]);

  useEffect(() => {
    const fetchCourseListData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found in localStorage");
        }

        const response = await axios.get(
          "https://api.novajobs.us/api/trainers/courses",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        if (response.data && response.data.status === "success") {
          setCourseListData(response?.data?.data || []);
        } else {
          console.error("Invalid response from API:", response.data);
          setCourseListData([]);
        }
      } catch (error) {
        console.error("Error fetching course list data:", error);
      }
    };

    fetchCourseListData();
  }, []);

  return (
    <SidebarLayout>
      <main className="col-sm-10 p-0">
        <section
          className="course-list-area pb-120 wow fadeInUp"
          data-wow-duration=".8s"
          data-wow-delay=".2s"
        >
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <div className="section-title mb-60">
                  <h2 className="tp-section-title mt-3">
                    Courses which you have uploaded
                  </h2>
                </div>
              </div>
            </div>
            <div className="row mb-20">
              <div className="col-lg-8 col-md-12 course-item-width ml-30">
                {courseListData?.map((item, i) => (
                  <div key={i} className="tpcourse tp-list-course mb-40">
                    <div className="row g-0">
                      <div className="col-xl-4 course-thumb-width">
                        <div className="tpcourse__thumb p-relative w-img fix">
                          <Link href="/course-details">
                            <img
                              src={
                                "https://static.vecteezy.com/system/resources/thumbnails/013/215/160/small_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                              }
                              alt="course-thumb"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-xl-8 course-text-width">
                        <div className="course-list-content">
                          <div className="tpcourse__category mb-10">
                            <ul className="tpcourse__price-list d-flex align-items-center">
                              <li>
                                <Link
                                  href="/course-details"
                                  className={item.ct_color}
                                >
                                  {item.trainer_first_name}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/course-details"
                                  className={item.cn_color}
                                >
                                  {item.trainer_last_name}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div className="tpcourse__ava-title mb-15">
                            <h4 className="tpcourse__title tp-cours-title-color">
                              <Link href="/course-details">
                                {item.course_name}
                              </Link>
                            </h4>
                          </div>
                          <div className="tpcourse__meta tpcourse__meta-gap pb-15 mb-15">
                            <ul className="d-flex align-items-center">
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-01.png"
                                  alt="meta-icon"
                                />
                                <span>35 Classes</span>
                              </li>
                              <li>
                                <img
                                  src="/assets/img/icon/c-meta-02.png"
                                  alt="meta-icon"
                                />
                                <span>{item.id}</span>
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
                              <h5 className="price-title">
                                {" "}
                                {item.discount_percent}
                              </h5>
                            </div>
                            <div className="tpcourse__pricing">
                              <h5 className="price-title">
                                {" "}
                                {item.course_price}
                              </h5>
                            </div>
                          </div>
                          <div className="tpcourse__button mt-20">
                            <Link
                              href={`/sectioncourse/course_id=${item.id}&trainer_id=${item.trainer_id}`}
                              className="btn btn-primary"
                            >
                              Add Lecture
                            </Link>{" "}
                            <Link
                              href={`/edit-lecture/${item.id}`}
                              className="btn btn-primary"
                            >
                              Edit Lecture
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basic-pagination text-center">
              <nav>
                <ul>
                  <li>
                    <span className="current">1</span>
                  </li>
                  <li>
                    <Link href="/course-list">2</Link>
                  </li>
                  <li>
                    <Link href="/course-list">3</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </main>
    </SidebarLayout>
  );
};

export default CourseListArea;
