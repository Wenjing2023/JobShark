import Tab from "@/components/molecules/tab";
import Tabs from "@/components/organisms/tabs";

const MyJobs = () => {
    return ( 
        <>
        <h1>Here are my jobs, woo!</h1>
        <Tabs>
            <Tab title="apply">Job 1</Tab>
            <Tab title="applied">Job 2</Tab>
            <Tab title="interview">Job 3</Tab>
            <Tab title="result">Job 4</Tab>
        </Tabs>


        </>
     );
}
 
export default MyJobs;