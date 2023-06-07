
type TitleProps = {
    text: String;
}
const Title = ({text}:TitleProps) => {
    return ( <>
    <h2 className='text-jaws-black text-sm '> {text}</h2>
    </> );
}
 
export default Title;