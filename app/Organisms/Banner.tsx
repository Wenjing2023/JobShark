import { ReactNode } from "react";
import BurgerMenu from "../Molecules/BurgerMenu";
import TextInput from "../Atoms/TextInput";

const Banner = () => {
    return ( <>
    <BurgerMenu />
    <TextInput placeholder="Search"/>
    </> );
}
 
export default Banner;