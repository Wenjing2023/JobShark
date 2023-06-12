// File name to be changed to unique identifier for job eg. [id], Link component in corresponding file to be updated.
import { Tab } from '@headlessui/react';
import PageTemplate from '@/components/templates/pagetemplate';
import { useRouter } from 'next/router';
import Title from '@/components/atoms/title';

const JobDetails = () => {
  const router = useRouter();
  const { jobId } = router.query;

  return ( 
    <>
      <PageTemplate>
        <Title text="Job Details" />  
        <Tab.Group>
          <Tab.Panels>
            <Tab.Panel>
              <h1>{jobId}</h1>
              {/* Add the content for the "To Apply" tab panel */}
            </Tab.Panel>
            {/* Add the remaining tab panels for other tabs */}
          </Tab.Panels>
        </Tab.Group>
      </PageTemplate>
    </>
  );
};

export default JobDetails;


