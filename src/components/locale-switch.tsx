'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const LOCALES = ['sr', 'de', 'en'] as const;

export function LocaleSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function toLocale(nextLocale: (typeof LOCALES)[number]) {
    const parts = pathname.split('/').filter(Boolean); // ["sr","..."] ili ["de","..."]
    const first = parts[0];
    const hasPrefix = LOCALES.includes(first as any);

    if (hasPrefix) parts.shift(); // ukloni trenutni locale

    router.push('/' + [nextLocale, ...parts].join('/'));
  }

  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-card/60 p-1">
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => toLocale(l)}
          className={[
            'px-2 py-1 text-xs rounded-md transition',
            l === locale ? 'bg-accent text-white' : 'hover:bg-card',
          ].join(' ')}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
