import DefaultLayout from '../layouts/defaultLayout';
import Head from 'next/head';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <Head>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp
