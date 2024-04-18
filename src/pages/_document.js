import { Html, Head, Main, NextScript } from "next/document";
import { Magnolia } from "../fonts/fonts";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={Magnolia.variable}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
