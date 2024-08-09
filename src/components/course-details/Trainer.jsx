// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Styled-components
// const TrainerContainer = styled.div`
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
//   margin: auto;
//   text-align: center;
// `;

// const TrainerImage = styled.img`
//   width: 150px;
//   height: 150px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 20px;
// `;

// const TrainerName = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const TrainerTitle = styled.p`
//   font-size: 1.2rem;
//   color: #555;
//   margin-bottom: 20px;
// `;

// const TrainerRating = styled.div`
//   font-size: 1.1rem;
//   margin-bottom: 20px;
// `;

// const TrainerBio = styled.p`
//   font-size: 1rem;
//   margin-bottom: 20px;
// `;

// const ContactInfo = styled.div`
//   margin-top: 20px;
// `;

// const ContactLink = styled.a`
//   margin: 0 10px;
//   font-size: 1.2rem;
//   color: #007bff;
//   text-decoration: none;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// function Trainer({trainerID}) {
//     const [trainerDetails, setTrainerDetails] = useState(null);
//     console.log(trainerID,"trainer id")
//     useEffect(() => {
//         const fetchTrainerDetails = async () => {
//             try {
//                 const response = await axios.get(`https://api.novajobs.us/api/trainers/trainer-profile/${trainerID}`);
//                 console.log(response);
//                 if (response && response.data) {
//                     setTrainerDetails(response.data.data.trainer);
//                 }
//             } catch (error) {
//                 console.error("Error fetching trainer details:", error);
//             }
//         };

//         fetchTrainerDetails();
//     }, []);
//     console.log(trainerDetails)

//     if (!trainerDetails) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <TrainerContainer>
//             <TrainerImage src={`https://api.novajobs.us${trainerDetails.photo}`} alt={`${trainerDetails.first_name} ${trainerDetails.last_name}`} />
//             <TrainerName>{trainerDetails.first_name} {trainerDetails.last_name}</TrainerName>
//             <TrainerTitle>{trainerDetails.jobtitle}</TrainerTitle>
//             <TrainerRating>
//                 {trainerDetails.rating || "4.7"} ★★★★☆ ({trainerDetails.reviewsCount || "0"})
//             </TrainerRating>
//             <TrainerBio>{trainerDetails.biography}</TrainerBio>
//             {/* <p>{trainerDetails.course_id.length} Classes</p> */}
//             <p>{trainerDetails.studentsCount || "0"} Students</p>
//             <ContactInfo>
//                 <ContactLink href={`mailto:${trainerDetails.email}`} target="_blank" rel="noopener noreferrer">Email</ContactLink>
//                 <ContactLink href={trainerDetails.facebook} target="_blank" rel="noopener noreferrer">Facebook</ContactLink>
//                 <ContactLink href={trainerDetails.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</ContactLink>
//                 <ContactLink href={trainerDetails.twitter} target="_blank" rel="noopener noreferrer">Twitter</ContactLink>
//                 <ContactLink href={trainerDetails.website} target="_blank" rel="noopener noreferrer">Website</ContactLink>
//                 <ContactLink href={trainerDetails.youtube} target="_blank" rel="noopener noreferrer">YouTube</ContactLink>
//             </ContactInfo>
//         </TrainerContainer>
//     );
// }

// export default Trainer;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled-components
const TrainerContainer = styled.div`
  padding: 30px;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  // max-width: 600px;
  // margin: 40px auto;
  text-align: center;
  background-color: #f9f9f9;
`;

const TrainerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TrainerName = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #333;
`;

const TrainerTitle = styled.p`
  font-size: 1.2rem;
  color: #777;
  margin-bottom: 20px;
`;

const TrainerRating = styled.div`
  font-size: 1.2rem;
  color: #ffcc00;
  margin-bottom: 20px;

  span {
    color: #555;
    margin-left: 10px;
  }
`;

const TrainerBio = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const ContactInfo = styled.div`
  margin-top: 30px;
`;

const ContactLink = styled.a`
  margin: 0 15px;
  font-size: 1.3rem;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
    text-decoration: underline;
  }

  i {
    margin-right: 5px;
  }
`;

function Trainer() {
    const [trainerDetails, setTrainerDetails] = useState(null);

    useEffect(() => {
        const trainerID = localStorage.getItem('trainerId'); // Fetching trainerID from local storage
        const fetchTrainerDetails = async () => {
            try {
                const response = await axios.get(`https://api.novajobs.us/api/trainers/trainer-profile/${trainerID}`);
                if (response && response.data) {
                    setTrainerDetails(response.data.data.trainer);
                }
            } catch (error) {
                console.error("Error fetching trainer details:", error);
            }
        };

        fetchTrainerDetails();
    }, []);

    if (!trainerDetails) {
        return <TrainerContainer>Loading...</TrainerContainer>;
    }

    return (
        <TrainerContainer>
            <TrainerImage src={`https://api.novajobs.us${trainerDetails.photo}`} alt={`${trainerDetails.first_name} ${trainerDetails.last_name}`} />
            <TrainerName>{trainerDetails.first_name} {trainerDetails.last_name}</TrainerName>
            <TrainerTitle>{trainerDetails.jobtitle}</TrainerTitle>
            <TrainerRating>
                {trainerDetails.rating || "4.7"} ★★★★☆ 
                <span>({trainerDetails.reviewsCount || "0"} Reviews)</span>
            </TrainerRating>
            <TrainerBio>{trainerDetails.biography}</TrainerBio>
            <p>{trainerDetails.studentsCount || "0"} Students</p>
            <ContactInfo>
                {trainerDetails.email && (
                    <ContactLink href={`mailto:${trainerDetails.email}`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </ContactLink>
                )}
                {trainerDetails.facebook && (
                    <ContactLink href={trainerDetails.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </ContactLink>
                )}
                {trainerDetails.linkedin && (
                    <ContactLink href={trainerDetails.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </ContactLink>
                )}
                {trainerDetails.twitter && (
                    <ContactLink href={trainerDetails.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </ContactLink>
                )}
                {trainerDetails.website && (
                    <ContactLink href={trainerDetails.website} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe"></i>
                    </ContactLink>
                )}
                {trainerDetails.youtube && (
                    <ContactLink href={trainerDetails.youtube} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </ContactLink>
                )}
            </ContactInfo>
        </TrainerContainer>
    );
}

export default Trainer;
