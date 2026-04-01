'use client'

import { Link } from '@/i18n/routing';
import { motion, useScroll, useTransform } from 'motion/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const PerfumeHero = () => {
	const t = useTranslations('perfumeHero');
	const heroRef = useRef<HTMLElement>(null);
	const [isMobile, setIsMobile] = useState(false);

	// Detect mobile breakpoint (768px - Tailwind's md breakpoint)
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	const { scrollYProgress } = useScroll();

	const textScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.7]);
	const textY = useTransform(scrollYProgress, [0, 0.3], [0, -20]);

	const imageScale = useTransform(
		scrollYProgress,
		[0, 0.3],
		[isMobile ? 1.3 : 1, isMobile ? 1.8 : 1.2]
	);

	return (
		<motion.section
    ref={heroRef}
    className="py-8 lg:py-20"
    id="perfume-home"
>
			<div className="container">
				<div className="flex gap-8 items-center flex-col lg:gap-16">
					<motion.div
						className="space-y-8"
						style={{
							scale: textScale,
							y: textY
						}}
					>
						<motion.h1
							className="text-4xl font-bold tracking-tight lg:text-6xl text-center" style={{lineHeight: '1.6'}}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeOut", duration: 0.6, delay: 0 }}
						>
							{t('title')}
							<span className="text-accent"> {t('subtitle')}</span>
						</motion.h1>
						<motion.p
							className="text-base-content/80 max-w-3xl text-xl leading-8 text-center mx-auto"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeOut", duration: 0.6, delay: 0.3 }}
						>
							{t('description')}
						</motion.p>
						<motion.div
							className="gap-3 sm:mt-16 flex justify-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeOut", duration: 0.6, delay: 0.6 }}
						>
							<Link href="/perfume/catalog?perfume=melati-dream">
								<button className="btn btn-outline btn-accent rounded-none z-100 btn-lg">
									{t('buyButton')}
								</button>
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative aspect-square rounded-2xl bg-linear-to-r p-3 w-full"
						style={{
							scale: imageScale
						}}
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeOut", duration: 0.6, delay: 0.9 }}
					>
						<Image
							fill
							alt="Rahas Anisa"
							className="object-cover translate-y-10 md:-translate-y-28 2xl:-translate-y-52 drop-shadow-2xl z-0 pointer-events-none"
							src="/images/landing/raras-anisa.png"
						/>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default PerfumeHero;
