interface TextInputProps {
    placeholder: string,
    className: string
}

const TextInput = ({ placeholder,className }: TextInputProps) => {
    return (
        <>
            <input
                type="text"
                className={className}
                // "outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
                placeholder={placeholder}
            ></input>
        </>
    );
};

export default TextInput;
