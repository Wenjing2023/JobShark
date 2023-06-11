"use client";
import {
  ReactNode,
  useState,
  useRef,
  useEffect,
  MouseEvent,
  RefObject,
} from "react";
import TextInput from "../atoms/textinput";
import Icon from "../atoms/icon";
import SideMenu from "./sidemenu";
import IconKind from "../enums/iconkind";
import SearchForm from "./searchform";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const searchFormRef = useRef(null);

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  const handleToggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleSearchForm = () => {
    setIsSearchFormOpen(!isSearchFormOpen);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       isSearchFormOpen &&
  //       searchFormRef.current &&
  //       !searchFormRef.current.contains(event.target as Node)
  //     ) {
  //       console.log("Click outside");
  //       setIsSearchFormOpen(false);
  //     }
  //     console.log("Click inside");
  //   };

  //   if (typeof window !== "undefined") {
  //     document.addEventListener("mousedown", handleClickOutside as any);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside as any);
  //     };
  //   }
  // }, []);

  return (
    <>
      <div ref={searchFormRef} className="flex space-x-10 p-2 m-auto">
        {isSearchFormOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-20">
            <SearchForm />
          </div>
        )}
        <SideMenu isMenuOpen={isMenuOpen} />

        <Icon iconKind={IconKind.Menu} onClick={handleToggleSideMenu} />
        <TextInput
          className="outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
          placeholder="Search"
        />
        <Icon iconKind={IconKind.Search} onClick={handleToggleSearchForm} />
        <Icon iconKind={IconKind.Add} onClick={() => {}} />
        <Icon iconKind={IconKind.Logout} onClick={handleLogout} />
      </div>
    </>
  );
};

export default Banner;
