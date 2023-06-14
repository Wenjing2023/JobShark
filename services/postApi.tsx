import * as React from "react";

const postApi = (
    url: RequestInfo,
    options = {}
) => {

    
        const fetchData = async () => {
                const res = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    ...options,
                });
        };
        fetchData();
    
};

export default postApi;
