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
import Link from "next/link";
import JobForm from "./jobform";

const Banner = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFormOpen, setIsSearchFormOpen] = useState(false);
  const [isJobFormOpen, setIsJobFormOpen] = useState(false);

  const handleLogout = () => {
    window.location.href = "/api/auth/logout";
  };

  const handleToggleSideMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleToggleSearchForm = () => {
    setIsSearchFormOpen(!isSearchFormOpen);
  };
  const handleToggleJobForm = () => {
    setIsJobFormOpen(!isJobFormOpen);
  };

  return (
    <>
      <nav className="flex p-4 m-auto w-full sticky top-0  mb-7 items-center justify-center h-10">

        {isSearchFormOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-20">
            <SearchForm handleToggleSearchForm={handleToggleSearchForm} />
          </div>
        )}
        {isJobFormOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-80 flex items-center justify-center z-20">
            <JobForm handleToggleJobForm={handleToggleJobForm} />
          </div>
        )}

        <SideMenu isMenuOpen={isMenuOpen} />
        <Icon iconKind={IconKind.Menu} onClick={handleToggleSideMenu} />
        <TextInput
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-7 m-5 "
          placeholder="Search"
        />
        <Icon iconKind={IconKind.Search} onClick={handleToggleSearchForm} />
        <Icon iconKind={IconKind.Add} onClick={handleToggleJobForm} />
        <Icon iconKind={IconKind.Logout} onClick={handleLogout} />
      </nav>
    </>
  );
};

export default Banner;
