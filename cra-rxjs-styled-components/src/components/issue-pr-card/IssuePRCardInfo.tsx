import { IssuePRData } from '@/types/types';
import { getTextColor } from '../../helpers/dynamicColor';
import { FormatDistance } from '../../helpers/format-distance';

export default function IssuePRCardInfo(data: IssuePRData) {
	const baseDate = new Date();
	const formatDistance = FormatDistance;

	return (
		<div className="info">
			<div className="card_top">
				<a className="heading" href={data.url} target="_blank" rel="noreferrer">
					{data.title}
				</a>
				{(data.labels || []).map((label) => (
					<span
						key={label.name}
						className="card_label"
						style={{
							backgroundColor: `#${label.color || 'ccc'}`,
							color: getTextColor(`#${label.color || 'ccc'}`),
						}}
					>
						{label.name}
					</span>
				))}
			</div>
			<div className="sub_heading">
				<span className="opened_num">#{data.number}</span>
				{data.state === 'open' ? (
					<span className="opened_day">
						opened{' '}
						{formatDistance({
							date: data.created_at,
							dateToCompare: baseDate,
						})}{' '}
						ago
					</span>
				) : (
					<span className="opened_day">closed {data.closed_at} ago</span>
				)}
				{data.user && <span className="opened_by">by {data.user.login}</span>}
			</div>
		</div>
	);
}
