import * as React from "react";
import { createContext, useState, useEffect } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useAuth0 } from "@auth0/auth0-react";

const TokenContext = createContext('token');




export default function App({ Component, pageProps }) {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
        useAuth0();

    const {token, setToken} = useState("");

    const getToken = async () => {
        const accessToken = await getAccessTokenSilently({
            authorizationParams: {
                audience: "https://dev-jaws.uk.auth0.com/api/v2/",
                scope: "read:users",
            },
        });
        setToken(accessToken);
    };

    useEffect(() => {
        getToken();
    }, []);

    return (
        <UserProvider>
            <TokenContext.Provider value={token}>
                <Component {...pageProps} />
            </TokenContext.Provider>
        </UserProvider>
    );
}
