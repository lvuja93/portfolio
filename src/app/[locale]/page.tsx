import Home from '@/components/home/Home';
import { setRequestLocale } from 'next-intl/server';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // obavezno
  setRequestLocale(locale);

  return <Home />;
}
