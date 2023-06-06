import { ReactNode } from "react";
import TextInput from "../Atoms/TextInput";
import Icon from "../Atoms/Icon";
import IconKind from "../IconKind";

const Banner = () => {
    return ( <>
    <Icon iconKind={IconKind.Menu} />
    <Icon iconKind={IconKind.Search} />
    <Icon iconKind={IconKind.Add} />
    <Icon iconKind={IconKind.Save} />
    <Icon iconKind={IconKind.Saved} />

    <TextInput placeholder="Search"/>
    </> );
}
 
export default Banner;