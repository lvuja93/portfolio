'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Section from './Section';
import { Mail } from 'lucide-react';

export default function Contact() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <Section
      id="contact"
      title={<span className="pl-8">{t('sections.contact.title')}</span>}
    >
      <div className="rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px] mx-2">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className=" font-semibold text-fg">
              {t('sections.contact.ctaTitle')}
            </div>
            <div className="mt-1 text-sm text-fg/70 pt-2">
              {t('sections.contact.ctaDesc')}
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center   ">
            <Mail />
            <a
              href="mailto:contact@lazarvujovic.com"
              className="rounded-2xl bg-fg px-2 underline py-2  font-medium  text-bg transition hover:bg-fg/90"
            >
              {t('sections.contact.email')}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
