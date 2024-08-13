// import React, { useState } from "react";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useRouter } from "next/router";
// import { ToastContainer } from "react-toastify";
// import Image from "next/image";
// // import welcomeImage from '../public/assets/login/signup.jpg';
// import welcomeImage from "./signup.jpg"


// function ResetPassword({token}) {
//   const [formData, setFormData] = useState({
//     newPassword: "",
//     confirmNewPassword: "",
//   });
//   const [resetToken, setResetToken] = useState(token); // Assume token is passed via props or query parameter
//   const router = useRouter();
//   console.log("resetToken ",resetToken)

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (!formData.newPassword || !formData.confirmNewPassword) {
//       toast.error("Both password fields are required");
//       return;
//     }

//     if (formData.newPassword !== formData.confirmNewPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://api.novajobs.us/api/trainers/reset-password", // Adjust the URL according to your API
//         {
//           token : resetToken, 
//           new_password: formData.newPassword,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       if (response.status === 200) {
//         toast.success("Password reset successfully!");
//         router.push("/signin"); // Redirect to login page
//       } else {
//         toast.error("Failed to reset password.");
//       }
//     } catch (err) {
//       console.log(err);
//       toast.error("Error resetting password.");
//     }
//   };

//   return (
//     <>
//       <div className="">
//         <ToastContainer />
//         <div className="min-vh-100 d-flex justify-content-center px-9 px-md-4 py-5">
//           <div className="d-flex flex-wrap justify-content-center align-items-center rounded shadow-lg w-75">
//             <div className="col-12 col-md-6 mb-4 mb-md-0 image-container">
//               <Image
//                 src={welcomeImage}
//                 alt="Description"
//                 className="img-fluid rounded"
//               />
//             </div>
//             <div className="col-12 col-md-6 p-5">
//               <h2 className="h4 text-black font-weight-bold mb-4 text-center">
//                 Reset Password
//               </h2>
//               <form onSubmit={handleResetPassword}>
//                 <div className="mb-3">
//                   <label className="form-label text-black">
//                     New Password
//                   </label>
//                   <input
//                     type="password"
//                     name="newPassword"
//                     value={formData.newPassword}
//                     onChange={handleInputChange}
//                     className="form-control"
//                     placeholder="Enter new password"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label className="form-label text-black">
//                     Confirm New Password
//                   </label>
//                   <input
//                     type="password"
//                     name="confirmNewPassword"
//                     value={formData.confirmNewPassword}
//                     onChange={handleInputChange}
//                     className="form-control"
//                     placeholder="Confirm new password"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-100 py-2 px-3 bgchange text-white h4 font-weight-bold rounded"
//                 >
//                   Reset Password
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ResetPassword;
import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import welcomeImage from "./signup.jpg"

function ResetPassword({ token }) {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmNewPassword: "",
  });
  const [resetToken, setResetToken] = useState("");
  const router = useRouter();

  // Update the resetToken when the token prop changes
  useEffect(() => {
    if (token) {
      setResetToken(token);
    }
  }, [token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!formData.newPassword || !formData.confirmNewPassword) {
      toast.error("Both password fields are required");
      return;
    }

    if (formData.newPassword !== formData.confirmNewPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      // Create a new FormData object
      const formDataObj = new FormData();
      formDataObj.append("token", resetToken);
      formDataObj.append("new_password", formData.newPassword);

      const response = await axios.post(
        "https://api.novajobs.us/api/trainers/reset-password", // Adjust the URL according to your API
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Password reset successfully!");
        router.push("/sign-in"); // Redirect to login page
      } else {
        toast.error("Failed to reset password.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error resetting password.");
    }
  };

  return (
    <>
      <div className="">
        <ToastContainer />
        <div className="min-vh-100 d-flex justify-content-center px-9 px-md-4 py-5">
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
                Reset Password
              </h2>
              <form onSubmit={handleResetPassword}>
                <div className="mb-3">
                  <label className="form-label text-black">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Enter new password"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-black">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={formData.confirmNewPassword}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Confirm new password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-100 py-2 px-3 bgchange text-white h4 font-weight-bold rounded"
                >
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;
