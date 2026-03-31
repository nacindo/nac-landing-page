'use client';

import { WhatsAppIcon } from '@/components/icon/WhatsAppIcon';
import { findPerfumeBySlug, formatPrice, formatPriceUSD, formatPriceSAR, generateWhatsAppURL } from '@/lib/perfume-utils';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

type Currency = 'IDR' | 'USD' | 'SAR';

export const PerfumeModal = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const t = useTranslations('perfume.modal');
	const locale = useLocale();
	const [currency, setCurrency] = useState<Currency>('IDR');
	const perfumeSlug = searchParams.get('perfume');
	const selectedPerfume = perfumeSlug ? findPerfumeBySlug(perfumeSlug, locale) : null;
	const isModalOpen = !!selectedPerfume;

	const closeModal = useCallback(() => {
		const params = new URLSearchParams(searchParams.toString());
		params.delete('perfume');
		const newUrl = params.toString() ? `?${params.toString()}` : window.location.pathname;
		router.push(newUrl, { scroll: false });
		document.body.style.overflow = 'unset';
	}, [searchParams, router]);

	useEffect(() => {
		const handleEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') closeModal(); };
		if (isModalOpen) {
			document.body.style.overflow = 'hidden';
			document.addEventListener('keydown', handleEscape);
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.body.style.overflow = 'unset';
		};
	}, [isModalOpen, closeModal]);

	if (!isModalOpen || !selectedPerfume) return null;

	const getDisplayPrice = () => {
		if (currency === 'USD') return formatPriceUSD(selectedPerfume.price);
		if (currency === 'SAR') return formatPriceSAR(selectedPerfume.price);
		return formatPrice(selectedPerfume.price);
	};

	const handleWhatsApp = () => {
		const msg = t('whatsappMessage', { title: selectedPerfume.title, price: getDisplayPrice() });
		const url = generateWhatsAppURL(msg);
		window.open(url, '_blank');
	};

	const btnClass = 'group inline-flex items-center justify-center w-full bg-primary hover:bg-green-600 text-white font-light tracking-[0.1em] uppercase text-sm py-4 px-6 rounded-full transition-all duration-500';

	return (
		<div className="fixed inset-0 z-[9999999999] flex items-center justify-center p-4">
			<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
			<div className="relative bg-white shadow-[0_16px_64px_rgba(0,0,0,0.2)] max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden rounded-4xl">
				<button onClick={closeModal} className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2.5 transition-all duration-300 hover:cursor-pointer hover:text-accent hover:scale-105 shadow-[0_2px_8px_rgba(0,0,0,0.1)]">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
				<div className="flex flex-col lg:flex-row flex-1 min-h-0">
					<div className="lg:w-1/2 bg-accent/80 relative lg:p-4 shrink-0">
						<div className="relative bg-accent w-full h-96 lg:h-full rounded-2xl">
							<Image src={selectedPerfume.imagePath} alt={selectedPerfume.title} fill className="object-cover hover:scale-110 transition-all ease-in-out rounded-2xl" />
						</div>
					</div>
					<div className="lg:w-1/2 p-8 flex flex-col flex-1 overflow-y-auto min-h-0">
						<div className="space-y-5">
							<div className="flex gap-2">
								{(['IDR', 'USD', 'SAR'] as Currency[]).map((c) => (
									<button key={c} onClick={() => setCurrency(c)} style={{ padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: currency === c ? '600' : '400', letterSpacing: '0.1em', border: currency === c ? '1.5px solid currentColor' : '1px solid rgba(0,0,0,0.15)', opacity: currency === c ? 1 : 0.5, cursor: 'pointer', background: 'transparent', transition: 'all 0.2s' }}>
										{c}
									</button>
								))}
							</div>
							<div>
								<p className="text-2xl font-medium tracking-wide text-accent">{getDisplayPrice()}</p>
								{currency !== 'IDR' && (
									<p className="text-xs text-gray-400 mt-1 tracking-wide">approx. {formatPrice(selectedPerfume.price)}</p>
								)}
							</div>
							<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.15] tracking-[0.04em]">{selectedPerfume.title}</h2>
							<p className="text-base md:text-lg text-gray-600 leading-relaxed font-light tracking-wide">{selectedPerfume.description}</p>
							<div className="space-y-3">
								{selectedPerfume.uniquePoints.map((point, index) => (
									<div key={index} className="flex items-center space-x-3">
										<div className="w-1.5 h-1.5 bg-accent/70 rounded-full flex-shrink-0" />
										<span className="text-gray-600 font-light tracking-wide text-sm md:text-base">{point}</span>
									</div>
								))}
							</div>
							<div className="pt-6 border-t border-gray-100">
								<button onClick={handleWhatsApp} className={btnClass}>
									<WhatsAppIcon className="w-4 h-4 mr-3 opacity-90" />
									{t('contactSeller')}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
