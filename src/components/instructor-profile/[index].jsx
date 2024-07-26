// src/components/instructor-profile.js

import React from 'react';
import Breadcrumb from '../bredcrumb/breadcrumb';
import CounterArea from '../homes/home-3/counter-area'; // Adjust path if needed
import InstructorPortfolioArea from './instructor-portfolio-area';

const InstructorProfile = ({ trainer }) => {
  return (
    <>
      <Breadcrumb
        title="Instructor Profile"
        isDbbl="Instructor"
        subtitle="Instructor Profile"
      />
      <InstructorPortfolioArea trainer={trainer} />
      <CounterArea />
    </>
  );
};

export default InstructorProfile;
