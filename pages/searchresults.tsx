import PageTemplate from "@/components/templates/pagetemplate";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { loadAllJobs } from "./api/reedapi";
import { useRouter } from "next/router";

type SearchedJob = {
  jobId: number;
  employerId: number;
  employerName: string;
  jobTitle: string;
  locationName: string;
  minimumSalary: number;
  maximumSalary: number;
  currency: string;
  expirationDate: number;
  date: Date;
  jobDescription: string;
  applications: number;
  jobUrl: string;
};

interface SearchedJobProps {
  searchedJob: SearchedJob;
}

const SearchedJob: React.FC<SearchedJobProps> = ({ searchedJob }) => {
  return (
    <a
      href="#"
      className="flex bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-2"
    >
      <div className="flex-1 flex flex-col p-4 leading-normal">
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-jaws-white dark:text-white bg-jaws-blue">
          {searchedJob.jobTitle}
        </h2>
        <h3 className="mb-2 text-2xl tracking-tight text-jaws-white dark:text-white bg-jaws-blue">
          {searchedJob.employerName}
        </h3>
        <div></div>
        <p className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {searchedJob.locationName}
        </p>
        <p className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
          £{searchedJob.minimumSalary} to £{searchedJob.maximumSalary}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {searchedJob.jobDescription}
        </p>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
          Apply by {searchedJob.expirationDate}
        </p>
      </div>
    </a>
  );
};

const SearchResults: React.FC<SearchedJob> = ({}) => {
  const [allJobs, setAllJobs] = useState<[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const data = router.query;

  console.log("state in search result:", data);

  useEffect(() => {
    loadAllJobs()
      .then((data) => {
        console.log(data);
        setAllJobs(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error getting data", error);
        setLoading(false);
      });
  }, []);

  return (
    <PageTemplate>
      <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  selected ? "bg-blue-500 text-white" : "text-blue-700"
                )
              }
            >
              Job Search Results
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className="rounded-xl bg-white p-3">
              <>
                {allJobs.length > 0 ? (
                  allJobs.slice(0, 15).map((job, index) => (
                    <Fragment key={index}>
                      <SearchedJob searchedJob={job} />
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
    </PageTemplate>
  );
};

export default SearchResults;
