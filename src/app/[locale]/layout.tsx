// app/[locale]/layout.tsx
import type { ReactNode } from 'react';
import Header from '@/components/header';
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

  // zakuca locale za ovaj request (bitno!)
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
    </NextIntlClientProvider>
  );
}
