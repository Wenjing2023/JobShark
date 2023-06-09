interface buttonProps {
    buttonText: String;
    type: "button"|"submit";
}

const Button:React.FC<buttonProps> = ({buttonText, type="button"}) => {
    return ( 
        <>
        <button type={type} className="bg-jaws-blue text-jaws-white rounded-lg hover:bg-jaws-light-blue">{buttonText}</button>
        </>
     );
}
 
export default Button;