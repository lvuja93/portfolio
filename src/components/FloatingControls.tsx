'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/theme-toggle';

const LOCALES = [
  { code: 'en', flag: '🇬🇧', label: 'English' },
  { code: 'de', flag: '🇩🇪', label: 'Deutsch' },
] as const;

type Locale = (typeof LOCALES)[number]['code'];

export default function FloatingControls() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();

  const pathWithoutLocale = pathname.replace(/^\/(en|de)(?=\/|$)/, '');
  const makeHref = (l: Locale) => `/${l}${pathWithoutLocale || ''}`;

  return (
    <div className="fixed right-8 top-8 z-50 sm:pr-20">
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-1 rounded-full bg-card/45 px-1.5 py-1 backdrop-blur-md">
          {LOCALES.map((l) => {
            const active = l.code === locale;

            return (
              <Link
                key={l.code}
                href={makeHref(l.code)}
                aria-label={l.label}
                title={l.label}
                className={[
                  'flex h-8 w-8 items-center justify-center rounded-full transition sm:h-9 sm:w-9',
                  active
                    ? 'bg-card/80 shadow-sm'
                    : 'opacity-70 hover:bg-card/50 hover:opacity-100',
                ].join(' ')}
              >
                <span className="text-sm leading-none sm:text-xl">
                  {l.flag}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="rounded-full bg-card/45 p-1 backdrop-blur-md">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
