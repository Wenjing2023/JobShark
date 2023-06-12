import PageTemplate from "@/components/templates/pagetemplate";
import MyTabs from "@/components/organisms/mytabs";
import Title from "@/components/atoms/title";
import useApi from "@/services/useApi";

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
    applicationCount: Number
};

const MyJobs = () => {
    const { response, error, isLoading } = useApi("api/my/myjobs");
    return (
        <>
            <PageTemplate>
                <Title text="My Jobs" />

                {isLoading && <p>Loading Jobs...</p>}

                {response && (
                    <>
                        <p>My Jobs:</p>
                        <pre>
                            {JSON.stringify(
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
