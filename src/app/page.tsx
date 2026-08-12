import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Careers from "@/components/sections/Careers";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <SmoothScroll />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
