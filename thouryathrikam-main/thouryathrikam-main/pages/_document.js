import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
            <meta name='application-name' content='Thouryathrikam' />
            <meta name='description' content='Thouryathrikam arts fest of gecw' />
            <meta name='theme-color' content='#000000' />
            <link rel='manifest' href='/manifest.json' />

            </Head>
            <body>
               <Main />
               <div id='portal' /> 
               <NextScript />
            </body>
         </Html>
      )
   }
}