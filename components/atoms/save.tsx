import IconKind from "../enums/iconkind";
import Icon from "./icon";

const Save = () => {

    const saveJob = () => {
    }

    return ( 
        <Icon iconKind={IconKind.Save} onClick={() => {saveJob()}} />
     );
}
 
export default Save;