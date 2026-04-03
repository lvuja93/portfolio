import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import OpsBackground from '@/components/OpsBackground';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lazar Vujović | System & Network Administrator',
  description:
    'Portfolio of Lazar Vujović — System & Network Administrator focused on IT infrastructure, Microsoft 365, networking, security, and web development.',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="relative min-h-screen bg-bg text-fg font-sans">
        <ThemeProvider>
          <OpsBackground opacity={0.16} minLines={140} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
