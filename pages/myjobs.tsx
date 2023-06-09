import PageTemplate from "@/components/templates/pagetemplate";
import MyTabs from "@/components/organisms/mytabs";
import Title from "@/components/atoms/title";
import getApi from "@/services/getApi";
import { useUser } from "@auth0/nextjs-auth0/client";
import * as React from 'react';
import { useState, useEffect } from 'react';
import Job from "@/components/types/job";

const MyJobs = () => {
    const { user } = useUser();

    const [response, setResponse] = useState<Job[] | []>([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    
    useEffect(() => {
        console.log("myjobs.tsx: useEffect[user]")
        const fetchData = async () => {
            const { response , error, isLoading } = await getApi("api/my/getuser", {
                headers: { sub: user?.sub },
            });
            console.log("user_response: ", response)
            setResponse(response ? response.jobs : []);
        };

        fetchData();
    }, [user]);
    return (
        <>
            <PageTemplate>
                <Title text="My Jobs" />

                {isLoading && <p>Loading Jobs...</p>}

                { response && (
                    <MyTabs allJobs={response}/>
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
