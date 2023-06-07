interface TextInputProps {
    placeholder: string;
}

const TextInput = ({ placeholder }: TextInputProps) => {
    return (
        <>
            <input
                type="text"
                className="outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
                placeholder={placeholder}
            ></input>
        </>
    );
};

export default TextInput;
