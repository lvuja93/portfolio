'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';

export default function About() {
  const t = useTranslations('home');

  return (
    <Section
      id="about"
      title={t('sections.about.title')}
      subtitle={t('sections.about.subtitle')}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
          <p className="text-sm leading-relaxed text-fg/80">
            {t('sections.about.body')}
          </p>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
          <div className="text-sm font-semibold text-fg">
            {t('sections.about.valuesTitle')}
          </div>
          <ul className="mt-3 space-y-2 text-sm text-fg/75">
            <li>• {t('sections.about.v1')}</li>
            <li>• {t('sections.about.v2')}</li>
            <li>• {t('sections.about.v3')}</li>
            <li>• {t('sections.about.v4')}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
