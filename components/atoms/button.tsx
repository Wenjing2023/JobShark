interface buttonProps {
  buttonText: String;
}

const Button: React.FC<buttonProps> = ({ buttonText }) => {
  return (
    <>
      <button className="bg-jaws-blue text-jaws-white rounded-lg hover:bg-jaws-light-blue p-2 px-5">
        {buttonText}
      </button>
    </>
  );
};

export default Button;
