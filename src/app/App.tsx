import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Certifications } from "./components/Certifications";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="w-full min-h-screen font-[Plus_Jakarta_Sans] antialiased">
      <Navbar />
      <Hero />
      {/* <About />
      <Projects />
      <Services />
      <Certifications />
      <ExperienceEducation />
      <Testimonials /> 
      <Contact />
      <Footer /> */}
       <About />
      <Projects />
      <ExperienceEducation />
      <Skills />
      <Certifications />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}