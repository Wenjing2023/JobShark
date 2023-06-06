
interface TitleProps{
    text: String;
}
const Title:React.FC<TitleProps> = ({text}) => {
    return ( <>
    <h2 className='text-jaws-black text-sm '> {text}</h2>
    </> );
}
 
export default Title;