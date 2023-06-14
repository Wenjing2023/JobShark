import { ChangeEventHandler, useState } from "react";

interface TextInputProps {
    placeholder?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    id?: string;
}

const TextInput = ({
    placeholder = "input",
    className = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    onChange = () => {},
    id,
}: TextInputProps) => {
    return (
        <>
            <input
                id={id}
                type="text"
                className={className}
                // "flex-grow outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
                placeholder={placeholder}
                onChange={onChange}
            ></input>
        </>
    );
};

export default TextInput;
