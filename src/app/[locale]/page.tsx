import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Thesis from '@/components/sections/Thesis';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/home/Hero';

export default function Page() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Thesis />
      <Contact />
    </>
  );
}
