'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted)
    return <div className="h-9 w-9 rounded-lg border border-border" />;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <button
      type="button"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="h-9 w-9 rounded-lg border border-border bg-card/60 hover:bg-card transition"
      aria-label="Toggle theme"
      title="Theme"
    >
      {current === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
