"use client"
import { ReactNode, useState } from "react";
import TextInput from "../atoms/textinput";
import Icon from "../atoms/icon";
import SideMenu from "./sidemenu";
import IconKind from "@/app/iconkind";



const Banner = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleSideMenu = () => {
    console.log("called handleToggleSideMenu")
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <SideMenu isMenuOpen={isMenuOpen}/>
      <Icon iconKind={IconKind.Menu} onClick={handleToggleSideMenu} />
      <Icon iconKind={IconKind.Search} onClick={() => {}} />
      <Icon iconKind={IconKind.Add} onClick={() => {}} />
      {/* <Icon iconKind={IconKind.Save} />
    <Icon iconKind={IconKind.Saved} /> */}

      <TextInput placeholder="Search" />

    </>
  );
};

export default Banner;
