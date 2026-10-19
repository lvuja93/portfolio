'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Linkedin, Github, Instagram, Download } from 'lucide-react';

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
      <div
        className="
        relative overflow-hidden rounded-3xl
        border border-border/60
        bg-card/10
        backdrop-blur-[2px]
        sm:backdrop-blur-[6px]
      "
      >
        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/5" />

        <div className="relative p-6 sm:p-8">
          <div className="md:grid grid-cols-7 items-center gap-6">
            {/* IMAGE — ISTA POZICIJA */}
            <div className="col-span-2">
              <div className="flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -inset-8 rounded-full bg-fg/10 blur-2xl" />
                  <img
                    src="/profile.jpg"
                    alt="profile"
                    className="relative h-28 w-28 rounded-[8rem] object-cover ring-1 ring-border/70 sm:h-36 sm:w-36"
                  />
                </div>
              </div>
              <div>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/lazar-vujović-a148a98b/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t('sections.contact.linkedin')}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card/20 text-fg transition hover:bg-card/40"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>

                  <a
                    href="https://github.com/lvuja93"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t('sections.contact.github')}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card/20 text-fg transition hover:bg-card/40"
                  >
                    <Github className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.instagram.com/l_vuja/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={t('sections.contact.instagram')}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card/20 text-fg transition hover:bg-card/40"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={
                    locale === 'de'
                      ? '/cv/Lazar-Vujovic-CV-DE.pdf'
                      : '/cv/Lazar-Vujovic-CV-EN.pdf'
                  }
                  download
                  className="
      inline-flex items-center gap-2
      rounded-2xl border border-border/70
      bg-card/20 px-4 py-2 text-sm font-medium text-fg
      transition hover:bg-card/30
    "
                >
                  <Download className="h-4 w-4" />
                  <span>{t('nav.cv')}</span>
                </a>
              </div>
            </div>

            {/* TEXT — ISTI RASPORED */}
            <div className="col-span-5">
              <div className="flex justify-center md:justify-start">
                <div className="max-w-3xl pt-8 sm:pt-2">
                  <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
                    {t('heroLead')}
                  </h1>
                  <p className="mt-1 text-sm font-medium text-fg/55">{t('role')}</p>

                  <p className="mt-4 text-base leading-relaxed text-fg/85">
                    {t('heroLine2')}
                  </p>

                  <p className="mt-2 text-base leading-relaxed text-fg/85">
                    {t('heroLine3')}
                  </p>

                  <div className="mt-4 border-l-2 border-[rgb(var(--accent))] pl-3 text-sm leading-relaxed text-fg/70">
                    <p>{t('tagline1')}</p>
                    <p>{t('tagline2')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
