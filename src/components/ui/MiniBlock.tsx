export default function MiniBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950/35">
      <div className="text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-1 text-sm text-zinc-700 dark:text-zinc-300">
        {items.map((x) => (
          <li key={x} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
            <span>{x}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
