// File name to be changed to unique identifier for job eg. [id], Link component in corresponding file to be updated.

import { useRouter } from 'next/router';

const JobDetails = () => {
  const router = useRouter();
  const { jobTitle } = router.query;

  return ( 
    <>
    <h1>{jobTitle} </h1>
    </>
 );
};

export default JobDetails;


