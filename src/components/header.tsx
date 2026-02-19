'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

const LOCALES = ['en', 'de'] as const;
type Locale = (typeof LOCALES)[number];

export default function Header() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(en|de)(?=\/|$)/, '');
  const makeHref = (l: Locale) => `/${l}${pathWithoutLocale || ''}`;

  return (
    <header className="border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href={`/${locale}`} className="text-sm font-semibold">
          Portfolio ({locale.toUpperCase()})
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-xl border border-white/15 bg-white/5 p-1">
            {LOCALES.map((l) => (
              <Link
                key={l}
                href={makeHref(l)}
                className={`rounded-lg px-3 py-1 text-xs font-medium ${
                  l === locale
                    ? 'bg-white text-black'
                    : 'text-white/70 hover:bg-white/10'
                }`}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
