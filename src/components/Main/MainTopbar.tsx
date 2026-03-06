import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const MainTopbar = () => {
	return (
		<div
			id="layout-topbar"
			className="bg-base-100 lg:bg-base-100/90 border-base-300 sticky top-0 z-10 border-b data-[at-top=true]:border-transparent lg:backdrop-blur-sm"
		>
			<div className="container">
				<nav className="flex items-center justify-between py-4">
					{/* Mobile: Hamburger on left */}
					<div className="lg:hidden">
						<label
							htmlFor="menu-drawer"
							id="menu-drawer-trigger"
							aria-label="open sidebar"
							className="btn btn-square btn-ghost btn-sm"
						>
							<span className="iconify lucide--menu size-5"></span>
						</label>
					</div>

					{/* Desktop: Logo on left */}
					<div className="max-lg:hidden">
						<Link
							href="/"
							className="text-2xl font-bold text-primary relative"
						>
							<Image
								alt="Nusantara Aroma Craft Logo"
								src="/images/logo/nac-logo-new.svg"
								width={75}
								height={50}
							/>
						</Link>
					</div>

					{/* Mobile: Logo on right */}
					<div className="lg:hidden">
						<Link
							href="/"
							className="text-2xl font-bold text-primary relative"
						>
							<Image
								alt="Nusantara Aroma Craft Logo"
								src="/images/logo/nac-logo-new.svg"
								width={50}
								height={50}
							/>
						</Link>
					</div>

					<div className="max-lg:hidden">
						<ul className="menu menu-horizontal gap-2 px-1">
							<li className="font-medium">
								<Link href="/">Home</Link>
							</li>
							<li className="font-medium">
								<Link href="/about">About Us</Link>
							</li>
							<li className="font-medium">
								<Link href="/contact">Contact Us</Link>
							</li>
							<li>
								<LanguageSwitcher />
							</li>
						</ul>
					</div>
				</nav>

				<div className="drawer">
					<input
						id="menu-drawer"
						type="checkbox"
						className="drawer-toggle"
					/>
					<div className="drawer-side">
						<label
							htmlFor="menu-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"
						></label>
						<div className="bg-base-100 min-h-full w-60 p-5">
							<Link
								href="/"
								className="text-2xl font-bold text-primary"
							>
								<Image
									alt="Nusantara Aroma Craft Logo"
									src="/images/logo/nac-logo-new.svg"
									width={75}
									height={50}
								/>
							</Link>
							<ul className="menu w-full gap-2 p-0 pt-4">
								<li className="font-medium">
									<Link href="/">Home</Link>
								</li>
								<li className="font-medium">
									<Link href="/about">About Us</Link>
								</li>
								<li className="font-medium">
									<Link href="/contact">Contact Us</Link>
								</li>
								<li>
									<LanguageSwitcher />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
