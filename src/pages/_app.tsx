import React from "react";

import "../../src/styles/global.scss";

import { AppProps } from "next/app";
import Head from "next/head";

import { UiProvider } from "../store/context/UIProvider";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <UiProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta property="og:title" content="Jlemann" key="title" />
        </Head>
        <Component {...pageProps} />
      </UiProvider>
    </>
  );
};

export default App;
