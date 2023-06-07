'use client';
import * as React from "react";
import PageTemplate from "../components/templates/pagetemplate";
import Schedule from "../components/organisms/schedule";
import Button from "../components/atoms/button";
import dynamic from "next/dynamic";
import Link from "next/link";



const Toggle = dynamic(() => import('../components/atoms/toggle'), { ssr:false });

const HomePage = () => {
  return (
    <>
      <PageTemplate>
      
        <div className="container mx-auto"></div>
        <Schedule />
        <Button buttonText="click me"/>
        <Toggle filterText="toggle"/>
        <Link href="/api/auth/login">Login</Link>
      </PageTemplate>
    </>
  );
};

export default HomePage;
