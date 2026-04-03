'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';

export default function About() {
  const t = useTranslations('home');

  return (
    <Section
      id="about"
      title={<span className="pl-8">{t('sections.about.title')}</span>}
    >
      <div className="mx-2">
        <div className="lg:col-span-2 rounded-3xl border border-border/70 bg-card/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md">
          <p className="text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p1')}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p2')}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p3')}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p4')}
          </p>
        </div>
      </div>
    </Section>
  );
}
