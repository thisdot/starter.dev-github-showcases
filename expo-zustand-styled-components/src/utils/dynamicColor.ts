function getRGB(c: string) {
  return parseInt(c, 16) || Number(c);
}

function getsRGB(c: string) {
  return getRGB(c) / 255 <= 0.03928
    ? getRGB(c) / 255 / 12.92
    : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4);
}

function getLuminance(hexColor: string) {
  return (
    0.2126 * getsRGB(hexColor.substr(1, 2)) +
    0.7152 * getsRGB(hexColor.substr(3, 2)) +
    0.0722 * getsRGB(hexColor.substr(-2))
  );
}

function getContrast(f: string, b: string) {
  const L1 = getLuminance(f);
  const L2 = getLuminance(b);
  return (Math.max(L1, L2) + 0.5) / (Math.min(L1, L2) + 0.5);
}

export function getTextColor(bgColor: string) {
  const whiteContrast = getContrast(bgColor, '#ffffff');
  const blackContrast = getContrast(bgColor, '#000000');

  return whiteContrast > blackContrast ? '#ffffff' : '#000000';
}
