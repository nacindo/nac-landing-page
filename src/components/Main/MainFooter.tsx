import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from "next/image";

export const MainFooter = () => {
    const t = useTranslations('footer');

    return (
        <footer className="border-base-300 border-t">
            <div className="p-8 sm:p-10 md:px-16 xl:px-40 xl:py-16">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    {/* Logo + Social Media */}
                    <div className="flex flex-col gap-6">
                        <Image
                            alt="Nusantara Aroma Craft Logo"
                            src="/images/logo/nac-logo-new.svg"
                            width={225}
                            height={150}
                        />
                        <div className="flex items-center gap-4">
                            {/* Instagram */}
                            <a href="https://www.instagram.com/nac_tree" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-base-content/60 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                                    <circle cx="12" cy="12" r="4"/>
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                                </svg>
                            </a>
                            {/* TikTok */}
                            <a href="https://www.tiktok.com/@nac_tree" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-base-content/60 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                                </svg>
                            </a>
                            {/* Shopee */}
                            <a href="https://shopee.co.id/nac_tree" target="_blank" rel="noopener noreferrer" aria-label="Shopee" className="text-base-content/60 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2a5 5 0 0 0-5 5H5a2 2 0 0 0-2 2l1 11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2l1-11a2 2 0 0 0-2-2h-2a5 5 0 0 0-5-5zm0 2a3 3 0 0 1 3 3H9a3 3 0 0 1 3-3zm-1 9a1 1 0 1 0 2 0v-1h1a1 1 0 1 0 0-2h-1V9a1 1 0 1 0-2 0v1H9a1 1 0 1 0 0 2h1v1z"/>
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="https://wa.me/6285710596000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-base-content/60 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
                                    <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.776L0 32l8.479-2.003A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.856l-.486-.29-5.033 1.188 1.224-4.897-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.778c-.398-.199-2.354-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.981-2.36-2.213-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.2-.898-2.165-1.23-2.963-.325-.778-.655-.672-.898-.684l-.764-.013c-.266 0-.697.1-1.063.498-.366.398-1.396 1.363-1.396 3.327s1.43 3.86 1.629 4.126c.199.266 2.814 4.298 6.818 6.027.953.411 1.697.657 2.277.84.957.304 1.828.261 2.516.158.767-.114 2.354-.962 2.687-1.892.333-.93.333-1.727.232-1.893-.099-.165-.365-.264-.763-.463z"/>
                                </svg>
                            </a>
                            {/* Email */}
                            <a href="mailto:ptnusantaraaromacraft@gmail.com" aria-label="Email" className="text-base-content/60 hover:text-primary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                                    <polyline points="2,4 12,13 22,4"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Links */}
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
