import PageTemplate from "@/components/templates/pagetemplate";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import { loadAllJobs } from "../services/reedapi";
import { useRouter } from "next/router";
import Link from "next/link";
import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import getApi from "@/services/getApi";
import postApi from "@/services/postApi";
import Job from "@/components/types/job";
import Button from "@/components/atoms/button";

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
    user: UserProfile | undefined;
}

const SearchedJob: React.FC<SearchedJobProps> = ({ searchedJob, user }) => {
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
        const { response } = await getApi("api/my/getuser", {
            headers: { sub: user?.sub },
        });

        console.log("response", response);

        if (user?.sub) {
            const jobDate = searchedJob.expirationDate
                .toString()
                .split("/")
                .reverse()
                .join("-");

            const jobToPost: Job = {
                user: {
                    id: response.id,
                },
                applicationCount: searchedJob.applications,
                jobTitle: searchedJob.jobTitle,
                employerName: searchedJob.employerName,
                expirationDate: jobDate,
                // jobDescription: searchedJob.jobDescription,
                reedId: searchedJob.jobId,
                reedUrl: searchedJob.jobUrl,
                location: searchedJob.locationName,
                maxSalary: searchedJob.maximumSalary,
                minSalary: searchedJob.minimumSalary,
            };

            const jsonToPost = JSON.stringify(jobToPost);

            console.log("jobToPost: ", jobToPost);

            postApi("api/my/createjob", { body: jsonToPost });
        }
    };

    // console.log("searchedJob:", searchedJob);

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
                <Link href={`${searchedJob.jobUrl}`}>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {searchedJob.jobDescription}
                    </p>
                </Link>
                <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
                    Apply by {searchedJob.expirationDate}
                </p>
                {/* <Link href="/myjobs"> */}
                <form onSubmit={onSubmit}>
                    <Button
                        className="bg-jaws-blue text-jaws-white font-xs rounded-lg hover:bg-jaws-light-blue float-right m-5 w-46 px-3 py-1"
                        type="submit"
                        buttonText="Save to my jobs"
                    />
                </form>
                {/* </Link> */}
            </div>
        </a>
    );
};

const SearchResults: React.FC<SearchedJob> = ({}) => {
    const { user } = useUser();
    const [allJobs, setAllJobs] = useState<SearchedJob[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const data = router.query;
    console.log("state in search result:", data);

    useEffect(() => {
        loadAllJobs(data)
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
            <div className="w-full max-w-md px-2 py-16 sm:px-0 ß">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        <Tab
                            className={({ selected }) =>
                                classNames(
                                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                                    selected
                                        ? "bg-jaws-blue text-white"
                                        : "text-blue-700"
                                )
                            }
                        >
                            Job Search Results
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        <Tab.Panel className="rounded-xl bg-white p-3">
                            <>
                                {!loading ? (
                                    allJobs.map((job, index) => (
                                        <Fragment key={index}>
                                            <SearchedJob
                                                searchedJob={job}
                                                user={user}
                                            />
                                        </Fragment>
                                    ))
                                ) : (
                                    <p>Loading...</p>
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
