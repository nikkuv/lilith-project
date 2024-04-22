import Head from "next/head";
import Image from "next/image";
import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Gallery from "@/components/Gallery/Gallery";
import About from '@/components/About/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lilith</title>
        <meta name="description" content="Created by nikkuv" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        {/* <Gallery /> */}
        <About />
      </main>
    </>
  );
}
