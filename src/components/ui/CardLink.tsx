import Link from 'next/link';

export default function CardLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/35 dark:hover:bg-zinc-950/55"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </div>
          <div className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {desc}
          </div>
        </div>
        <span className="mt-0.5 text-zinc-400 transition group-hover:translate-x-0.5 dark:text-zinc-600">
          →
        </span>
      </div>
    </Link>
  );
}
