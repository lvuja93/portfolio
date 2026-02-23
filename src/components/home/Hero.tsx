'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import CardLink from '@/components/ui/CardLink';

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="mx-auto w-full max-w-6xl px-2 pb-10">
      <div
        className="
        relative overflow-hidden rounded-3xl
        border border-border/60
        bg-card/10
        backdrop-blur-[2px]
        sm:backdrop-blur-[6px]
      "
      >
        {/* subtle inner hairline */}
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
            </div>

            {/* TEXT — ISTI RASPORED */}
            <div className="col-span-5">
              <div className="flex justify-center md:justify-start">
                <div className="max-w-3xl">
                  <h1 className="text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
                    {t('heroLead')}
                  </h1>

                  <p className="mt-3 text-base leading-relaxed text-fg/85">
                    {t('heroLine2')}
                  </p>

                  <p className="mt-2 text-base leading-relaxed text-fg/85">
                    {t('heroLine3')}
                  </p>

                  <div className="mt-3 text-base leading-relaxed text-fg/85">
                    <div>{t('tagline1')}</div>
                    <div>{t('tagline2')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}#experience`}
              className="
                rounded-2xl bg-fg px-4 py-2 text-sm font-medium text-bg
                transition hover:bg-fg/90
                focus:outline-none focus:ring-2 focus:ring-fg/30
              "
            >
              {t('cta.viewWork')}
            </Link>

            <Link
              href={`/${locale}#contact`}
              className="
                rounded-2xl border border-border/70
                bg-card/20 px-4 py-2 text-sm font-medium text-fg
                transition hover:bg-card/30
              "
            >
              {t('cta.contact')}
            </Link>

            <a
              href="/cv/Lazar-Vujovic-CV.pdf"
              className="
                rounded-2xl border border-border/70
                bg-card/20 px-4 py-2 text-sm font-medium text-fg
                transition hover:bg-card/30
              "
              download
            >
              {t('nav.cv')}
            </a>
          </div>

          {/* CARDS */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <CardLink
              href={`/${locale}#about`}
              title={t('cards.about.title')}
              desc={t('cards.about.desc')}
            />
            <CardLink
              href={`/${locale}#experience`}
              title={t('cards.exp.title')}
              desc={t('cards.exp.desc')}
            />
            <CardLink
              href={`/${locale}#projects`}
              title={t('cards.dev.title')}
              desc={t('cards.dev.desc')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
