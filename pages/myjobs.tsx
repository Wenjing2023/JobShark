
import MyTabs from "@/components/organisms/mytabs";

const MyJobs = () => {
    return ( 
        <>
        <h1 className='bg-jaws-blue'>Here are my jobs, woo!</h1>
        {/* <Tabs>

            <Tab title="apply">Job 1</Tab>

            <Tab title="applied">Job 2</Tab>
            <Tab title="interview">Job 3</Tab>
            <Tab title="result">Job 4</Tab>

        </Tabs> */}
        <div className='bg-jaws-blue text-jaws-blue h-screen'>
            <MyTabs/>
        </div>


        </>
     );
}
 
export default MyJobs;