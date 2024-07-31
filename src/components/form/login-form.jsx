import React, { useState } from "react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import welcomeImage from "../../../public/assets/img/login/signup.jpg";
import Image from "next/image";
function Login() {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url =
      role === "student"
        ? "https://api.novajobs.us/api/students/login"
        : "https://api.novajobs.us/api/trainers/login";
    console.log(url);
    if (!formData.email || !formData.password) {
      toast.error("Email and Password are required");
    } else {
      try {
        const response = await axios.post(url, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          // Ensure this matches your API response structure
          localStorage.setItem("token", response.data.data.token);
          console.log("token", response.data.data.token);
          toast.success("Logged-in successfully!");
          router.push(role === "student" ? "/" : "/course-list");
        } else {
          toast.error("Failed to log in.");
        }
        console.log("login Response", response);
      } catch (err) {
        console.log(err);
        toast.error("An error occurred. Please try again.");
      }
    }
  };
  return (
    <>
      <div className="">
        <ToastContainer />
        <div className="min-vh-100 d-flex justify-content-center px-9 px-md-4 py-5">
          {/* <div className="p-4 rounded shadow-lg w-75">
            <h2 className="h4 text-black font-weight-bold mb-4 text-center">
              Login
            </h2>
            <div className="d-flex justify-content-center mb-4">
              <button
                className={`px-3 py-2 font-weight-bold h5  rounded ${
                  role === "student" ? " bgchange text-white" : "bg-light"
                }`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={`ml-2 px-3 py-2 font-weight-bold h5 rounded ${
                  role === "trainer" ? "bgchange text-white" : "bg-light"
                }`}
                onClick={() => setRole("trainer")}
              >
                Trainer
              </button>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label text-black">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter your email ID"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <Link href="/register">
                <p className="text-primary text-center mb-3">
                  New User? Create Account
                </p>
              </Link>

              <div className="text-center mb-3">
                <label className="text-black mr-2">
                  I agree to Terms and condition
                </label>
                <input type="checkbox" required />
              </div>
              <button
                type="submit"
                className=" w-100 py-2 px-3 bgchange text-white h4 font-weight-bold rounded"
              >
                Login
              </button>
            </form>
          </div> */}
          <div className="d-flex flex-wrap justify-content-center align-items-center rounded shadow-lg w-75">
            <div className="col-12 col-md-6 mb-4 mb-md-0 image-container">
              <Image
                src={welcomeImage}
                alt="Description"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-12 col-md-6 p-5">
              <h2 className="h4 text-black font-weight-bold mb-4 text-center">
                Login
              </h2>
              <div className="d-flex justify-content-center mb-4">
                <button
                  className={`px-3 py-2 font-weight-bold h5 rounded ${
                    role === "student" ? "bgchange text-white" : "bg-light"
                  }`}
                  onClick={() => setRole("student")}
                >
                  Student
                </button>
                <button
                  className={`ml-2 px-3 py-2 font-weight-bold h5 rounded ${
                    role === "trainer" ? "bgchange text-white" : "bg-light"
                  }`}
                  onClick={() => setRole("trainer")}
                >
                  Trainer
                </button>
              </div>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label text-black">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter your email ID"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-black">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
                <Link href="/register">
                  <p className="text-primary text-center mb-3">
                    New User? Create Account
                  </p>
                </Link>
                <div className="text-center mb-3 flex justify-center">
                  <input type="checkbox" required className="mx-2" />
                  <label className="text-black mr-2">
                    I agree to Terms and conditions
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-100 py-2 px-3 bgchange text-white h4 font-weight-bold rounded"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
