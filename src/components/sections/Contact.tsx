'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Section from './Section';

export default function Contact() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <Section
      id="contact"
      title={t('sections.contact.title')}
      subtitle={t('sections.contact.subtitle')}
    >
      <div className="rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-fg">
              {t('sections.contact.ctaTitle')}
            </div>
            <div className="mt-1 text-sm text-fg/70">
              {t('sections.contact.ctaDesc')}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:you@example.com"
              className="rounded-2xl bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:bg-fg/90"
            >
              {t('sections.contact.email')}
            </a>
            <Link
              href={`/${locale}#projects`}
              className="rounded-2xl border border-border/70 bg-card/10 px-4 py-2 text-sm font-medium text-fg transition hover:bg-card/20"
            >
              {t('sections.contact.viewWork')}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
