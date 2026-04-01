import { routing } from '@/i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono, Cairo } from "next/font/google";
import { notFound } from 'next/navigation';
import { WhatsAppIcon } from '@/components/icon/WhatsAppIcon';
import { generateWhatsAppURL } from '@/lib/perfume-utils';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
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
  return {
    title: locale === 'en' ? 'Nusantara Aroma Craft - Indonesia\'s Luxury Heritage' : locale === 'ar' ? 'Nusantara Aroma Craft - إرث الفخامة الإندونيسية' : 'Nusantara Aroma Craft - Warisan Kemewahan Indonesia',
    description: locale === 'en' ? 'Discover premium Indonesian perfumes and high-quality commodities.' : locale === 'ar' ? 'اكتشف عطوراً إندونيسية فاخرة وسلعاً عالية الجودة.' : 'Temukan parfum premium dan komoditi berkualitas tinggi Indonesia.'
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

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();
  const isArabic = locale === 'ar';

  return (
    <html lang={locale} dir={isArabic ? 'rtl' : 'ltr'} data-theme="light" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable}`} style={{ fontFamily: isArabic ? 'var(--font-cairo), sans-serif' : undefined }}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <div className='fixed bottom-6 right-6 z-50'>
            <div className='bg-green-600 p-4 rounded-full shadow-lg hover:bg-green-700 transition-colors cursor-pointer'>
              <a href={generateWhatsAppURL(locale === 'en' ? "Hi PT NAC! I want to know more about your product!" : locale === 'ar' ? "مرحباً PT NAC! أريد معرفة المزيد عن منتجاتكم." : "Halo PT NAC! Saya ingin mengetahui lebih lanjut tentang produk Anda.")} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="w-8 h-8 text-white" />
              </a>
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
