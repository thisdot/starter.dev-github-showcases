export default function IssueIcon({
	height,
	width,
}: {
	height?: number;
	width?: number;
}) {
	return (
		<svg
			aria-hidden="true"
			height={height ? `${height}px` : '1em'}
			viewBox={`0 0 ${width ? width : 16} ${height ? height : 16}`}
			width={width ? `${width}px` : '1em'}
			data-view-component="true"
			className="icon"
		>
			<path
				transform={`scale(${width ? width / 16 : 1}, ${height ? height / 16 : 1})`}
				d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
			></path>
			<path
				transform={`scale(${width ? width / 16 : 1}, ${height ? height / 16 : 1})`}
				fill-rule="evenodd"
				d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
			></path>
		</svg>
	);
}
