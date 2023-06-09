'use client';
import * as React from "react";
import PageTemplate from "../components/templates/pagetemplate";
import Schedule from "../components/organisms/schedule";
import Button from "../components/atoms/button";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import MyJobs from "./myjobs";



const Toggle = dynamic(() => import('../components/atoms/toggle'), { ssr:false });

interface User {
  name: string;
}

const HomePage = () => {
  const { user, error, isLoading } = useUser();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    setIsLoggedIn(!!user);
  }, [user]);

  const handleLogout = () => {
    window.location.href = '/api/auth/logout';
  };

  console.log(user);



  return (
    <>
      <PageTemplate>
      
        <div className="container mx-auto"></div>

        <Button buttonText="click me"/>
        <Toggle filterText="toggle"/>
        {isLoggedIn? (
          <>
          <h3>Welcome {user?.name}!</h3>
          <button onClick={handleLogout}>Logout</button>
          </>
        ): (
          <a href="/api/auth/login">Login</a>
        )}
        <Schedule />  
      </PageTemplate>
    </>
  );
};

export default HomePage;

export const getServerSideProps = withPageAuthRequired();
