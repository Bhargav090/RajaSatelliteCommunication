import React from 'react'
import Navbar from "./Navbar";
import Start from "./Start";
import About from "./About";
import Place from './Place';
import Contact from './Contact';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Start />
      <About showNavbar={false} />
      <Place />
      <Contact showNavbar={false} />
    </div>
  );
}
