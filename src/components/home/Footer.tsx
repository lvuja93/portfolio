import type { HomeT } from './Home';

export default function Footer({ t }: { t: HomeT }) {
  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-xs text-zinc-500">
      © {new Date().getFullYear()} {t.name}
    </footer>
  );
}
