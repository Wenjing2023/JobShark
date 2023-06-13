type TitleProps = {
  text: String;
};
const Title = ({ text }: TitleProps) => {
  return (
    <h2 className="text-jaws-black text-xl text-center mt-4 font-bold"> {text}</h2>
  );
};

export default Title;
