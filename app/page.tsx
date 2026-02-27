import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Play from "@/components/Play"; 
import ContactForm from "@/components/ContactForm";
import About from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Hero />

      
         <Section id="about" title="About">
        <About />
      </Section>
        <Section id="projects" title="Projects">
        <Projects />
      </Section>

   

      <Section id="play" title="Play">
        <Play />
      </Section>

     
    
  
     
    </>
  );
  
}
