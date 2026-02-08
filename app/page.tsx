import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Talents from "@/components/Talents";
import Play from "@/components/Play";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />

      <Section id="about" title="About">
        <p className="max-w-2xl text-lg opacity-80">
          We are a creative studio specializing in animation,
          design, and immersive digital experiences.
        </p>
      </Section>

      <Section id="projects" title="Projects">
        <Projects />
      </Section>

      <Section id="play" title="Play">
        <Play />
      </Section>

      <Section id="talents" title="Talents">
        <Talents />
      </Section>

      <Section id="contact" title="Contact">
        <ContactForm />
      </Section>
    </>
  );
}
