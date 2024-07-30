// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Link from "next/link";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";
// import SidebarLayout from "@/src/common/sidebar-layout";

// function CourseForm() {
//   const [bannerImage, setBannerImage] = useState(null);
//   const router = useRouter();

//   const handleFileChange = (e) => {
//     setBannerImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("trainer_email", "mailto:trainer@mail.com");
//     formData.append("trainer_first_name", "trainer");
//     formData.append("trainer_last_name", "user");
//     formData.append("course_title", e.target.course_title.value);
//     formData.append("course_banner_image", bannerImage); // Add the image file
//     formData.append("course_intro_video_url", ""); // Add appropriate value or input field if needed
//     formData.append("course_language", e.target.course_language.value);
//     formData.append("level", e.target.level.value);
//     formData.append("category", e.target.courseCategory.value);
//     formData.append("time_spent_on_course", e.target.time_spent_on_course.value);
//     formData.append("learning_objectives", e.target.learning_objectives.value);
//     formData.append("requirements", e.target.requirements.value);
//     formData.append("target_audience", e.target.target_audience.value);
//     formData.append("course_description", e.target.course_description.value);
//     formData.append("course_price", e.target.course_price.value);
//     formData.append("coupon_code", e.target.coupon_code.value);

//     const token = localStorage.getItem("token"); // Fetch token from local storage

//     const config = {
//       headers: {
//         Authorization: token,
//         "Content-Type": "multipart/form-data",
//       },
//     };

//     console.log("formData:", formData); // Debugging formData
//     // console.log("config:", config); // Debugging config

//     try {
//       const response = await axios.post(
//         "https://api.novajobs.us/api/trainers/create-course",
//         formData,
//         config
//       );
//       console.log("response create course:", response); // Debugging response
//       if (response.status === 200 && response.data.status === "success") {
//         toast.success(response.data.message);
//         router.push("/course-list");
//         // Optionally reset form fields after successful submission
//         e.target.reset();
//         setBannerImage(null);
//       } else {
//         toast.error("Failed to create course.");
//       }
//     } catch (error) {
//       console.error("Error:", error); // Debugging error
//       toast.error("Failed to create course.");
//     }
//   };

//   return (
    
//       <SidebarLayout>
     
//       <main className="col-sm-10 p-0 ">
//       <div className="d-flex gap-5 content-center pt-5">
//         <section
//           className="instructor-portfolio pt-5 wow fadeInUp border-2"
//           data-wow-duration=".8s"
//           data-wow-delay=".2s"
//         >
//           <div className="instruc-sidebar mb-20 col-xl- col-lg- p-5 border-2">
//             <div className="">
//               <ul className="col">
//                 <li>
//                   <Link href="/course-list">
//                     <i className="fi fi-rr-briefcase"></i>{" "}
//                     <label>Course List</label>
//                     <span></span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>
//         <section
//           className="instructor-portfolio wow fadeInUp"
//           data-wow-duration=".8s"
//           data-wow-delay=".2s"
//         >
//           <div className="instruc-sidebar mb-40 col-xl- col-lg- p-5">
//             <div className="">
//               <ul className="col">
//                 <li>
//                   <Link href="/course-update">
//                     <i className="fi fi-rr-briefcase"></i>{" "}
//                     <label>Update Course</label>
//                     <span></span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </section>
//       </div>

//       <ToastContainer />
//       <h2 className="text-center">Create a New Course</h2>
//       <form
//         className="mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow"
//         onSubmit={handleSubmit}
//       >
//         <div className="mb-3">
//           <label htmlFor="course_title" className="form-label">
//             Course Title
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="course_title"
//             name="course_title"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="course_language" className="form-label">
//             Course Language
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="course_language"
//             name="course_language"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="level" className="form-label">
//             Level
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="level"
//             name="level"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="courseCategory" className="form-label">
//             Course Category
//           </label>
//           <textarea
//             className="form-control"
//             id="courseCategory"
//             name="courseCategory"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="time_spent_on_course" className="form-label">
//             Time Spent on Course
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="time_spent_on_course"
//             name="time_spent_on_course"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="learning_objectives" className="form-label">
//             Learning Objectives
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="learning_objectives"
//             name="learning_objectives"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="requirements" className="form-label">
//             Requirements
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="requirements"
//             name="requirements"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="target_audience" className="form-label">
//             Target Audience
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="target_audience"
//             name="target_audience"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="course_description" className="form-label">
//             Course Description
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="course_description"
//             name="course_description"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="course_price" className="form-label">
//             Course Price
//           </label>
//           <input
//             type="number"
//             className="form-control"
//             id="course_price"
//             name="course_price"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="coupon_code" className="form-label">
//             Coupon Code
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="coupon_code"
//             name="coupon_code"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="course_banner_image" className="form-label">
//             Upload Course Banner Image
//           </label>
//           <input
//             type="file"
//             className="form-control"
//             id="course_banner_image"
//             name="course_banner_image"
//             onChange={handleFileChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-success">
//           Submit
//         </button>
//       </form>
//       </main>
//       </SidebarLayout>
      
//   );
// }

// export default CourseForm;



import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import SidebarLayout from "@/src/common/sidebar-layout";

function CourseForm() {
  const [bannerImage, setBannerImage] = useState(null);
  const [formData, setFormData] = useState({
    after_discount_price: 0,
    category: "",
    coupon_code: "",
    course_description: "",
    course_intro_video_url: "",
    course_language: "",
    course_price: 0,
    course_title: "",
    discount_percent: 0,
    learning_objectives: "",
    level: "",
    requirements: "",
    target_audience: "",
    time_spent_on_course: "",
    trainer_email: "",
   
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    Object.keys(formData).forEach((key) => {
      submissionData.append(key, formData[key]);
    });
    submissionData.append("course_banner_image", bannerImage);
    console.log("Create course data",submissionData)
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "multipart/form-data",
      },
    };

    try {
      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/create-course",
        submissionData,
        config
      );
      if (response.status === 200 && response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/course-list");
        setFormData({
          after_discount_price: 0,
          category: "",
          coupon_code: "",
          course_description: "",
          course_intro_video_url: "",
          course_language: "",
          course_price: 0,
          course_title: "",
          discount_percent: 0,
          learning_objectives: "",
          level: "",
          requirements: "",
          target_audience: "",
          time_spent_on_course: "",
          trainer_email: "",
          trainer_first_name: "",
          trainer_last_name: "",
        });
        setBannerImage(null);
      } else {
        toast.error("Failed to create course.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create course.");
    }
  };

  return (
    <SidebarLayout>
      <main className="col-sm-10 p-0">
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
            <label htmlFor="course_title" className="form-label">Course Title</label>
            <input type="text" className="form-control" id="course_title" name="course_title" value={formData.course_title} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="course_language" className="form-label">Course Language</label>
            <input type="text" className="form-control" id="course_language" name="course_language" value={formData.course_language} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="level" className="form-label">Level</label>
            <input type="text" className="form-control" id="level" name="level" value={formData.level} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">Course Category</label>
            <input type="text" className="form-control" id="category" name="category" value={formData.category} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="time_spent_on_course" className="form-label">Time Spent on Course</label>
            <input type="text" className="form-control" id="time_spent_on_course" name="time_spent_on_course" value={formData.time_spent_on_course} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="learning_objectives" className="form-label">Learning Objectives</label>
            <textarea className="form-control" id="learning_objectives" name="learning_objectives" value={formData.learning_objectives} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="requirements" className="form-label">Requirements</label>
            <textarea className="form-control" id="requirements" name="requirements" value={formData.requirements} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="target_audience" className="form-label">Target Audience</label>
            <textarea className="form-control" id="target_audience" name="target_audience" value={formData.target_audience} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="course_description" className="form-label">Course Description</label>
            <textarea className="form-control" id="course_description" name="course_description" value={formData.course_description} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="course_price" className="form-label">Course Price</label>
            <input type="number" className="form-control" id="course_price" name="course_price" value={formData.course_price} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="after_discount_price" className="form-label">After Discount Price</label>
            <input type="number" className="form-control" id="after_discount_price" name="after_discount_price" value={formData.after_discount_price} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="discount_percent" className="form-label">Discount Percent</label>
            <input type="number" className="form-control" id="discount_percent" name="discount_percent" value={formData.discount_percent} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="coupon_code" className="form-label">Coupon Code</label>
            <input type="text" className="form-control" id="coupon_code" name="coupon_code" value={formData.coupon_code} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="course_intro_video_url" className="form-label">Course Intro Video URL</label>
            <input type="text" className="form-control" id="course_intro_video_url" name="course_intro_video_url" value={formData.course_intro_video_url} onChange={handleInputChange} />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="trainer_first_name" className="form-label">Trainer First Name</label>
            <input type="text" className="form-control" id="trainer_first_name" name="trainer_first_name" value={formData.trainer_first_name} onChange={handleInputChange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="trainer_last_name" className="form-label">Trainer Last Name</label>
            <input type="text" className="form-control" id="trainer_last_name" name="trainer_last_name" value={formData.trainer_last_name} onChange={handleInputChange} required />
          </div> */}
          <div className="mb-3">
            <label htmlFor="course_banner_image" className="form-label">Upload Course Banner Image</label>
            <input type="file" className="form-control" id="course_banner_image" name="course_banner_image" onChange={handleFileChange} required />
          </div>

          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </main>
    </SidebarLayout>
  );
}

export default CourseForm;