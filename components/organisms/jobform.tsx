import Icon from "../atoms/icon";
import TextInput from "../atoms/textinput";
import IconKind from "../enums/iconkind";

interface JobFormProps {
  handleToggleJobForm: () => void;
}
const JobForm = ({ handleToggleJobForm }: JobFormProps) => {
  return (
    <>
      <div className="bg-jaws-white p-4 md:p-8">
        <div className="mb-4 md:flex md:justify-between md:space-x-4 md:mb-8">
          <div className="flex items-center space-x-2 mb-2 md:mb-0">
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Company:
            </label>
            <TextInput
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label
              htmlFor="email-address-icon"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Job Title:
            </label>
            <TextInput
              placeholder=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <Icon iconKind={IconKind.Close} onClick={handleToggleJobForm} />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-bold text-gray-900 dark:text-white"
            >
              Notes:
            </label>
            <textarea
              id="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobForm;
