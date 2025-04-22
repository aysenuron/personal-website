import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header';
import Hero from "./components/Hero";
import SelectedWorks from './components/SelectedWorks';
import Playground from './components/Playground';
import AboutMe from './components/AboutMe';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="My awesome Next.js app" />
        <link rel="stylesheet" href="https://use.typekit.net/qkm8iol.css" />
      </Head>
      <Header />
      <main>
        <Hero />
        <SelectedWorks />
        <Playground />
        <AboutMe />
      </main>
      <CallToAction />
    </>
  );
}
