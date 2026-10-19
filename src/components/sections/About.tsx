'use client';

import { useTranslations } from 'next-intl';
import Section from './Section';

export default function About() {
  const t = useTranslations('home');

  return (
    <Section id="about" title={t('sections.about.title')}>
      <div>
        <div className="rounded-3xl border border-border/70 bg-card/60 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md">
          <p className="text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p1')}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p2')}
          </p>
          <p className="pt-2 text-sm leading-relaxed text-fg/80">
            {t('sections.about.body.p3')}
          </p>

          <div className="mt-5 grid gap-4 border-t border-border/60 pt-5 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-fg">
                {t('sections.about.education.title')}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-fg/80">
                {t('sections.about.education.value')}
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold text-fg">
                {t('sections.about.languages.title')}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-fg/80">
                {t('sections.about.languages.value')}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="text-sm font-semibold text-fg">
              {t('sections.about.skills.title')}
            </div>
            <ul className="mt-2 flex flex-wrap gap-2">
              {(t.raw('sections.about.skills.items') as string[]).map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-border/70 bg-card/40 px-3 py-1 text-xs text-fg/80"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
