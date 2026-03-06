import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export const MainFooter = () => {
    const t = useTranslations('footer');

    return (
        <footer className="border-base-300 border-t">
            <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    <div>
                        <Image
                            alt="Nusantara Aroma Craft Logo"
                            src="/images/logo/nac-logo-new.svg"
                            width={225}
                            height={150}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                        <div>
                            <h2 className="text-lg font-medium">{t('company')}</h2>
                            <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                <Link href="/">{t('home')}</Link>
                                <Link href="/about">{t('about')}</Link>
                                <Link href="/contact">{t('contact')}</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">{t('brands')}</h2>
                            <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                <Link href="/perfume">{t('perfume')}</Link>
                                <Link href="/export-import">{t('export')}</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-medium">{t('services')}</h2>
                            <div className="**:hover:text-primary mt-4 space-y-2 **:block **:transition-all">
                                <Link href="/export-import/our-services">{t('exportImport')}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-8 py-4 text-center lg:px-40">
                <p className="text-sm text-base-content/60">
                    {t('copyright')}
                </p>
            </div>
        </footer>
    );
};