import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export const WhoWeAre = () => {
	const t = useTranslations('whoWeAre');

	return (
		<section
			className="py-8 lg:py-20"
			id="about"
		>
			<div className="container">
				<div className="text-center">
					<h2 className="text-3xl font-semibold sm:text-5xl">{t('title')}</h2>
					<p className="text-base-content/80 mt-4 sm:text-xl text-center max-w-4xl mx-auto">
						{t('subtitle')}
					</p>
				</div>
				<div className="bg-base-200 rounded-xl mt-12 p-8 lg:p-16">
					<div className="grid items-center gap-12 lg:grid-cols-5">
						{/* Mobile: Logo at top, Desktop: Logo on right */}
						<div className="lg:col-span-2 order-first lg:order-last flex justify-center">
							<Image
								alt="Nusantara Aroma Craft Logo"
								src="/images/logo/nac-logo-new.svg"
								width={300}
								height={200}
								className="xl:w-[450px] xl:h-[300px]"
							/>
						</div>

						{/* Mobile: Text below logo, Desktop: Text on left */}
						<div className="lg:col-span-3 order-last lg:order-first">
							<h3 className="text-2xl font-medium sm:text-3xl">
								{t('mainTitle')}
							</h3>
							<p className="text-base-content/80 mt-4 ">{t('paragraph1')}</p>
							<p className="text-base-content/80 mt-4 ">{t('paragraph2')}</p>

							<div className="mt-8 flex justify-center lg:justify-start">
								<Link href="/about">
									<button className="btn btn-primary">
										{t('readMoreButton')}
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
