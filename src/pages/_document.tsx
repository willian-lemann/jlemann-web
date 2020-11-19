import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document'

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const initialProps = await Document.getInitialProps(ctx)
      return { ...initialProps }
   }

   render() {
      return (
         <Html lang='pt'>
            <title>Jlemann</title>
            <Head>
               <meta charSet="utf-8" />
               <meta name="viewport" content="initial-scale=1.0, width=device-width" />
               <meta property="og:title" content="Jlemann" key="title" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      )
   }
}

export default MyDocument