import { useState } from "react";
import Navbar from "./components/Navbar";
import styles from "./style";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Accordion from "./components/small-components/Accordion";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-white w-screen overflow-hidden">
      <div className="container mx-auto">
        <Navbar />
      </div>

      <div className="container mx-auto">
        <Hero />
      </div>

      <div className="container mx-auto">
        <Features />
      </div>

      <div className="container mx-auto">
        <Services />
      </div>

      <div className="container mx-auto">
        <Testimonials />
      </div>

      <div className="container mx-auto">
        <FAQ />
      </div>

      <div className="mx-auto bg-gray-50 w-screen">
        <Footer />
      </div>
    </div>
  );
}

export default App;
