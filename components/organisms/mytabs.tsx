import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import Title from '../atoms/title';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Job {
    jobTitle: string;
    employerName: string;
    locationName: string;
    minimumSalary: string;
    maximumSalary: string;
    jobDescription: string;
    date: string;
    jobUrl: string;
    applications: string;
};

interface JobCardProps {
    job: Job;
};


// Link needs to be amended once unique identifier for job is available.

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const router = useRouter();

  return (
    <Link href="/job/[jobTitle]" as={`/job/${encodeURIComponent(job.jobTitle)}`} passHref>
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.employerName}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {job.locationName}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.jobDescription}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Salary: {job.minimumSalary} to {job.maximumSalary}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Application Deadline: {job.date}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Apply Here: {job.jobUrl}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of applications: {job.applications}</p>
        </div>
      </div>
    </Link>
  );
};


  
  

const MyTabs: React.FC = () => {


    const jobListToApply: Job[] = [
        { jobTitle: 'Instructor', employerName: 'CodeClan', locationName: 'Edinburgh', minimumSalary: '30000', maximumSalary: '40000', jobDescription: 'Fantastic tutor required', date: '30 July 2023', jobUrl: 'www.codeclan.com', applications: '73'},
        { jobTitle: 'Technical Assistant', employerName: 'CodeClan', locationName: 'Glasgow', minimumSalary: '25000', maximumSalary: '35000', jobDescription: 'Supporing students', date: '01 August 2023', jobUrl: 'www.codeclan.com', applications: '79'}
    
    ];

    const jobListApplied: Job[] = [
        { jobTitle: 'FrontEnd Developer', employerName: 'SkyScanner', locationName: 'Edinburgh', minimumSalary: '30000', maximumSalary: '40000', jobDescription: 'Front End Developer', date: '31 August 2023', jobUrl: 'www.codeclan.com', applications: '72'},
        { jobTitle: 'BackEnd Developer', employerName: 'SkyScanner', locationName: 'Glasgow', minimumSalary: '35000', maximumSalary: '45000', jobDescription: 'Back End Developer', date: '09 August 2023', jobUrl: 'www.codeclan.com', applications: '109'}
    ];


    const jobListInterview: Job[] = [
        { jobTitle: 'FrontEnd Developer', employerName: 'X-Design', locationName: 'Edinburgh', minimumSalary: '30000', maximumSalary: '40000', jobDescription: 'Front End Developer', date: '31 August 2023', jobUrl: 'www.codeclan.com', applications: '72'},
        { jobTitle: 'UX Designer', employerName: 'X-Design', locationName: 'Glasgow', minimumSalary: '35000', maximumSalary: '45000', jobDescription: 'Back End Developer', date: '09 August 2023', jobUrl: 'www.codeclan.com', applications: '109'}
    ];

    const jobListResult: Job[] = [
        { jobTitle: 'CEO', employerName: 'Google', locationName: 'San Francisco', minimumSalary: '3000000', maximumSalary: '100000000', jobDescription: 'Front End Developer', date: '31 October 2023', jobUrl: 'www.google.com', applications: '23472'},
    ];


    return ( <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        <Tab.Group>
      <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>To Apply</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Applied</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Interview</Tab>
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Result</Tab>

      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel className="rounded-xl bg-white p-3">
            <ul>
                {jobListToApply.map((job, index) => (
                    <Fragment key={index}>
                        <JobCard job={job} />
                    </Fragment>
                ))}
            </ul>
        </Tab.Panel>
        <Tab.Panel className="rounded-xl bg-white p-3">
        <ul>
                {jobListApplied.map((job, index) => (
                    <Fragment key={index}>
                    <JobCard job={job} />
                </Fragment>
                ))}
            </ul>
        </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">        
            <ul>
                {jobListInterview.map((job, index) => (
                    <Fragment key={index}>
                        <JobCard job={job} />
                    </Fragment>
                ))}
            </ul>
            </Tab.Panel>

        <Tab.Panel className="rounded-xl bg-white p-3">        
            <ul>
                {jobListResult.map((job, index) => (
                    <Fragment key={index}>
                            <JobCard job={job} />
                    </Fragment>
                ))}
            </ul></Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
    </div> );
}
 
export default MyTabs;