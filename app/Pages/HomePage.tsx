import * as React from "react";
import PageTemplate from "../Templates/PageTemplate";
import Schedule from "../Organisms/Schedule";
import Button from "../Atoms/Button";

const HomePage = () => {
  return (
    <>
      <PageTemplate>
      
        <div className="container mx-auto"></div>
        <Schedule />
        <Button buttonText="click me"/>
      </PageTemplate>
    </>
  );
};

export default HomePage;
