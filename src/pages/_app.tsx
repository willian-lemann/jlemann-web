import React from 'react';

import "../../src/styles/global.scss";

import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Component {...pageProps} />
  );
};

export default App;
