

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';

// function SkillTestQuestions() {
//   const router = useRouter();
//   const { skillId, skillName } = router.query;
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [result, setResult] = useState(null);
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     if (skillId && skillName) {
//       const fetchQuestions = async () => {
//         setLoading(true);
//         setError(null);

//         try {
//           const token = localStorage.getItem("token");
//           if (!token) {
//             throw new Error("No authentication token found.");
//           }

//           const response = await axios.get(
//             `https://api.novajobs.us/api/students/skill-assessment?skill_id=${skillId}&skill_name=${skillName}`, 
//             {
//               headers: {
//                 Authorization: token,
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           const { data } = response.data;
//           setData(data);
//           setQuestions(data.questions);
//         } catch (err) {
//           console.error("Error fetching skill test questions:", err);
//           setError("An error occurred while fetching the questions. Please try again later.");
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchQuestions();
//     }
//   }, [skillId, skillName]);

//   const handleAnswerChange = (questionIndex, selectedOption) => {
//     setSelectedAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionIndex]: selectedOption,
//     }));
//   };


// const handleSubmit = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         throw new Error("No authentication token found.");
//       }
  
//       const formattedQuestions = questions.map((question, index) => ({
//         question: question.text,
//         options: question.options,
//         correct_answer: "", // This remains empty as per the sample data
//         user_answer: selectedAnswers[index] || "",
//       }));
  
//       const dataToSend = {
//         skill_assessment_id: data.skill_assessment_id,
//         student_id: data.student_id,
//         skill_id: parseInt(skillId),
//         skill_name: skillName,
//         questions: formattedQuestions,
//       };
  
//       const response = await axios.put(
//         `https://api.novajobs.us/api/students/skill-assessment/${skillId}`,
//         dataToSend,
//         {
//           headers: {
//             Authorization: token,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response,"resilt")
//       setResult(response.data.data.results);
//     } catch (err) {
//       console.error("Error submitting skill test:", err);
//       setError("An error occurred while submitting the test. Please try again later.");
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="alert alert-danger">{error}</div>;
//   }
// console.log(result,"Final result")
//   return (
//     <div className="container mt-5">
//       <h3 className="mb-4">{skillName} - Skill Test</h3>
//       {questions.length === 0 ? (
//         <p>No questions available for this skill test.</p>
//       ) : (
//         <ul>
//           {questions.map((question, index) => (
//             <li key={index} className="mb-3">
//               <h5>Q{index + 1}: {question.text}</h5>
//               <ul>
//                 {question.options.map((option, idx) => (
//                   <li key={idx}>
//                     <label>
//                       <input
//                         type="radio"
//                         name={`question-${index}`}
//                         value={option}
//                         onChange={() => handleAnswerChange(index, option)}
//                         checked={selectedAnswers[index] === option}
//                       />
//                       {option}
//                     </label>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>
//       )}
//       <button
//         className="btn btn-primary mt-4"
//         onClick={handleSubmit}
//       >
//         Submit Test
//       </button>

//       {result && (
//         <div className="mt-5">
//           <h4>Test Results</h4>
//           <p>right_answer: {result.right_answer}</p>
//           <p>Percentage: {result.Percentage}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default SkillTestQuestions;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Modal, Button } from 'react-bootstrap';

// function SkillTestQuestions() {
//     const router = useRouter();
//     const { skillId, skillName } = router.query;
//     const [questions, setQuestions] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [selectedAnswers, setSelectedAnswers] = useState({});
//     const [result, setResult] = useState(null);
//     const [data, setData] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     useEffect(() => {
//         if (skillId && skillName) {
//             const fetchQuestions = async () => {
//                 setLoading(true);
//                 setError(null);

//                 try {
//                     const token = localStorage.getItem("token");
//                     if (!token) {
//                         throw new Error("No authentication token found.");
//                     }

//                     const response = await axios.get(
//                         `https://api.novajobs.us/api/students/skill-assessment?skill_id=${skillId}&skill_name=${skillName}`, 
//                         {
//                             headers: {
//                                 Authorization: token,
//                                 "Content-Type": "application/json",
//                             },
//                         }
//                     );

//                     const { data } = response.data;
//                     setData(data);
//                     setQuestions(data.questions);
//                 } catch (err) {
//                     console.error("Error fetching skill test questions:", err);
//                     setError("An error occurred while fetching the questions. Please try again later.");
//                 } finally {
//                     setLoading(false);
//                 }
//             };

//             fetchQuestions();
//         }
//     }, [skillId, skillName]);

//     const handleAnswerChange = (questionIndex, selectedOption) => {
//         setSelectedAnswers((prevAnswers) => ({
//             ...prevAnswers,
//             [questionIndex]: selectedOption,
//         }));
//     };

//     const handleSubmit = async () => {
//         const allAnswered = questions.every((_, index) => selectedAnswers[index]);

//         if (!allAnswered) {
//             toast.error("You must answer all the questions before submitting.");
//             return;
//         }

//         try {
//             const token = localStorage.getItem("token");
//             if (!token) {
//                 throw new Error("No authentication token found.");
//             }

//             const formattedQuestions = questions.map((question, index) => ({
//                 question: question.text,
//                 options: question.options,
//                 correct_answer: "",
//                 user_answer: selectedAnswers[index] || "",
//             }));

//             const dataToSend = {
//                 skill_assessment_id: data.skill_assessment_id,
//                 student_id: data.student_id,
//                 skill_id: parseInt(skillId),
//                 skill_name: skillName,
//                 questions: formattedQuestions,
//             };

//             const response = await axios.put(
//                 `https://api.novajobs.us/api/students/skill-assessment/${skillId}`,
//                 dataToSend,
//                 {
//                     headers: {
//                         Authorization: token,
//                         "Content-Type": "application/json",
//                     },
//                 }
//             );

//             setResult(response.data.data.results);
//             toast.success("Test submitted successfully!");
//         } catch (err) {
//             console.error("Error submitting skill test:", err);
//             setError("An error occurred while submitting the test. Please try again later.");
//             toast.error("An error occurred while submitting the test.");
//         }
//     };

//     useEffect(() => {
//         if (result) {
//             setShowModal(true);
//         }
//     }, [result]);

//     const handleClose = () => setShowModal(false);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div className="alert alert-danger">{error}</div>;
//     }

//     return (
//         <div className="container mt-5">
//             <ToastContainer />
//             <h3 className="mb-4">{skillName} - Skill Test</h3>
//             {questions.length === 0 ? (
//                 <p>No questions available for this skill test.</p>
//             ) : (
//                 <ul>
//                     {questions.map((question, index) => (
//                         <li key={index} className="mb-3">
//                             <h5>Q{index + 1}: {question.text}</h5>
//                             <ul>
//                                 {question.options.map((option, idx) => (
//                                     <li key={idx}>
//                                         <label className="form-check-label">
//                                             <input
//                                                 type="radio"
//                                                 name={`question-${index}`}
//                                                 value={option}
//                                                 onChange={() => handleAnswerChange(index, option)}
//                                                 checked={selectedAnswers[index] === option}
//                                                 className="form-check-input"
//                                             />
//                                             {option}
//                                         </label>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//             <button
//                 className="btn btn-primary mt-4"
//                 onClick={handleSubmit}
//             >
//                 Submit Test
//             </button>

//             {/* Modal for displaying results */}
//             <Modal show={showModal} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Test Results</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>Right Answers: {result?.right_answer}</p>
//                     <p>Percentage: {result?.Percentage}</p>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }

// export default SkillTestQuestions;
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Card } from 'react-bootstrap';
import styled from 'styled-components';

const CardHeader = styled(Card.Header)`
    font-weight: bold;
`;

const CardContent = styled(Card.Body)`
    padding: 20px;
`;

const CardFooter = styled(Card.Footer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Timer = styled.div`
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
`;

const Error = styled.div`
    color: red;
    margin: 20px 0;
    font-weight: bold;
`;

const QuestionOption = styled.li`
    margin-bottom: 10px;
    .form-check-input {
        margin-right: 10px;
    }
`;

function SkillTestQuestions() {
    const router = useRouter();
    const { skillId, skillName } = router.query;
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [result, setResult] = useState(null);
    const [data, setData] = useState(null);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(600); // 10 minutes in seconds
    const [testStarted, setTestStarted] = useState(false);

    useEffect(() => {
        if (skillId && skillName) {
            const fetchQuestions = async () => {
                setLoading(true);
                setError(null);

                try {
                    const token = localStorage.getItem("token");
                    if (!token) {
                        throw new Error("No authentication token found.");
                    }

                    const response = await axios.get(
                        `https://api.novajobs.us/api/students/skill-assessment?skill_id=${skillId}&skill_name=${skillName}`, 
                        {
                            headers: {
                                Authorization: token,
                                "Content-Type": "application/json",
                            },
                        }
                    );

                    const { data } = response.data;
                    setData(data);
                    setQuestions(data.questions);
                } catch (err) {
                    console.error("Error fetching skill test questions:", err);
                    setError("An error occurred while fetching the questions. Please try again later.");
                } finally {
                    setLoading(false);
                }
            };

            fetchQuestions();
        }
    }, [skillId, skillName]);

    useEffect(() => {
        let timer;
        if (testStarted && timeRemaining > 0) {
            timer = setInterval(() => {
                setTimeRemaining((prevTime) => prevTime - 1);
            }, 1000);
        } else if (timeRemaining === 0) {
            handleSubmit();
        }
        return () => clearInterval(timer);
    }, [testStarted, timeRemaining]);

    const handleAnswerChange = (selectedOption) => {
        setSelectedAnswers((prevAnswers) => ({
            ...prevAnswers,
            [currentQuestionIndex]: selectedOption,
        }));
    };

    const handleSubmit = useCallback(async () => {
        clearInterval(); // Stop the timer

        const allAnswered = questions.every((_, index) => selectedAnswers[index]);

        if (!allAnswered) {
            toast.error("You must answer all the questions before submitting.");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No authentication token found.");
            }

            const formattedQuestions = questions.map((question, index) => ({
                question: question.question,
                options: question.options,
                correct_answer: "",
                user_answer: selectedAnswers[index] || "",
            }));

            const dataToSend = {
                skill_assessment_id: data.skill_assessment_id,
                student_id: data.student_id,
                skill_id: parseInt(skillId),
                skill_name: skillName,
                questions: formattedQuestions,
            };

            const response = await axios.put(
                `https://api.novajobs.us/api/students/skill-assessment/${skillId}`,
                dataToSend,
                {
                    headers: {
                        Authorization: token,
                        "Content-Type": "application/json",
                    },
                }
            );

            setResult(response.data.data.results);
            toast.success("Test submitted successfully!");
        } catch (err) {
            console.error("Error submitting skill test:", err);
            setError("An error occurred while submitting the test. Please try again later.");
            toast.error("An error occurred while submitting the test.");
        }
    }, [questions, selectedAnswers, data, skillId, skillName]);

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleStartTest = () => {
        setTestStarted(true);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Error>{error}</Error>;
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <h3 className="mb-4">{skillName} - Skill Test</h3>
            {!testStarted ? (
                <Button onClick={handleStartTest} variant="primary">Start Test</Button>
            ) : result ? (
                <div>
                    <h4>Test Results</h4>
                    <p>Right Answers: {result?.right_answer}</p>
                    <p>Percentage: {result?.Percentage}</p>
                </div>
            ) : (
                <>
                    <Timer>Time Remaining: {formatTime(timeRemaining)}</Timer>
                    {questions.length === 0 ? (
                        <p>No questions available for this skill test.</p>
                    ) : (
                        <Card>
                            <CardHeader>
                                <h5>Q{currentQuestionIndex + 1}: {questions[currentQuestionIndex].question}</h5>
                            </CardHeader>
                            <CardContent>
                                <ul className="list-unstyled">
                                    {questions[currentQuestionIndex].options.map((option, idx) => (
                                        <QuestionOption key={idx}>
                                            <label className="form-check-label">
                                                <input
                                                    type="radio"
                                                    name={`question-${currentQuestionIndex}`}
                                                    value={option}
                                                    onChange={() => handleAnswerChange(option)}
                                                    checked={selectedAnswers[currentQuestionIndex] === option}
                                                    className="form-check-input me-2"
                                                />
                                                {option}
                                            </label>
                                        </QuestionOption>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button 
                                    onClick={handlePrevious} 
                                    disabled={currentQuestionIndex === 0} 
                                    variant="secondary"
                                >
                                    Previous
                                </Button>
                                <Button 
                                    onClick={currentQuestionIndex === questions.length - 1 ? handleSubmit : handleNext} 
                                    variant="primary"
                                >
                                    {currentQuestionIndex === questions.length - 1 ? 'Submit Test' : 'Next'}
                                </Button>
                            </CardFooter>
                        </Card>
                    )}
                </>
            )}
        </div>
    );
}

export default SkillTestQuestions;
