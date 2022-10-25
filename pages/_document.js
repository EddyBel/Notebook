import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <title>Notebook</title>
        <meta
          name="description"
          content="Personal notebook as a programming student."
        />
        <link rel="icon" href="icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
