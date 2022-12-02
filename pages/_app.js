import "../styles/globals.css";

import Head from "next/head";
import NextProgress from "next-progress";
import { ContextProvider } from "../context/AppContext";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Lorem Ipsum..." />
        <title>Example</title>
      </Head>
      <NextProgress
        delay={300}
        options={{ showSpinner: true }}
        color="rgb(5, 30, 52)"
        height="4px"
      />
      <>
        <Component {...pageProps} />
      </>
    </ContextProvider>
  );
}
