import Link from "next/link";

interface SideMenuProps {
  isMenuOpen: boolean;
}

const SideMenu = ({ isMenuOpen }: SideMenuProps) => {
  return (
    <>
      <aside
        className={`h-screen w-64 fixed top-20 left-0 transition-transform ${
          isMenuOpen ? "translate-x-20" : "-translate-x-full"
        }`}
      >
       
          <ul>
            <li>
              <Link href="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <p>Profile</p>
              </Link>
            </li>
            <li>
              <Link href="/myjobs">
                <p>Jobs</p>
              </Link>
            </li>
          </ul>
    
      </aside>
    </>
  );
};

export default SideMenu;
