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
      className="
        group relative overflow-hidden
        rounded-3xl
        border border-border/60
        bg-card/30 backdrop-blur-xl
        p-6
        transition duration-300
        hover:-translate-y-1
        hover:border-border
        hover:bg-card/40
      "
    >
      {/* subtle glow */}
      <div
        className="
        pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2
        rounded-full bg-fg/10 blur-3xl opacity-0
        transition duration-300 group-hover:opacity-100
      "
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold tracking-tight text-fg">
            {title}
          </div>

          <div className="mt-2 text-sm leading-relaxed text-fg/70">{desc}</div>
        </div>

        <span className="mt-0.5 text-fg/40 transition group-hover:translate-x-1 group-hover:text-fg/70">
          →
        </span>
      </div>
    </Link>
  );
}
