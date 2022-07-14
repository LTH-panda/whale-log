import 'commons/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {Reset} from 'styled-reset';
import {wrapper} from '../store';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>title</title>
      </Head>
      <Reset />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
