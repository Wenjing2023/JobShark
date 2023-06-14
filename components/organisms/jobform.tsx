import { FormEvent, useState } from "react";
import Icon from "../atoms/icon";
import IconKind from "../enums/iconkind";

interface JobFormProps {
  handleToggleJobForm: () => void;
}

const JobForm = ({ handleToggleJobForm }: JobFormProps) => {
  const [state, setState] = useState<any>({
    companyname: "",
    jobtitle: "",
    notes: "",
  });

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: (typeof state)[keyof typeof state] = event.target.value;
    setState({ ...state, [event.target.id]: value });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  // console.log("state in jobform", state);
  return (
    <>
      <div className="  bg-jaws-white p-8 m-8 md:p-8">
        <form
          className="flex flex-col mb-4 md:flex md:justify-between md:space-x-4 md:mb-8"
          onSubmit={onSubmit}
        >
          <div className="flex items-center space-x-2 m-5 mb-2 md:mb-0">
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Company Name:
            </label>
            <input
              id="companyname"
              onChange={onFieldChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Job Title:
            </label>
            <input
              id="jobtitle"
              onChange={onFieldChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <Icon iconKind={IconKind.Close} onClick={handleToggleJobForm} />
          </div>

          <div className="flex items-center space-x-2 m-5 mb-2 md:mb-0">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Notes:
            </label>
            <input
              id="notes"
              onChange={onFieldChange}
              className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <button
              className="bg-jaws-blue text-jaws-white font-xs rounded-lg hover:bg-jaws-light-blue float-right m-5 w-20 px-1 py-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobForm;
