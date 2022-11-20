import GlobalStyle from "styles/GlobalStyle";
import Head from "next/head";
import type { AppProps } from "next/app";
function MyApp({ Component, pageProps }: AppProps) {
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
