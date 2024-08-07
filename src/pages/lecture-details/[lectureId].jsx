// pages/lecture/[lectureId].js
import { useRouter } from 'next/router';
import Link from 'next/link';
import Breadcrumb from '@/src/components/bredcrumb/breadcrumb';

const LectureDetails = () => {
  const router = useRouter();
  const { lectureId, title, description, duration } = router.query;

  return (
    <div>
        <Breadcrumb title="Lecture Details" subtitle="Lecture Details" isDbbl="Lecture" />
      <h1>{title}</h1>
      <p>{description}</p>
      <p>Duration: {duration}</p>
      <Link href="/course-details">Back to Course Details</Link>
    </div>
  );
};

export default LectureDetails;
