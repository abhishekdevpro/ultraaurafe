// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// const Lecture = () => {
//   const [lecture_name, setLectureName] = useState("");
//   const [files, setFiles] = useState([]);
//   const [resources, setResources] = useState(null); // Changed to null to handle file object
//   const [links, setLinks] = useState("");
//   const router = useRouter();
//   const { id } = router.query;

//   const [courseId, setCourseId] = useState(null);
//   const [sectionId, setSectionId] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const [cId, sId] = id.split("-");
//       setCourseId(cId);
//       setSectionId(sId);
//     }
//   }, [id]);

//   const handleFileChange = (e) => {
//     setFiles(e.target.files);
//   };

//   const handleResourcesChange = (e) => {
//     setResources(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const formData = new FormData();

//     formData.append("lecture_name", lecture_name);
//     Array.from(files).forEach((file) => {
//       formData.append("lecture_location", files);
//     });

//     if (resources) {
//       formData.append("lecture_resources_pdf", resources); // Append the resources file
//     }

//     formData.append("lecture_resources_link", links);
//      console.log("form data",formData)
//     try {
//       const response = await axios.post(
//         `https://api.novajobs.us/api/trainers/${courseId}/${sectionId}/upload`,
//         formData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "multipart/form-data",
//             Accept: "application/json",
//           },
//         }
//       );

//       if (response.data.message === "Lecture created successfully") {
//         toast.success("Lecture added successfully!");
//         router.push(`/trainer/edit-course/${courseId}`);
//         // Clear form fields
//         setLectureName("");
//         setFiles([]);
//         setResources(null);
//         setLinks("");
//       } else {
//         toast.error("Failed to add lecture.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while adding the lecture.");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2>Add Lecture</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-3">
//           <label htmlFor="lecture_name" className="form-label">
//             Lecture Name:
//           </label>
//           <input
//             id="lecture_name"
//             type="text"
//             value={lecture_name}
//             onChange={(e) => setLectureName(e.target.value)}
//             required
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="files" className="form-label">
//             Files:
//           </label>
//           <input
//             id="files"
//             type="file"
//             multiple
//             onChange={handleFileChange}
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="resources" className="form-label">
//             Lecture Resources (PDF only):
//           </label>
//           <input
//             id="resources"
//             type="file"
//             accept=".pdf" // Restricts file input to PDF only
//             onChange={handleResourcesChange}
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="links" className="form-label">
//             Lecture Resources Links:
//           </label>
//           <input
//             id="links"
//             type="text"
//             value={links}
//             onChange={(e) => setLinks(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Add Lecture
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Lecture;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Lecture = () => {
  const [lecture_name, setLectureName] = useState("");
  const [files, setFiles] = useState([]);
  const [resources, setResources] = useState(null);
  const [links, setLinks] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const [courseId, setCourseId] = useState(null);
  const [sectionId, setSectionId] = useState(null);

  useEffect(() => {
    if (id) {
      const [cId, sId] = id.split("-");
      setCourseId(cId);
      setSectionId(sId);
    }
  }, [id]);

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleResourcesChange = (e) => {
    setResources(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const formData = new FormData();

    formData.append("lecture_name", lecture_name);
    Array.from(files).forEach((file) => {
      formData.append("files", file); // Changed to files
    });

    if (resources) {
      formData.append("resources", resources); // Changed to resources
    }

    formData.append("links", links); // Changed to links
    console.log("form data", formData);
    try {
      const response = await axios.post(
        `https://api.novajobs.us/api/trainers/${courseId}/${sectionId}/upload`,
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        }
      );
      console.log(response,"responseof lecture")
      if (response.data.message === "Lecture created successfully") {
        toast.success("Lecture added successfully!");
        router.push(`/trainer/edit-course/${courseId}`);
        // Clear form fields
        setLectureName("");
        setFiles([]);
        setResources(null);
        setLinks("");
      } else {
        toast.error("Failed to add lecture.");
      }
    } catch (error) {
      toast.error("An error occurred while adding the lecture.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Add Lecture</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="lecture_name" className="form-label">
            Lecture Name:
          </label>
          <input
            id="lecture_name"
            type="text"
            value={lecture_name}
            onChange={(e) => setLectureName(e.target.value)}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="files" className="form-label">
            Files:
          </label>
          <input
            id="files"
            type="file"
            multiple
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="resources" className="form-label">
            Lecture Resources (PDF only):
          </label>
          <input
            id="resources"
            type="file"
            accept=".pdf"
            onChange={handleResourcesChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="links" className="form-label">
            Lecture Resources Links:
          </label>
          <input
            id="links"
            type="text"
            value={links}
            onChange={(e) => setLinks(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Lecture
        </button>
      </form>
    </div>
  );
};

export default Lecture;
