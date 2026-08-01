import { useState } from "react";

import Loader from "./components/Loader/Loader";
import Cursor from "./components/Cursor/Cursor";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import FeaturedWork from "./sections/FeaturedWork/FeaturedWork";
import Services from "./Services/Services";
import Clients from "./sections/Clients/Clients";
import Contact from "./sections/Contact/Contact";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Cursor />

      {loading && (
        <Loader
          onComplete={() => setLoading(false)}
        />
      )}

      <Navbar />

      <main>
        <Hero />
        <About />
        <FeaturedWork />
        <Services />
        <Clients />
        <Contact />
      </main>
    </>
  );
}