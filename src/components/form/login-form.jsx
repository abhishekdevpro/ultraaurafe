// import Link from 'next/link';
// import React from 'react';

// const LoginForm = () => {
//     return (
//         <>
//         <section className="login-area pt-100 pb-100 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
//          <div className="container">
//                <div className="row">
//                   <div className="col-lg-8 offset-lg-2">
//                      <div className="basic-login">
//                            <h3 className="text-center mb-60">Login From Here</h3>
//                            <form onSubmit={(e) => e.preventDefault()}>
//                               <label htmlFor="name">Username <span>**</span></label>
//                               <input id="name" type="text" placeholder="Enter Username" />
//                               <label htmlFor="pass">Password <span>**</span></label>
//                               <input id="pass" type="password" placeholder="Enter password..." />
//                               <div className="mt-10"></div>
//                               <button className="tp-btn w-100">login Now</button>
//                               <div className="or-divide"><span>or</span></div>
// 							  <Link href="/register" className="tp-border-btn w-100">Register Now</Link>
//                            </form>
//                      </div>
//                   </div>
//                </div>
//          </div>
//       </section>
//         </>
//     );
// };

// export default LoginForm;

import React, { useState } from "react";
import Link from 'next/link';
// import "./Login.css";
// import "../Footer/Footer.css";

function Login() {
  const [role, setRole] = useState("student");
  

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

            <form >
              <div className="mb-3">
                <label className="form-label text-black">Email ID</label>
                <input
                  type="email"
                  name="email"
                  // value={formData.email}
                  // onChange={handleInputChange}
                  className="form-control"
                  placeholder="Enter your email ID"
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-black">Password</label>
                <input
                  type="password"
                  name="password"
                  // value={formData.password}
                  // onChange={handleInputChange}
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
