function initialState(args: {
    error?: any;
    isLoading?: boolean;
    response?: any;
}) {
    return {
        response: null,
        error: null,
        isLoading: true,
        ...args,
    };
}

const useApi = async (
    url: RequestInfo,
    options = {}
): Promise<{
    error: unknown;
    isLoading: boolean;
    response: any;
}> => {
    const fetchData = async () => {
        try {
            const res = await fetch(url, {
                ...options,
            });

            if (res.status >= 400) {
                return initialState({
                    error: await res.json(),
                    isLoading: false,
                });
            } else {
                return initialState({
                    response: await res.json(),
                    isLoading: false,
                });
            }
        } catch (error: any) {
            return initialState({
                error: {
                    error: error.message,
                },
                isLoading: false,
            });
        }
    };
    const data = await fetchData();
    return data;
};

export default useApi;
