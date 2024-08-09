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

// import React from "react";
// import { useRouter } from 'next/router';
// import CourseDetailsArea from "@/src/components/course-details/course-details-area";
// import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
// import CourseArea from "@/src/components/course-details/course-area";
// import CounterArea from "@/src/components/homes/home-3/counter-area";

// const CourseDetails = () => {
//   const router = useRouter();
//   const { id, trainer_id, course_banner_image } = router.query;
//   console.log(router.query,"Router")

//   return (
//     <>
//       <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
//       <CourseDetailsArea courseId={id} trainerId={trainer_id} courseBannerImage={course_banner_image} />
//       <CourseArea />
//       <CounterArea />
//     </>
//   );
// };

// export default CourseDetails;
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import CourseDetailsArea from "@/src/components/course-details/course-details-area";
// import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";
import CourseArea from "@/src/components/course-details/course-area";
// import CounterArea from "@/src/components/homes/home-3/counter-area";
import WrapperFour from "@/src/layout/wrapper-4";
import SEO from "@/src/common/seo";
import Breadcrumb from "@/src/components/bredcrumb/breadcrumb";

const CourseDetails = () => {
  const router = useRouter();
  const [queryParams, setQueryParams] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      // Once the router is ready, set the query parameters to state
      setQueryParams(router.query);
    }
  }, [router.isReady, router.query]);

  if (!queryParams) {
    // Return loading state or null if queryParams are not yet available
    return <div>Loading...</div>;
  }

  const { id, trainer_id, course_banner_image } = queryParams;

  return (
    <>
    <WrapperFour>
    <SEO pageTitle={"Course Details"} />
    <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
      <CourseDetailsArea courseId={id} trainerId={trainer_id} courseBannerImage={course_banner_image} />
      <CourseArea />
      </WrapperFour>
    </>
  );
};

export default CourseDetails;
