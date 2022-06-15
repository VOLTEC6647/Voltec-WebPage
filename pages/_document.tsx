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
        <title>VOLTEC Robotics 6647</title>
        <meta
          name="description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />

        <meta itemProp="name" content="VOLTEC Robotics 6647" />
        <meta
          itemProp="description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta itemProp="image" content="https://voltec.medina.dev/voltec.png" />

        <meta property="og:url" content="https://voltec.medina.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="VOLTEC Robotics 6647" />
        <meta
          property="og:description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta
          property="og:image"
          content="https://voltec.medina.dev/voltec.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VOLTEC Robotics 6647" />
        <meta
          name="twitter:description"
          content="⚡️MTY, México. Equipo Representativo de Robótica de @prepatec.egl"
        />
        <meta
          name="twitter:image"
          content="https://voltec.medina.dev/voltec.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
