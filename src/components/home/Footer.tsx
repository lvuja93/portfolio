// components/home/Footer.tsx
import { getTranslations } from 'next-intl/server';

export default async function Footer() {
  const t = await getTranslations('home');
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-6xl px-5 pb-10 text-xs text-zinc-500">
      © {year} {t('name')}
    </footer>
  );
}
