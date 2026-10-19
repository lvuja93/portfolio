'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';

export default function Projects() {
  const t = useTranslations('home');

  return (
    <Section id="projects" title={t('sections.projects.title')} className="py-4 sm:py-6">
      <p className="inline-flex rounded-full border border-border/60 bg-card/20 px-4 py-1.5 text-sm text-fg/60">
        {t('sections.projects.comingSoon')}
      </p>
    </Section>
  );
}
