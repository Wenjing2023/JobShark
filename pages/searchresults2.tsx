// import Title from "../atoms/title";
import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import SearchedJob from '@/components/molecules/searchedjob';
import { loadAllJobs } from './api/reedapi';

// interface Event {
//     title: string;
//     description: string;
//     date: string;
// }

// interface EventCardProps {
//     event: Event;
// }

interface SearchedJob{
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

interface SearchedJobProps {
    searchedJob: SearchedJob;
}

const SearchedJob: React.FC<SearchedJobProps> = ({ job }) => {
    return (
        <a href="#" className="flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2">
          <div className="flex items-center justify-center w-24 bg-jaws-blue">
            <span className="text-2xl text-white px-4 py-8">{job.jobTitle}</span>
          </div>
          <div className="flex-1 flex flex-col p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{job.jobDescription}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{job.description}</p>
          </div>
        </a>
      );
    };



const SearchResults2: React.FC<SearchedJob> = ({ job }) => {
    const [allJobs, setAllJobs] = useState<[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadAllJobs()
      .then((data) => {
        console.log(data)
        setAllJobs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting data", error);
        setLoading(false);
      });
    }, []);




    const eventsInterview: Event[] = [
        { title:'Interview 1', description: 'A wee chat about a potential job. Meet at office to discuss. Lots to talk about. Coffee to drink. Colleagues to meet.  Sometimes there is a dog.', date: '30 June 2023'}, 
        { title: 'Interview 2', description: 'Technical inteview', date: '01 July 2023'}
    ];



    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
              <Tab className={({ selected }) => classNames("w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700", selected ? 'bg-blue-500 text-white' : 'text-blue-700')}>Job Search Results</Tab>
            </Tab.List>
            <Tab.Panels className="mt-2">
              <Tab.Panel className="rounded-xl bg-white p-3">
                <>
                  {allJobs.length > 0 ? (
                    allJobs.slice(0, 15).map((job, index) => (
                      <Fragment key={index}>
                        <SearchedJob job={job} />
                      </Fragment>
                    ))
                  ) : (
                    <p>No jobs found</p>
                  )}
                </>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      );
    }
 
export default SearchResults2;