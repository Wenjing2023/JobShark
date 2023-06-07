import React, { useState } from 'react';

interface toggleProps {
    filterText: String;
}


const Toggle:React.FC<toggleProps> = ({filterText}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" checked={isChecked} onChange={handleToggle} />
        <div className={`w-11 h-6 bg-jaws-light-blue peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-jaws-light-blue dark:peer-focus:ring-blue-300 rounded-full 
          ${isChecked ? 'peer-checked:after:translate-x-full peer-checked:after:border-white' : ''}
          after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 
          ${isChecked ? 'peer-checked:bg-jaws-blue' : ''}`}></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{filterText}</span>
      </label>
    </>
  );
};

export default Toggle;
