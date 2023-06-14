interface buttonProps {
    buttonText: String;
    type?: "button"|"submit";
}

const Button:React.FC<buttonProps> = ({buttonText, type="button"}) => {
    return ( 
        <>
        <button type={type} className="bg-jaws-blue text-jaws-white rounded-lg hover:bg-jaws-light-blue px-4 py-2">{buttonText}</button>
        </>
     );
}
 
export default Button;
