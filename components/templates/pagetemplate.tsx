import TextInput from "../atoms/textinput";
import Banner from "../organisms/banner";
import Footer from "../organisms/footer";
import Head from "next/head";
import "tailwindcss/tailwind.css";
import MyJobs from "@/pages/myjobs";

interface Props {
  children: any;
}

const PageTemplate: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>JobShark</title>
        <meta
          name="description"
          content="A job search & tracker app for users"
        />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header className=" w-full sticky top-0 justify-between items-center mb-7 h-10">
          {/*  */}
          <Banner />
        </header>
        <main className="flex-1 overflow-y-auto max-w-screen-sm mx-auto overscroll-auto md:overscroll-contain">
          <div className="flex justify-center">
            <div className="max-h-[calc(100vh-10rem)]  px-4 "> {children}</div>{" "}
          </div>
        </main>

        {/* <Footer /> */}
        <footer>
          <div className="bg-jaws-white p-7 text-center h-12 footer-container fixed bottom-0 left-0 w-full py-4 md:py-2">
            <span>© 2023 Copyright: JAWS</span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PageTemplate;
