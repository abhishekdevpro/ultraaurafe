import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function CourseForm() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      trainer_email: "trainer@mail.com", // Static value for the trainer email
      trainer_first_name: "trainer", // Static value for the trainer first name
      trainer_last_name: "user", // Static value for the trainer last name
      course_title: e.target.course_title.value,
      course_banner_image: "", // Add appropriate value or input field if needed
      course_intro_video_url: "", // Add appropriate value or input field if needed
      course_language: e.target.course_language.value,
      level: e.target.level.value,
      category: e.target.courseCategory.value,
      time_spent_on_course: e.target.time_spent_on_course.value,
      learning_objectives: e.target.learning_objectives.value,
      requirements: e.target.requirements.value,
      target_audience: e.target.target_audience.value,
      course_description: e.target.course_description.value,
      course_price: e.target.course_price.value,
      coupon_code: e.target.coupon_code.value,
    };

    const token = localStorage.getItem("token"); // Fetch token from local storage

    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };

    console.log("formData:", formData); // Debugging formData
    console.log("config:", config); // Debugging config

    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/create-course",
        formData,
        config
      );
      console.log("response:", response); // Debugging response
      if (response.status === 200 && response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/sectioncourse");
        // Optionally reset form fields after successful submission
        e.target.reset();
      } else {
        toast.error("Failed to create course.");
      }
    } catch (error) {
      console.error("Error:", error); // Debugging error
      toast.error("Failed to create course.");
    }
  };

  return (
    <div className="container mt-5 mb-3">
      <div className="d-flex gap-5 content-center pt-5">
        <section
          className="instructor-portfolio pt-5 wow fadeInUp border-2"
          data-wow-duration=".8s"
          data-wow-delay=".2s"
        >
          <div className="instruc-sidebar mb-20 col-xl- col-lg- p-5 border-2">
            <div className="">
              <ul className="col">
                <li>
                  <Link href="/course-list">
                    <i className="fi fi-rr-briefcase"></i>{" "}
                    <label>Course List</label>
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section
          className="instructor-portfolio wow fadeInUp"
          data-wow-duration=".8s"
          data-wow-delay=".2s"
        >
          <div className="instruc-sidebar mb-40 col-xl- col-lg- p-5">
            <div className="">
              <ul className="col">
                <li>
                  <Link href="/course-update">
                    <i className="fi fi-rr-briefcase"></i>{" "}
                    <label>Update Course</label>
                    <span></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <ToastContainer />
      <h2 className="text-center">Create a New Course</h2>
      <form
        className="mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="course_title" className="form-label">
            Course Title
          </label>
          <input
            type="text"
            className="form-control"
            id="course_title"
            name="course_title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course_language" className="form-label">
            Course Language
          </label>
          <input
            type="text"
            className="form-control"
            id="course_language"
            name="course_language"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="level" className="form-label">
            Level
          </label>
          <input
            type="text"
            className="form-control"
            id="level"
            name="level"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="courseCategory" className="form-label">
            Course Category
          </label>
          <textarea
            className="form-control"
            id="courseCategory"
            name="courseCategory"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time_spent_on_course" className="form-label">
            Time Spent on Course
          </label>
          <input
            type="text"
            className="form-control"
            id="time_spent_on_course"
            name="time_spent_on_course"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="learning_objectives" className="form-label">
            Learning Objectives
          </label>
          <input
            type="text"
            className="form-control"
            id="learning_objectives"
            name="learning_objectives"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="requirements" className="form-label">
            Requirements
          </label>
          <input
            type="text"
            className="form-control"
            id="requirements"
            name="requirements"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="target_audience" className="form-label">
            Target Audience
          </label>
          <input
            type="text"
            className="form-control"
            id="target_audience"
            name="target_audience"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course_description" className="form-label">
            Course Description
          </label>
          <input
            type="text"
            className="form-control"
            id="course_description"
            name="course_description"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="course_price" className="form-label">
            Course Price
          </label>
          <input
            type="number"
            className="form-control"
            id="course_price"
            name="course_price"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="coupon_code" className="form-label">
            Coupon Code
          </label>
          <input
            type="text"
            className="form-control"
            id="coupon_code"
            name="coupon_code"
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CourseForm;
