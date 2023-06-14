import { useUser } from "@auth0/nextjs-auth0/client";
import Banner from "../organisms/banner";
import Footer from "../organisms/footer";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";

interface Props {
    children: any;
}

const PageTemplate: React.FC<Props> = ({ children }) => {
    const { user } = useUser();

    

    return (
        <>
            <Head>
                <title>JobShark</title>
                <meta
                    name="description"
                    content="A job search & tracker app for users"
                />
                <link rel="icon" href="/icon.png" sizes="any" />
                
            </Head>
            <div className="flex flex-col min-h-screen">
                <Banner user = {user}/>
                <main className="flex-1 overflow-y-auto max-w-screen-sm mx-auto overscroll-auto md:overscroll-contain">
                    <div className="flex justify-center">
                        <div className="max-h-[calc(100vh-10rem)]  px-4 ">
                            {" "}
                            {children}
                        </div>{" "}
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default PageTemplate;
