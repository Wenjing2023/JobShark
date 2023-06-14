import * as React from "react";
import PageTemplate from "../components/templates/pagetemplate";
import Schedule from "../components/organisms/schedule";
import dynamic from "next/dynamic";
import { useUser } from "@auth0/nextjs-auth0/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Title from "@/components/atoms/title";
import { useState, useEffect, useRef } from "react";
import SearchResults from "./searchresults";
import getApi from "@/services/getApi";
import postApi from "@/services/postApi";

const HomePage = () => {
    const { user } = useUser();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [response, setResponse] = useState(null);

    // const hideDivRef = useRef<HTMLDivElement>(null);
    console.log("user", user);

    useEffect(() => {
        console.log("index.tsx: useEffect[user]");
        const fetchData = async () => {
            const { response } = await getApi("api/my/getuser", {
                headers: { sub: user?.sub },
            });
            setResponse(response);
        };

        setIsLoggedIn(!!user);
        if(user) {
            console.log("fetching user")
            fetchData();
        }
        

        // const timeoutId = setTimeout(() => {
        //     if (hideDivRef.current) {
        //         hideDivRef.current.style.opacity = "0";
        //         hideDivRef.current.style.transition = "opacity 1.5s";
        //     }
        // }, 2000);
        // return () => clearTimeout(timeoutId);
    }, [user]);

    useEffect(() => {
        console.log("index.tsx: useEffect[response]");
        if (!response && user) {
            console.log("in if");
            const userToPost = JSON.stringify({
                sub: user?.sub,
                email: user?.email,
                display_name: user?.name,
                location: null,
                industry: null,
            });
            console.log("userToPost", userToPost)
            postApi("api/my/createuser", { body: userToPost });
        } else {
            console.log("response", response);
        }
    }, [response]);

    return (
        <>
            <PageTemplate>
                {/* {isLoggedIn ? (
                    <h3
                        className="text-center text-jaws-blue font-bold"
                        ref={hideDivRef}
                    >
                        Welcome to JobShark, {user?.name}
                    </h3>
                ) : (
                    <></>
                )} */}
                <Title text="My Schedule" />
                {/* <SearchResults job={job}/> */}
                <Schedule />
            </PageTemplate>
        </>
    );
};

export default HomePage;

export const getServerSideProps = withPageAuthRequired();
