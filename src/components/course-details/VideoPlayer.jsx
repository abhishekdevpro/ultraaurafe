// // import React from "react";
// // import styled from "styled-components";

// // const VideoPlayerWrapper = styled.div`
// //   // ... (existing styles)
// //   width: 100%;
// //   max-height: 400px;
// //   object-fit: contain;
// // `;
// // const VideoErrorMessage = styled.div`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   width: 100%;
// //   height: 400px;
// //   background-color: #f8d7da;
// //   color: #721c24;
// //   font-size: 1.2rem;
// //   font-weight: bold;
// //   border: 1px solid #f5c6cb;
// //   border-radius: 5px;
// // `;

// // const VideoPlayer = ({ currentVideo, courseBannerImage }) => {
// //   return (
// //     <VideoPlayerWrapper className="c-details-thumb p-relative mb-40">
// //       {currentVideo ? (
// //         <video controls>
// //           <source src={currentVideo} type="video/mp4" />
// //           Your browser does not support the video tag.
// //         </video>
// //       ) : (
// //         <img
// //           src={`https://api.novajobs.us${courseBannerImage}` || "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg"}
// //           alt="details-bg"
// //           className="img-fluid rounded"
// //         />
// //       )}
// //       <div className="c-details-ava d-md-flex align-items-center mt-3">
// //         <img
// //           src="/assets/img/course/c-details-ava-01.png"
// //           alt="avatar"
// //           className="img-fluid rounded-circle"
// //           style={{ width: "50px", marginRight: "10px" }}
// //         />
// //         <span>By <a href="#">Instructor</a></span>
// //       </div>
// //     </VideoPlayerWrapper>
// //   );
// // };

// // export default VideoPlayer;


// import React from "react";
// import styled from "styled-components";
// import 'bootstrap/dist/css/bootstrap.min.css';

// const VideoPlayerWrapper = styled.div`
//   position: relative;
//   margin-bottom: 40px;
//   max-height: 400px;
//   overflow: hidden;
//   border-radius: 10px;

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 10px;
//   }

//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     border-radius: 10px;
//   }
// `;

// const VideoErrorMessage = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 400px;
//   background-color: #f8d7da;
//   color: #721c24;
//   font-size: 1.2rem;
//   font-weight: bold;
//   border: 1px solid #f5c6cb;
//   border-radius: 5px;
// `;

// const InstructorInfo = styled.div`
//   display: flex;
//   align-items: center;
//   margin-top: 30px;

//   img {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     margin-right: 10px;
//   }

//   span {
//     font-weight: bold;
//   }

//   a {
//     text-decoration: none;
//     color: #007bff;
//   }
// `;

// const VideoPlayer = ({ currentVideo,isEnrolled }) => {
//   const storedBannerImage = localStorage.getItem('courseBannerImage');
//   const bannerImageSrc = storedBannerImage || "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg";

//   return (
//     <VideoPlayerWrapper className="c-details-thumb p-relative mb-40">
//       {currentVideo ? (
//         <video controls>
//           <source src={currentVideo} type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//         <img
//           src={`https://api.novajobs.us${bannerImageSrc}`}
//           alt="Course Banner"
//           className="img-fluid rounded"
//         />
//       )}
//       <InstructorInfo className="c-details-ava d-md-flex align-items-center mt-3">
//         <img
//           src="/assets/img/course/c-details-ava-01.png"
//           alt="Instructor Avatar"
//           className="img-fluid rounded-circle"
//         />
//         <span>By <a href="#">Instructor</a></span>
//       </InstructorInfo>
//     </VideoPlayerWrapper>
//   );
// };

// export default VideoPlayer;

import React, { useState } from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const VideoPlayerWrapper = styled.div`
  position: relative;
  margin-bottom: 40px;
  max-height: 400px;
  overflow: hidden;
  border-radius: 10px;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const VideoErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #f8d7da;
  color: #721c24;
  font-size: 1.2rem;
  font-weight: bold;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
`;

const InstructorInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  span {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const VideoPlayer = ({ currentVideo, isEnrolled }) => {
  const [showPopup, setShowPopup] = useState(false);
  const storedBannerImage = localStorage.getItem('courseBannerImage');
  const bannerImageSrc = storedBannerImage || "https://e-pora-next.vercel.app/assets/img/course/c-details-bg-01.jpg";

  const handlePlayVideo = () => {
    if (!isEnrolled) {
      setShowPopup(true);
    }
  };

  return (
    <div>
      <VideoPlayerWrapper className="c-details-thumb p-relative mb-40">
        {currentVideo && isEnrolled ? (
          <video controls onPlay={handlePlayVideo}>
            <source src={currentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={`https://api.novajobs.us${bannerImageSrc}`}
            alt="Course Banner"
            className="img-fluid rounded"
            onClick={handlePlayVideo}
          />
        )}
        <InstructorInfo className="c-details-ava d-md-flex align-items-center mt-3">
          <img
            src="/assets/img/course/c-details-ava-01.png"
            alt="Instructor Avatar"
            className="img-fluid rounded-circle"
          />
          <span>By <a href="#">Instructor</a></span>
        </InstructorInfo>
      </VideoPlayerWrapper>

      {showPopup && (
        <PopupOverlay>
          <PopupContent>
            <h2>Enroll to Watch This Video</h2>
            <p>You need to enroll in this course to watch the video.</p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </PopupContent>
        </PopupOverlay>
      )}
    </div>
  );
};

export default VideoPlayer;
