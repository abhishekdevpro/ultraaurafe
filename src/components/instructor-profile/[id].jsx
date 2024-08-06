import React from 'react';
import { useRouter } from 'next/router';
import Breadcrumb from '../../components/bredcrumb/breadcrumb';
import CounterArea from '../../components/homes/home-3/counter-area';
import InstructorPortfolioArea from '../../components/instructor-portfolio-area';

const InstructorProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Breadcrumb
        title="Instructor Profile"
        isDbbl="Instructor"
        subtitle="Instructor Profile"
      />
      <InstructorPortfolioArea />
      <CounterArea />
    </>
  );
};

export default InstructorProfile;