'use client';
import * as React from "react";
import PageTemplate from "../Templates/PageTemplate";
import Schedule from "../Organisms/Schedule";
import Button from "../Atoms/Button";
import dynamic from "next/dynamic";

const Toggle = dynamic(() => import('../Atoms/Toggle'), { ssr:false });

const HomePage = () => {
  return (
    <>
      <PageTemplate>
      
        <div className="container mx-auto"></div>
        <Schedule />
        <Button buttonText="click me"/>
        <Toggle filterText="toggle"/>
      </PageTemplate>
    </>
  );
};

export default HomePage;
