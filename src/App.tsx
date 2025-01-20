import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import Portfolio from "./components/Portofolio";
import Pricing from "./components/Pricing";
import Features from "./components/Feature";
import FAQ from "./components/FAQ";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Pricing />
        <Features />
        <FAQ />
        <Testimony />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
