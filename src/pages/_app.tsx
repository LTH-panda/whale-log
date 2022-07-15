import 'commons/styles/reset.css';
import 'commons/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Layout from 'components/templates/Layout';
import {RecoilRoot} from 'recoil';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>고래로그</title>
      </Head>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
