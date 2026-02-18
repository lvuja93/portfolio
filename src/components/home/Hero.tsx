import Link from 'next/link';
import type { HomeT } from './Home';
import CardLink from '@/components/ui/CardLink';

export default function Hero({ locale, t }: { locale: string; t: HomeT }) {
  const bgUrl = '/me.jpg';

  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-6">
      <div
        className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
        style={{
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] dark:bg-zinc-950/70" />

        <div className="relative p-7 sm:p-10">
          <div className="flex flex-col gap-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                {t.heroLead}
              </h1>

              <p className="mt-4 text-base leading-relaxed text-zinc-800 dark:text-zinc-200 sm:text-lg">
                {t.heroLine2}
                <br />
                {t.heroLine3}
              </p>

              <div className="mt-6 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
                <div>{t.tagline1}</div>
                <div>{t.tagline2}</div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${locale}#experience`}
                  className="rounded-2xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                >
                  {t.cta.viewWork}
                </Link>

                <Link
                  href={`/${locale}#contact`}
                  className="rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/40 dark:text-zinc-100 dark:hover:bg-zinc-950/60"
                >
                  {t.cta.contact}
                </Link>

                <a
                  href="/cv/Lazar-Vujovic-CV.pdf"
                  className="rounded-2xl border border-zinc-300 bg-white/70 px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:bg-white dark:border-zinc-700 dark:bg-zinc-950/40 dark:text-zinc-100 dark:hover:bg-zinc-950/60"
                  download
                >
                  {t.nav.cv}
                </a>

                <div className="ml-auto hidden flex-col items-end gap-1 text-xs text-zinc-600 dark:text-zinc-400 sm:flex">
                  <div>{t.meta.location}</div>
                  <div>{t.meta.availability}</div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-2 sm:grid-cols-3">
              <CardLink
                href={`/${locale}#about`}
                title={t.cards.about.title}
                desc={t.cards.about.desc}
              />
              <CardLink
                href={`/${locale}#experience`}
                title={t.cards.exp.title}
                desc={t.cards.exp.desc}
              />
              <CardLink
                href={`/${locale}#projects`}
                title={t.cards.dev.title}
                desc={t.cards.dev.desc}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
