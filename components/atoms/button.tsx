interface buttonProps {
    buttonText: String;
    onClick: () => void;
}

const Button:React.FC<buttonProps> = ({buttonText, onClick}) => {
    return ( 
        <>
        <button 
        onClick={onClick}
        className="bg-jaws-blue text-jaws-white rounded-lg hover:bg-jaws-light-blue p-2 px-5">{buttonText}</button>
        </>

        
     );
}
 
export default Button;