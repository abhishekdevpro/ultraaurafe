// import SEO from '@/src/common/seo'
// import Breadcrumb from '@/src/components/bredcrumb/breadcrumb'
// import WrapperFour from '@/src/layout/wrapper-4'
// import React from 'react'
// import ResetPassword from './ResetPassword'

// function resetpassword() {
//   return (
//     <>
//     <WrapperFour>
//     <SEO pageTitle={"Course Details"} />
//     <Breadcrumb title="Course Details" subtitle="Course Details" isDbbl="Course" />
//        <ResetPassword />
//       </WrapperFour>
//     </>
//   )
// }

// export default resetpassword


// import React from 'react';
// import { useRouter } from 'next/router';
// import SEO from '@/src/common/seo';
// import Breadcrumb from '@/src/components/bredcrumb/breadcrumb';
// import WrapperFour from '@/src/layout/wrapper-4';
// import ResetPassword from './ResetPassword';

// function ResetPasswordPage() {
//   // Use the router to get the token from the URL
//   const router = useRouter();
//   const { token } = router.query; // This will extract the 'token' from the URL
//    console.log(token)
//   return (
//     <>
//       <WrapperFour>
//         <SEO pageTitle={"Reset Password"} />
//         <Breadcrumb title="Reset Password" subtitle="Enter your new password" isDbbl="Reset" />
//         <ResetPassword token={token} />
//       </WrapperFour>
//     </>
//   );
// }

// export default ResetPasswordPage;

import React from 'react';
import { useRouter } from 'next/router';
import SEO from '@/src/common/seo';
import Breadcrumb from '@/src/components/bredcrumb/breadcrumb';
import WrapperFour from '@/src/layout/wrapper-4';
import ResetPassword from './ResetPassword';

function ResetPasswordPage() {
  // Use the router to get the token from the URL
  const router = useRouter();
  const { token } = router.query; // This will extract the 'token' from the URL

  // Handle cases where the token might be undefined
  if (!token) {
    return <p>Loading...</p>; // Or any other loading state
  }

  return (
    <>
      <WrapperFour>
        <SEO pageTitle={"Reset Password"} />
        <Breadcrumb title="Reset Password" subtitle="Enter your new password" isDbbl="Reset" />
        <ResetPassword token={token} />
      </WrapperFour>
    </>
  );
}

export default ResetPasswordPage;
