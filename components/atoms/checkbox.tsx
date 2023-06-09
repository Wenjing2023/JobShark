interface CheckBoxProps {
    checkboxText:string
}

const CheckBox: React.FC<CheckBoxProps> = ({checkboxText}) => {
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-jaws-blue bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"

      />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-jaws-black"
        >
         {checkboxText}
        </label>
      </div>
    </>
  );
};

export default CheckBox;
