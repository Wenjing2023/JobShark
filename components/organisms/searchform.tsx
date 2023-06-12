import CheckBox from "../atoms/checkbox";
import Icon from "../atoms/icon";
import TextInput from "../atoms/textinput";
import IconKind from "../enums/iconkind";
import MenuSelect from "../molecules/menuselect";
import JobForm from "./jobform";

const SearchForm = ({  }) => {
  return (
    <div className="bg-jaws-white p-4 md:p-8">
      <div className="mb-4 md:flex md:justify-between md:space-x-4 md:mb-8">
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <TextInput
            className="flex-grow outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
            placeholder="Job title"
          />
          <Icon iconKind={IconKind.Search} onClick={() => {}} />

          <TextInput
            className="flex-grow outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
            placeholder="location"
          />
          <Icon iconKind={IconKind.Location} onClick={() => {}} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-4 md:mb-8">
        <MenuSelect
          labelText="Job type:"
          options={["full-time", "part-time", "temporary", "permanent"]}
        />
        <MenuSelect
          labelText="Date posted:"
          options={[
            "Last 24 hours",
            "Last 3 days",
            "Last 7 days",
            "Last 14 days",
          ]}
        />
        <MenuSelect
          labelText="Salary estimated from:"
          options={["£20,000", "£30,000", "£40,000", "£50,000"]}
        />
      </div>

      <div className="mb-4 md:mb-8">
        <CheckBox checkboxText="Work from home" />
      </div>

      <div className="mb-4 md:mb-8">
        <button >Close</button>
      </div>

      <JobForm />
    </div>
  );
};

export default SearchForm;
