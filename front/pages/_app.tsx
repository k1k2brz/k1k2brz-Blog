import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

const App = ({ Component }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>My Blog</title>
      </Head>
      <Component />
    </>
  );
};

export default App;
