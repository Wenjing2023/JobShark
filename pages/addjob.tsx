import Button from "@/components/atoms/button";
import Title from "@/components/atoms/title";
import PageTemplate from "@/components/templates/pagetemplate";
import { saveJob } from "@/services/backendservice";

const addjob = () => {
    const handleSubmit = async (evt: any) => {
        evt.preventDefault();
        saveJob({});
    };

    return (
        <PageTemplate>
            <Title text="Add a job listing" />
            <form onSubmit={handleSubmit}>
                <Button type="submit" buttonText="Add Job" />
            </form>
        </PageTemplate>
    );
};

export default addjob;
