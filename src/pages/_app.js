import "@/styles/globals.css";
import { Magnolia } from "@/fonts/fonts";

export default function App({ Component, pageProps }) {
  return (
    <main className={Magnolia.variable}>
      <Component {...pageProps} />
    </main>
  );
}
