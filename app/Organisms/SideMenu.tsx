import Title from "../Atoms/Title";
interface SideMenuProps{
    isMenuOpen: boolean
}

const SideMenu = ({isMenuOpen}: SideMenuProps) => {
    return ( <>
   <aside className={`h-screen w-64 fixed top-20 left-0 transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
    <Title text="Menu" />
    <nav >
        <ul>
            <li>
                <p>Home</p>
            </li>
            <li>
                <p>Profile</p>
            </li>
            <li>
                <p>Jobs</p>
            </li>
        </ul>
    </nav>
   </aside>
    </> );
}
 
export default SideMenu;