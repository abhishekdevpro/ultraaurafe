import SidebarLayout from "@/src/common/sidebar-layout";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import WrapperFour from "@/src/layout/wrapper-4";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const AddSection = () => {
  const [formData, setFormData] = useState({
    section_name: "",
    section_objective: "",
  });
  const router = useRouter();
  const { id } = router.query;
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };

    try {
      debugger;
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${id}/section`,
        formData,
        config
      );
      console.log(response);
      if (response.status === 200 && response.data.status === "success") {
        toast.success(response.data.message);
        router.push("/trainer");
        setFormData({
          section_name: "",
          section_objective: "",
        });
      } else {
        debugger;
        toast.error("Failed to create course.");
      }
    } catch (error) {
      debugger;
      console.error("Error:", error);
      toast.error("Failed to create course.");
    }
  };
  return (
    <WrapperFour>
      <Breadcrumb title="Add Section" subtitle="Add Section" isDbbl="Course" />
      <SidebarLayout>
        <main className="col-sm-10 p-0">
          <section
            className="course-list-area pb-120 wow fadeInUp"
            data-wow-duration=".8s"
            data-wow-delay=".2s"
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="tp-section-title">Add Section</h3>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="course-details">
                    <ToastContainer />
                    <h2 className="text-center">Create a New Section</h2>
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
                        <label
                          htmlFor="section_objective"
                          className="form-label"
                        >
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
              </div>
            </div>
          </section>
        </main>
      </SidebarLayout>
    </WrapperFour>
  );
};

export default AddSection;
