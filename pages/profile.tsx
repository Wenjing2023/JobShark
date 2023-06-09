import PageTemplate from "@/components/templates/pagetemplate";
import Link from "next/link";
import TextInput from "@/components/atoms/textinput";
import Button from "@/components/atoms/button";
import Title from "@/components/atoms/title";


const profile: React.FC = () => {
    return (
        <PageTemplate>
          <Title text="My Profile"/>
        <div className="w-full max-w-md px-2 py-16 sm:px-0 mx-auto">
        <ul>
            <li>
        <TextInput
        className="bg-jaws-blue p-2 text-jaws-white rounded-lg hover:bg-jaws-light-blue"
        placeholder="Name"
      />
      </li>
      <li>
        <TextInput
        className="bg-jaws-blue p-2 text-jaws-white rounded-lg hover:bg-jaws-light-blue"
        placeholder="Email"
      />
      </li>
      <li>
        <TextInput
        className="bg-jaws-blue p-2 text-jaws-white rounded-lg hover:bg-jaws-light-blue"
        placeholder="Location"
      />
      </li>
      <li>
        <TextInput
        className="bg-jaws-blue p-2 text-jaws-white rounded-lg hover:bg-jaws-light-blue"
        placeholder="Industry"
      />
      </li>
        <li>
        <Button buttonText="Submit"/>
        </li>
        </ul>
        </div>
        </PageTemplate>

    );
}
 
export default profile;
