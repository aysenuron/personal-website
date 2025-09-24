import { ReactLenis } from 'lenis/dist/lenis-react'
import Header from './components/Header';
import Test from './components/Test';
import Hero from "./components/Hero";
import SelectedWorks from './components/SelectedWorks';
import Playground from './components/Playground';
import AboutMe from './components/AboutMe';
import CallToAction from './components/CallToAction';

export default function Home() {
  return (
    <>
      <main>
        <Test />
      </main>
    </>
  );
}
