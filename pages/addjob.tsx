import Button from "@/components/atoms/button";
import Title from "@/components/atoms/title";
import PageTemplate from "@/components/templates/pagetemplate";

const addjob = () => {
    const handleSubmit = async (evt: any) => {
        evt.preventDefault();
        const response = await fetch(
            "https://jobshark.bravepond-dfd63b32.uksouth.azurecontainerapps.io/jobs",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Basic ${btoa(
                        "user:417cc899-31e2-49d0-a4d3-16c5cdf69b23"
                    )}`,
                },
                body: JSON.stringify({
                    user_id: 1,
                }),
            }
        );
        console.log(response);
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
