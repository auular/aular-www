import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Auular</title>
        {/* <link rel="icon" href="/icons/auular.png" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
