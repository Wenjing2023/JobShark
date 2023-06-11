import { Tab } from '@headlessui/react'
import classNames from 'classnames';
import Title from '../atoms/title';

<<<<<<< HEAD
const MyTabs = () => {
=======
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

const JobCard: React.FC<JobCardProps> = ({job}) => {
    return (
        <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2">
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
      </a>
    );
};

const MyTabs: React.FC = () => {
>>>>>>> main


    const jobListToApply = ['CodeClan Instructor', 'CodeClan Technical Assistant']
    const jobListApplied = ['SkyScanner Developer']
    const jobListInterview = ['X-Design Developer']
    const jobListResult = ['Google CEO']


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
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </Tab.Panel>
        <Tab.Panel className="rounded-xl bg-white p-3">
        <ul>
                {jobListApplied.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
          </Tab.Panel>

          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul>
                {jobListInterview.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul>
          </Tab.Panel>

          <Tab.Panel className="rounded-xl bg-white p-3">
            <ul>
                {jobListResult.map((job, index) => (
                    <li key={index}>{job}</li>
                ))}
            </ul></Tab.Panel>

      </Tab.Panels>
    </Tab.Group>
    </div> );
}
 
export default MyTabs;
