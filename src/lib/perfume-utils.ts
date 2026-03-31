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

export const generateWhatsAppURL = (
	whatsappMessage: string,
	sellerPhone: string = '6285710596000'
) => {
	const encodedMessage = encodeURIComponent(whatsappMessage);
	return `https://wa.me/${sellerPhone}?text=${encodedMessage}`;
};
