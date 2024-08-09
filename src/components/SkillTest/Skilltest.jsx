// // import React from 'react';
// // import styled from 'styled-components';
// // import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// // const StyledCard = styled(Card)`
// //   margin-bottom: 20px;
// // `;

// // const StyledCardHeader = styled(Card.Header)`
// //   background-color: #e6f2ff;
// //   font-weight: bold;
// // `;

// // const StyledCardBody = styled(Card.Body)`
// //   padding: 10px;
// // `;

// // const StatItem = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   margin-bottom: 5px;
// // `;

// // const SkillTestCard = ({ title, stats }) => (
// //   <StyledCard>
// //     <StyledCardHeader>{title}</StyledCardHeader>
// //     <StyledCardBody>
// //       {stats.map((stat, index) => (
// //         <StatItem key={index}>
// //           <span>{stat.label}:</span>
// //           <span>{stat.value}</span>
// //         </StatItem>
// //       ))}
// //       <Button variant="primary" size="sm" className="mt-2">Take Test</Button>
// //     </StyledCardBody>
// //   </StyledCard>
// // );

// // const SkillTestGrid = () => {
// //   const skillTests = [
// //     {
// //       title: "English grammar",
// //       stats: [
// //         { label: "Total Questions", value: 15 },
// //         { label: "Total Minutes", value: 8 },
// //         { label: "Passing Score", value: "80%" },
// //       ]
// //     },
// //     {
// //       title: "Team Leadership",
// //       stats: [
// //         { label: "Total Questions", value: 15 },
// //         { label: "Total Minutes", value: 8 },
// //         { label: "Passing Score", value: "80%" },
// //       ]
// //     },
// //     // Add more skill tests here...
// //   ];

// //   return (
// //     <Container>
// //       <Row>
// //         {skillTests.map((test, index) => (
// //           <Col key={index} xs={12} sm={6} md={4} lg={3}>
// //             <SkillTestCard title={test.title} stats={test.stats} />
// //           </Col>
// //         ))}
// //       </Row>
// //     </Container>
// //   );
// // };

// // export default SkillTestGrid;

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// // import Header2 from "../components/Layout/Header2";
// // import Footer from "../components/Layout/Footer";
// // import Profilesidebar from "../components/Element/Profilesidebar";
// // import LoadingBox from "../components/skeleton/skillTest";
// // import Preloader from "../components/Layout/preloader";

// function SkillTest() {
//   const router = useRouter();
//   const [skeleton, setSkeleton] = useState(true);
//   const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupText, setPopupText] = useState("");
//   const [userPercentage, setUserPercentage] = useState(0);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const [cardData, setCardData] = useState([]);
//   const [loader, setLoader] = useState(false);

//   const getSkillTestQuestion = async (id, name) => {
//     const token = localStorage.getItem("token")
//     console.log(token)
//     try {
//       const response = await axios.get(`https://api.novajobs.us/api/jobseeker/skill-assessment?skill_id=${id}&skill_name=${name}`, {
//         headers: {
//           Authorization: token,
//           "Content-type": "application/json",
//         },
//       });
//       console.log(response.data.data);
//       setLoader(false);
//       // router.push("/user/education-page"); // Navigate using Next.js router
//       // Instead of dispatch, we might save data to state or handle it differently in Next.js
//       // setSkillTestQuestions(response.data.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     axios.get("https://api.novajobs.us/api/jobseeker/user-skills", {
//       headers: {
//         Authorization: token,
//         "Content-type": "application/json",
//       },
//     })
//     .then((response) => {
//       console.log(response.data.data);
//       setCardData(response.data.data);
//       setSkeleton(false);
//     })
//     .catch((err) => console.log(err));
//   }, [token]);

//   const handleButtonClick = (card) => {
//     setSelectedCard(card);
//     setShowPopup(true);
//     setPopupText(`${card.name}`);
//   };

//   const handleTakeTest = (card) => {
//     setShowPopup(false);
//     setLoader(true);
//     getSkillTestQuestion(card.id, card.name);
//   };

//   return (
//     <>
//       {loader ? (
//         <div>
//           {/* <Preloader /> */}
//           "Loading...."
//         </div>
//       ) : (
//         <div>
//           {/* <Header2 /> */}
//           <div className="page-content bg-white">
//             <div className="content-block">
//               <div className="section-full bg-white browse-job p-t50 p-b20">
//                 <div className="container">
//                   <div className="row">
//                     {/* <Profilesidebar data={"profile"} /> */}
//                     <div className="col-xl-9 col-lg-9 m-b30 mx-2">
//                       <div className="job-bx job-profile">
//                         {skeleton ? (
//                           // <LoadingBox />
//                           "Loading..."
//                         ) : (
//                           <div className ="row">
//                             <div className="job-bx-title clearfix">
//                               <h5 className="font-weight-800 pull-left text-uppercase ms-3">
//                                 Skill Test
//                               </h5>
//                             </div>
//                             {cardData.map((card, index) => (
//                               <div key={index} className="col-lg-6 col-sm-12 col-md-6 col-12 mb-4">
//                                 <div
//                                   className="card border rounded-4"
//                                   style={{
//                                     boxShadow: "0 4px 8px rgba(1,1,1,0.1)",
//                                     height: "250px",
//                                     width: "350px",
//                                     display: "flex",
//                                     justifyContent: "center",
//                                     flexDirection: "row",
//                                     alignItem: "center",
//                                   }}
//                                 >
//                                   <div
//                                     className="card-body text-center"
//                                     style={{ transition: "box-shadow 0.3s" }}
//                                   >
//                                     <h5 className="btn site-button border bg-primary-subtle fw-bold mb-3">{card.name}</h5>
//                                     <p className="card-text">{card.text}</p>
//                                     <div className="d-flex flex-wrap align-items-center justify-content-center" style={{ gap: "3px" }}>
//                                       <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
//                                         Total Questions :{" "}
//                                         <span style={{ fontWeight: "200" }}>
//                                           {card.skill_assessment.results.total_question}
//                                         </span>
//                                       </h3>
//                                       <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
//                                         Right Answers :{" "}
//                                         <span style={{ fontWeight: "400" }}>
//                                           {card.skill_assessment.results.right_answer}
//                                         </span>
//                                       </h3>
//                                       <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
//                                         Wrong Answers : {" "}
//                                         <span style={{ fontWeight: "400" }}>
//                                           {card.skill_assessment.results.wrong_answer}
//                                         </span>
//                                       </h3>
//                                       <br />
//                                       <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
//                                         Percentage : {" "}
//                                         <span style={{ fontWeight: "400" }}>
//                                           {Math.floor(card.skill_assessment.results.Percentage) || '0'}
//                                         </span>
//                                       </h3>
//                                     </div>
//                                     <br />
//                                     <div className="d-flex justify-content-center align-items-center gap-4">
//                                       <button onClick={() => handleButtonClick(card)} className="btn site-button border bg-primary-subtle">
//                                         Retake Test
//                                       </button>
//                                       {userPercentage > 65 ? (
//                                         <button onClick={() => handleButtonClick(card)} className="btn site-button border bg-primary-subtle">
//                                           Badge
//                                         </button>
//                                       ) : (
//                                         <button className="btn site-button border bg-primary-subtle" disabled style={{ opacity: 0.6 }}>
//                                           Get Badge
//                                         </button>
//                                       )}
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* <Footer /> */}
//           {showPopup && (
//             <div
//               className="modal"
//               style={{
//                 display: "block",
//                 backgroundColor: "rgba(0,0,0,0.5)",
//                 position: "fixed",
//                 top: 0,
//                 bottom: 0,
//                 left: 0,
//                 right: 0,
//                 zIndex: 9999,
//               }}
//             >
//               <div
//                 className="modal-content"
//                 style={{
//                   width: "50%",
//                   margin: "auto",
//                   marginTop: "100px",
//                   background: "#fff",
//                   padding: "50px",
//                   borderRadius: "8px",
//                   boxShadow: "0 0 10px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 <h5 className="text-center">Test Instructions for <strong>{popupText}</strong><br />
//                   Following instructions are common for all job seekers.<br />
//                 </h5>
//                 <p className="fs-semibold">
//                   1. The duration of the test is 10 minutes*.<br /> Your answer gets automatically submitted after 20 minutes*.<br />
//                   2. This test consists of 15* multiple-choice questions.<br />
//                   3. You may attempt the questions in any order.<br />
//                   4. Please select the correct answer and click the "Save and next" button.<br />
//                   5. Please click "skip" if you wish to skip a question.<br /> You may come back and answer the question later.<br />
//                   6. Please click on the "Submit Assessment" button after answering all the questions.<br />
//                   7. Do not close the window before submitting the test.<br />
//                   8. Tests will be automatically submitted after the given time limit.<br />
//                 </p>
//                 <div className="mt-3 text-center">
//                   <button
//                     onClick={() => handleTakeTest(selectedCard)}
//                     className="btn site-button btn btn-secondary me-2"
//                   >
//                     Take Test
//                   </button>
//                   <button
//                     onClick={() => setShowPopup(false)}
//                     className="btn site-button btn btn-secondary"
//                   >
//                     Close
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </>
//   );
// }

// export default SkillTest;


import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

function SkillTest() {
  const router = useRouter();
  const [skeleton, setSkeleton] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupText, setPopupText] = useState("");
  const [userPercentage, setUserPercentage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardData, setCardData] = useState([]);
  const [loader, setLoader] = useState(false);

  const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
  console.log("Token:", token);

  const getSkillTestQuestion = async (id, name) => {
    try {
      const response = await axios.get(`https://api.novajobs.us/api/jobseeker/skill-assessment?skill_id=${id}&skill_name=${name}`, {
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      });
      console.log(response.data.data);
      setLoader(false);
      // router.push("/user/education-page"); // Uncomment or replace with desired navigation logic
    } catch (err) {
      console.error("Error fetching skill test question:", err);
      setLoader(false); // Ensure loader is stopped in case of error
    }
  };

  useEffect(() => {
    if (token) {
      axios.get("https://api.novajobs.us/api/jobseeker/user-skills", {
        headers: {
          Authorization: token,
          "Content-type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data.data);
        setCardData(response.data.data);
        setSkeleton(false);
      })
      .catch((err) => {
        console.error("Error fetching user skills:", err);
        setSkeleton(false); // Ensure loader is stopped in case of error
      });
    } else {
      console.error("Token not found. Cannot fetch user skills.");
      setSkeleton(false); // Stop loading if no token is found
    }
  }, [token]);

  const handleButtonClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
    setPopupText(`${card.name}`);
  };

  const handleTakeTest = (card) => {
    setShowPopup(false);
    setLoader(true);
    getSkillTestQuestion(card.id, card.name);
  };

  return (
    <>
      {loader ? (
        <div>"Loading...."</div>
      ) : (
        <div>
          <div className="page-content bg-white">
            <div className="content-block">
              <div className="section-full bg-white browse-job p-t50 p-b20">
                <div className="container">
                  <div className="row">
                    <div className="col-xl-9 col-lg-9 m-b30 mx-2">
                      <div className="job-bx job-profile">
                        {skeleton ? (
                          <div>"Loading..."</div>
                        ) : (
                          <div className="row">
                            <div className="job-bx-title clearfix">
                              <h5 className="font-weight-800 pull-left text-uppercase ms-3">
                                Skill Test
                              </h5>
                            </div>
                            {cardData.map((card, index) => (
                              <div key={index} className="col-lg-6 col-sm-12 col-md-6 col-12 mb-4">
                                <div
                                  className="card border rounded-4"
                                  style={{
                                    boxShadow: "0 4px 8px rgba(1,1,1,0.1)",
                                    height: "250px",
                                    width: "350px",
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "row",
                                    alignItem: "center",
                                  }}
                                >
                                  <div
                                    className="card-body text-center"
                                    style={{ transition: "box-shadow 0.3s" }}
                                  >
                                    <h5 className="btn site-button border bg-primary-subtle fw-bold mb-3">{card.name}</h5>
                                    <p className="card-text">{card.text}</p>
                                    <div className="d-flex flex-wrap align-items-center justify-content-center" style={{ gap: "3px" }}>
                                      <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
                                        Total Questions :{" "}
                                        <span style={{ fontWeight: "200" }}>
                                          {card.skill_assessment.results.total_question}
                                        </span>
                                      </h3>
                                      <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
                                        Right Answers :{" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {card.skill_assessment.results.right_answer}
                                        </span>
                                      </h3>
                                      <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
                                        Wrong Answers : {" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {card.skill_assessment.results.wrong_answer}
                                        </span>
                                      </h3>
                                      <br />
                                      <h3 style={{ fontWeight: "400", fontSize: "16px", marginBottom: "0px" }}>
                                        Percentage : {" "}
                                        <span style={{ fontWeight: "400" }}>
                                          {Math.floor(card.skill_assessment.results.Percentage) || '0'}
                                        </span>
                                      </h3>
                                    </div>
                                    <br />
                                    <div className="d-flex justify-content-center align-items-center gap-4">
                                      <button onClick={() => handleButtonClick(card)} className="btn site-button border bg-primary-subtle">
                                        Retake Test
                                      </button>
                                      {userPercentage > 65 ? (
                                        <button onClick={() => handleButtonClick(card)} className="btn site-button border bg-primary-subtle">
                                          Badge
                                        </button>
                                      ) : (
                                        <button className="btn site-button border bg-primary-subtle" disabled style={{ opacity: 0.6 }}>
                                          Get Badge
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showPopup && (
            <div
              className="modal"
              style={{
                display: "block",
                backgroundColor: "rgba(0,0,0,0.5)",
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 9999,
              }}
            >
              <div
                className="modal-content"
                style={{
                  width: "50%",
                  margin: "auto",
                  marginTop: "100px",
                  background: "#fff",
                  padding: "50px",
                  borderRadius: "8px",
                  boxShadow: "0 0 10px rgba(0,0,0,0.3)",
                }}
              >
                <h5 className="text-center">Test Instructions for <strong>{popupText}</strong><br />
                  Following instructions are common for all job seekers.<br />
                </h5>
                <p className="fs-semibold">
                  1. The duration of the test is 10 minutes*.<br /> Your answer gets automatically submitted after 20 minutes*.<br />
                  2. This test consists of 15* multiple-choice questions.<br />
                  3. You may attempt the questions in any order.<br />
                  4. Please select the correct answer and click the "Save and next" button.<br />
                  5. Please click "skip" if you wish to skip a question.<br /> You may come back and answer the question later.<br />
                  6. Please click on the "Submit Assessment" button after answering all the questions.<br />
                  7. Do not close the window before submitting the test.<br />
                  8. Tests will be automatically submitted after the given time limit.<br />
                </p>
                <div className="mt-3 text-center">
                  <button
                    onClick={() => handleTakeTest(selectedCard)}
                    className="btn site-button btn btn-secondary me-2"
                  >
                    Take Test
                  </button>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="btn site-button btn btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default SkillTest;
