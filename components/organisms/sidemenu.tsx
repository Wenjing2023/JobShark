import Link from "next/link";

interface SideMenuProps {
  isMenuOpen: boolean;
}

const SideMenu = ({ isMenuOpen }: SideMenuProps) => {
  return (
    <div className=" ">
      <aside
        className={`h-screen fixed  w-35  top-20 left-0 transition-transform  ${
          isMenuOpen ? "translate-x-60" : "-translate-x-full"
        }`}
      >
        <div className="hs-accordion-content w-full overflow-y-auto transition-[height] duration-300">
          <ul className="pt-2 pl-2 space-y-2">
            <li className="flex-1  gap-x-1 py-2 px-2.5  hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-jaws-blue rounded-md hover:bg-blue-900/20">
              <Link href="/">
                <p className="flex-none text-sm font-bold">
                  Home
                </p>
              </Link>
            </li>
            <li className="flex-1  gap-x-3.5 py-2 px-2.5  hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent  text-jaws-blue  rounded-md hover:bg-blue-900/20">
              <Link href="/profile">
                <p className=" text-sm font-bold ">Profile</p>
              </Link>
            </li>
            <li className="flex-1  gap-x-3.5 py-2 px-2.5  hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent  text-jaws-blue  rounded-md hover:bg-blue-900/20">
              <Link href="/myjobs">
                <p className="flex-none text-sm font-bold">Jobs</p>
              </Link>
            </li>
          </ul>
        </div>
      
      </aside>
    </div>
  );
};

export default SideMenu;
