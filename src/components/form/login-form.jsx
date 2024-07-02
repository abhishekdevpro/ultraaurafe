import React, { useState } from "react";
import Link from 'next/link';
import {toast} from 'react-hot-toast';
import { useRouter } from "next/router";
// import { useNavigate } from "react-router";
// import "./Login.css";
// import "../Footer/Footer.css";

function Login() {
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
   email: "",
   password: ""
 });
//  const navigate = useNavigate();
const router = useRouter();
 const handleInputChange = (e) => {
   const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

 const handleLogin = async (e) => {
   e.preventDefault();
   const url = role === "student" ? "https://api.novajobs.us/api/students/login" : "https://api.novajobs.us/api/trainers/login";
   console.log(url);
   if (!formData.email || !formData.password) {
     toast.error("Email and Password are required");
   } else {
     try {
       const response = await axios.post(
         url,
         formData,
         {
           // withCredentials: true,
           headers: {
             'Content-Type': 'application/json',
           },
         }
       );
       if (response.status === 200) {
         toast.success("Logged-in successfully!");
         router.push('/');
         // navigate(role === "student" ? '/' : '/trainers');
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
      <div className="" >
        <div className="min-vh-100 d-flex justify-content-end px-2 px-md-4 py-3">
          <div
            className="p-4 rounded shadow-lg w-100 max-w-lg"
            
          >
            <h2 className="h4 text-black font-weight-bold mb-4 text-center">
              Login
            </h2>
            <div className="d-flex justify-content-center mb-4">
              <button
                className={`px-3 py-2 font-weight-bold h5  rounded ${role === "student" ? " bgchange text-white" : "bg-light"}`}
                onClick={() => setRole("student")}
              >
                Student
              </button>
              <button
                className={`ml-2 px-3 py-2 font-weight-bold h5 rounded ${role === "trainer" ? "bgchange text-white" : "bg-light"}`}
                onClick={() => setRole("trainer")}
              >
                Trainer
              </button>
            </div>

            <form onSubmit={handleLogin} >
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
