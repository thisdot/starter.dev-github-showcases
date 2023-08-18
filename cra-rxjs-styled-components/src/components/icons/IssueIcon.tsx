export default function IssueIcon({height, width}:{height?: number, width?: number}) {
	return (
		<svg
			aria-hidden="true"
			height={`${height}px` || "1em"}
			viewBox={`0 0 ${width || "16"} ${height || "16"}`}
			version="1.1"
			width={`${width}px` || "1em"}
			data-view-component="true"
			className="icon"
		>
			`<path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
			<path
				fill-rule="evenodd"
				d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
			></path>
		</svg>
	);
}
