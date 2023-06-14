import PageTemplate from "@/components/templates/pagetemplate";
import MyTabs from "@/components/organisms/mytabs";
import Title from "@/components/atoms/title";
import useApi from "@/services/useApi";
import { useUser } from "@auth0/nextjs-auth0/client";
import * as React from 'react';
import { useState, useEffect } from 'react';


type Job = { 
    reedId: Number,
    userId: Number,
    id: Number,
    jobTitle: String,
    employerName: String,
    location: String,
    expirationDate: Date,
    jobDescription: String,
    minSalary: Number,
    maxSalary: Number,
    notes: String,
    reedUrl: String,
    externalUrl: String,
    partTime: Boolean,
    fullTime: Boolean,
    contractType: String,
    applicationCount: Number,
    applicationStage: Number,
    rejected: Boolean
};

const MyJobs = () => {
    const { user } = useUser();

    const [response, setResponse] = useState<Job[] | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    useEffect(() => {
        console.log("myjobs.tsx: useEffect[user]")
        const fetchData = async () => {
            const { response , error, isLoading } = await useApi("api/my/getuser", {
                headers: { sid: user?.sid },
            });
            setResponse(response);
        };

        fetchData();
    }, [user]);
    return (
        <>
            <PageTemplate>
                <Title text="My Jobs" />

                {isLoading && <p>Loading Jobs...</p>}

                { response && (
                    <>
                        <p>My Jobs:</p>
                        <pre>
                            {response.length > 0 && JSON.stringify(
                                response.map((job: Job) => job),
                                null,
                                2
                            )}
                        </pre>
                    </>
                )}

                {error && (
                    <>
                        <p>Error loading Jobs</p>
                        <pre style={{ color: "red" }}>
                            {JSON.stringify(error, null, 2)}
                        </pre>
                    </>
                )}
            </PageTemplate>
        </>
    );
};

export default MyJobs;
