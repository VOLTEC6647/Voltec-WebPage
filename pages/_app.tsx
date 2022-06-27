import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AnimateSharedLayout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;
