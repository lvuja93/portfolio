import type { ReactNode } from 'react';
import Header from '@/components/header';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
}: {
  children: ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-10">{children}</main>
    </NextIntlClientProvider>
  );
}
