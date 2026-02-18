import Home from '@/components/home/Home';
import { getMessages } from 'next-intl/server';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages();
  const home = (messages as any).home;

  return <Home locale={locale} t={home} />;
}
