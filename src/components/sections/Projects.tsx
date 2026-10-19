'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';

export default function Projects() {
  const t = useTranslations('home');

  return (
    <Section id="projects" title={t('sections.projects.title')}>
      <div className="rounded-3xl border border-border/40 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
        <p className="text-sm text-fg/70">{t('sections.projects.comingSoon')}</p>
      </div>
    </Section>
  );
}
