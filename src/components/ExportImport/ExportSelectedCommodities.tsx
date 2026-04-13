import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const ExportSelectedCommodities = () => {
	const t = useTranslations('exportSelectedCommodities');

	return (
		<section
			className="py-8 lg:py-20"
			id="selected-commodities"
		>
			<div className="container">
				<header className="max-w-3xl">
					<h2 className="text-3xl font-semibold sm:text-5xl">
						{t('title')}
					</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl max-w-4xl">
						{t('subtitle')}
					</p>
				</header>

				<div className="mt-6 grid gap-6 md:grid-cols-3">
					<article className="rounded-lg border border-border bg-base-200 overflow-hidden">
						<div className="relative aspect-[4/3]">
							{/* herbs/botanicals for perfumery */}
							<Image
								src="/images/landing/indonesian-herbs-and-essential-oils-bottles.jpg"
								alt="Agarwood (oud) chips and essential oils"
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-5">
							<h3 className="font-semibold text-lg">{t('agarwood.title')}</h3>
							<p className="mt-2 text-base-content">
								{t('agarwood.description')}
							</p>
							<ul className="mt-3 text-base-content">
								{(t.raw('agarwood.features') as string[]).map((feature: string, index: number) => (
									<li key={index}>• {feature}</li>
								))}
							</ul>
						</div>
					</article>

					<article className="rounded-lg border border-border bg-base-200 overflow-hidden">
						<div className="relative aspect-[4/3]">
							{/* coffee beans imagery */}
							<Image
								src="/images/landing/indonesian-coffee-beans-in-burlap-sack.jpg"
								alt="Premium Indonesian coffee beans"
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-5">
							<h3 className="font-semibold text-lg">{t('coffee.title')}</h3>
							<p className="mt-2 text-base-content">
								{t('coffee.description')}
							</p>
							<ul className="mt-3 text-base-content">
								{(t.raw('coffee.features') as string[]).map((feature: string, index: number) => (
									<li key={index}>• {feature}</li>
								))}
							</ul>
						</div>
					</article>

					<article className="rounded-lg border border-border bg-base-200 overflow-hidden">
						<div className="relative aspect-[4/3]">
							{/* Briquette imagery */}
							<Image
								src="/commodities/briquettes/shisha/shisha-product-4.webp"
								alt="Premium Briquette"
								fill
								className="object-cover"
							/>
						</div>
						<div className="p-5">
							<h3 className="font-semibold text-lg">{t('Briquette.title')}</h3>
							<p className="mt-2 text-base-content">
								{t('Briquette.description')}
							</p>
							<ul className="mt-3 text-base-content">
								{(t.raw('Briquette.features') as string[]).map((feature: string, index: number) => (
									<li key={index}>• {feature}</li>
								))}
							</ul>
						</div>
					</article>
				</div>

				<div className="mt-6 w-full">
					<Link href="/export-import/our-commodities">
						<button className="btn btn-secondary btn-outline w-full">
    {t('seeAll')}
</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ExportSelectedCommodities;
