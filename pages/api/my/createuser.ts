import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function createUser(req, res) {
    try {
        const { accessToken } = await getAccessToken(req, res);

        console.log(req.body)

        const body = JSON.stringify(req.body);
        console.log(body);

        const response = await fetch(process.env.BACKEND_BASE_URL+"users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: body,
        });

        const jobs = await response.json();
        res.status(response.status || 200).json(jobs);
    } catch (error: any) {
        console.error(error);
        res.status(error.status || 500).json({
            code: error.code,
            error: error.message,
        });
    }
});