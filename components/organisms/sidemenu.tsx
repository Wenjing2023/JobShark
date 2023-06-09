import Link from "next/link";

import Title from "../atoms/title";
interface SideMenuProps {
  isMenuOpen: boolean;
}

const SideMenu = ({ isMenuOpen }: SideMenuProps) => {
  return (
    <>
      <aside
        className={`h-screen w-64 fixed top-20 left-0 transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Title text="Menu" />
        <nav>
          <ul>
            <li>
              <p>
                <Link href="/">Home</Link>
              </p>
            </li>
            <li>
              <p>
                <Link href="/profile">Profile</Link>
              </p>
            </li>
            <li>
              <Link href="/myjobs">Jobs</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default SideMenu;
