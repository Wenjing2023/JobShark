import * as React from "react";
import { useState } from "react";
import SearchLink from "../Molecules/SearchLink";
import Head from "next/head";
import BurgerMenu from "../Molecules/BurgerMenu";
import PageTemplate from "../Templates/PageTemplate";
import Schedule from "../Organisms/Schedule";
import Button from "../Atoms/Button";

const HomePage = () => {
  return (
    <>
      <PageTemplate>
      
        <div className="container mx-auto"></div>
        <Schedule />
        <Button buttonText="click me"/>
      </PageTemplate>
    </>
  );
};

export default HomePage;
