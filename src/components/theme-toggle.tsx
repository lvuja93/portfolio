'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return <div className="h-8 w-8 rounded-full bg-card/60" />;
  }

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <button
      type="button"
      onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-card/70 text-sm transition hover:bg-card"
      aria-label="Toggle theme"
      title="Theme"
    >
      {current === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
