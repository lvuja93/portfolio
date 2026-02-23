'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Section from './Section';

function LaneCard({
  title,
  desc,
  bullets,
  ctaHref,
  ctaLabel,
}: {
  title: string;
  desc: string;
  bullets: string[];
  ctaHref: string;
  ctaLabel: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

      <div className="relative">
        <div className="text-sm font-semibold text-fg">{title}</div>
        <p className="mt-2 text-sm leading-relaxed text-fg/75">{desc}</p>

        <ul className="mt-4 space-y-2 text-sm text-fg/80">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-fg/45" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <Link
          href={ctaHref}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-fg/90 transition hover:text-fg"
        >
          {ctaLabel}{' '}
          <span className="transition group-hover:translate-x-0.5">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function TwoLanes() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <Section
      id="ops"
      title={t('sections.opsDev.title')}
      subtitle={t('sections.opsDev.subtitle')}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <div id="ops">
          <LaneCard
            title={t('sections.opsDev.ops.title')}
            desc={t('sections.opsDev.ops.desc')}
            bullets={[
              t('sections.opsDev.ops.b1'),
              t('sections.opsDev.ops.b2'),
              t('sections.opsDev.ops.b3'),
            ]}
            ctaHref={`/${locale}#experience`}
            ctaLabel={t('sections.opsDev.ops.cta')}
          />
        </div>

        <div id="dev">
          <LaneCard
            title={t('sections.opsDev.dev.title')}
            desc={t('sections.opsDev.dev.desc')}
            bullets={[
              t('sections.opsDev.dev.b1'),
              t('sections.opsDev.dev.b2'),
              t('sections.opsDev.dev.b3'),
            ]}
            ctaHref={`/${locale}#projects`}
            ctaLabel={t('sections.opsDev.dev.cta')}
          />
        </div>
      </div>
    </Section>
  );
}
