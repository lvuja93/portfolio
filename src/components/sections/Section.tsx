import type { ReactNode } from 'react';

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm leading-relaxed text-fg/70">{subtitle}</p>
        )}
      </div>
      {children}
    </section>
  );
}
