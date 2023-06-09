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

  const handleToggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleSearchForm = () => {
    setIsSearchFormOpen(!isSearchFormOpen);
  };

  return (
    <>
      <SideMenu isMenuOpen={isMenuOpen} />
      {isSearchFormOpen && <SearchForm />}
      <Icon iconKind={IconKind.Menu} onClick={handleToggleSideMenu} />
      <TextInput
        className="outline-none bg-white rounded-lg p-2 text-jaws-black focus:outline focus:outline-jaws-blue"
        placeholder="Search"
      />
      <Icon iconKind={IconKind.Search} onClick={handleToggleSearchForm} />
      <Icon iconKind={IconKind.Add} onClick={() => {}} />
    </>
  );
};

export default Banner;
