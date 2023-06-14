interface buttonProps {
    buttonText: string;
    type?: "button" | "submit";
    className?: string;
}

const Button: React.FC<buttonProps> = ({
    buttonText,
    type = "button",
    className = "bg-jaws-blue text-jaws-white rounded-lg hover:bg-jaws-light-blue px-4 py-2",
}) => {
    return (
        <>
            <button type={type} className={className}>
                {buttonText}
            </button>
        </>
    );
};

export default Button;
