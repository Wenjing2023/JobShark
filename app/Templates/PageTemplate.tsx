import Banner from "../Organisms/Banner";
import Footer from "../Organisms/Footer";
import Head from "next/head";

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
      <header className="flex justify-between items-center mb-4">
        <Banner />
      </header>
      {children}
      <Footer />
    </>
  );
};

export default PageTemplate;
