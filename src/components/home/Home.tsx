import Hero from './Hero';
import Sections from './Sections';
import Footer from './Footer';

export type HomeT = {
  name: string;
  role: string;
  heroLead: string;
  heroLine2: string;
  heroLine3: string;
  tagline1: string;
  tagline2: string;
  nav: { about: string; experience: string; projects: string; cv: string };
  cards: {
    about: { title: string; desc: string };
    exp: { title: string; desc: string };
    dev: { title: string; desc: string };
  };
  cta: { viewWork: string; contact: string };
  meta: { location: string; availability: string };
  placeholders: { about: string; projects: string; contact: string };
};

export default function Home({ locale, t }: { locale: string; t: HomeT }) {
  return (
    <main className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Hero locale={locale} t={t} />
      <Sections t={t} />
      <Footer t={t} />
    </main>
  );
}
