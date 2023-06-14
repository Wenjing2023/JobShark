import Link from "next/link";

interface SideMenuProps {
  isMenuOpen: boolean;
}

const SideMenu = ({ isMenuOpen }: SideMenuProps) => {
  return (
    <div className="">
      <aside
        className={`h-screen fixed w-35 top-16 left-0 transition-transform ${
          isMenuOpen ? "translate-x-70" : "-translate-x-full"
        }`}
      >
        <div className="hs-accordion-content w-full overflow-y-auto transition-[height] duration-300 bg-jaws-blue px-20 py-3">
          <ul className="py-1 px-6 flex flex-wrap lg:flex-col">
            <li className="flex-1 gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-jaws-white rounded-md hover:bg-blue-900/20">
              <Link href="/">
                <p className="flex text-sm font-bold">Home</p>
              </Link>
            </li>
            <li className="flex-1 gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-jaws-white rounded-md hover:bg-blue-900/20">
              <Link href="/profile">
                <p className="flex text-sm font-bold">Profile</p>
              </Link>
            </li>
            <li className="flex-1 gap-x-3.5 py-2 px-2.5 hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent text-jaws-white rounded-md hover:bg-blue-900/20">
              <Link href="/myjobs">
                <p className="flex text-sm font-bold">Jobs</p>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <style jsx>{`
        @media (min-width: 768px) {
          div {
            min-height: 100vh;
          }

          p { font-size: 1.2rem; 
          }


        }

        @media (max-width: 767px) {
          ul {
            flex-direction: row;
            flex-wrap: nowrap;
          }
        }
      `}</style>
      </div>
  );
};

export default SideMenu;


