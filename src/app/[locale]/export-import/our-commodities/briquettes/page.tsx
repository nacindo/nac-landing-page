'use client';

import { ExportTopbar } from '@/components/ExportImport/ExportTopbar';
import {
	BriquetteGallery,
	createMediaItems,
} from '@/components/ExportImport/BriquetteGallery';
import { MainFooter } from '@/components/Main/MainFooter';
import { ArrowLeft, Flame, Wind, Check, AlertTriangle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type TabType = 'shisha' | 'bbq';

// Gallery media files - videos first, then images
// Files located in: public/commodities/briquettes/shisha/ and /bbq/
const shishaMediaSources = [
	// Videos first
	'/commodities/briquettes/shisha/shisha-video-1.mp4',
	// Then images
	'/commodities/briquettes/shisha/shisha-highlight.jpg',
	'/commodities/briquettes/shisha/shisha-product-1.jpg',
	'/commodities/briquettes/shisha/shisha-product-2.jpg',
	'/commodities/briquettes/shisha/shisha-product-3.jpg',
	'/commodities/briquettes/shisha/shisha-product-4.webp',
	'/commodities/briquettes/shisha/shisha-product-5.jpg',
];

const bbqMediaSources = [
	// Videos first
	'/commodities/briquettes/bbq/bbq-video-1.mp4',
	'/commodities/briquettes/bbq/bbq-video-2.mp4',
	// Then images
	'/commodities/briquettes/bbq/bbq-highlight.jpg',
	'/commodities/briquettes/bbq/bbq-product-1.webp',
	'/commodities/briquettes/bbq/bbq-product-2.webp',
	'/commodities/briquettes/bbq/bbq-product-3.webp',
	'/commodities/briquettes/bbq/bbq-product-4.jpg',
];

// Create media items with type detection
const shishaMedia = createMediaItems(shishaMediaSources);
const bbqMedia = createMediaItems(bbqMediaSources);

export default function BriquettesPage() {
	const t = useTranslations('briquettesPage');
	const [activeTab, setActiveTab] = useState<TabType>('shisha');

	const shishaShapes = t.raw('shisha.shapes') as Record<
		string,
		{ name: string; sizes: string[] }
	>;
	const bbqShapes = t.raw('bbq.shapes') as Record<
		string,
		{ name: string; sizes: string[] }
	>;
	const shishaSpecs = t.raw('shisha.specs') as Record<string, string>;
	const bbqSpecs = t.raw('bbq.specs') as Record<string, string>;
	const bbqFeatures = t.raw('bbq.features') as string[];

	return (
		<>
			<ExportTopbar />

			{/* Hero Section */}
			<section className="relative py-10 sm:py-16 lg:py-24 overflow-hidden">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

				<div className="container relative">
					{/* Back Button */}
					<Link
						href="/export-import/our-commodities"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
					>
						<ArrowLeft className="w-4 h-4" />
						{t('backButton')}
					</Link>

					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
						<div>
							<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight lg:text-5xl lg:leading-tight">
								{t('hero.title')}
							</h1>
							<p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground">
								{t('hero.subtitle')}
							</p>

							{/* Tab Buttons */}
							<div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
								<button
									onClick={() => setActiveTab('shisha')}
									className={`cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
										activeTab === 'shisha'
											? 'bg-primary text-primary-foreground shadow-lg'
											: 'bg-muted text-muted-foreground hover:bg-muted/80'
									}`}
								>
									<Wind className="w-5 h-5" />
									{t('tabs.shisha')}
								</button>
								<button
									onClick={() => setActiveTab('bbq')}
									className={`cursor-pointer flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all ${
										activeTab === 'bbq'
											? 'bg-primary text-primary-foreground shadow-lg'
											: 'bg-muted text-muted-foreground hover:bg-muted/80'
									}`}
								>
									<Flame className="w-5 h-5" />
									{t('tabs.bbq')}
								</button>
							</div>
						</div>

						{/* Hero Image */}
						<div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
							<Image
								src={
									activeTab === 'shisha'
										? '/commodities/briquettes/shisha/shisha-highlight.jpg'
										: '/commodities/briquettes/bbq/bbq-highlight.jpg'
								}
								alt={activeTab === 'shisha' ? 'Shisha Briquettes' : 'BBQ Briquettes'}
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Product Details Section */}
			<section className="py-10 sm:py-16 lg:py-20 bg-muted/30">
				<div className="container">
					{/* Shisha Content */}
					{activeTab === 'shisha' && (
						<div className="space-y-12 animate-in fade-in duration-500 overflow-hidden">
							{/* Title & Description */}
							<div className="max-w-3xl">
								<h2 className="text-2xl sm:text-3xl font-bold">{t('shisha.title')}</h2>
								<p className="mt-2 text-lg text-primary font-medium">
									{t('shisha.subtitle')}
								</p>
							</div>

							<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">
								{/* Left: Description */}
								<div className="space-y-6 min-w-0">
									<p className="text-muted-foreground leading-relaxed">
										{t('shisha.description')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('shisha.paragraph2')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('shisha.paragraph3')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('shisha.benefits')}
									</p>

									{/* Note */}
									<div className="flex gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
										<AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-medium text-amber-700 dark:text-amber-400">
												{t('noteFromUs')}
											</p>
											<p className="mt-1 text-sm text-muted-foreground">
												{t('shisha.note')}
											</p>
										</div>
									</div>
								</div>

								{/* Right: Gallery */}
								<BriquetteGallery
									media={shishaMedia}
									title={t('gallery.title')}
								/>
							</div>

							{/* Sizes & Specs */}
							<div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
								{/* Available Sizes */}
								<div className="rounded-xl border border-border bg-card p-4 sm:p-6">
									<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
										{t('availableSizes')}
									</h3>
									<div className="space-y-4">
										{Object.entries(shishaShapes).map(([key, shape]) => (
											<div key={key}>
												<h4 className="font-medium text-primary mb-2">
													{shape.name}
												</h4>
												<div className="flex flex-wrap gap-2">
													{shape.sizes.map((size, idx) => (
														<span
															key={idx}
															className="px-3 py-1.5 text-sm rounded-full bg-muted text-foreground"
														>
															{size}
														</span>
													))}
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Specifications */}
								<div className="rounded-xl border border-border bg-card p-4 sm:p-6">
									<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
										{t('specifications')}
									</h3>
									<ul className="space-y-3">
										{Object.values(shishaSpecs).map((spec, idx) => (
											<li
												key={idx}
												className="flex items-center gap-3 text-muted-foreground"
											>
												<Check className="w-4 h-4 text-primary flex-shrink-0" />
												{spec}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* BBQ Content */}
					{activeTab === 'bbq' && (
						<div className="space-y-12 animate-in fade-in duration-500 overflow-hidden">
							{/* Title & Description */}
							<div className="max-w-3xl">
								<h2 className="text-2xl sm:text-3xl font-bold">{t('bbq.title')}</h2>
								<p className="mt-2 text-lg text-primary font-medium">
									{t('bbq.subtitle')}
								</p>
							</div>

							<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">
								{/* Left: Description */}
								<div className="space-y-6 min-w-0">
									<p className="text-muted-foreground leading-relaxed">
										{t('bbq.description')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('bbq.paragraph2')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('bbq.paragraph3')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('bbq.benefits')}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										{t('bbq.varieties')}
									</p>

									{/* Note */}
									<div className="flex gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
										<AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
										<div>
											<p className="font-medium text-amber-700 dark:text-amber-400">
												{t('noteFromUs')}
											</p>
											<p className="mt-1 text-sm text-muted-foreground">
												{t('bbq.note')}
											</p>
										</div>
									</div>

									{/* Features */}
									<div className="flex flex-wrap gap-2 pt-2">
										{bbqFeatures.map((feature, idx) => (
											<span
												key={idx}
												className="px-4 py-2 text-sm font-medium rounded-full bg-primary/10 text-primary"
											>
												{feature}
											</span>
										))}
									</div>
								</div>

								{/* Right: Gallery */}
								<BriquetteGallery
									media={bbqMedia}
									title={t('gallery.title')}
								/>
							</div>

							{/* Sizes & Specs */}
							<div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
								{/* Available Sizes */}
								<div className="rounded-xl border border-border bg-card p-4 sm:p-6">
									<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
										{t('availableSizes')}
									</h3>
									<div className="space-y-4">
										{Object.entries(bbqShapes).map(([key, shape]) => (
											<div key={key}>
												<h4 className="font-medium text-primary mb-2">
													{shape.name}
												</h4>
												<div className="flex flex-wrap gap-2">
													{shape.sizes.map((size, idx) => (
														<span
															key={idx}
															className="px-3 py-1.5 text-sm rounded-full bg-muted text-foreground"
														>
															{size}
														</span>
													))}
												</div>
											</div>
										))}
									</div>
								</div>

								{/* Specifications */}
								<div className="rounded-xl border border-border bg-card p-4 sm:p-6">
									<h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
										{t('specifications')}
									</h3>
									<ul className="space-y-3">
										{Object.values(bbqSpecs).map((spec, idx) => (
											<li
												key={idx}
												className="flex items-center gap-3 text-muted-foreground"
											>
												<Check className="w-4 h-4 text-primary flex-shrink-0" />
												{spec}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					)}

					{/* Custom Order Note */}
					<div className="mt-8 sm:mt-12 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
						<p className="text-center text-muted-foreground">
							{t('customNote')}
						</p>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-10 sm:py-16 lg:py-20">
				<div className="container text-center">
					<h2 className="text-xl sm:text-2xl font-bold lg:text-3xl">
    {t('cta.title')}
</h2>
<p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
    {t('cta.description')}
</p>
					<a
						href="mailto:trade@nusantara.example?subject=Briquettes%20Inquiry"
						className="inline-flex mt-8"
					>
						<button className="btn btn-primary btn-lg">
							{t('inquireButton')}
						</button>
					</a>
				</div>
			</section>

			<MainFooter />
		</>
	);
}
