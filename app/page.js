import Head from 'next/head'
import Link from 'next/link'
import Image from "next/image";
import Hero from "./Hero";
import Projects from "./projects/page";

export default function Home() {
  return (
    <>
      <Head>
      <meta name="description" content="My awesome Next.js app" />
        <link rel="stylesheet" href="https://use.typekit.net/qkm8iol.css"/>
      </Head>
      <main>
        <Hero />
        <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/projects"
            rel="noopener noreferrer"
          >
            See projects →
          </Link>
      </main>
    </>
  );
}
