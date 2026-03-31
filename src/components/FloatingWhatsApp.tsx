'use client';

const WHATSAPP_NUMBER = '6285710596000';
const DEFAULT_MESSAGE = 'Halo! Saya ingin mengetahui lebih lanjut tentang produk NAC.';

export const FloatingWhatsApp = () => {
	const handleClick = () => {
		const url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(DEFAULT_MESSAGE);
		window.open(url, '_blank');
	};

	return (
		<button
			onClick={handleClick}
			aria-label="Chat on WhatsApp"
			style={{
				position: 'fixed',
				bottom: '24px',
				right: '24px',
				zIndex: 99999,
				width: '60px',
				height: '60px',
				borderRadius: '50%',
				backgroundColor: '#25D366',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
				border: 'none',
				cursor: 'pointer',
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="white">
				<path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.473 2.027 7.776L0 32l8.479-2.003A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.784-1.856l-.486-.29-5.033 1.188 1.224-4.897-.317-.502A13.267 13.267 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.778c-.398-.199-2.354-1.162-2.72-1.294-.366-.133-.632-.199-.898.199-.266.398-1.03 1.294-1.263 1.56-.232.266-.465.299-.863.1-.398-.2-1.681-.62-3.202-1.977-1.183-1.056-1.981-2.36-2.213-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.698.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.2-.898-2.165-1.23-2.963-.325-.778-.655-.672-.898-.684l-.764-.013c-.266 0-.697.1-1.063.498-.366.398-1.396 1.363-1.396 3.327s1.43 3.86 1.629 4.126c.199.266 2.814 4.298 6.818 6.027.953.411 1.697.657 2.277.84.957.304 1.828.261 2.516.158.767-.114 2.354-.962 2.687-1.892.333-.93.333-1.727.232-1.893-.099-.165-.365-.264-.763-.463z"/>
			</svg>
		</button>
	);
};
