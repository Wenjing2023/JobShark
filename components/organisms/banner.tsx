"use client";
import { ReactNode, useState } from "react";
import TextInput from "../atoms/textinput";
import Icon from "../atoms/icon";
import SideMenu from "./sidemenu";
import IconKind from "../enums/iconkind";
import SearchForm from "./searchform";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  const handleToggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleSearchForm = () => {
    setIsSearchFormOpen(!isSearchFormOpen);
  };

  return (
    <>
      <div className="flex space-x-10 p-2 m-auto">
        
        <SideMenu isMenuOpen={isMenuOpen} />
        <SearchForm isSearchFormOpen={isSearchFormOpen}/>
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
