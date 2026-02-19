// components/home/Home.tsx
import Hero from './Hero';
import Footer from './Footer';

export default function Home() {
  return (
    <main className="min-h-dvh bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Hero />
      {/* Footer je async server komponenta, ali može ovde normalno */}
      <Footer />
    </main>
  );
}
