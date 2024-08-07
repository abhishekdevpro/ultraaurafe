import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; // 16:9 aspect ratio
  margin-bottom: 25px;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const VideoPlayer = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
`;

const SidebarVideo = ({ courseId }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const handlePlayClick = async () => {
    try {
      const response = await axios.get(`https://api.novajobs.us/api/trainers/streaming/${courseId}`);
      setVideoUrl(response.data.videoUrl); // Adjust this based on the actual API response structure
      setIsPlaying(true);
    } catch (error) {
      console.error('Error fetching video:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <VideoContainer>
      {!isPlaying ? (
        <>
          <StyledImage
            src="/assets/img/bg/c-details-video-bg.jpg"
            alt="video-bg"
          />
          <PlayButton onClick={handlePlayClick}>
            <i className="fas fa-play"></i>
          </PlayButton>
        </>
      ) : (
        <VideoPlayer controls autoPlay>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </VideoPlayer>
      )}
    </VideoContainer>
  );
};

export default SidebarVideo;