import TextInput from "../atoms/textinput";

const JobForm = () => {
  return (
    <>
      <div className="p-2">
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
      </div>
      <div className="p-2">
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
      </div>

      <div
        className="relative mb-3"
        data-te-datepicker-init
        data-te-input-wrapper-init
      >
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-0 bg-jaws-blue px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          placeholder="Select a date"
        />
        <label
          htmlFor="floatingInput"
          className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Apply before:
        </label>
      </div>

      <div className="p-2">
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
    </>
  );
};

export default JobForm;
