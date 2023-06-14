import * as React from "react";
import { useState } from "react";
import CheckBox from "../atoms/checkbox";
import Icon from "../atoms/icon";
import IconKind from "../types/enums/iconkind";
import MenuSelect from "../molecules/menuselect";
import Link from "next/link";
import TextInput from "../atoms/textinput";

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
        <div className="bg-jaws-white  md:p-8 p-5  m-5">
            <form onSubmit={onSubmit} className="m-3 p-4">
                <Icon
                    iconKind={IconKind.Close}
                    onClick={handleToggleSearchForm}
                />

                <TextInput
                    placeholder="Job title"
                    id="keywords"
                    onChange={onFieldChange}
                />
                <TextInput
                    placeholder="location"
                    id="locationName"
                    onChange={onFieldChange}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 mb-4 md:mb-8 p-8">
                    <MenuSelect
                        labelText="Full-time/part-time"
                        options={["full-time", "part-time"]}
                    />
                    <MenuSelect
                        labelText="Permanent/Contract/Temp"
                        options={["permanent", "temporary", "contract"]}
                    />
                    <MenuSelect
                        labelText="Minimum Salary:"
                        options={["£20,000", "£30,000", "£40,000", "£50,000"]}
                    />
                </div>
                <CheckBox checkboxText="Work from home" />
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
