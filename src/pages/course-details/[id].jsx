// import React from "react";
// // import Breadcrumb from "../bredcrumb/breadcrumb";
// import { useRouter } from 'next/router';
// import CourseDetailsArea from "@/src/components/course-details/course-details-area";
// import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
// import CourseArea from "@/src/components/course-details/course-area";
// import CounterArea from "@/src/components/homes/home-3/counter-area";

// const CourseDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   return (
//     <>
//       <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
//       <CourseDetailsArea courseId={id} />
//       <CourseArea />
//       <CounterArea />
//     </>
//   );
// };

// export default CourseDetails;

import React from "react";
import { useRouter } from 'next/router';
import CourseDetailsArea from "@/src/components/course-details/course-details-area";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import CourseArea from "@/src/components/course-details/course-area";
import CounterArea from "@/src/components/homes/home-3/counter-area";

const CourseDetails = () => {
  const router = useRouter();
  const { id, trainer_id, course_banner_image } = router.query;
  console.log(router.query,"Router")

  return (
    <>
      <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
      <CourseDetailsArea courseId={id} trainerId={trainer_id} courseBannerImage={course_banner_image} />
      <CourseArea />
      <CounterArea />
    </>
  );
};

export default CourseDetails;
