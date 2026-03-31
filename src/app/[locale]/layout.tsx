import { WhatsAppIcon } from '@/components/icon/WhatsAppIcon';
import { routing } from '@/i18n/routing';
import { generateWhatsAppURL } from '@/lib/perfume-utils';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from 'next/navigation';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{locale: string}>
}) {
  const {locale} = await params;
  // You can access translations here for metadata
  return {
    title: locale === 'en' ? 'Nusantara Aroma Craft - Indonesia\'s Luxury Heritage' : 'Nusantara Aroma Craft - Warisan Kemewahan Indonesia',
    description: locale === 'en' ? 'Discover premium Indonesian perfumes and high-quality commodities.' : 'Temukan parfum premium dan komoditi berkualitas tinggi Indonesia.'
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} data-theme="light" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <div className='fixed bottom-6 right-6 z-50'>
            <div className='bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-pointer'>
             <a href={generateWhatsAppURL(locale === 'en' ? "Hi PT NAC, I want to know more about your product!" : "Halo PT NAC! Saya ingin mengetahui lebih lanjut tentang produk Anda.")} target="_blank" rel="noopener noreferrer" >
                <WhatsAppIcon className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
