import { ReactLenis } from 'lenis/dist/lenis-react'
import Header from './components/Header';
import Hero from "./components/Hero";
import SelectedWorks from './components/SelectedWorks';
import Playground from './components/Playground';
import AboutMe from './components/AboutMe';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <>
    <ReactLenis root options={{
      lerp: 0.02,
    }}>
      <main className="bg-gray-100">
        <Hero />
        <SelectedWorks />
        <Playground />
        <AboutMe />
      </main>
      <CallToAction />
    </ReactLenis>
    </>
  );
}
