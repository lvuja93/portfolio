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
    <header className=" bg-bg/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
        <Link href={`/${locale}`} className="text-sm font-semibold text-fg">
          Portfolio ({locale.toUpperCase()})
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 rounded-xl border border-border/60 bg-card/40 p-1">
            {LOCALES.map((l) => {
              const active = l === locale;
              return (
                <Link
                  key={l}
                  href={makeHref(l)}
                  className={[
                    'rounded-lg px-3 py-1 text-xs font-medium transition',
                    active
                      ? 'bg-fg text-bg'
                      : 'text-fg/70 hover:bg-card hover:text-fg',
                  ].join(' ')}
                >
                  {l.toUpperCase()}
                </Link>
              );
            })}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
