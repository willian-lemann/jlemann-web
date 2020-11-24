import React from 'react';
import { AppProps } from 'next/app';

import Head from 'next/head';

import "../../src/styles/global.scss";
import { ThemeProvider } from '../store/context/ThemeProvider';


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta property="og:title" content="Jlemann" key="title" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
