import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios";
import SidebarLayout from "@/src/common/sidebar-layout";
import TableComponent from "../../components/course-table";
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
                <TableComponent courses={courseListData} />
              </div>
            </div>
            {/* <div className="basic-pagination text-center">
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
            </div> */}
          </div>
        </section>
      </main>
    </SidebarLayout>
  );
};

export default CourseListArea;
