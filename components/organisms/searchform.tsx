import * as React from "react";
import { useState } from "react";
import CheckBox from "../atoms/checkbox";
import Icon from "../atoms/icon";
import IconKind from "../types/enums/iconkind";
import MenuSelect from "../molecules/menuselect";
import Link from "next/link";

interface SearchFormProps {
  handleToggleSearchForm: () => void;
}

const SearchForm = ({ handleToggleSearchForm }: SearchFormProps) => {
  const [state, setState] = useState<any>({
    keywords: "",
    locationName: "",
  });

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: (typeof state)[keyof typeof state] = event.target.value;
    setState({ ...state, [event.target.id]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  // console.log("state in search form", state);

  return (
    <div className="bg-jaws-white p-4 md:p-8">
      <form onSubmit={onSubmit}>
        <div className="mb-4 md:flex md:justify-between md:space-x-4 md:mb-8">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <input
              type="text"
              className="flex-grow outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
              placeholder="Job title"
              id="keywords"
              onChange={onFieldChange}
              required
            />
            <Icon iconKind={IconKind.Search} onClick={() => {}} />

            <input
              className="flex-grow outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
              placeholder="location"
              type="text"
              id="locationName"
              onChange={onFieldChange}
              required
            />
            <Icon iconKind={IconKind.Location} onClick={() => {}} />
            <Icon iconKind={IconKind.Close} onClick={handleToggleSearchForm} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 mb-4 md:mb-8">
          <MenuSelect
            labelText="Full-time/part-time"
            options={["full-time", "part-time"]}
          />
          <MenuSelect
            labelText="Permanent/Contract/Temp"
            options={[
                "permanent", "temporary", "contract"
            ]}
          />
          <MenuSelect
            labelText="Minimum Salary:"
            options={["£20,000", "£30,000", "£40,000", "£50,000"]}
          />
        </div>
        <div className="mb-4 md:mb-8">
          <CheckBox checkboxText="Work from home" />
        </div>
        <Link
          href={`/searchresults?keywords=${state.keywords}&locationName=${state.locationName}`}
        >
          <button
            className="bg-jaws-blue text-jaws-white rounded-lg hover:bg-jaws-light-blue px-4 py-2 float-right"

            type="submit"
            onClick={handleToggleSearchForm}
          >
            {" "}
            submit{" "}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default SearchForm;
