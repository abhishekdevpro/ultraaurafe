
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

// Styled-components
const TrainerContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #e3e3e3;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 800px;
  margin: 40px auto;
`;

const TrainerImage = styled.img`
  width: 150px;
  height: 150px;
//   border-radius: 50%;
  object-fit: cover;
  margin-right: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TrainerInfo = styled.div`
  flex: 1;
  text-align: left;
`;

const TrainerName = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #1c1c1c;
  font-weight: 700;
`;

const TrainerTitle = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 15px;
`;

const TrainerRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #ffc107;
  margin-bottom: 10px;

  span {
    color: #555;
    margin-left: 10px;
    font-size: 1rem;
  }
`;

const TrainerStudents = styled.p`
  font-size: 1rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const TrainerBio = styled.p`
  font-size: 0.9rem;
  color: #495057;
  margin-bottom: 0;
  line-height: 1.5;
`;

function Trainer() {
  const [trainerDetails, setTrainerDetails] = useState(null);

  useEffect(() => {
    const trainerID = localStorage.getItem('trainerId'); 
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
      <TrainerInfo>
        <TrainerName>{trainerDetails.first_name} {trainerDetails.last_name}</TrainerName>
        <TrainerTitle>{trainerDetails.jobtitle}</TrainerTitle>
        <TrainerRating>
          {trainerDetails.rating || "4.7"} ★★★★☆ 
          <span>({trainerDetails.reviewsCount || "125"} Reviews)</span>
        </TrainerRating>
        <TrainerStudents>{trainerDetails.studentsCount || "2,35,687"} Students</TrainerStudents>
        <TrainerBio>{trainerDetails.biography}</TrainerBio>
      </TrainerInfo>
    </TrainerContainer>
  );
}

export default Trainer;
