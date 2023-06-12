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



const SearchedJob:React.FC<searchedJobProps> = ({job}) => {

    return ( 
<>
   
        
      <Tab.Group>
        <Tab.List>
          <Tab>Job Details</Tab>
          <Tab>Application Information</Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <h1 className="font-weight-bold">{job.jobTitle}</h1>
            <h2>{job.employerName}</h2>
            <h3>Location: {job.locationName}</h3>
            {!job.minimumSalary || !job.maximumSalary ? (
              'Salary undisclosed'
            ) : (
              <h3>
                Salary from £{job.minimumSalary}{' '}
                {job.maximumSalary ? 'to £' + job.maximumSalary : ''}
              </h3>
            )}
            <p>{job.jobDescription}</p>
            <a href={job.jobUrl} target="_blank" rel="noopener noreferrer">
              Click here to apply
            </a>
            <h4>Applications received to date: {job.applications}</h4>
          </Tab.Panel>
          <Tab.Panel>Application information goes here</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </>
  );
};


export default SearchedJob;