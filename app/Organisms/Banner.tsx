"use client"
import { ReactNode, useState } from "react";
import TextInput from "../Atoms/TextInput";
import Icon from "../Atoms/Icon";
import IconKind from "../IconKind";
import SideMenu from "./SideMenu";

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
