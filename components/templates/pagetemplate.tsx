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
      <div className="flex flex-col h-screen justify-between">
        <header className="flex justify-between items-center mb-4 h-10">
          {/*  */}
          <Banner />
        </header>
        <main className="mb-auto h-10 ">{children} </main>

        <Footer />
      
      </div>
    </>
  );
};

export default PageTemplate;
