import { RepoIcon } from '../components/icons';

export const tabs = [{ title: 'Repositories', Icon: RepoIcon }];

export const OrderField = {
	/** Order issues by comment count */
	Comments: 'comments',
	/** Order issues by creation time */
	CreatedAt: 'created',
	/** Order issues by update time */
	UpdatedAt: 'updated',
};

export const OrderDirection = {
	Asc: 'asc',
	Desc: 'desc',
};

export const SORT_OPTIONS = {
	[`${OrderField.CreatedAt}^${OrderDirection.Desc}`]: 'Newest',
	[`${OrderField.CreatedAt}^${OrderDirection.Asc}`]: 'Oldest',
	[`${OrderField.Comments}^${OrderDirection.Desc}`]: 'Most commented',
	[`${OrderField.Comments}^${OrderDirection.Asc}`]: 'Least commented',
	[`${OrderField.UpdatedAt}^${OrderDirection.Desc}`]: 'Recently updated',
	[`${OrderField.UpdatedAt}^${OrderDirection.Asc}`]: 'Least recently updated',
};
