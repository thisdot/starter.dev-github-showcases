function getRGB(c: string | number) {
	return typeof c === 'string' ? parseInt(c, 16) : c;
}

function getsRGB(c: string | number) {
	return getRGB(c) / 255 <= 0.03928
		? getRGB(c) / 255 / 12.92
		: Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
}

function getLuminance(hexColor: string) {
	return (
		0.2126 * getsRGB(hexColor.slice(1, 1 + 2)) +
		0.7152 * getsRGB(hexColor.slice(3, 3 + 2)) +
		0.0722 * getsRGB(hexColor.slice(-2))
	);
}

function getContrast(f: string, b: string) {
	const L1 = getLuminance(f);
	const L2 = getLuminance(b);
	return (Math.max(L1, L2) + 0.1) / (Math.min(L1, L2) + 0.1);
}

export function getTextColor(bgColor: string) {
	const whiteContrast = getContrast(bgColor, '#ffffff');
	const blackContrast = getContrast(bgColor, '#000000');

	return whiteContrast > blackContrast ? '#ffffff' : '#000000';
}