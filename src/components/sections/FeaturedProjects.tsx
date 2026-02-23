'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import Section from './Section';

function ProjectCard({
  href,
  title,
  desc,
  meta,
  imageSrc,
}: {
  href: string;
  title: string;
  desc: string;
  meta: string;
  imageSrc: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card/10 backdrop-blur-[2px] sm:backdrop-blur-[6px] transition hover:-translate-y-0.5 hover:border-border"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />
      <div className="relative">
        <div className="p-6">
          <div className="text-sm font-semibold text-fg">{title}</div>
          <div className="mt-2 text-sm leading-relaxed text-fg/75">{desc}</div>
          <div className="mt-4 text-xs text-fg/60">{meta}</div>
        </div>

        <div className="px-6 pb-6">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card/10">
            <img
              src={imageSrc}
              alt={title}
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedProjects() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <Section
      id="projects"
      title={t('sections.projects.title')}
      subtitle={t('sections.projects.subtitle')}
    >
      <div className="grid gap-4 lg:grid-cols-2">
        <ProjectCard
          href={`/${locale}#projects`}
          title={t('sections.projects.p1.title')}
          desc={t('sections.projects.p1.desc')}
          meta={t('sections.projects.p1.meta')}
          imageSrc="/projects/p1.jpg"
        />
        <ProjectCard
          href={`/${locale}#projects`}
          title={t('sections.projects.p2.title')}
          desc={t('sections.projects.p2.desc')}
          meta={t('sections.projects.p2.meta')}
          imageSrc="/projects/p2.jpg"
        />
      </div>

      <div className="mt-6">
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 rounded-2xl border border-border/70 bg-card/10 px-4 py-2 text-sm font-medium text-fg transition hover:bg-card/20"
        >
          {t('sections.projects.viewAll')} →
        </Link>
      </div>
    </Section>
  );
}
