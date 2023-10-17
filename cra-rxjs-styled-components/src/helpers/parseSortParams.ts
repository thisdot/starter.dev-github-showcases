export const parseSortParams = ({
	options,
	value,
	position,
}: {
	options: Record<string, string>;
	position: number;
	value?: string;
}) =>
	Object.keys(options)
		.find((key) => options[key] === value)
		?.split('^')[position];
