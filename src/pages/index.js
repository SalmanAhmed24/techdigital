import Footer from "@/components/footer";
import Header from "@/components/header";
import LetsTalk from "@/components/letsTalk";
import OurServices from "@/components/ourServices";
import Projects from "@/components/projects";
import Quote from "@/components/qoute";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src="https://kit.fontawesome.com/9b001fffca.js"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <main>
        <Header />
        <OurServices />
        <Quote />
        <Projects />
        <LetsTalk />
        <Footer />
      </main>
    </>
  );
}
