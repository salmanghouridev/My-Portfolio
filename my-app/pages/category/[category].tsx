import React from "react";
import Head from "next/head";
import Tabs from "../../components/Tabs";

const category = () => {

  const formateCategory = () => {
      return 'Test Category'
  }
  return (
    <>
      <Head>
        <title>Coder's Blog {formateCategory()}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Tabs categories={[]}/>

    </>
  );
};

export default category;

// export const getServerSideProps: GetServerSideProps = async ({ query }) => {


// }
