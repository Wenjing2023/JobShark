import PageTemplate from "@/components/templates/pagetemplate";
import MyTabs from "@/components/organisms/mytabs";
import Title from "@/components/atoms/title";

const MyJobs = () => {
    return ( 
        <>

        <PageTemplate>
        <Title text="My Jobs"/>
            <MyTabs/>
        </PageTemplate>
        </>
     );
}
 
export default MyJobs;