import "@/styles/globals.css";
import { Mognolia } from "./fonts";

export default function App({ Component, pageProps }) {
  return (
    <main className={`${Mognolia.className}`} >
      <Component {...pageProps} />
    </main>
  );
}
