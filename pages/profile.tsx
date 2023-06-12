import PageTemplate from "@/components/templates/pagetemplate";
import Link from "next/link";
import TextInput from "@/components/atoms/textinput";
import Button from "@/components/atoms/button";
import Title from "@/components/atoms/title";


const profile: React.FC = () => {


    return (
      <>
        <PageTemplate>
          <Title text="My Profile"/>

          <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        
          <div className="space-y-4">

        <TextInput
        className="w-full px-4 py-2 text-jaws-white bg-jaws-blue rounded-md hover:bg-jaws-light-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Name"
      />


        <TextInput
        className="w-full px-4 py-2 text-jaws-white bg-jaws-blue rounded-md hover:bg-jaws-light-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Email"
      />


        <TextInput
        className="w-full px-4 py-2 text-jaws-white bg-jaws-blue rounded-md hover:bg-jaws-light-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Location"
      />


        <TextInput
        className="w-full px-4 py-2 text-jaws-white bg-jaws-blue rounded-md hover:bg-jaws-light-blue focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Industry"
      />

        <div className="flex justify-center">
        <Button buttonText="Submit" />
   
        </div>
        </div>
        </div>
        </PageTemplate>
      </>
    );
}
 
export default profile;
