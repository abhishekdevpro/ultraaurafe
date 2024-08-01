import SEO from "@/src/common/seo";
import SidebarLayout from "@/src/common/sidebar-layout";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import WrapperFour from "@/src/layout/wrapper-4";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const index = () => {
  const [formData, setFormData] = useState({
    section_name: "",
    section_objective: "",
  });
  const [courseId, setCourseId] = useState(null);
  const [sectionId, setSectionId] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const [cId, sId] = id.split("-");
      setCourseId(cId);
      setSectionId(sId);
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    const data = router.query.data || sessionStorage.getItem("sectionData");
    if (data) {
      const decodedData = JSON.parse(decodeURIComponent(data));
      setFormData(decodedData);
      sessionStorage.setItem("sectionData", JSON.stringify(decodedData));
    }
  }, [router.query.data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("User not authenticated. Please login.");
        return;
      }

      const response = await axios.patch(
        `https://api.novajobs.us/api/trainers/${courseId}/${sectionId}/section`,

        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Course updated successfully!");
        router.push(`/trainer/edit-course/${courseId}`);
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
    <WrapperFour>
      <SEO pageTitle={"Course-update"} />
      <Breadcrumb
        title="Update Section"
        subtitle="Update Section "
        isDbbl="Course"
      />
      <SidebarLayout>
        <main className="col-sm-10 p-0 ">
          <div className="container mt-5 mb-5">
            <h2 className="text-center">Update Section</h2>
          </div>
          <div className="col-lg-12">
            <div className="course-details">
              <form
                className="mb-4 pt-20 pb-20 pl-20 pr-20 rounded shadow"
                onSubmit={handleSubmit}
              >
                <div className="mb-3">
                  <label htmlFor="section_name" className="form-label">
                    Section Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="section_name"
                    name="section_name"
                    value={formData.section_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="section_objective" className="form-label">
                    Section Objective
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="section_objective"
                    name="section_objective"
                    value={formData.section_objective}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </main>
      </SidebarLayout>
    </WrapperFour>
  );
};

export default index;
