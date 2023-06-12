export const saveJob = async (job: Object) => {
    const targetUrl = "http://localhost:8080/jobs";

    return fetch(targetUrl, {
        method: "POST",
        headers: {
            Origin: "http://localhost:3000",
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(
                "user:fc88722b-22bd-4014-882e-042757f37307"
            )}`,
        },
        body: JSON.stringify({
            user_id: 1,
        }),
    })
        .then((response) => response.json())
        .catch((error) => console.error("Error fetching jobs:", error));
};
