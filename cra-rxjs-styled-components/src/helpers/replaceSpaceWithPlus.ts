export default function replaceSpaceWithPlus(str: string) {
	return str.split(' ').join('+');
}

export const replaceEncodedSpaceWithPlus = (str: string) => {
	return str.split(encodeURIComponent(' ')).join('+');
};
