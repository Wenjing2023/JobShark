import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';

interface searchedJobProps{
    job: {
			jobId: number,
			employerId: number,
			employerName: string,
			jobTitle: string,
			locationName: string,
			minimumSalary: number,
			maximumSalary: number,
			currency: string,
			expirationDate: number,
			date: Date,
			jobDescription: string,
			applications: number,
			jobUrl: string
		}
}

interface SearchCardProps {
    job: searchedJobProps;
}

const JobCard: React.FC<SearchCardProps> = ({ job }) => {

  return (
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

  );
};

const SearchedJob:React.FC<searchedJobProps> = ({job}) => {

    return ( 
<>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2">
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.jobTitle}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.employerName}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {job.locationName}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.jobDescription}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Salary: {job.minimumSalary} to {job.maximumSalary}</p>
          {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Application Deadline: {job.date}</p> */}
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Apply Here: {job.jobUrl}</p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of applications: {job.applications}</p>
        </div>
      </div>
        
        <h1 className="font-weight-bold">{job.jobTitle}</h1>
        <h2>{job.employerName}</h2>
        <h3>Location: {job.locationName}</h3>
        {!job.minimumSalary || !job.maximumSalary ? "Salary undisclosed" : <h3>Salary from £{job.minimumSalary} {job.maximumSalary ? 'to £' + job.maximumSalary : ""} </h3>}
        <p>{job.jobDescription}</p>
        <a href={job.jobUrl} target="_blank">Click here to apply</a>
        <h4>Applications received to date: {job.applications}</h4>
        
        
        <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab className={({selected}) =>classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected?'bg-blue-500 text-white':'text-blue-700')}>Job Search Results</Tab>  
        </Tab.List>
        <Tab.Panel className="rounded-xl bg-white p-3">
            <ul>
    
                    <Fragment key={job.jobId}>
                        <SearchedJob job={job} />
                    </Fragment>
    
            </ul>
        </Tab.Panel>

        </Tab.Group>
        
        
        </>


     );
}
 
export default SearchedJob;