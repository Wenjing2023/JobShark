"use client";
import * as React from "react";
import PageTemplate from "../components/templates/pagetemplate";
import Schedule from "../components/organisms/schedule";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Title from "@/components/atoms/title";
import { useState, useEffect, useRef } from 'react';


const HomePage = () => {
  const { user, error, isLoading } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const hideDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoggedIn(!!user);
    console.log(user);
    const timeoutId = setTimeout(() => {
      if (hideDivRef.current) {
        hideDivRef.current.style.opacity = "0";
        hideDivRef.current.style.transition = "opacity 1.5s";
      }
    }, 1500);
    return () => clearTimeout(timeoutId);
  }, [user]);

  
  return (
    <>
      <PageTemplate>
        {isLoggedIn ? (
            <h3 className="text-center text-jaws-blue font-bold" ref={hideDivRef}  >
              Welcome to JobShark, {user?.name} 
            </h3>
        ) : (
          <a href="/api/auth/login"></a>
        )}
        <Title text="My Schedule" />
        {/* <SearchResults job={job}/> */}
        <Schedule />
      </PageTemplate>
    </>
  );
};

export default HomePage;

export const getServerSideProps = withPageAuthRequired();
