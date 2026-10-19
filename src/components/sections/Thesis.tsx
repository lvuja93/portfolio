'use client';

import { useTranslations } from 'next-intl';
import { Download } from 'lucide-react';
import Section from './Section';

export default function Thesis() {
  const t = useTranslations('home');

  return (
    <Section id="thesis" title={t('sections.thesis.title')}>
      <div className="rounded-3xl border border-border/60 bg-card/10 p-6 backdrop-blur-[2px] sm:backdrop-blur-[6px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-semibold text-fg">{t('sections.thesis.value')}</div>
            <p className="mt-1 text-sm leading-relaxed text-fg/70">
              {t('sections.thesis.note')}
            </p>
          </div>
          <a
            href="/thesis/Lazar-Vujovic-Bachelor-Thesis.pdf"
            download
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-fg px-4 py-2 text-sm font-medium text-bg transition hover:bg-fg/90"
          >
            <Download className="h-4 w-4" />
            {t('sections.thesis.download')}
          </a>
        </div>
      </div>
    </Section>
  );
}
