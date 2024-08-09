import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import SidebarLayout from "@/src/common/sidebar-layout";
import { useRouter } from "next/router";

function CourseForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const { id } = router.query;

  useEffect(() => {
    const data = router.query.data || sessionStorage.getItem("courseData");
    if (data) {
      const decodedData = JSON.parse(decodeURIComponent(data));
      setFormData(decodedData);
      sessionStorage.setItem("courseData", JSON.stringify(decodedData));
    }
  }, [router.query.data]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    setBannerImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("trainerToken");
      if (!token) {
        toast.error("User not authenticated. Please login.");
        return;
      }

      const response = await axios.patch(
        `https://api.novajobs.us/api/trainers/update-course/${id}`,

        {
          ...formData,
          trainer_id: String(formData.trainer_id),
          course_price: String(formData.course_price),
          enrolled_student_count: String(formData.enrolled_student_count),
          discount_percent: String(formData.discount_percent),
          after_discount_price: String(formData.after_discount_price),
        },
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Course updated successfully!");
        router.push("/trainer");
        // Optionally, reset the form or navigate to another page
      } else {
        toast.error("Failed to update course.");
        console.error("Error updating course:", response.data);
      }
    } catch (error) {
      toast.error("Failed to update course.");
      console.error("Error updating course:", error);
    }
  };
  return (
    <SidebarLayout>
      <main className="col-sm-10 p-0 ">
        <div className="container mt-5 mb-5">
          <h2 className="text-center">Update Course</h2>
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
                value={formData.course_title}
                onChange={handleInputChange}
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
                value={formData.course_language}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label">
                level
              </label>
              <input
                type="text"
                className="form-control"
                id="level"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Course category
              </label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
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
                value={formData.time_spent_on_course}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="learning_objectives" className="form-label">
                Learning Objectives
              </label>
              <textarea
                className="form-control"
                id="learning_objectives"
                name="learning_objectives"
                value={formData.learning_objectives}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="requirements" className="form-label">
                requirements
              </label>
              <textarea
                className="form-control"
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="target_audience" className="form-label">
                Target Audience
              </label>
              <textarea
                className="form-control"
                id="target_audience"
                name="target_audience"
                value={formData.target_audience}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="course_description" className="form-label">
                Course Description
              </label>
              <textarea
                className="form-control"
                id="course_description"
                name="course_description"
                value={formData.course_description}
                onChange={handleInputChange}
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
                value={formData.course_price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="after_discount_price" className="form-label">
                After Discount Price
              </label>
              <input
                type="number"
                className="form-control"
                id="after_discount_price"
                name="after_discount_price"
                value={formData.after_discount_price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="discount_percent" className="form-label">
                Discount Percent
              </label>
              <input
                type="number"
                className="form-control"
                id="discount_percent"
                name="discount_percent"
                value={formData.discount_percent}
                onChange={handleInputChange}
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
                value={formData.coupon_code}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="course_intro_video_url" className="form-label">
                Course Intro Video URL
              </label>
              <input
                type="text"
                className="form-control"
                id="course_intro_video_url"
                name="course_intro_video_url"
                value={formData.course_intro_video_url}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="course_banner_image" className="form-label">
                Upload Course Banner Image
              </label>
              <input
                type="file"
                className="form-control"
                id="course_banner_image"
                name="course_banner_image"
                onChange={handleFileChange}
                // required
              />
            </div>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </main>
    </SidebarLayout>
  );
}

export default CourseForm;
