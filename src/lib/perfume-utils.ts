import {
	PerfumeCatalogDataEng,
	PerfumeCatalogDataId,
	PerfumeCatalogDataAr,
} from '@/data/perfume/Catalog';

export const generateSlug = (title: string): string => {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.trim();
};

export const findPerfumeBySlug = (slug: string, locale: string = 'id') => {
	const perfumeData =
		locale === 'en' ? PerfumeCatalogDataEng :
		locale === 'ar' ? PerfumeCatalogDataAr :
		PerfumeCatalogDataId;
	return perfumeData.find((perfume) => generateSlug(perfume.title) === slug);
};

export const formatPrice = (price: number) => {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
	}).format(price);
};

// Exchange rates (approximate — update periodically)
const IDR_TO_USD = 16300;
const IDR_TO_SAR = 4270;

export const formatPriceUSD = (priceIDR: number) => {
	const usd = priceIDR / IDR_TO_USD;
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(usd);
};

export const formatPriceSAR = (priceIDR: number) => {
	const sar = priceIDR / IDR_TO_SAR;
	return new Intl.NumberFormat('ar-SA', {
		style: 'currency',
		currency: 'SAR',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(sar);
};

export const generateWhatsAppURL = (
	whatsappMessage: string,
	sellerPhone: string = '6285710596000'
) => {
	const encodedMessage = encodeURIComponent(whatsappMessage);
	return `https://wa.me/${sellerPhone}?text=${encodedMessage}`;
};
