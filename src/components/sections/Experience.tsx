'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';

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
      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-fg/70" />
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <div className="text-base font-semibold text-fg">{role}</div>
          <div className="mt-0.5 text-sm text-fg/60">{company}</div>
        </div>
        <div className="text-xs font-medium text-fg/50 sm:pt-1">{period}</div>
      </div>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg/75">
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
  const t = useTranslations('home');

  return (
    <Section id="experience" title={t('sections.experience.title')}>
      <div className="rounded-3xl border border-border/40 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
        <div className="space-y-8 border-l border-border/60 pl-4">
          <Item
            role={t('sections.experience.items.i1.role')}
            company={t('sections.experience.items.i1.company')}
            period={t('sections.experience.items.i1.period')}
            bullets={[
              t('sections.experience.items.i1.b1'),
              t('sections.experience.items.i1.b2'),
              t('sections.experience.items.i1.b3'),
              t('sections.experience.items.i1.b4'),
              t('sections.experience.items.i1.b5'),
              t('sections.experience.items.i1.b6'),
              t('sections.experience.items.i1.b7'),
              t('sections.experience.items.i1.b8'),
            ]}
          />
          <Item
            role={t('sections.experience.items.i2.role')}
            company={t('sections.experience.items.i2.company')}
            period={t('sections.experience.items.i2.period')}
            bullets={[
              t('sections.experience.items.i2.b1'),
              t('sections.experience.items.i2.b2'),
              t('sections.experience.items.i2.b3'),
              t('sections.experience.items.i2.b4'),
              t('sections.experience.items.i2.b5'),
            ]}
          />
        </div>
      </div>
    </Section>
  );
}
