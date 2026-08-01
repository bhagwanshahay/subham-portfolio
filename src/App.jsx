import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import FeaturedWork from "./sections/FeaturedWork/FeaturedWork";
import Services from "./sections/Services/Services";
import Clients from "./sections/Clients/Clients";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedWork />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;