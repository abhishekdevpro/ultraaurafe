
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyBannerImage from 'public/dummyBannerImage.png'

// Styled Components
const CourseAreaWrapper = styled.section`
  margin-bottom: 80px;
`;

const CourseCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CourseThumb = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CourseTag = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  i {
    font-size: 1.5rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    padding: 8px;
  }
`;

const CourseIcon = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const CourseContent = styled.div`
  padding: 20px;

  .category {
    margin-bottom: 10px;
  }

  .category a {
    text-decoration: none;
    color: #555;
    font-weight: bold;

    &:hover {
      color: #007bff;
    }
  }

  .title {
    margin-bottom: 15px;
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: #007bff;
      }
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    color: #666;
  }

  .rating {
    display: flex;
    align-items: center;

    i {
      color: #ffc107;
    }

    p {
      margin-left: 5px;
      color: #666;
    }
  }

  .pricing {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 1.5rem;
`;

const CourseArea = () => {
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/all-courses`
        );
        console.log(response)
        setCourseDetails(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourseDetails();
  }, []);

  if (!courseDetails) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <CourseAreaWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title mb-65 text-center">
              <h2 className="tp-section-title mb-20">Related Courses</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {courseDetails.map((item, i) => (
            <div key={i} className="col-xl-4 col-lg-6 col-md-6 mb-4">
              <CourseCard>
                <CourseThumb>
                  <Link href={item.course_link || "#"}>
                    <img src={item.course_banner_image
                              ? `https://api.novajobs.us${item.course_banner_image}`
                              : "/dummyBannerImage.png"} alt="course-thumb" />
                  </Link>
                  <CourseTag>
                    <Link href={item.course_link || "#"}>
                      <i className="fi fi-rr-heart"></i>
                    </Link>
                  </CourseTag>
                  {/* <CourseIcon>
                    <img src={item.icon} alt="course-avatar" />
                  </CourseIcon> */}
                </CourseThumb>
                <CourseContent>
                  <div className="category">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link className={item.ct_color} href={`/course-details/${item.id}` || "#"}>
                          {item.course_title}
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link className={item.cn_color} href={item.course_link || "#"}>
                          {item.category}
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="title">
                    <Link href={item.course_link || "#"}>{item.title}</Link>
                  </div>
                  <div className="meta">
                    <div>
                      <img src="/assets/img/icon/c-meta-01.png" alt="meta-icon" />{" "}
                      <span>{item.enrolled_student_count}</span>
                    </div>
                    <div>
                      <img src="/assets/img/icon/c-meta-02.png" alt="meta-icon" />{" "}
                      <span>{item.time_spent_on_course}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="rating">
                      <span>{item.start_text}</span>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-ss-star"></i>
                      <i className="fi fi-rs-star"></i>
                    </div>
                    <div className="pricing">
                      ${item.course_price}
                    </div>
                  </div>
                </CourseContent>
              </CourseCard>
            </div>
          ))}
        </div>
      </div>
    </CourseAreaWrapper>
  );
};

export default CourseArea;
