import Head from 'next/head'
import Link from 'next/link'
import Header from './components/Header';
import Hero from "./components/Hero";
import SelectedWorks from './components/SelectedWorks';
import Playground from './components/Playground';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="My awesome Next.js app" />
      </Head>
      <Header />
      <main>
        <Hero />
        <SelectedWorks />
        <Playground />
      </main>
    </>
  );
}
