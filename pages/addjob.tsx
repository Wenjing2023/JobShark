import Button from "@/components/atoms/button";
import Title from "@/components/atoms/title";
import PageTemplate from "@/components/templates/pagetemplate";

const addjob = () => {
    const handleSubmit = async (evt:any) => {
        evt.preventDefault();
        const response = await fetch(
            "https://jobshark.bravepond-dfd63b32.uksouth.azurecontainerapps.io/jobs",

            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Basic ${btoa('71847e48-8f72-4b7b-ae2d-71d746d1ca25:')}`
                },
                body: JSON.stringify({
                    user_id: 1
                }),
            }
        );
        console.log(response);
    };

    return (
        <PageTemplate>
            <Title text="Add a job listing" />
            <form onSubmit={handleSubmit}>
                <Button type="submit" buttonText="Add Job"/>
            </form>
        </PageTemplate>
    );
};

export default addjob;
