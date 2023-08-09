export default function convertObjectToQueryString(
	object: Record<string, any>
) {
	return new URLSearchParams(object).toString();
}
