// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// const EditLecture = () => {
//   const [lectureName, setLectureName] = useState("");
//   const [files, setFiles] = useState([]);
//   const [resource, setResource] = useState(null);
//   const [links, setLinks] = useState("");

//   const router = useRouter();
//   const { id } = router.query;
//   console.log(id,"mainoid")

//   const [courseId, setCourseId] = useState(null);
//   const [sectionId, setSectionId] = useState(null);
//   const [lectureId, setLectureId] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const [cId, sId] = id.split("-");
//       setCourseId(cId);
//       setLectureId(sId);
//     }
//   }, [id]);

//   const handleFileChange = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   const handleResourceChange = (e) => {
//     setResource(e.target.files[0]);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const fetchLectureById = async (lectureId) => {
//       try {
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/get-lecture/${lectureId}`,
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         console.log(response,"EdidtLecture se")
//         if (response.data) {
//           const data = response.data.data;
//           console.log(data)
//           setLectureName(data.lecture_name);
//           setFiles([data.lecture_location]);
//           setLinks(data.lecture_resources_link?.[0]);
//           setResource(data.lecture_resources_pdf?.[0]);
//           setSectionId(data.section_id)
//           setCourseId(data.course_id)
//           setLectureId(data.id)
//         } else {

//           toast.error("Failed to fetch lecture.");
//         }
//       } catch (error) {
//         toast.error("An error occurred while fetching the lecture.");
//       }
//     };
//     if (lectureId) {
//       fetchLectureById(lectureId);
//     }
//   }, [lectureId]);
//   console.log("sectionid",sectionId, "courseid",courseId,"lectureid",lectureId)

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const formData = new FormData();

//     formData.append("lecture_name", lectureName);
//     files.forEach((file) => {
//       formData.append("files", file);
//     });

//     if (resource) {
//       formData.append("resources", resource);
//     }

//     formData.append("links", links);

//     try {
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/trainers/lectureupdate/${courseId}/${sectionId}/${lectureId}`,
//         formData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//      console.log(response,"patch se")
//       if (response.status === 200) {
//         toast.success("Lecture updated successfully!");
//         // router.push(/leacturelist?courseId=${courseId});
//         router.push(`/trainer/edit-course/${courseId}`);
//         // Clear form fields
//         setLectureName("");
//         setFiles([]);
//         setResource(null);
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
//       <h2>Edit Lecture</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-3">
//           <label htmlFor="lectureName" className="form-label">
//             Lecture Name:
//           </label>
//           <input
//             id="lectureName"
//             type="text"
//             value={lectureName}
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
//           <label htmlFor="resource" className="form-label">
//             Resource (PDF only):
//           </label>
//           <input
//             id="resource"
//             type="file"
//             accept=".pdf"
//             onChange={handleResourceChange}
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="links" className="form-label">
//             Links:
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
//           Update Lecture
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditLecture;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useRouter } from "next/router";

// const EditLecture = () => {
//   const [lectureName, setLectureName] = useState("");
//   const [files, setFiles] = useState([]);
//   const [resource, setResource] = useState(null);
//   const [links, setLinks] = useState("");
//   const router = useRouter();
//   const { id } = router.query;

//   const [courseId, setCourseId] = useState(null);
//   const [sectionId, setSectionId] = useState(null);
//   const [lectureId, setLectureId] = useState(null);

//   useEffect(() => {
//     if (id) {
//       const [cId, sId] = id.split("-");
//       setCourseId(cId);
//       setLectureId(sId);
//     }
//   }, [id]);

//   const handleFileChange = (e) => {
//     setFiles(Array.from(e.target.files));
//   };

//   const handleResourceChange = (e) => {
//     setResource(e.target.files[0]);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const fetchLectureById = async (lectureId) => {
//       try {
//         const response = await axios.get(
//           `https://api.novajobs.us/api/trainers/get-lecture/${lectureId}`,
//           {
//             headers: {
//               Authorization: token,
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.data) {
//           const data = response.data.data;
//           setLectureName(data.lecture_name);
//           setFiles([data.lecture_location]);
//           setLinks(data.lecture_resources_link?.[0]);
//           setResource(data.lecture_resources_pdf?.[0]);
//           setSectionId(data.section_id);
//           setCourseId(data.course_id);
//           setLectureId(data.id);
//           // Store initial data in session storage
//           sessionStorage.setItem("lectureData", JSON.stringify(data));
//         } else {
//           toast.error("Failed to fetch lecture.");
//         }
//       } catch (error) {
//         toast.error("An error occurred while fetching the lecture.");
//       }
//     };
//     if (lectureId) {
//       fetchLectureById(lectureId);
//     }
//   }, [lectureId]);

//   // Update session storage whenever any state changes
//   useEffect(() => {
//     const lectureData = {
//       lecture_name: lectureName,
//       lecture_location: files,
//       lecture_resources_pdf: resource,
//       lecture_resources_link: links,
//       section_id: sectionId,
//       course_id: courseId,
//       id: lectureId,
//     };
//     sessionStorage.setItem("lectureData", JSON.stringify(lectureData));
//   }, [lectureName, files, resource, links, sectionId, courseId, lectureId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem("token");
//     const formData = new FormData();

//     formData.append("lecture_name", lectureName);
//     files.forEach((file) => {
//       formData.append("files", file);
//     });

//     if (resource) {
//       formData.append("resources", resource);
//     }

//     formData.append("links", links);

//     try {
//       const response = await axios.patch(
//         `https://api.novajobs.us/api/trainers/lectureupdate/${courseId}/${sectionId}/${lectureId}`,
//         formData,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       if (response.status === 200) {
//         toast.success("Lecture updated successfully!");
//         router.push(`/trainer/edit-course/${courseId}`);
//         // Clear form fields
//         setLectureName("");
//         setFiles([]);
//         setResource(null);
//         setLinks("");
//         // Clear session storage
//       } else {
//         toast.error("Failed to update lecture.");
//       }
//     } catch (error) {
//       toast.error("An error occurred while updating the lecture.");
//     }
//   };

//   return (
//     <div className="container my-5">
//       <h2>Edit Lecture</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="mb-3">
//           <label htmlFor="lectureName" className="form-label">
//             Lecture Name:
//           </label>
//           <input
//             id="lectureName"
//             type="text"
//             value={lectureName}
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
//           <label htmlFor="resource" className="form-label">
//             Resource (PDF only):
//           </label>
//           <input
//             id="resource"
//             type="file"
//             accept=".pdf"
//             onChange={handleResourceChange}
//             className="form-control"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="links" className="form-label">
//             Links:
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
//           Update Lecture
//         </button>
//       </form>
//     </div>
//   );
// };

// export default EditLecture;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const EditLecture = () => {
  const [lectureName, setLectureName] = useState("");
  const [files, setFiles] = useState([]);
  const [resource, setResource] = useState(null);
  const [links, setLinks] = useState("");
  const router = useRouter();
  const { id } = router.query;

  const [courseId, setCourseId] = useState(null);
  const [sectionId, setSectionId] = useState(null);
  const [lectureId, setLectureId] = useState(null);

  useEffect(() => {
    if (id) {
      const [cId, sId] = id.split("-");
      setCourseId(cId);
      setLectureId(sId);
    }
  }, [id]);

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleResourceChange = (e) => {
    setResource(e.target.files[0]);
  };

  useEffect(() => {
    const token = localStorage.getItem("trainerToken");
    const fetchLectureById = async (lectureId) => {
      try {
        const response = await axios.get(
          `https://api.novajobs.us/api/trainers/get-lecture/${lectureId}`,
          {
            headers: {
              Authorization: token,
              "Content-Type": "application/json",
            },
          }
        );
        if (response.data) {
          const data = response.data.data;
          setLectureName(data.lecture_name);
          setFiles([data.lecture_location]);
          setLinks(data.lecture_resources_link?.[0]);
          setResource(data.lecture_resources_pdf?.[0]);
          setSectionId(data.section_id);
          setCourseId(data.course_id);
          setLectureId(data.id);
          // Store initial data in session storage
          sessionStorage.setItem("lectureData", JSON.stringify(data));
        } else {
          toast.error("Failed to fetch lecture.");
        }
      } catch (error) {
        toast.error("An error occurred while fetching the lecture.");
      }
    };
    if (lectureId) {
      fetchLectureById(lectureId);
    }
  }, [lectureId]);

  // Update session storage whenever any state changes
  useEffect(() => {
    const lectureData = {
      lecture_name: lectureName,
      lecture_location: files,
      lecture_resources_pdf: resource,
      lecture_resources_link: links,
      section_id: sectionId,
      course_id: courseId,
      id: lectureId,
    };
    sessionStorage.setItem("lectureData", JSON.stringify(lectureData));
  }, [lectureName, files, resource, links, sectionId, courseId, lectureId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("trainerToken");
    const formData = new FormData();

    formData.append("lecture_name", lectureName);
    files.forEach((file) => {
      formData.append("files", file);
    });

    if (resource) {
      formData.append("resources", resource);
    }

    formData.append("links", links);

    try {
      const response = await axios.patch(
        `https://api.novajobs.us/api/trainers/lectureupdate/${courseId}/${sectionId}/${lectureId}`,
        formData,
        {
          headers: {
            Authorization: token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        toast.success("Lecture updated successfully!");
        // Update session storage with new data
        const updatedLectureData = {
          lecture_name: lectureName,
          lecture_location: files,
          lecture_resources_pdf: resource,
          lecture_resources_link: links,
          section_id: sectionId,
          course_id: courseId,
          id: lectureId,
        };
        sessionStorage.setItem("lectureData", JSON.stringify(updatedLectureData));
        // Navigate to the edit course page
        router.push(`/trainer/edit-course/${courseId}`);
        // Clear form fields
        setLectureName("");
        setFiles([]);
        setResource(null);
        setLinks("");
      } else {
        toast.error("Failed to update lecture.");
      }
    } catch (error) {
      toast.error("An error occurred while updating the lecture.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Edit Lecture</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-3">
          <label htmlFor="lectureName" className="form-label">
            Lecture Name:
          </label>
          <input
            id="lectureName"
            type="text"
            value={lectureName}
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
          <label htmlFor="resource" className="form-label">
            Resource (PDF only):
          </label>
          <input
            id="resource"
            type="file"
            accept=".pdf"
            onChange={handleResourceChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="links" className="form-label">
            Links:
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
          Update Lecture
        </button>
      </form>
    </div>
  );
};

export default EditLecture;
