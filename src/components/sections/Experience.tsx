'use client';

import { useLocale, useTranslations } from 'next-intl';
import Section from './Section';
import Link from 'next/link';

function Item({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-fg/50" />
      <div className="text-sm font-semibold text-fg">
        {role} <span className="text-fg/60">— {company}</span>
      </div>
      <div className="mt-1 text-xs text-fg/55">{period}</div>
      <ul className="mt-3 space-y-2 text-sm text-fg/75">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-fg/35" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <Section
      id="experience"
      title={t('sections.experience.title')}
      subtitle={t('sections.experience.subtitle')}
    >
      <div className="rounded-3xl border border-border/40 bg-card/20 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
        <div className="space-y-8 border-l border-border/60 pl-4">
          <Item
            role={t('sections.experience.items.i1.role')}
            company={t('sections.experience.items.i1.company')}
            period={t('sections.experience.items.i1.period')}
            bullets={[
              t('sections.experience.items.i1.b1'),
              t('sections.experience.items.i1.b2'),
              t('sections.experience.items.i1.b3'),
            ]}
          />
          <Item
            role={t('sections.experience.items.i2.role')}
            company={t('sections.experience.items.i2.company')}
            period={t('sections.experience.items.i2.period')}
            bullets={[
              t('sections.experience.items.i2.b1'),
              t('sections.experience.items.i2.b2'),
            ]}
          />
        </div>
      </div>
      <Link
        href={`/${locale}#projects`}
        className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-card/10 px-4 py-2 text-sm font-medium text-fg transition hover:bg-card/20 mt-6"
      >
        {t('sections.experience.seeall')} →
      </Link>
    </Section>
  );
}
