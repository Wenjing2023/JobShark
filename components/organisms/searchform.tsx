import CheckBox from "../atoms/checkbox";
import Icon from "../atoms/icon";
import TextInput from "../atoms/textinput";
import IconKind from "../enums/iconkind";
import MenuSelect from "../molecules/menuselect";

interface SearchFormProps {
  isSearchFormOpen: boolean;
}

const SearchForm = ({ isSearchFormOpen }: SearchFormProps) => {
  return (
    <>
      <div
        className={`h-screen w-64 fixed top-20 left-20 transition-transform ${
          isSearchFormOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          <div className="flex justify-between ">
            <TextInput
              className="outline-none bg-white rounded-lg text-jaws-black focus:outline-jaws-blue"
              placeholder="Job title"
            />
            <Icon iconKind={IconKind.Search} onClick={() => {}} />

            <TextInput
              className="outline-none bg-white rounded-lg text-jaws-black focus:outline-jaws-blue"
              placeholder="location"
            />
            <Icon iconKind={IconKind.Location} onClick={() => {}} />
          </div>

          <div className="flex justify-between">
            <MenuSelect
              lableText="Job type:"
              option1="full-time"
              option2="part-time"
              option3="temporary"
              option4="permanate"
            />
            <MenuSelect
              lableText="Date posted:"
              option1="Last 24 hours"
              option2="Last 3 days"
              option3="Last 7 days"
              option4="Last 14 days"
            />
            <MenuSelect
              lableText="Salary estimated from:"
              option1="£20,000"
              option2="£30,000"
              option3="£40,000"
              option4="£50,000"
            />
            <CheckBox checkboxText="Work from home" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
