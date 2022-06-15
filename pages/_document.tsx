import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta name="og:image" content="/voltec.png" />
        <meta name="og:title" content="VOLTEC Robotics 6647" />
        <meta
          name="og:description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta name="og:url" content="https://voltec.medina.dev" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
