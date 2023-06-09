
type TitleProps = {
    text: String;
}
const Title = ({text}:TitleProps) => {
    return ( <>
    <h2 className='text-jaws-black text-xl text-center'> {text}</h2>
    </> );
}
 
export default Title;