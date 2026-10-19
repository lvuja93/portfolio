'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';
import { Mail } from 'lucide-react';

export default function Contact() {
  const t = useTranslations('home');

  return (
    <Section id="contact" title={t('sections.contact.title')}>
      <div className="rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className=" font-semibold text-fg">
              {t('sections.contact.ctaTitle')}
            </div>
            <div className="mt-1 text-sm text-fg/70 pt-2">
              {t('sections.contact.ctaDesc')}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 sm:items-end">
            <a
              href="mailto:contact@lazarvujovic.com"
              className="inline-flex items-center gap-2 rounded-2xl bg-fg px-3 py-2 text-sm font-medium text-bg transition hover:bg-fg/90"
            >
              <Mail className="h-4 w-4" />
              {t('sections.contact.email')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
