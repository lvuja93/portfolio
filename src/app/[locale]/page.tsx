import TwoLanes from '@/components/sections/TwoLanes';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Experience from '@/components/sections/Experience';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/home/Hero';

export default function Page() {
  return (
    <>
      <Hero />
      <Experience />
      <FeaturedProjects />

      <About />
      <Contact />
    </>
  );
}
