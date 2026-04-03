// app/[locale]/layout.tsx
import type { ReactNode } from 'react';
import FloatingControls from '@/components/FloatingControls';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <main className="w-full pt-6 sm:pt-8">
        <FloatingControls />
        {children}
      </main>
    </NextIntlClientProvider>
  );
}
