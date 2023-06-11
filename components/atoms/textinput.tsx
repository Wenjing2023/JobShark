import { useState } from "react";

interface TextInputProps {
    placeholder: string,
    className: string
}

const TextInput = ({ placeholder,className }: TextInputProps) => {
    // const [input, setInput] = useState('')

    return (
        <>
            <input
                type="text"
                className={className}
                // "flex-grow outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
                placeholder={placeholder}
                // value = {input}
                // onChange={e => setInput(e.target.value)}
            ></input>
        </>
    );
};

export default TextInput;
