import GlobalStyle from "styles/GlobalStyle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStyle>
      <Head>
        <title>HBD</title>
      </Head>
      <Component {...pageProps} />
    </GlobalStyle>
  );
}

export default MyApp;
